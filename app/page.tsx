import Link from "next/link";
import type { Metadata } from "next";
import AdSlot from "./components/AdSlot";
import { getArticles, getCategories, getTrendingArticles } from "./actions/articles";

export const metadata: Metadata = {
  title: "Intellify | منصة المعرفة والتكنولوجيا - مقالات ذكاء اصطناعي وتقنية",
  description:
    "موقع Intellify هو منصة عربية رائدة في نشر المقالات والدروس حول الذكاء الاصطناعي، البرمجة، التكنولوجيا، وريادة الأعمال الرقمية.",
};

const categoryColors: Record<string, string> = {
  "ذكاء اصطناعي": "bg-[#E7F3FF] text-[#1877F2]",
  "برمجة": "bg-purple-100 text-purple-700",
  "تعلم آلي": "bg-green-100 text-green-700",
  "أمن سيبراني": "bg-red-100 text-red-700",
  "ريادة أعمال": "bg-yellow-100 text-yellow-700",
  "إنتاجية": "bg-orange-100 text-orange-700",
};

export default async function Home() {
  const [articles, categories, trending] = await Promise.all([
    getArticles(),
    getCategories(),
    getTrendingArticles()
  ]);

  const featuredArticle = articles[0] || null;
  const latestArticles = articles.slice(1);

  return (
    <div className="container mx-auto px-4 max-w-[1240px] py-8">
      {/* Top Banner Ad */}
      <AdSlot className="mb-10" format="horizontal" />

      {/* Featured Section */}
      {featuredArticle && (
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          <div className="lg:col-span-8">
            <Link href={`/blog/${featuredArticle.slug}`} className="group block h-full">
              <article className="fb-card h-full overflow-hidden transition-all hover:shadow-lg">
                <div className="relative h-[300px] md:h-[500px] bg-gradient-to-br from-[#E7F3FF] to-white">
                  <div className="absolute inset-0 flex items-center justify-center text-[220px] opacity-10 transform group-hover:scale-110 transition-transform duration-1000">🌐</div>
                  <div className="absolute top-6 right-6">
                    <span className="fb-badge bg-[#1877F2] text-white shadow-md">اكتشف الجديد</span>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 p-8 md:p-12 bg-gradient-to-t from-white via-white/95 to-transparent">
                    <span className={`text-xs font-bold px-3 py-1 rounded-md mb-4 inline-block ${categoryColors[featuredArticle.category] || "bg-gray-100 text-gray-700"}`}>
                      {featuredArticle.category}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-[#050505] leading-tight mb-4 group-hover:text-[#1877F2] transition-colors">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-[#65676B] text-lg mb-6 line-clamp-2 leading-relaxed">{featuredArticle.excerpt}</p>
                    <div className="flex items-center gap-6 text-sm font-bold text-[#8A8D91]">
                      <span>📅 {featuredArticle.created_at ? new Date(featuredArticle.created_at).toLocaleDateString('ar-SA') : featuredArticle.date}</span>
                      <span>⏱️ {featuredArticle.read_time}</span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </div>

          {/* Email Newsletter Card */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="fb-card p-10 flex-1 flex flex-col justify-center items-center text-center bg-gradient-to-b from-[#E7F3FF]/50 to-white">
              <div className="w-20 h-20 bg-white text-[#1877F2] rounded-3xl flex items-center justify-center text-4xl mb-6 shadow-sm border border-[#E7F3FF]">📩</div>
              <h3 className="text-2xl font-black mb-3">اشترك في النشرة</h3>
              <p className="text-[#65676B] text-sm mb-8 leading-relaxed font-medium">احصل على أفضل المقالات والدروس التقنية مباشرة في بريدك.</p>
              <div className="w-full space-y-3">
                <input type="email" placeholder="بريدك الإلكتروني" className="fb-input bg-white border border-[#CED0D4] focus:border-[#1877F2] py-4" />
                <button className="fb-btn-primary w-full py-4 shadow-xl hover:translate-y-[-2px] transition-transform">انضم الآن</button>
              </div>
              <p className="text-[10px] text-[#8A8D91] mt-4">لا نقوم بإرسال رسائل مزعجة، يمكنك إلغاء الاشتراك في أي وقت.</p>
            </div>
          </div>
        </section>
      )}

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Article Feed */}
        <main className="lg:col-span-8">
          <div className="flex items-center justify-between mb-10 pb-4 border-b border-[#CED0D4]">
            <h2 className="text-2xl font-black text-[#050505] flex items-center gap-4">
              <span className="w-3 h-8 bg-[#1877F2] rounded-full"></span>
              أحدث ما نشرنا
            </h2>
            <Link href="/blog" className="text-[#1877F2] font-black text-sm hover:underline">المزيد من المقالات ←</Link>
          </div>

          <div className="grid grid-cols-1 gap-10">
            {latestArticles.map((article, idx) => (
              <div key={article.slug}>
                <Link href={`/blog/${article.slug}`} className="group block">
                  <article className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white p-4 rounded-3xl border border-transparent hover:border-[#CED0D4] hover:bg-[#F0F2F5]/30 transition-all duration-500">
                    <div className="md:col-span-4 h-56 bg-[#F0F2F5] rounded-2xl flex items-center justify-center text-7xl group-hover:scale-[1.03] transition-transform duration-700">
                      {article.category === "برمجة" ? "💻" : article.category === "ذكاء اصطناعي" ? "🤖" : article.category === "تعلم آلي" ? "🧠" : "📝"}
                    </div>
                    <div className="md:col-span-8 flex flex-col p-2">
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`text-[10px] font-black px-3 py-1.5 rounded-lg ${categoryColors[article.category] || "bg-gray-100 text-gray-600"}`}>
                          {article.category}
                        </span>
                        <span className="text-xs font-bold text-[#8A8D91]">
                          📅 {article.created_at ? new Date(article.created_at).toLocaleDateString('ar-SA') : article.date}
                        </span>
                      </div>
                      <h3 className="font-black text-2xl text-[#050505] mb-4 group-hover:text-[#1877F2] transition-colors leading-snug">
                        {article.title}
                      </h3>
                      <p className="text-[#65676B] text-[16px] line-clamp-2 mb-6 leading-relaxed font-medium">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center gap-6 text-xs font-bold text-[#8A8D91]">
                        <span className="flex items-center gap-2">⏱️ {article.read_time}</span>
                        <span className="text-[#1877F2] font-black group-hover:translate-x-[-5px] transition-transform flex items-center gap-1">استكمل القراءة <span className="text-lg">←</span></span>
                      </div>
                    </div>
                  </article>
                </Link>
                {/* Mid-feed Ad */}
                {idx === 1 && <div className="mt-10"><AdSlot format="horizontal" /></div>}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="fb-btn-secondary px-20 py-4 border-2 border-[#CED0D4] font-black text-sm rounded-full hover:bg-[#050505] hover:text-white transition-all">تحميل المزيد من القصص</button>
          </div>
        </main>

        {/* Right: Sidebar */}
        <aside className="lg:col-span-4 space-y-12">
          {/* Categories - Now Dynamic */}
          <div className="fb-card p-8 border-[#CED0D4]">
            <h3 className="font-black text-xl text-[#050505] mb-8 flex items-center gap-3">
              <span className="w-1.5 h-7 bg-[#42B72A] rounded-full"></span>
              استكشف المواضيع
            </h3>
            <div className="grid grid-cols-1 gap-2">
              {categories.map((cat: any) => (
                <Link
                  key={cat.name}
                  href={`/blog?category=${cat.name}`}
                  className="flex items-center justify-between p-4 rounded-2xl hover:bg-[#F0F2F5] transition-all group border border-transparent hover:border-[#CED0D4]/30"
                >
                  <span className="flex items-center gap-4 text-sm font-bold text-[#050505] group-hover:text-[#1877F2]">
                    <span className="w-10 h-10 rounded-xl bg-[#F0F2F5] text-[#1877F2] flex items-center justify-center text-xl shadow-inner group-hover:bg-[#E7F3FF] transition-colors">{cat.icon || "📁"}</span>
                    {cat.name}
                  </span>
                  <span className="text-[10px] font-black text-[#65676B] bg-[#EDF0F3] px-3 py-1 rounded-full group-hover:bg-[#1877F2] group-hover:text-white transition-colors">
                    {cat.count} مقال
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <AdSlot format="rectangle" />

          {/* Popular Articles - Now Dynamic */}
          <div className="fb-card p-8 border-[#CED0D4]">
            <h3 className="font-black text-xl text-[#050505] mb-8 flex items-center gap-3">
              <span className="w-1.5 h-7 bg-[#FA3E3E] rounded-full"></span>
              الأكثر تفاعلاً هذا الأسبوع
            </h3>
            <div className="space-y-8">
              {trending.map((item: any, idx: number) => (
                <Link
                  key={idx}
                  href={`/blog/${item.slug}`}
                  className="flex items-start gap-5 group"
                >
                  <div className="text-4xl font-black text-[#F0F2F5] group-hover:text-[#1877F2] transition-colors leading-none italic">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-[#050505] leading-[1.6] group-hover:text-[#1877F2] transition-colors mb-2">
                      {item.title}
                    </h4>
                    <p className="text-[10px] font-bold text-[#8A8D91] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#42B72A] rounded-full"></span>
                      {item.views} قراءة نشطة
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Sticky Ad / Promo */}
          <div className="sticky top-28">
            <div className="rounded-[40px] bg-[#050505] p-10 text-center text-white overflow-hidden relative border-4 border-[#1877F2]">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#1877F2] rounded-full blur-3xl opacity-20"></div>
              <h4 className="text-2xl font-black mb-4 relative z-10">كن جزءاً من المستقبل</h4>
              <p className="text-white/60 text-sm mb-8 relative z-10 leading-relaxed">انضم إلى مجتمع Intellify واحصل على تحديثات حصرية يومياً.</p>
              <button className="w-full py-4 bg-white text-[#050505] rounded-2xl font-black text-sm hover:bg-[#1877F2] hover:text-white transition-all shadow-2xl relative z-10">انضم مجاناً</button>
            </div>
          </div>
        </aside>
      </div>

      {/* Footer Banner Ad */}
      <AdSlot className="mt-24" format="horizontal" />
    </div>
  );
}
