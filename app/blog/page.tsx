import Link from "next/link";
import type { Metadata } from "next";
import AdSlot from "../components/AdSlot";
import { getArticles } from "../actions/articles";

export const metadata: Metadata = {
    title: "المدونة | Intellify - مقالات تقنية وذكاء اصطناعي",
    description: "اكتشف أحدث المقالات في مجالات الذكاء اصطناعي، البرمجة، الأمن السيبراني، وريادة الأعمال. محتوى عربي حصري ومحدث.",
};

const categoryColors: Record<string, string> = {
    "ذكاء اصطناعي": "bg-[#E7F3FF] text-[#1877F2]",
    "برمجة": "bg-purple-100 text-purple-700",
    "تعلم آلي": "bg-green-100 text-green-700",
    "أمن سيبراني": "bg-red-100 text-red-700",
    "ريادة أعمال": "bg-yellow-100 text-yellow-700",
    "إنتاجية": "bg-orange-100 text-orange-700",
};

const categoryIcons: Record<string, string> = {
    "ذكاء اصطناعي": "🤖",
    "برمجة": "💻",
    "تعلم آلي": "🧠",
    "أمن سيبراني": "🔒",
    "ريادة أعمال": "🚀",
    "إنتاجية": "⚡",
};

export default async function BlogList() {
    const articles = await getArticles();

    return (
        <div className="container mx-auto px-4 md:px-6 py-12 max-w-[1240px]">
            {/* Page Header */}
            <div className="mb-12 border-b border-[#CED0D4] pb-10 text-center max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-black mb-6 text-[#050505]">
                    مدونة <span className="text-[#1877F2]">Intellify</span>
                </h1>
                <p className="text-[#65676B] text-xl font-medium leading-relaxed">
                    مقالات ودروس حصرية تغوص في أعماق التكنولوجيا والذكاء الاصطناعي بلغة عربية سلسلة.
                </p>
            </div>

            {/* Top Ad */}
            <AdSlot className="mb-12" format="horizontal" />

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {articles.map((post, idx) => (
                    <div key={post.slug} className="flex flex-col">
                        <Link href={`/blog/${post.slug}`} className="group h-full block">
                            <article className="fb-card h-full overflow-hidden border-[#CED0D4] hover:shadow-xl transition-all duration-500 flex flex-col">
                                <div className="h-56 bg-[#F0F2F5] relative flex items-center justify-center border-b border-[#CED0D4] group-hover:bg-[#E7F3FF] transition-colors">
                                    <span className="text-7xl group-hover:scale-110 transition-transform duration-700">
                                        {categoryIcons[post.category] || "📝"}
                                    </span>
                                    <div className="absolute top-5 right-5">
                                        <span className={`text-[10px] font-black px-3.5 py-1.5 rounded-lg shadow-sm ${categoryColors[post.category] || "bg-white text-gray-600"}`}>
                                            {post.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-8 flex-1 flex flex-col">
                                    <h2 className="text-2xl font-black text-[#050505] mb-5 group-hover:text-[#1877F2] transition-colors leading-snug">
                                        {post.title}
                                    </h2>
                                    <p className="text-[#65676B] text-[15px] font-medium line-clamp-2 flex-1 mb-8 leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between pt-6 border-t border-[#F0F2F5] text-xs font-bold text-[#8A8D91]">
                                        <span>📅 {post.created_at ? new Date(post.created_at).toLocaleDateString('ar-SA') : post.date}</span>
                                        <span>⏱️ {post.read_time}</span>
                                    </div>
                                </div>
                            </article>
                        </Link>
                        {/* Mobile Ad injection */}
                        {(idx + 1) % 3 === 0 && <div className="mt-10 md:hidden lg:hidden"><AdSlot format="rectangle" /></div>}
                    </div>
                ))}
            </div>

            {/* Pagination Placeholder / Load More */}
            <div className="mt-20 text-center">
                <button className="fb-btn-primary px-20 py-4 text-sm font-black shadow-lg">تحميل المزيد من المقالات</button>
            </div>

            {/* Bottom Page Ad */}
            <AdSlot className="mt-24" format="horizontal" />
        </div>
    );
}
