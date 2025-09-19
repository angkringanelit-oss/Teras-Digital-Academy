'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';

// Define types
type ProgramType = 'bimbel' | 'senidigital';

interface ProgramClass {
  id: string;
  title: string;
  age: string;
  description: string;
}

// Static data for programs
const programData: Record<ProgramType, ProgramClass[]> = {
  bimbel: [
    {
      id: 'sd',
      title: 'SD',
      age: '6-12 tahun',
      description: 'Program bimbingan belajar untuk tingkat sekolah dasar dengan pendekatan yang menyenangkan dan interaktif.'
    },
    {
      id: 'smp',
      title: 'SMP',
      age: '13-15 tahun',
      description: 'Program bimbingan belajar untuk tingkat sekolah menengah pertama dengan fokus pada pemahaman konsep.'
    },
    {
      id: 'prompting-ai',
      title: 'Prompting AI',
      age: '16+ tahun',
      description: 'Pelatihan keterampilan prompting untuk berinteraksi efektif dengan AI dalam proses pembelajaran.'
    },
    {
      id: 'fast-learning-ai',
      title: 'Fast-Learning-AI',
      age: '16+ tahun',
      description: 'Program akselerasi pembelajaran menggunakan teknologi AI untuk hasil yang lebih cepat dan efektif.'
    }
  ],
  senidigital: [
    {
      id: 'mini',
      title: 'Mini',
      age: '5-8 tahun',
      description: 'Kelas seni digital untuk anak-anak kecil dengan pendekatan bermain dan eksplorasi kreatif.'
    },
    {
      id: 'junior',
      title: 'Junior',
      age: '9-12 tahun',
      description: 'Kelas seni digital untuk anak-anak muda dengan pengenalan pada berbagai media seni digital.'
    },
    {
      id: 'teens',
      title: 'Teens',
      age: '13-17 tahun',
      description: 'Kelas seni digital untuk remaja dengan fokus pada teknik dan ekspresi kreatif yang lebih kompleks.'
    }
  ]
};

export default function ProgramPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  
  // Validate slug
  const validSlugs: ProgramType[] = ['bimbel', 'senidigital'];
  if (!validSlugs.includes(slug as ProgramType)) {
    notFound();
  }

  const programType = slug as ProgramType;
  const classes = programData[programType];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 capitalize">
            Program {programType === 'bimbel' ? 'Bimbel Digital' : 'Seni Digital'}
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            {programType === 'bimbel' 
              ? 'Pilih tingkatan yang sesuai dengan jenjang pendidikan Anda' 
              : 'Pilih kelas yang sesuai dengan usia dan minat Anda'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((classItem) => (
            <div 
              key={classItem.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{classItem.title}</h2>
                <p className="text-indigo-600 font-medium mb-4">{classItem.age}</p>
                <p className="text-gray-600 mb-6">{classItem.description}</p>
                <button 
                  disabled 
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md cursor-not-allowed opacity-50"
                >
                  Pilih Kelas
                </button>
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