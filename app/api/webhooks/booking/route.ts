import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Log the booking webhook (in production, process the booking)
    console.log('Booking webhook received:', body);

    const bookingData = {
      ...body,
      timestamp: new Date().toISOString(),
      processed: false,
    };

    // Here you would typically:
    // 1. Validate the booking data
    // 2. Save to database
    // 3. Send confirmations
    // 4. Trigger follow-up workflows

    // Forward to n8n webhook if configured
    const n8nWebhook = process.env.N8N_WEBHOOK_BOOKING;
    if (n8nWebhook) {
      try {
        const response = await fetch(n8nWebhook, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(bookingData),
        });

        if (!response.ok) {
          console.error('Failed to forward booking to n8n:', response.statusText);
        }
      } catch (error) {
        console.error('Error forwarding booking to n8n:', error);
      }
    }

    return NextResponse.json(
      { 
        message: 'Booking webhook processed successfully',
        bookingId: `booking_${Date.now()}` 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing booking webhook:', error);
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