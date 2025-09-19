'use client';

import Link from 'next/link';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: 'Manfaat Belajar dengan AI untuk Anak-anak',
      excerpt: 'Temukan bagaimana teknologi AI dapat membantu anak-anak belajar dengan lebih efektif dan menyenangkan.',
      date: '15 September 2025',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'Mengenal Sanggar Seni Digital',
      excerpt: 'Apa itu Sanggar Seni Digital dan bagaimana cara kerjanya dalam mengembangkan bakat seni anak.',
      date: '10 September 2025',
      readTime: '4 min read',
    },
    {
      id: 3,
      title: 'Tips Meningkatkan Konsentrasi saat Belajar',
      excerpt: 'Beberapa tips praktis untuk membantu anak tetap fokus dan termotivasi saat belajar.',
      date: '5 September 2025',
      readTime: '3 min read',
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Blog & Artikel
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Temukan tips, trik, dan informasi terbaru seputar pendidikan digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link 
                  href="#" 
                  className="text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  Baca Selengkapnya
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