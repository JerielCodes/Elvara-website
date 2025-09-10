import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !company || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const leadData = {
      name,
      email,
      phone,
      company,
      message,
      timestamp: new Date().toISOString(),
      source: 'website_contact_form',
    };

    // Log the lead (in production, save to database)
    console.log('New lead received:', leadData);

    // Forward to n8n webhook if configured
    const n8nWebhook = process.env.N8N_WEBHOOK_LEAD;
    if (n8nWebhook) {
      try {
        const response = await fetch(n8nWebhook, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(leadData),
        });

        if (!response.ok) {
          console.error('Failed to forward lead to n8n:', response.statusText);
        } else {
          console.log('Lead successfully forwarded to n8n');
        }
      } catch (error) {
        console.error('Error forwarding to n8n:', error);
      }
    }

    return NextResponse.json(
      { 
        message: 'Lead submitted successfully',
        leadId: `lead_${Date.now()}` 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing lead:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Handle preflight requests
export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    }
  );
}