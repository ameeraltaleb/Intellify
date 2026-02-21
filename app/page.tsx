import Link from "next/link";
import type { Metadata } from "next";
import AdSlot from "./components/AdSlot";
import { getArticles } from "./actions/articles";
import { mockCategories } from "@/lib/mockData";

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
  const articles = await getArticles();
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
                <div className="relative h-[300px] md:h-[450px] bg-gradient-to-br from-[#E7F3FF] to-white">
                  <div className="absolute inset-0 flex items-center justify-center text-[200px] opacity-10 transform group-hover:scale-110 transition-transform duration-1000">🌐</div>
                  <div className="absolute top-6 right-6">
                    <span className="fb-badge bg-[#1877F2] text-white shadow-md">مقال مميز</span>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 p-8 md:p-12 bg-gradient-to-t from-white via-white/90 to-transparent">
                    <span className={`text-xs font-bold px-3 py-1 rounded-md mb-4 inline-block ${categoryColors[featuredArticle.category] || "bg-gray-100 text-gray-700"}`}>
                      {featuredArticle.category}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-[#050505] leading-tight mb-4 group-hover:text-[#1877F2] transition-colors">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-[#65676B] text-lg mb-6 line-clamp-2">{featuredArticle.excerpt}</p>
                    <div className="flex items-center gap-6 text-sm font-bold text-[#8A8D91]">
                      <span>📅 {featuredArticle.created_at ? new Date(featuredArticle.created_at).toLocaleDateString('ar-SA') : featuredArticle.date}</span>
                      <span>⏱️ {featuredArticle.read_time}</span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </div>

          {/* Side Featured / Ad */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="fb-card p-8 flex-1 flex flex-col justify-center items-center text-center">
              <div className="w-16 h-16 bg-[#E7F3FF] text-[#1877F2] rounded-full flex items-center justify-center text-3xl mb-6 shadow-inner">📬</div>
              <h3 className="text-2xl font-black mb-3">النشرة البريدية</h3>
              <p className="text-[#65676B] text-sm mb-8 leading-relaxed">انضم إلى أكثر من ٥٠ ألف متابع مهتم بالتقنية والذكاء الاصطناعي.</p>
              <div className="w-full space-y-3">
                <input type="email" placeholder="بريدك الإلكتروني" className="fb-input bg-[#F0F2F5] border border-[#CED0D4] focus:border-[#1877F2]" />
                <button className="fb-btn-primary w-full py-3.5 shadow-md">اشترك الآن</button>
              </div>
            </div>
            <AdSlot format="rectangle" />
          </div>
        </section>
      )}

      {/* Middle Horizontal Ad */}
      <AdSlot className="mb-12" label="المساحة الإعلانية الأولى" format="horizontal" />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left: Article Feed */}
        <main className="lg:col-span-8 lg:border-l lg:border-[#CED0D4] lg:pl-10">
          <div className="flex items-center justify-between mb-10 pb-4 border-b border-[#CED0D4]">
            <h2 className="text-2xl font-black text-[#050505] flex items-center gap-4">
              <span className="w-3 h-8 bg-[#1877F2] rounded-full"></span>
              أحدث المقالات
            </h2>
            <Link href="/blog" className="text-[#1877F2] font-bold text-sm hover:underline">مشاهدة الكل</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {latestArticles.map((article, idx) => (
              <div key={article.slug}>
                <Link href={`/blog/${article.slug}`} className="group block h-full">
                  <article className="fb-card h-full transition-all duration-300 hover:shadow-lg border-[#CED0D4] flex flex-col">
                    <div className="h-48 bg-[#F0F2F5] flex items-center justify-center text-6xl group-hover:bg-[#E7F3FF] transition-colors shrink-0">
                      {article.category === "برمجة" ? "💻" : article.category === "تعلم آلي" ? "🧠" : article.category === "إنتاجية" ? "⚡" : article.category === "أمن سيبراني" ? "🔒" : article.category === "ريادة أعمال" ? "🚀" : "📝"}
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`text-[10px] font-black px-2.5 py-1 rounded-md ${categoryColors[article.category] || "bg-gray-100 text-gray-600"}`}>
                          {article.category}
                        </span>
                        <span className="text-[11px] font-bold text-[#8A8D91]">
                          {article.created_at ? new Date(article.created_at).toLocaleDateString('ar-SA') : article.date}
                        </span>
                      </div>
                      <h3 className="font-black text-xl text-[#050505] mb-4 group-hover:text-[#1877F2] transition-colors leading-snug">
                        {article.title}
                      </h3>
                      <p className="text-[#65676B] text-[15px] line-clamp-3 mb-6 leading-relaxed flex-1">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#F0F2F5]">
                        <span className="text-[11px] font-bold text-[#8A8D91]">⏱️ {article.read_time}</span>
                        <span className="text-[#1877F2] text-xs font-bold group-hover:translate-x-[-4px] transition-transform">اقرأ المزيد ←</span>
                      </div>
                    </div>
                  </article>
                </Link>
                {/* Insert Ad on mobile */}
                {idx === 1 && <div className="mt-8 md:hidden"><AdSlot format="rectangle" /></div>}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="fb-btn-secondary px-16 py-4 border border-[#CED0D4] font-black">تحميل المزيد من المقالات</button>
          </div>
        </main>

        {/* Right: Sidebar */}
        <aside className="lg:col-span-4 space-y-10">
          <AdSlot format="rectangle" />

          {/* Categories */}
          <div className="fb-card p-8 border-[#CED0D4]">
            <h3 className="font-black text-xl text-[#050505] mb-8 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-[#42B72A] rounded-full"></span>
              التصنيفات
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {mockCategories.map((cat) => (
                <Link
                  key={cat.name}
                  href={`/blog?category=${cat.name}`}
                  className="flex items-center justify-between p-4 rounded-xl hover:bg-[#F0F2F5] transition-all group"
                >
                  <span className="flex items-center gap-4 text-sm font-bold text-[#050505] group-hover:text-[#1877F2]">
                    <span className="w-10 h-10 rounded-full bg-[#E7F3FF] text-[#1877F2] flex items-center justify-center text-xl shadow-sm">{cat.icon}</span>
                    {cat.name}
                  </span>
                  <span className="text-xs font-black text-[#65676B] bg-[#F0F2F5] px-3 py-1.5 rounded-lg group-hover:bg-[#1877F2] group-hover:text-white transition-colors">
                    {cat.count}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <AdSlot format="rectangle" label="مساحة إعلانية" />

          {/* Popular Articles */}
          <div className="fb-card p-8 border-[#CED0D4]">
            <h3 className="font-black text-xl text-[#050505] mb-8 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-[#FA3E3E] rounded-full"></span>
              المقالات الأكثر رواجاً
            </h3>
            <div className="space-y-6">
              {[
                { title: "ChatGPT vs Gemini: مقارنة شاملة لعام 2026", views: "12.4K" },
                { title: "أفضل 10 لغات برمجة يجب تعلمها", views: "9.8K" },
                { title: "مستقبل الوظائف في عصر الأتمتة", views: "7.2K" },
                { title: "دليل بناء موقع إلكتروني احترافي", views: "5.6K" },
              ].map((item, idx) => (
                <Link
                  key={idx}
                  href="/blog"
                  className="flex items-start gap-5 group"
                >
                  <span className="text-4xl font-black text-[#E4E6EB] group-hover:text-[#1877F2] transition-colors leading-none">
                    {idx + 1}
                  </span>
                  <div>
                    <p className="text-sm font-black text-[#050505] leading-snug group-hover:text-[#1877F2] transition-colors mb-2">
                      {item.title}
                    </p>
                    <p className="text-[11px] font-bold text-[#8A8D91]">
                      👁️ {item.views} مشاهدة
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Sticky Ad */}
          <div className="sticky top-24">
            <AdSlot format="rectangle" label="إعلان ممول" />
          </div>
        </aside>
      </div>

      {/* Bottom Ad */}
      <AdSlot className="mt-20" format="horizontal" />
    </div>
  );
}
