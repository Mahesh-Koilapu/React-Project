import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { paymentData, amount, currency, items } = body;

    if (!paymentData || !amount) {
      return NextResponse.json(
        { success: false, message: 'Missing payment information' },
        { status: 400 }
      );
    }

    console.log('Processing payment:', {
      amount,
      currency,
      itemsCount: items?.length || 0,
    });

    const orderId = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    const paymentResult = {
      success: true,
      orderId,
      amount,
      currency,
      timestamp: new Date().toISOString(),
      paymentMethod: 'Google Pay',
      status: 'COMPLETED',
    };

    console.log('Payment processed successfully:', paymentResult);

    return NextResponse.json(paymentResult, { status: 200 });
  } catch (error) {
    console.error('Payment processing error:', error);
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : 'Payment processing failed',
      },
      { status: 500 }
    );
  }
}
