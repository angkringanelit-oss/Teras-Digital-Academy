'use client';

import { useState } from 'react';
import { z } from 'zod';

// Define the form schema with Zod
const registrationSchema = z.object({
  namaSiswa: z.string().min(1, 'Nama Siswa wajib diisi'),
  usia: z.string().min(1, 'Usia wajib diisi'),
  kelas: z.string().min(1, 'Kelas wajib diisi'),
  namaOrangTua: z.string().min(1, 'Nama Orang Tua wajib diisi'),
  email: z.string().email('Email tidak valid').min(1, 'Email wajib diisi'),
  whatsapp: z.string().min(1, 'Nomor WhatsApp wajib diisi'),
  pilihanProgram: z.string().min(1, 'Pilihan Program wajib dipilih'),
  jadwalPreferensi: z.string().min(1, 'Jadwal Preferensi wajib diisi'),
});

type RegistrationFormData = z.infer<typeof registrationSchema>;

export default function DaftarTrialPage() {
  const [formData, setFormData] = useState<RegistrationFormData>({
    namaSiswa: '',
    usia: '',
    kelas: '',
    namaOrangTua: '',
    email: '',
    whatsapp: '',
    pilihanProgram: '',
    jadwalPreferensi: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Validate form data with Zod
      registrationSchema.parse(formData);
      
      // Clear previous errors
      setErrors({});
      
      // Send data to API
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (response.ok && result.success) {
        // Show success message
        alert('Terima kasih telah mendaftar');
        
        // Reset form
        setFormData({
          namaSiswa: '',
          usia: '',
          kelas: '',
          namaOrangTua: '',
          email: '',
          whatsapp: '',
          pilihanProgram: '',
          jadwalPreferensi: '',
        });
      } else {
        // Handle API errors
        alert(result.message || 'Terjadi kesalahan saat mendaftar');
      }
    } catch (error) {
      // Handle network errors
      console.error('Registration error:', error);
      alert('Terjadi kesalahan saat mendaftar. Silakan coba lagi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Pendaftaran Trial Gratis</h1>
          <p className="text-lg text-gray-600">
            Isi form di bawah ini untuk mendaftar trial gratis
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nama Siswa */}
              <div>
                <label htmlFor="namaSiswa" className="block text-sm font-medium text-gray-700 mb-1">
                  Nama Siswa <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="namaSiswa"
                  name="namaSiswa"
                  value={formData.namaSiswa}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                    errors.namaSiswa ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Masukkan nama lengkap siswa"
                />
                {errors.namaSiswa && (
                  <p className="mt-1 text-sm text-red-600">{errors.namaSiswa}</p>
                )}
              </div>

              {/* Usia */}
              <div>
                <label htmlFor="usia" className="block text-sm font-medium text-gray-700 mb-1">
                  Usia <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="usia"
                  name="usia"
                  value={formData.usia}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                    errors.usia ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Masukkan usia siswa"
                />
                {errors.usia && (
                  <p className="mt-1 text-sm text-red-600">{errors.usia}</p>
                )}
              </div>

              {/* Kelas */}
              <div>
                <label htmlFor="kelas" className="block text-sm font-medium text-gray-700 mb-1">
                  Kelas <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="kelas"
                  name="kelas"
                  value={formData.kelas}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                    errors.kelas ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Masukkan kelas siswa"
                />
                {errors.kelas && (
                  <p className="mt-1 text-sm text-red-600">{errors.kelas}</p>
                )}
              </div>

              {/* Nama Orang Tua */}
              <div>
                <label htmlFor="namaOrangTua" className="block text-sm font-medium text-gray-700 mb-1">
                  Nama Orang Tua <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="namaOrangTua"
                  name="namaOrangTua"
                  value={formData.namaOrangTua}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                    errors.namaOrangTua ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Masukkan nama orang tua"
                />
                {errors.namaOrangTua && (
                  <p className="mt-1 text-sm text-red-600">{errors.namaOrangTua}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Masukkan email aktif"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* WhatsApp */}
              <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-1">
                  WhatsApp <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="whatsapp"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                    errors.whatsapp ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Masukkan nomor WhatsApp aktif"
                />
                {errors.whatsapp && (
                  <p className="mt-1 text-sm text-red-600">{errors.whatsapp}</p>
                )}
              </div>

              {/* Pilihan Program */}
              <div>
                <label htmlFor="pilihanProgram" className="block text-sm font-medium text-gray-700 mb-1">
                  Pilihan Program <span className="text-red-500">*</span>
                </label>
                <select
                  id="pilihanProgram"
                  name="pilihanProgram"
                  value={formData.pilihanProgram}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                    errors.pilihanProgram ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Pilih Program</option>
                  <option value="bimbel-digital">Bimbel Digital</option>
                  <option value="sanggar-seni-digital">Sanggar Seni Digital</option>
                </select>
                {errors.pilihanProgram && (
                  <p className="mt-1 text-sm text-red-600">{errors.pilihanProgram}</p>
                )}
              </div>

              {/* Jadwal Preferensi */}
              <div>
                <label htmlFor="jadwalPreferensi" className="block text-sm font-medium text-gray-700 mb-1">
                  Jadwal Preferensi <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  id="jadwalPreferensi"
                  name="jadwalPreferensi"
                  value={formData.jadwalPreferensi}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                    errors.jadwalPreferensi ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.jadwalPreferensi && (
                  <p className="mt-1 text-sm text-red-600">{errors.jadwalPreferensi}</p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 transition duration-300"
              >
                {isSubmitting ? 'Memproses...' : 'Daftar Sekarang'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}