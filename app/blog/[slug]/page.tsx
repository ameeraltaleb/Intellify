import Link from "next/link";
import type { Metadata } from "next";
import AdSlot from "../../components/AdSlot";
import { getArticleBySlug } from "../../actions/articles";
import { notFound } from "next/navigation";

const categoryColors: Record<string, string> = {
    "ذكاء اصطناعي": "bg-[#E7F3FF] text-[#1877F2]",
    "برمجة": "bg-purple-100 text-purple-700",
    "تعلم آلي": "bg-green-100 text-green-700",
    "أمن سيبراني": "bg-red-100 text-red-700",
    "ريادة أعمال": "bg-yellow-100 text-yellow-700",
    "إنتاجية": "bg-orange-100 text-orange-700",
    "تكنولوجيا": "bg-cyan-100 text-cyan-700",
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const article = await getArticleBySlug(params.slug);

    if (!article) {
        return { title: "المقال غير موجود | Intellify" };
    }

    return {
        title: `${article.title} | Intellify`,
        description: article.excerpt?.slice(0, 160),
        openGraph: {
            title: article.title,
            description: article.excerpt?.slice(0, 160),
            type: "article",
            locale: "ar_SA",
            siteName: "Intellify",
            publishedTime: article.created_at || article.date,
            tags: article.tags,
        },
    };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
    const article = await getArticleBySlug(params.slug);

    if (!article) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 max-w-[1240px] py-10">
            {/* Top Ad */}
            <AdSlot className="mb-12" format="horizontal" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Main Content Area */}
                <main className="lg:col-span-8">
                    {/* Breadcrumb */}
                    <nav className="text-xs font-bold text-[#65676B] mb-8 flex items-center gap-2">
                        <Link href="/" className="hover:text-[#1877F2]">الرئيسية</Link>
                        <span className="text-[#CED0D4]">›</span>
                        <Link href="/blog" className="hover:text-[#1877F2]">المدونة</Link>
                        <span className="text-[#CED0D4]">›</span>
                        <span className="text-[#050505]">{article.title}</span>
                    </nav>

                    <article className="fb-card p-6 md:p-12 border-[#CED0D4]">
                        {/* Header */}
                        <header className="mb-10 text-center">
                            <span className={`text-xs font-black px-4 py-1.5 rounded-md mb-6 inline-block ${categoryColors[article.category] || "bg-gray-100 text-gray-600"}`}>
                                {article.category}
                            </span>
                            <h1 className="text-3xl md:text-5xl font-black text-[#050505] mb-10 leading-[1.2]">
                                {article.title}
                            </h1>
                            <div className="flex flex-wrap items-center justify-center gap-8 text-sm font-bold text-[#65676B] py-6 border-y border-[#F0F2F5]">
                                <div className="flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white font-black shadow-sm">i</span>
                                    <span className="text-[#050505]">فريق Intellify</span>
                                </div>
                                <span>📅 {article.created_at ? new Date(article.created_at).toLocaleDateString('ar-SA') : article.date}</span>
                                <span>⏱️ {article.read_time}</span>
                            </div>
                        </header>

                        {/* Article Image Area */}
                        <div className="h-64 md:h-[450px] bg-[#F0F2F5] rounded-2xl mb-12 flex items-center justify-center overflow-hidden border border-[#CED0D4]">
                            <div className="text-[180px] opacity-10">
                                {article.category === "ذكاء اصطناعي" ? "🤖" : article.category === "برمجة" ? "💻" : "🌐"}
                            </div>
                        </div>

                        {/* Content Body */}
                        <div className="text-[#050505] leading-[1.9] text-lg space-y-10 font-medium whitespace-pre-wrap">
                            {article.content.slice(0, 2).map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}

                            {/* Inner-Article Ad */}
                            <AdSlot className="my-12" label="محتوى ممول" format="rectangle" />

                            {article.content.slice(2, 4).map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}

                            {/* Quote Section */}
                            <blockquote className="bg-[#E7F3FF] p-10 border-r-8 border-[#1877F2] rounded-xl my-16 italic text-2xl font-black text-[#1877F2] leading-relaxed shadow-sm">
                                &ldquo;المعرفة التقنية ليست مجرد معلومات، بل هي القوة التي تشكل مستقبلنا في العصر الرقمي.&rdquo;
                            </blockquote>

                            {article.content.slice(4).map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}

                            <p>نحن في منصة <strong className="text-[#1877F2]">Intellify</strong> نسعى دوماً لتقديم المحتوى الذي يثري رحلتك المعرفية في عالم التكنولوجيا.</p>
                        </div>

                        {/* Article Tags */}
                        {article.tags && article.tags.length > 0 && (
                            <div className="mt-16 pt-10 border-t border-[#F0F2F5]">
                                <h3 className="text-sm font-black text-[#65676B] mb-6">الوسوم ذات الصلة:</h3>
                                <div className="flex flex-wrap gap-3">
                                    {article.tags.map(tag => (
                                        <Link key={tag} href={`/search?q=${tag}`} className="px-5 py-2 bg-[#F0F2F5] border border-[#CED0D4] hover:bg-[#E7F3FF] hover:border-[#1877F2]/50 rounded-lg text-xs font-bold text-[#050505] transition-all">
                                            #{tag}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </article>

                    {/* Bottom Page Ad */}
                    <AdSlot className="mt-16" format="horizontal" />
                </main>

                {/* Sidebar */}
                <aside className="lg:col-span-4 space-y-12">
                    <div className="fb-card p-10 text-center border-[#CED0D4]">
                        <div className="w-24 h-24 mx-auto rounded-full bg-[#1877F2] flex items-center justify-center text-white text-4xl font-black mb-6 shadow-lg">i</div>
                        <h4 className="text-2xl font-black mb-4 text-[#050505]">Intellify</h4>
                        <p className="text-[#65676B] text-sm mb-8 leading-relaxed font-bold">بوابتك لتعرف كل جديد في عالم الذكاء الاصطناعي والتقنية.</p>
                        <button className="fb-btn-primary w-full py-4 text-sm shadow-md">اكتشف جميع المقالات</button>
                    </div>

                    <div className="sticky top-24 space-y-12">
                        <AdSlot format="vertical" label="Trending Ad" />
                        <AdSlot format="rectangle" />
                    </div>
                </aside>
            </div>
        </div>
    );
}
