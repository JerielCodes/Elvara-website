import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Log the call webhook (in production, process the call data)
    console.log('Call webhook received:', body);

    const callData = {
      ...body,
      timestamp: new Date().toISOString(),
      processed: false,
    };

    // Here you would typically:
    // 1. Validate the call data
    // 2. Save call logs to database
    // 3. Trigger analytics updates
    // 4. Process call outcomes (bookings, leads, etc.)

    // Forward to n8n webhook if configured
    const n8nWebhook = process.env.N8N_WEBHOOK_CALLS;
    if (n8nWebhook) {
      try {
        const response = await fetch(n8nWebhook, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(callData),
        });

        if (!response.ok) {
          console.error('Failed to forward call data to n8n:', response.statusText);
        }
      } catch (error) {
        console.error('Error forwarding call data to n8n:', error);
      }
    }

    return NextResponse.json(
      { 
        message: 'Call webhook processed successfully',
        callId: `call_${Date.now()}` 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing call webhook:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

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