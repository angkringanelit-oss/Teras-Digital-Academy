'use client';

import Link from 'next/link';
import Image from 'next/image';
import { AcademicCapIcon, SparklesIcon, PaintBrushIcon, CpuChipIcon } from '@heroicons/react/24/outline';

export default function Home() {
  const features = [
    {
      icon: AcademicCapIcon,
      title: "Interaktif",
      description: "Materi disampaikan dengan video, animasi & game"
    },
    {
      icon: SparklesIcon,
      title: "AI-Powered",
      description: "Kelas prompting & trik belajar cepat dengan AI"
    },
    {
      icon: PaintBrushIcon,
      title: "Seni Digital",
      description: "Sanggar seni digital untuk kreativitas tanpa batas"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section Glassmorphism */}
      <div className="max-w-5xl mx-auto px-4 py-20 text-center">
        <div className="glass-card px-8 py-12 relative overflow-hidden">
          {/* Background grid pattern */}
          <div className="absolute inset-0 bg-grid-slate-700/[0.05] bg-[length:40px_40px] -z-10"></div>
          
          <h1 className="font-heading text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 animate-pulse-light">
            Belajar + AI + Seni = Masa Depan!
          </h1>
          <p className="mt-4 text-slate-300 font-body text-lg">
            Bimbel digital pertama dengan AI & maskot Star Kids dan Quen Child
          </p>
          
          {/* Maskot Animasi */}
          <div className="mt-8 flex justify-center gap-8">
            <div className="maskot-float">
              <Image 
                src="/assets/Star Kids.png" 
                alt="Star Kids" 
                width={200} 
                height={200} 
                quality={80}
                priority={false}
                loading="eager"
                className="hover:scale-110 transition-transform cursor-pointer"
                style={{ animation: 'float 4s ease-in-out infinite, glow 3s ease-in-out infinite' }}
              />
            </div>
            <div className="maskot-float">
              <Image 
                src="/assets/Quen Child.png" 
                alt="Quen Child" 
                width={200} 
                height={200} 
                quality={80}
                priority={false}
                loading="eager"
                className="hover:scale-110 transition-transform cursor-pointer"
                style={{ animation: 'float 4s ease-in-out infinite, glow 3s ease-in-out infinite' }}
              />
            </div>
          </div>
          
          {/* CTA Button */}
          <Link 
            href="/daftar-trial" 
            className="mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-cyan-400/50 transition-all hover:scale-105"
          >
            Daftar Trial Gratis
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Section "Kenapa TerDig?" */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl inline-flex items-center gap-2">
            <CpuChipIcon className="h-8 w-8 text-cyan-400" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Kenapa TerDig?
            </span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index} 
                className="glass-card p-6 text-center hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="flex justify-center mb-4">
                  <IconComponent className="h-10 w-10 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.8)] transition-all" />
                </div>
                <h3 className="font-heading text-xl font-bold text-cyan-300 mb-2">
                  {feature.title}
                </h3>
                <p className="font-body text-slate-300">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}