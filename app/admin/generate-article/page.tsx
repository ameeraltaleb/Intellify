"use client";

import { useState } from "react";
import { createArticle } from "../../actions/articles";

export default function GenerateArticle() {
    const [prompt, setPrompt] = useState("");
    const [tone, setTone] = useState("احترافية");
    const [length, setLength] = useState("متوسط (١٠٠٠ كلمة)");
    const [generatedContent, setGeneratedContent] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [seoScore, setSeoScore] = useState<number | null>(null);
    const [isSaving, setIsSaving] = useState(false);

    const handleGenerate = async () => {
        if (!prompt.trim()) return;
        setIsLoading(true);
        setGeneratedContent("");
        setSeoScore(null);

        try {
            const res = await fetch("/api/ai-generate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ prompt, tone, length }),
            });
            const data = await res.json();

            if (data.success) {
                setGeneratedContent(data.content);
                // Auto SEO check
                const seoRes = await fetch("/api/seo-optimize", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ content: data.content }),
                });
                const seoData = await seoRes.json();
                if (seoData.success) {
                    setSeoScore(seoData.score);
                }
            }
        } catch {
            setGeneratedContent("حدث خطأ أثناء التوليد. يرجى المحاولة لاحقاً.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleSave = async () => {
        if (!generatedContent) return;
        setIsSaving(true);
        try {
            const slug = prompt.toLowerCase()
                .trim()
                .replace(/\s+/g, "-")
                .replace(/[^\w\u0621-\u064A-]+/g, "");

            const result = await createArticle({
                title: prompt,
                slug,
                excerpt: generatedContent.slice(0, 150) + "...",
                content: generatedContent.split("\n\n"),
                category: "ذكاء اصطناعي",
                read_time: "١٠ دقائق",
                tags: ["AI", "Generated"],
            });

            if (result.success) {
                alert("🎉 تم نشر المقال بنجاح! يمكنك مشاهدته الآن على الصفحة الرئيسية.");
            } else {
                alert("⚠️ فشل النشر: " + result.error);
            }
        } catch (err: any) {
            alert("❌ خطأ غير متوقع: " + err.message);
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <div className="max-w-4xl space-y-8">
            <div className="fb-card p-8 border-[#CED0D4]">
                <h3 className="text-2xl font-black mb-8 flex items-center gap-4 text-[#050505]">
                    <span className="w-12 h-12 bg-[#E7F3FF] text-[#1877F2] rounded-xl flex items-center justify-center text-xl shadow-inner">
                        ✨
                    </span>
                    توليد مقال ذكي بواسطة AI
                </h3>
                <div className="space-y-6">
                    <div>
                        <label className="block text-xs font-black text-[#65676B] mb-2 mr-1">
                            عنوان المقال (أو الكلمات المفتاحية)
                        </label>
                        <input
                            type="text"
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            className="fb-input border border-[#CED0D4] focus:border-[#1877F2] py-4"
                            placeholder="مثال: كيف سيغير الذكاء الاصطناعي التجارة الإلكترونية؟"
                            onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs font-black text-[#65676B] mb-2 mr-1">
                                نغمة الكتابة
                            </label>
                            <select
                                value={tone}
                                onChange={(e) => setTone(e.target.value)}
                                className="fb-input border border-[#CED0D4] bg-white cursor-pointer"
                            >
                                <option value="احترافية">احترافية 📜</option>
                                <option value="إبداعية">إبداعية 🎨</option>
                                <option value="تعليمية">تعليمية 🎓</option>
                                <option value="تقنية">تقنية 💻</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-black text-[#65676B] mb-2 mr-1">
                                الطول المتوقع
                            </label>
                            <select
                                value={length}
                                onChange={(e) => setLength(e.target.value)}
                                className="fb-input border border-[#CED0D4] bg-white cursor-pointer"
                            >
                                <option>قصير (٥٠٠ كلمة)</option>
                                <option>متوسط (١٠٠٠ كلمة)</option>
                                <option>طويل (٢٠٠٠+ كلمة)</option>
                            </select>
                        </div>
                    </div>
                    <button
                        onClick={handleGenerate}
                        disabled={isLoading || !prompt.trim()}
                        className={`fb-btn-primary w-full py-4 text-sm font-black flex items-center justify-center gap-3 shadow-lg ${isLoading || !prompt.trim() ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                        {isLoading ? (
                            <>
                                <span className="animate-spin text-xl">⏳</span> جاري التكير والكتابة...
                            </>
                        ) : (
                            <>
                                <span>🚀</span> ابدأ توليد المحتوى الآن
                            </>
                        )}
                    </button>
                </div>
            </div>

            {/* Preview Section */}
            <div className="fb-card p-8 border-[#CED0D4]">
                <div className="flex justify-between items-center mb-10 pb-4 border-b border-[#F0F2F5]">
                    <h4 className="text-xl font-black text-[#050505] flex items-center gap-3">
                        <span className="text-[#1877F2]">📄</span> معاينة المحتوى
                    </h4>
                    {seoScore !== null && (
                        <div className="flex items-center gap-3">
                            <span className="text-xs font-black text-[#65676B]">نتيجة SEO:</span>
                            <span
                                className={`text-sm font-black px-4 py-1.5 rounded-lg shadow-sm ${seoScore >= 80
                                    ? "bg-green-100 text-[#42B72A]"
                                    : seoScore >= 50
                                        ? "bg-yellow-100 text-yellow-700"
                                        : "bg-red-100 text-red-600"
                                    }`}
                            >
                                {seoScore}%
                            </span>
                        </div>
                    )}
                </div>

                {generatedContent ? (
                    <div className="rounded-2xl bg-[#F0F2F5] border border-[#CED0D4] p-8">
                        <p className="text-[#050505] leading-[2] text-lg whitespace-pre-line font-medium">
                            {generatedContent}
                        </p>
                        <div className="flex flex-wrap gap-4 mt-10 pt-8 border-t border-[#CED0D4]">
                            <button
                                onClick={() => navigator.clipboard.writeText(generatedContent)}
                                className="fb-btn-secondary px-6 py-3 text-xs font-black flex items-center gap-2"
                            >
                                📋 نسخ إلى الحافظة
                            </button>
                            <button
                                onClick={handleSave}
                                disabled={isSaving}
                                className="fb-btn-primary px-8 py-3 text-xs font-black flex items-center gap-2 bg-[#42B72A] hover:bg-[#36a422]"
                            >
                                {isSaving ? "⏳ جاري الحفظ..." : "💾 نشر المقال فوراً"}
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="h-64 rounded-2xl border-2 border-dashed border-[#CED0D4] bg-[#F0F2F5]/50 flex items-center justify-center text-[#8A8D91]">
                        {isLoading ? (
                            <div className="flex flex-col items-center gap-4">
                                <span className="text-5xl animate-bounce">🤖</span>
                                <p className="font-bold">المساعد الشخصي يقوم بصياغة الأفكار...</p>
                            </div>
                        ) : (
                            <div className="text-center">
                                <p className="text-4xl mb-4 opacity-20">✍️</p>
                                <p className="font-bold">المقالات المولدة ستظهر هنا للمراجعة قبل النشر</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
