import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import fs from 'fs';
import path from 'path';

// Define the form schema with Zod (same as in the frontend)
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

// Configure the runtime to disable bodyParser for large payloads
export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(request: NextRequest) {
  try {
    // Check if the request is a POST request
    if (request.method !== 'POST') {
      return NextResponse.json(
        { error: 'Method not allowed' },
        { status: 405 }
      );
    }

    // Parse the request body
    const body = await request.json();
    
    // Validate the request body with Zod
    const validatedData = registrationSchema.safeParse(body);
    
    if (!validatedData.success) {
      // If validation fails, return 400 with error messages
      const errorMessages = validatedData.error.issues.map(issue => ({
        field: issue.path[0],
        message: issue.message
      }));
      
      return NextResponse.json(
        { 
          success: false, 
          errors: errorMessages,
          message: 'Data tidak valid'
        },
        { status: 400 }
      );
    }
    
    // If validation passes, save the data to a JSON file
    const timestamp = new Date().getTime();
    const fileName = `${timestamp}.json`;
    
    // Create the leads directory if it doesn't exist
    const leadsDir = path.join(process.cwd(), 'tmp', 'leads');
    if (!fs.existsSync(leadsDir)) {
      fs.mkdirSync(leadsDir, { recursive: true });
    }
    
    // Save the data to a JSON file
    const filePath = path.join(leadsDir, fileName);
    fs.writeFileSync(filePath, JSON.stringify(validatedData.data, null, 2));
    
    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Terima kasih telah mendaftar'
    });
  } catch (error) {
    console.error('Registration API error:', error);
    
    // Return 500 for unexpected errors
    return NextResponse.json(
      { 
        success: false, 
        message: 'Terjadi kesalahan saat memproses pendaftaran' 
      },
      { status: 500 }
    );
  }
}