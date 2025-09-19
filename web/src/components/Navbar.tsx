'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Program', href: '/program' },
  { name: 'Jadwal', href: '/jadwal' },
  { name: 'Daftar', href: '/daftar' },
  { name: 'Blog', href: '/blog' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white shadow-sm" suppressHydrationWarning>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo area */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image
                src="/assets/logo terdig.png"
                alt="TerDig Logo"
                width={40}
                height={40}
              />
            </div>
            <div className="ml-2 flex flex-col">
              <span className="text-primary font-heading font-bold text-lg">TerDig Academy</span>
              <span className="text-secondary font-body text-xs">Bimbel & Seni Digital</span>
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-primary hover:text-secondary px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side buttons - dikosongkan */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <Transition show={mobileMenuOpen}>
        <Dialog as="div" className="relative z-10 md:hidden" onClose={setMobileMenuOpen}>
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-lg bg-white shadow-xl transition-all">
                  <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <Image
                            src="/assets/logo terdig.png"
                            alt="TerDig Logo"
                            width={40}
                            height={40}
                          />
                        </div>
                        <div className="ml-2 flex flex-col">
                          <span className="text-primary font-heading font-bold text-lg">TerDig Academy</span>
                          <span className="text-secondary font-body text-xs">Bimbel & Seni Digital</span>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="relative inline-flex items-center justify-center rounded-md bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="mt-6">
                      <div className="space-y-1">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="text-primary hover:text-secondary block px-3 py-2 text-base font-medium"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                      <div className="mt-6 flex flex-col space-y-3">
                        <button
                          type="button"
                          className="btn btn-outline btn-primary w-full"
                        >
                          Login
                        </button>
                        <div className="flex justify-center">
                          <div className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center">
                            <span className="text-xs">👤</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}