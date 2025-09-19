import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    const { message } = body;

    // Validate the message
    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { reply: 'Maaf, layanan sedang sibuk' },
        { status: 400 }
      );
    }

    // Get API key from environment variables
    const apiKey = process.env.GEMINI_API_KEY;
    
    if (!apiKey) {
      console.error('GEMINI_API_KEY is not set');
      return NextResponse.json(
        { reply: 'Maaf, layanan sedang sibuk' },
        { status: 500 }
      );
    }

    // Call Google Gemini API
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: message
            }]
          }],
          systemInstruction: {
            parts: [{
              text: "Kamu asisten belajar anak SD-SMP, jawab singkat, ramah, maks 2 kalimat."
            }]
          }
        }),
      }
    );

    // Check if the response is successful
    if (!response.ok) {
      console.error('Gemini API error:', response.status, response.statusText);
      return NextResponse.json(
        { reply: 'Maaf, layanan sedang sibuk' },
        { status: 500 }
      );
    }

    // Parse the response
    const data = await response.json();
    
    // Extract the reply from the response
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Maaf, saya tidak mengerti.';

    // Return the response
    return NextResponse.json({ reply });
  } catch (error) {
    console.error('Chatbot API error:', error);
    
    // Return 500 for unexpected errors
    return NextResponse.json(
      { reply: 'Maaf, layanan sedang sibuk' },
      { status: 500 }
    );
  }
}