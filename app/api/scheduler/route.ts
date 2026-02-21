import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({
        success: true,
        upcoming: [
            { id: 1, title: "مستقبل الويب", date: "2026-02-16" },
            { id: 2, title: "احتراف التايب سكريبت", date: "2026-02-18" }
        ]
    });
}

export async function POST(request: Request) {
    const body = await request.json();
    return NextResponse.json({
        success: true,
        message: "تمت جدولة المحتوى بنجاح",
        scheduledDate: body.date
    });
}
