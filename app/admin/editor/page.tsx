"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createArticle, getCategories } from "../../actions/articles";
import { Category } from "@/lib/types";

export default function SmartEditor() {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [excerpt, setExcerpt] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");
    const [coverImage, setCoverImage] = useState("");
    const [categories, setCategories] = useState<Category[]>([]);
    const [isSaving, setIsSaving] = useState(false);
    const [isOptimizingTitle, setIsOptimizingTitle] = useState(false);

    useEffect(() => {
        getCategories().then(setCategories);
    }, []);

    // Auto-generate slug from title
    useEffect(() => {
        if (!slug || slug === title.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w\u0621-\u064A-]+/g, "")) {
            const newSlug = title.toLowerCase()
                .trim()
                .replace(/\s+/g, "-")
                .replace(/[^\w\u0621-\u064A-]+/g, "");
            setSlug(newSlug);
        }
    }, [title]);

    const handleSave = async (isPublished = false) => {
        if (!title || !content || !category) {
            alert("يرجى ملء جميع الحقول الأساسية (العنوان، المحتوى، القسم)");
            return;
        }

        setIsSaving(true);
        try {
            const result = await createArticle({
                title,
                slug: slug || title.replace(/\s+/g, "-"),
                excerpt: excerpt || content.slice(0, 150) + "...",
                content: content.split("\n\n"),
                category,
                cover_image: coverImage || "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80",
                read_time: `${Math.ceil(content.split(" ").length / 200)} دقائق`,
                tags: [category],
            });

            if (result.success) {
                alert(isPublished ? "🎉 تم النشر بنجاح!" : "💾 تم الحفظ كمسودة بنجاح!");
                router.push("/admin/articles");
            } else {
                alert("⚠️ خطأ في الحفظ: " + result.error);
            }
        } catch (err: any) {
            alert("❌ خطأ: " + err.message);
        } finally {
            setIsSaving(false);
        }
    };

    const optimizeTitle = async () => {
        if (!title) return;
        setIsOptimizingTitle(true);
        try {
            const res = await fetch("/api/ai-optimize", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ action: "optimize_title", title }),
            });
            const data = await res.json();
            if (data.success && data.suggestion) {
                if (confirm(`اقتراح AI: "${data.suggestion}"\n\nهل تريد استبدال العنوان الحالي؟`)) {
                    setTitle(data.suggestion);
                }
            }
        } catch {
            alert("حدث خطأ أثناء الاتصال بالذكاء الاصطناعي");
        } finally {
            setIsOptimizingTitle(false);
        }
    };

    const seoAudit = async () => {
        if (!content) return;
        setIsOptimizingTitle(true); // Reusing loading state for simplicity or add a new one
        try {
            const res = await fetch("/api/ai-optimize", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ action: "seo_audit", content }),
            });
            const data = await res.json();
            if (data.success && data.audit) {
                alert("تحليل SEO:\n\n" + data.audit);
            }
        } catch {
            alert("حدث خطأ أثناء فحص SEO");
        } finally {
            setIsOptimizingTitle(false);
        }
    };

    return (
        <div className="max-w-5xl mx-auto pb-20">
            {/* Header Actions */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-black text-[#050505]">المحرر الذكي</h1>
                    <p className="text-[#65676B] text-sm mt-1">اكتب مقالك بلمسة بشرية ودعم ذكي</p>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => handleSave(false)}
                        disabled={isSaving}
                        className="fb-btn-secondary px-6 py-2.5 text-sm font-black"
                    >
                        حفظ كمسودة
                    </button>
                    <button
                        onClick={() => handleSave(true)}
                        disabled={isSaving}
                        className="fb-btn-primary px-8 py-2.5 text-sm font-black shadow-lg shadow-[#1877F2]/20"
                    >
                        {isSaving ? "جاري الحفظ..." : "نشر المقال"}
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Editor Section */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="fb-card p-8">
                        <div className="space-y-6">
                            {/* Title */}
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <label className="fb-label">عنوان المقال</label>
                                    <button
                                        onClick={optimizeTitle}
                                        disabled={isOptimizingTitle || !title}
                                        className="text-[10px] font-black text-[#1877F2] hover:underline flex items-center gap-1 disabled:opacity-50"
                                    >
                                        {isOptimizingTitle ? "⏳ جاري التحسين..." : "✨ تحسين العنوان بواسطة AI"}
                                    </button>
                                </div>
                                <input
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="ادخل عنواناً جذاباً هنا..."
                                    className="w-full text-3xl font-black border-none focus:ring-0 placeholder:text-[#CED0D4] leading-tight"
                                />
                            </div>

                            {/* Slug Preview */}
                            <div className="flex items-center gap-2 text-xs text-[#8A8D91] bg-[#F0F2F5] p-3 rounded-xl border border-[#E4E6EB]">
                                <span className="font-bold">رابط المقال:</span>
                                <span dir="ltr" className="flex-1 truncate">/blog/{slug}</span>
                                <button onClick={() => setSlug(prompt("تعديل الرابط الفرعي:", slug) || slug)} className="text-[#1877F2] font-bold">تعديل</button>
                            </div>

                            {/* Content */}
                            <div>
                                <label className="fb-label mb-4">محتوى المقال</label>
                                <textarea
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    placeholder="ابدأ الكتابة هنا... استخدم سطرين فارغين بين الفقرات."
                                    className="w-full min-h-[500px] text-lg leading-relaxed border-none focus:ring-0 placeholder:text-[#CED0D4] resize-none font-medium"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar Settings */}
                <div className="space-y-6">
                    {/* Publishing Settings */}
                    <div className="fb-card p-6">
                        <h4 className="font-black text-sm mb-6 pb-2 border-b border-[#F0F2F5]">إعدادات النشر</h4>
                        <div className="space-y-4">
                            <div>
                                <label className="fb-label">القسم</label>
                                <select
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="fb-input-secondary"
                                >
                                    <option value="">اختر قسماً...</option>
                                    {categories.map(cat => (
                                        <option key={cat.id} value={cat.name}>{cat.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="fb-label">رابط صورة الغلاف</label>
                                <input
                                    type="text"
                                    value={coverImage}
                                    onChange={(e) => setCoverImage(e.target.value)}
                                    className="fb-input-secondary"
                                    placeholder="https://..."
                                />
                            </div>
                        </div>
                    </div>

                    {/* Excerpt */}
                    <div className="fb-card p-6">
                        <h4 className="font-black text-sm mb-4">وصف قصير (للـ SEO)</h4>
                        <textarea
                            value={excerpt}
                            onChange={(e) => setExcerpt(e.target.value)}
                            className="fb-input-secondary min-h-[120px] text-xs leading-relaxed"
                            placeholder="ملخص قصير للمقال يظهر في نتائج البحث..."
                        />
                    </div>

                    {/* AI Tools Palette */}
                    <div className="fb-card p-6 bg-[#E7F3FF]/30 border-[#1877F2]/10">
                        <h4 className="font-black text-[#1877F2] text-sm mb-4 flex items-center gap-2">
                            <span>🤖</span> مساعد الذكاء الاصطناعي
                        </h4>
                        <div className="space-y-2">
                            <button className="w-full text-right p-3 rounded-xl hover:bg-white text-xs font-bold text-[#65676B] transition-all border border-transparent hover:border-[#1877F2]/10">
                                📝 تدقيق لغوي وتصحيح
                            </button>
                            <button
                                onClick={seoAudit}
                                className="w-full text-right p-3 rounded-xl hover:bg-white text-xs font-bold text-[#65676B] transition-all border border-transparent hover:border-[#1877F2]/10"
                            >
                                📊 فحص معايير SEO
                            </button>
                            <button className="w-full text-right p-3 rounded-xl hover:bg-white text-xs font-bold text-[#65676B] transition-all border border-transparent hover:border-[#1877F2]/10">
                                🖇️ اقتراح روابط داخلية
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
