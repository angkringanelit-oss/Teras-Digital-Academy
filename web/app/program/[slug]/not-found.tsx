import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Halaman Tidak Ditemukan</h1>
          <p className="text-xl text-gray-600 mb-8">
            Maaf, program yang Anda cari tidak tersedia.
          </p>
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
            <div className="text-indigo-600 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Program Tidak Valid</h2>
            <p className="text-gray-600 mb-6">
              Silakan kembali ke halaman program untuk melihat program yang tersedia.
            </p>
            <Link 
              href="/program" 
              className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-300"
            >
              Lihat Program
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}