'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Chatbot from './Chatbot';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Program', href: '/program' },
  { name: 'Jadwal', href: '/jadwal' },
  { name: 'Daftar', href: '/daftar' },
  { name: 'Daftar Trial', href: '/daftar-trial' },
  { name: 'Blog', href: '/blog' },
];

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-full">
      {/* Navbar */}
      <nav className="bg-white sticky top-0 z-50 shadow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex px-2 lg:px-0">
              <div className="flex flex-shrink-0 items-center">
                <img src="/assets/terdig.png" alt="Teras Digital Academy" className="h-8 w-auto" />
              </div>
              <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-indigo-600 hover:text-indigo-600"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center lg:hidden">
              {/* Mobile menu button */}
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-indigo-600 hover:bg-indigo-50 hover:text-indigo-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

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