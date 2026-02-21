import Link from "next/link";
import type { Metadata } from "next";
import AdSlot from "../components/AdSlot";
import { getArticles, getCategories } from "../actions/articles";

export const metadata: Metadata = {
    title: "المدونة | Intellify - عالم التقنية والذكاء الاصطناعي",
    description: "تصفح مئات المقالات المتخصصة في البرمجيات، الذكاء الاصطناعي، وتحليل البيانات.",
};

const categoryColors: Record<string, string> = {
    "ذكاء اصطناعي": "bg-[#E7F3FF] text-[#1877F2]",
    "برمجة": "bg-purple-100 text-purple-700",
    "تعلم آلي": "bg-green-100 text-green-700",
    "أمن سيبراني": "bg-red-100 text-red-700",
    "ريادة أعمال": "bg-yellow-100 text-yellow-700",
    "إنتاجية": "bg-orange-100 text-orange-700",
};

export default async function BlogPage({
    searchParams,
}: {
    searchParams: { category?: string };
}) {
    const [allArticles, categories] = await Promise.all([
        getArticles(),
        getCategories()
    ]);

    const activeCategory = searchParams.category;
    const articles = activeCategory
        ? allArticles.filter(a => a.category === activeCategory)
        : allArticles;

    return (
        <div className="container mx-auto px-4 max-w-[1240px] py-16">
            {/* Header Section */}
            <header className="mb-20 text-center max-w-2xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-black text-[#050505] mb-8 leading-tight">
                    استكشف <span className="text-[#1877F2]">أعماق</span> التكنولوجيا
                </h1>
                <p className="text-[#65676B] text-xl font-medium leading-relaxed">
                    مقالات مختارة بعناية لتناسب شغفك بالمعرفة وتطوير مهاراتك في العصر الرقمي.
                </p>
            </header>

            {/* Category Filter - Premium Style */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
                <Link
                    href="/blog"
                    className={`px-8 py-3 rounded-2xl font-black text-sm transition-all border-2 ${!activeCategory
                            ? "bg-[#1877F2] text-white border-[#1877F2] shadow-xl shadow-[#1877F2]/20"
                            : "bg-white text-[#65676B] border-[#CED0D4] hover:border-[#1877F2]"
                        }`}
                >
                    الكل ✨
                </Link>
                {categories.map((cat: any) => (
                    <Link
                        key={cat.name}
                        href={`/blog?category=${cat.name}`}
                        className={`px-8 py-3 rounded-2xl font-black text-sm transition-all border-2 ${activeCategory === cat.name
                                ? "bg-[#1877F2] text-white border-[#1877F2] shadow-xl shadow-[#1877F2]/20"
                                : "bg-white text-[#65676B] border-[#CED0D4] hover:border-[#1877F2]"
                            }`}
                    >
                        {cat.icon} {cat.name}
                    </Link>
                ))}
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {articles.map((article, idx) => (
                    <div key={article.slug}>
                        <Link href={`/blog/${article.slug}`} className="group block">
                            <article className="fb-card h-full flex flex-col hover:translate-y-[-10px] hover:shadow-2xl transition-all duration-500 overflow-hidden">
                                <div className="h-64 bg-[#F0F2F5] relative group-hover:scale-105 transition-transform duration-700 flex items-center justify-center text-7xl opacity-50">
                                    {article.category === "ذكاء اصطناعي" ? "🤖" : article.category === "برمجة" ? "💻" : "📡"}
                                </div>
                                <div className="p-8 flex-1 flex flex-col">
                                    <div className="flex items-center gap-4 mb-6">
                                        <span className={`fb-badge ${categoryColors[article.category] || "bg-gray-100 text-gray-700"}`}>
                                            {article.category}
                                        </span>
                                        <span className="text-[10px] font-black text-[#8A8D91]">
                                            ⏱️ {article.read_time}
                                        </span>
                                    </div>
                                    <h2 className="text-2xl font-black text-[#050505] mb-4 group-hover:text-[#1877F2] transition-colors leading-snug">
                                        {article.title}
                                    </h2>
                                    <p className="text-[#65676B] text-sm font-medium line-clamp-3 mb-8 flex-1 leading-relaxed">
                                        {article.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between pt-6 border-t border-[#F0F2F5]">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-[#E7F3FF] text-[#1877F2] flex items-center justify-center text-xs font-black italic">i</div>
                                            <span className="text-[10px] font-black text-[#050505]">فريق Intellify</span>
                                        </div>
                                        <span className="text-[10px] font-bold text-[#8A8D91]">
                                            {article.date || "قريباً"}
                                        </span>
                                    </div>
                                </div>
                            </article>
                        </Link>
                        {/* Inline Ad after 3rd item */}
                        {idx === 2 && <div className="md:col-span-2 lg:col-span-3 mt-10"><AdSlot format="horizontal" /></div>}
                    </div>
                ))}
            </div>

            {articles.length === 0 && (
                <div className="py-24 text-center">
                    <div className="text-8xl mb-8">🔭</div>
                    <h3 className="text-2xl font-black mb-4">لا توجد مقالات في هذا القسم حالياً</h3>
                    <p className="text-[#65676B] font-bold">نحن نعمل على إضافة محتوى جديد في هذا التصنيف. ابقَ متيقظاً!</p>
                </div>
            )}

            {/* Pagination / Load More */}
            <div className="mt-24 text-center">
                <AdSlot format="horizontal" />
            </div>
        </div>
    );
}
