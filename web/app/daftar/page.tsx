'use client';

import Link from 'next/link';

export default function DaftarPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pendaftaran
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bergabunglah dengan TerDig Academy dan mulai perjalanan belajar Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pendaftaran Reguler</h2>
              <p className="text-gray-600 mb-6">
                Daftar untuk program reguler kami dengan berbagai pilihan kelas dan jadwal yang fleksibel.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Akses penuh ke semua materi</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Dukungan mentor pribadi</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Sertifikat kelulusan</span>
                </li>
              </ul>
              <Link
                href="/daftar-trial"
                className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-300"
              >
                Daftar Sekarang
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pendaftaran Trial</h2>
              <p className="text-gray-600 mb-6">
                Coba program kami secara gratis selama 1 minggu untuk merasakan pengalaman belajar yang unik.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Akses ke 2 sesi trial</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Evaluasi kemampuan awal</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Konsultasi dengan mentor</span>
                </li>
              </ul>
              <Link
                href="/daftar-trial"
                className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-300"
              >
                Daftar Trial
              </Link>
            </div>
          </div>
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