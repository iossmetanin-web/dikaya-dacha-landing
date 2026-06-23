import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, error: "Имя и телефон обязательны" },
        { status: 400 }
      );
    }

    if (phone.length < 7) {
      return NextResponse.json(
        { success: false, error: "Некорректный номер телефона" },
        { status: 400 }
      );
    }

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // In production, this would send to Telegram, email, or CRM
    console.log("New consultation request:", { name, phone, timestamp: new Date().toISOString() });

    return NextResponse.json({
      success: true,
      message: "Заявка отправлена! Мы свяжемся с вами в ближайшее время.",
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Произошла ошибка. Попробуйте позже." },
      { status: 500 }
    );
  }
}