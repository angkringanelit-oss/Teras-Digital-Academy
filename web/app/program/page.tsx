'use client';

import Link from 'next/link';
import { FaBook, FaPalette } from 'react-icons/fa';

export default function ProgramPage() {
  const programs = [
    {
      id: 'bimbel',
      title: 'Bimbel Digital',
      description: 'Pembelajaran interaktif dengan teknologi AI yang membantu siswa memahami materi dengan lebih mudah dan menyenangkan.',
      icon: <FaBook size={32} />,
    },
    {
      id: 'senidigital',
      title: 'Sanggar Seni Digital',
      description: 'Tempat berkreativitas dengan bimbingan ahli dan teknologi terkini untuk mengembangkan bakat seni digital Anda.',
      icon: <FaPalette size={32} />,
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Program Kami
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pilih program yang sesuai dengan minat dan kebutuhan Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program) => (
            <div 
              key={program.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-8">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 mb-6">
                  {program.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{program.title}</h2>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <Link
                  href={`/program/${program.id}`}
                  className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800"
                >
                  Lihat Detail
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}