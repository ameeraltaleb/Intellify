import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { action, title, content } = body;

        if (!process.env.GEMINI_API_KEY) {
            return NextResponse.json(
                { success: false, error: "GEMINI_API_KEY is not configured" },
                { status: 500 }
            );
        }

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        if (action === "optimize_title") {
            const aiPrompt = `
            أنت خبير سيو (SEO) متخصص في كتابة عناوين المقالات الجذابة والمتوافقة مع محركات البحث.
            لديك العنوان التالي: "${title}"
            قم باقتراح عنوان واحد فقط أكثر قوة، جاذبية، وتوافقاً مع الـ SEO لزيادة عدد النقرات (CTR).
            المتطلبات:
            1. يجب أن يكون العنوان باللغة العربية.
            2. يجب أن يحتوي على كلمات مفتاحية قوية.
            3. لا تضع أي مقدمات، فقط العنوان المقترح.
            `;

            const result = await model.generateContent(aiPrompt);
            const response = await result.response;
            const suggestion = response.text().trim();

            return NextResponse.json({ success: true, suggestion });
        }

        if (action === "seo_audit") {
            const aiPrompt = `
            قم بتحليل المحتوى التالي من الناحية السيو (SEO) وقدم 3 نصائح سريعة للتحسين:
            المحتوى: "${content}"
            التنسيق: قائمة نقطية قصيرة جداً باللغة العربية.
            `;

            const result = await model.generateContent(aiPrompt);
            const response = await result.response;
            const audit = response.text().trim();

            return NextResponse.json({ success: true, audit });
        }

        return NextResponse.json({ success: false, error: "Unknown action" }, { status: 400 });

    } catch (error: any) {
        console.error("AI Optimization Error:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
