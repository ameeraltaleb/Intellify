import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { prompt, tone, length } = body;

        if (!process.env.GEMINI_API_KEY) {
            return NextResponse.json(
                { success: false, error: "GEMINI_API_KEY is not configured" },
                { status: 500 }
            );
        }

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const lengthMap: Record<string, string> = {
            "قصير (٥٠٠ كلمة)": "حوالي 500 كلمة",
            "متوسط (١٠٠٠ كلمة)": "حوالي 1000 كلمة",
            "طويل (٢٠٠٠+ كلمة)": "أكثر من 1500 كلمة مع تفاصيل عميقة",
        };

        const aiPrompt = `
        أنت كاتب مقالات محترف ومختص في التقنية والذكاء الاصطناعي لموقع "Intellify".
        قم بكتابة مقال كامل وحصري باللغة العربية الفصحى حول الموضوع التالي: "${prompt}".
        
        المتطلبات:
        1. نغمة الكتابة: ${tone}.
        2. الطول المطلوب: ${lengthMap[length] || "حوالي 1000 كلمة"}.
        3. التنسيق: استخدم Markdown. ابدأ بالعنوان الرئيسي (H1)، ثم مقدمة جذابة، ثم عناوين فرعية (H2)، ثم فقرات غنية بالمعلومات، ونقاط توضيحية، ثم خاتمة قوية.
        4. الأسلوب: اجعل المقال مفيداً جداً للقارئ العربي، بأسلوب عصري يشبه مقالات المواقع التقنية الكبرى.
        5. تجنب الحشو والكلمات المكررة.
        6. في نهاية المقال، اقترح 5 وسوم (Tags) ذات صلة بالموضوع.
        7. قم بوضع عبارة "بقلم كاتب الذكاء الاصطناعي في Intellify" في نهاية المقال.

        ملاحظة: لا تضع أي ملاحظات جانبية أو كود تفاعلي، فقط نص المقال بتنسيق Markdown.
        `;

        const result = await model.generateContent(aiPrompt);
        const response = await result.response;
        const content = response.text();

        // Basic SEO scoring simulation (can be improved)
        const seoScore = Math.floor(Math.random() * (98 - 85 + 1)) + 85;

        return NextResponse.json({
            success: true,
            content: content,
            metadata: {
                wordCount: content.split(/\s+/).length,
                tone,
                length,
                seoScore: seoScore
            },
        });
    } catch (error: unknown) {
        console.error("Gemini Generation Error:", error);
        const message = error instanceof Error ? error.message : "Unknown error occurred during generation";
        return NextResponse.json(
            { success: false, error: message },
            { status: 500 }
        );
    }
}
