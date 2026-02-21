import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Intellify | منصة المعرفة والتكنولوجيا",
  description:
    "منصة عربية رائدة في نشر المقالات والدروس حول الذكاء الاصطناعي، البرمجة، التكنولوجيا، وريادة الأعمال الرقمية.",
  keywords: "ذكاء اصطناعي, مقالات تقنية, برمجة, تعلم آلي, تكنولوجيا",
  authors: [{ name: "Intellify Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Intellify | منصة المعرفة والتكنولوجيا",
    description: "منصة عربية رائدة في نشر المقالات حول الذكاء الاصطناعي والتكنولوجيا",
    type: "website",
    locale: "ar_SA",
    siteName: "Intellify",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-[#F0F2F5] text-[#050505]">
        <Navbar />
        <main className="pt-16 min-h-screen">{children}</main>

        {/* Facebook-style Footer (Light) */}
        <footer className="bg-white border-t border-[#CED0D4] mt-12 py-10">
          <div className="container mx-auto px-4 max-w-[1240px]">
            {/* Links Grid */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-8 text-xs font-semibold text-[#65676B]">
              <Link href="/about" className="hover:underline">من نحن</Link>
              <Link href="/contact" className="hover:underline">اتصل بنا</Link>
              <Link href="/blog" className="hover:underline">المدونة</Link>
              <Link href="/tutorials" className="hover:underline">الدروس</Link>
              <Link href="/ai-tools" className="hover:underline">أدوات الذكاء الاصطناعي</Link>
              <Link href="/privacy" className="hover:underline">سياسة الخصوصية</Link>
              <Link href="/terms" className="hover:underline">شروط الاستخدام</Link>
            </div>

            {/* Copyright */}
            <div className="text-center text-xs text-[#8A8D91] border-t border-[#E4E6EB] pt-6">
              <p className="mb-2">Intellify © 2026. بوابتك للمعرفة التقنية.</p>
              <div className="flex justify-center gap-4">
                <span>🇸🇦 العربية</span>
                <span>🌍 English</span>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
