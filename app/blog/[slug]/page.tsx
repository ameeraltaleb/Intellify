import Link from "next/link";
import type { Metadata } from "next";
import AdSlot from "../../components/AdSlot";
import ReadingProgress from "../../components/ReadingProgress";
import { getArticleBySlug, getArticles } from "../../actions/articles";
import { notFound } from "next/navigation";

const categoryColors: Record<string, string> = {
    "ذكاء اصطناعي": "bg-[#E7F3FF] text-[#1877F2]",
    "برمجة": "bg-purple-100 text-purple-700",
    "تعلم آلي": "bg-green-100 text-green-700",
    "أمن سيبراني": "bg-red-100 text-red-700",
    "ريادة أعمال": "bg-yellow-100 text-yellow-700",
    "إنتاجية": "bg-orange-100 text-orange-700",
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const article = await getArticleBySlug(params.slug);
    if (!article) return { title: "المقال غير موجود | Intellify" };

    return {
        title: `${article.title} | Intellify`,
        description: article.excerpt?.slice(0, 160),
        openGraph: {
            title: article.title,
            description: article.content?.[0] || article.excerpt,
            type: "article",
            publishedTime: article.created_at,
        },
    };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
    const article = await getArticleBySlug(params.slug);
    if (!article) notFound();

    const allArticles = await getArticles();
    const relatedPosts = allArticles
        .filter(a => a.category === article.category && a.slug !== article.slug)
        .slice(0, 3);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": article.title,
        "description": article.excerpt,
        "image": "https://intellify.com/og-image.png", // Placeholder
        "datePublished": article.created_at,
        "author": {
            "@type": "Organization",
            "name": "Intellify Team",
            "url": "https://intellify.com"
        },
    };

    return (
        <div className="bg-white min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ReadingProgress />

            <header className="bg-[#F0F2F5] pt-16 pb-24 border-b border-[#CED0D4]">
                <div className="container mx-auto px-4 max-w-[900px]">
                    <nav className="text-xs font-black text-[#65676B] mb-12 flex items-center gap-3 uppercase tracking-widest">
                        <Link href="/" className="hover:text-[#1877F2]">الرئيسية</Link>
                        <span className="opacity-30">/</span>
                        <Link href="/blog" className="hover:text-[#1877F2]">المدونة</Link>
                        <span className="opacity-30">/</span>
                        <span className="text-[#050505]">{article.category}</span>
                    </nav>

                    <span className={`fb-badge mb-8 inline-block ${categoryColors[article.category] || "bg-white text-gray-600 shadow-sm"}`}>
                        {article.category}
                    </span>

                    <h1 className="text-4xl md:text-6xl font-black text-[#050505] leading-[1.15] mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        {article.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-10 py-10 border-y border-[#CED0D4]/50">
                        <div className="flex items-center gap-4 group">
                            <div className="w-14 h-14 rounded-2xl bg-[#1877F2] flex items-center justify-center text-white text-2xl font-black shadow-lg shadow-[#1877F2]/30 group-hover:scale-110 transition-transform">i</div>
                            <div>
                                <p className="text-sm font-black text-[#050505]">فريق تحرير Intellify</p>
                                <p className="text-[11px] font-bold text-[#65676B]">مُحرر تقني خبير</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-8 text-[12px] font-black text-[#65676B]">
                            <span className="flex items-center gap-2">📅 {article.created_at ? new Date(article.created_at).toLocaleDateString('ar-SA') : article.date}</span>
                            <span className="flex items-center gap-2">⏱️ {article.read_time}</span>
                            <span className="flex items-center gap-2">👁️ {article.views || 0} مشاهدة</span>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-4 max-w-[1240px] -mt-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Social Sidebar */}
                    <aside className="hidden lg:block lg:col-span-1">
                        <div className="sticky top-32 flex flex-col gap-5 items-center">
                            <button className="w-12 h-12 rounded-full bg-white border border-[#CED0D4] flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all shadow-sm group">
                                <span className="text-xl">Facebook</span>
                            </button>
                            <button className="w-12 h-12 rounded-full bg-white border border-[#CED0D4] flex items-center justify-center hover:bg-[#1DA1F2] hover:text-white transition-all shadow-sm group">
                                <span className="text-xl">X</span>
                            </button>
                            <button className="w-12 h-12 rounded-full bg-white border border-[#CED0D4] flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all shadow-sm group">
                                <span className="text-xl">WP</span>
                            </button>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="lg:col-span-8">
                        <article className="article-content py-16">
                            {article.content.map((p, i) => {
                                if (i === 2) return <div key={i}><AdSlot className="my-16" format="horizontal" /><p>{p}</p></div>;
                                if (p.startsWith('#')) return <h2 key={i}>{p.replace(/#/g, '').trim()}</h2>;
                                return <p key={i}>{p}</p>;
                            })}

                            <div className="mt-20 p-12 bg-[#F0F2F5] rounded-[40px] border-2 border-white shadow-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#1877F2] opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity"></div>
                                <h3 className="text-2xl font-black mb-6">هل أعجبك المقال؟</h3>
                                <p className="text-lg text-[#65676B] mb-10 font-bold">بإمكانك مساعدة الآخرين في العثور على هذه المعلومات بمشاركتها معهم.</p>
                                <div className="flex gap-4">
                                    <button className="fb-btn-primary px-10">شارك الآن</button>
                                    <button className="fb-btn-secondary px-10">حفظ للقراءة لاحقاً</button>
                                </div>
                            </div>
                        </article>

                        {/* Related Posts */}
                        {relatedPosts.length > 0 && (
                            <section className="py-20 border-t border-[#CED0D4]">
                                <h3 className="text-3xl font-black mb-12 flex items-center gap-4">
                                    <span className="w-2 h-8 bg-[#42B72A] rounded-full"></span>
                                    مقالات ذات صلة
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {relatedPosts.map(post => (
                                        <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                                            <div className="fb-card h-full p-6 border-transparent hover:border-[#1877F2]/30 hover:shadow-2xl transition-all duration-500">
                                                <div className="h-40 bg-[#F0F2F5] rounded-2xl mb-6 flex items-center justify-center text-5xl grayscale group-hover:grayscale-0 transition-all">📝</div>
                                                <h4 className="font-black text-lg mb-4 leading-snug group-hover:text-[#1877F2] transition-colors">{post.title}</h4>
                                                <div className="text-[10px] font-bold text-[#8A8D91] flex items-center justify-between">
                                                    <span>📅 {post.created_at ? new Date(post.created_at).toLocaleDateString('ar-SA') : post.date}</span>
                                                    <span>⏱️ {post.read_time}</span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        )}
                    </main>

                    {/* Sidebar Ad */}
                    <aside className="lg:col-span-3">
                        <div className="sticky top-32 space-y-10">
                            <AdSlot format="vertical" />
                            <div className="fb-card p-8 bg-[#1877F2] text-white border-none shadow-2xl shadow-[#1877F2]/30">
                                <h4 className="text-xl font-black mb-4">انضم للنخبة التقنية</h4>
                                <p className="text-white/70 text-sm mb-8 leading-relaxed font-bold">اشترك في قناة التليجرام الخاصة بنا للحصول على آخر التحديثات فور صدورها.</p>
                                <button className="w-full py-4 bg-white text-[#1877F2] rounded-2xl font-black text-sm">انضم للقناة</button>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
