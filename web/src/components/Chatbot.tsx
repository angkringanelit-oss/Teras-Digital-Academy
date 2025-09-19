'use client';

import { useState, useEffect, useRef, ReactElement } from 'react';
import { Transition } from '@headlessui/react';
import { FaRobot, FaStar, FaUser } from 'react-icons/fa';

type Message = {
  sender: 'user' | 'bot';
  text: string;
};

type Avatar = {
  name: string;
  icon: ReactElement;
  className?: string;
};

const AVATARS: Avatar[] = [
  { name: 'Star', icon: <FaStar />, className: 'text-yellow-400' },
  { name: 'Quen', icon: <FaUser />, className: 'text-pink-400' },
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentAvatarIndex, setCurrentAvatarIndex] = useState(0);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  // Load chat history from localStorage on component mount
  useEffect(() => {
    const savedChat = localStorage.getItem('terdig_chat');
    if (savedChat) {
      try {
        const parsedChat = JSON.parse(savedChat);
        if (Array.isArray(parsedChat)) {
          setMessages(parsedChat);
          // Set avatar index based on last bot message
          const lastBotMessageIndex = parsedChat.map((msg, index) => 
            msg.sender === 'bot' ? index : -1
          ).filter(index => index !== -1).pop();
          
          if (lastBotMessageIndex !== undefined && lastBotMessageIndex >= 0) {
            setCurrentAvatarIndex((lastBotMessageIndex % 2) === 0 ? 1 : 0);
          }
        }
      } catch (e) {
        console.error('Failed to parse chat history', e);
      }
    }
  }, []);

  // Save chat history to localStorage whenever messages change
  useEffect(() => {
    localStorage.setItem('terdig_chat', JSON.stringify(messages));
  }, [messages]);

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim() || isLoading) return;
    
    // Add user message
    const userMessage: Message = { sender: 'user', text: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    
    try {
      // Send message to API
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputValue }),
      });
      
      if (response.ok) {
        const data = await response.json();
        
        // Alternate avatar for bot responses
        setCurrentAvatarIndex(prev => (prev + 1) % AVATARS.length);
        
        // Add bot response
        const botMessage: Message = { sender: 'bot', text: data.reply };
        setMessages(prev => [...prev, botMessage]);
      } else {
        // Add error message
        const errorMessage: Message = { sender: 'bot', text: 'Maaf, layanan sedang sibuk' };
        setMessages(prev => [...prev, errorMessage]);
      }
    } catch (_error) {
      // Add error message
      const errorMessage: Message = { sender: 'bot', text: 'Maaf, layanan sedang sibuk' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Button */}
      <button
        onClick={toggleChat}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300"
        aria-label="Open chat"
      >
        <div className="h-6 w-6">
          <FaRobot />
        </div>
      </button>

      {/* Chat Modal */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-300"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-200"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-end justify-end min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          {/* Background overlay */}
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div 
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" 
              onClick={toggleChat}
            />
          </Transition.Child>

          {/* Chat Box */}
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div 
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full"
              style={{ width: '320px', height: '480px' }}
            >
              {/* Chat Header */}
              <div className="bg-indigo-600 px-4 py-3">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    {messages.length > 0 && messages[messages.length - 1].sender === 'bot' 
                      ? <div className={AVATARS[currentAvatarIndex].className}>{AVATARS[currentAvatarIndex].icon}</div>
                      : <div className="text-white"><FaRobot /></div>}
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-white">
                      {messages.length > 0 && messages[messages.length - 1].sender === 'bot' 
                        ? AVATARS[currentAvatarIndex].name 
                        : 'Chat Assistant'}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="h-80 overflow-y-auto p-4 bg-gray-50">
                {messages.length === 0 ? (
                  <div className="h-full flex items-center justify-center text-gray-500">
                    <p>Halo! Ada yang bisa saya bantu?</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {messages.map((message, index) => (
                      <div 
                        key={index} 
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div 
                          className={`max-w-xs px-3 py-2 rounded-lg ${
                            message.sender === 'user' 
                              ? 'bg-indigo-500 text-white rounded-tr-none' 
                              : 'bg-white border border-gray-200 rounded-tl-none'
                          }`}
                        >
                          <p>{message.text}</p>
                        </div>
                      </div>
                    ))}
                    {isLoading && (
                      <div className="flex justify-start">
                        <div className="bg-white border border-gray-200 rounded-lg rounded-tl-none px-3 py-2">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                )}
              </div>

              {/* Chat Input */}
              <div className="bg-white px-4 py-3 border-t border-gray-200">
                <form onSubmit={handleSubmit} className="flex">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Ketik pesan Anda..."
                    className="flex-1 border border-gray-300 rounded-l-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !inputValue.trim()}
                    className={`px-4 py-2 rounded-r-lg ${
                      isLoading || !inputValue.trim()
                        ? 'bg-gray-300 cursor-not-allowed'
                        : 'bg-indigo-600 text-white hover:bg-indigo-700'
                    } transition-colors duration-200`}
                  >
                    Kirim
                  </button>
                </form>
              </div>
            </div>
          </Transition.Child>
        </div>
      </div>
      </Transition>
    </div>
  );
}