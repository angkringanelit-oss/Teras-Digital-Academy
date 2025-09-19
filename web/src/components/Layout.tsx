'use client';

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Chatbot from './Chatbot';
import Navbar from './Navbar';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-full">
      <Navbar />

      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>

      <footer className="bg-white">
        <div className="mx-auto max-w-7xl overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
          <div className="mt-8 flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-indigo-600">
              <span className="sr-only">Facebook</span>
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-indigo-600">
              <span className="sr-only">Twitter</span>
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-indigo-600">
              <span className="sr-only">Instagram</span>
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-indigo-600">
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin size={24} />
            </a>
          </div>
          <p className="mt-8 text-center text-xs text-gray-500">
            &copy; 2025 TerDig Academy. All rights reserved.
          </p>
        </div>
      </footer>
      <Chatbot />
    </div>
  );
}