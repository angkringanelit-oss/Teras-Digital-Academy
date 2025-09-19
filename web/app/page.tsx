'use client';

import { FaBook, FaPalette } from 'react-icons/fa';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Selamat Datang di TerDig Academy
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Bimbel Digital & Sanggar Seni Pertama yang Pakai AI
          </p>
          <div className="mt-10">
            <a
              href="/daftar-trial"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 transition duration-300"
            >
              Daftar Trial Gratis
            </a>
          </div>
        </div>
      </div>

      {/* Program Section */}
      <div className="py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Program Kami
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Pilih program yang sesuai dengan minat dan kebutuhan Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Bimbel Digital Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="p-8">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 mb-6">
                  <FaBook size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Bimbel Digital</h3>
                <p className="text-gray-600 mb-6">
                  Pembelajaran interaktif dengan teknologi AI yang membantu siswa memahami materi dengan lebih mudah dan menyenangkan.
                </p>
                <Link
                  href="/program/bimbel"
                  className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800"
                >
                  Lihat Detail
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Sanggar Seni Digital Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="p-8">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 mb-6">
                  <FaPalette size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Sanggar Seni Digital</h3>
                <p className="text-gray-600 mb-6">
                  Tempat berkreativitas dengan bimbingan ahli dan teknologi terkini untuk mengembangkan bakat seni digital Anda.
                </p>
                <Link
                  href="/program/senidigital"
                  className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800"
                >
                  Lihat Detail
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}