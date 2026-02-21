"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const router = useRouter();
    const isLoginPage = pathname === "/admin/login";

    if (isLoginPage) return <>{children}</>;

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push("/admin/login");
        router.refresh();
    };

    return (
        <div className="flex min-h-screen bg-[#F0F2F5]">
            {/* Sidebar */}
            <aside className="w-72 bg-white border-l border-[#CED0D4] hidden lg:flex flex-col p-6 sticky top-0 h-screen shadow-sm">
                <div className="flex items-center gap-3 mb-10 px-2">
                    <div className="w-10 h-10 bg-[#1877F2] rounded-lg flex items-center justify-center text-white text-2xl font-black shadow-sm">i</div>
                    <span className="text-xl font-black text-[#050505]">مدير Intellify</span>
                </div>

                <nav className="space-y-1.5 flex-1">
                    {[
                        { href: "/admin", label: "الإحصائيات", icon: "📊" },
                        { href: "/admin/articles", label: "إدارة المقالات", icon: "📁" },
                        { href: "/admin/editor", label: "المحرر الذكي", icon: "✍️" },
                        { href: "/admin/generate-article", label: "التوليد التلقائي", icon: "✨" },
                        { href: "/admin/scheduler", label: "جدولة المحتوى", icon: "⏳" },
                        { href: "/admin/settings", label: "الإعدادات", icon: "⚙️" },
                    ].map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-3.5 p-3.5 rounded-xl transition-all font-bold text-sm ${isActive
                                    ? "bg-[#E7F3FF] text-[#1877F2]"
                                    : "text-[#65676B] hover:bg-[#F0F2F5]"
                                    }`}
                            >
                                <span className="text-lg">{item.icon}</span>
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="mt-auto pt-6 border-t border-[#F0F2F5]">
                    <div className="p-4 rounded-xl bg-[#F0F2F5] border border-[#CED0D4] mb-4">
                        <p className="text-[#65676B] text-[10px] font-bold uppercase mb-2">الحالة الراهنة</p>
                        <div className="flex items-center gap-2">
                            <div className="w-2.5 h-2.5 bg-[#42B72A] rounded-full animate-pulse"></div>
                            <p className="text-[13px] font-black text-[#050505]">متصل بنجاح</p>
                        </div>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="w-full fb-btn-secondary py-3 text-sm flex items-center justify-center gap-2 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                        🚪 تسجيل الخروج
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6 md:p-10 overflow-auto">
                <header className="flex justify-between items-center mb-10 pb-6 border-b border-[#CED0D4]">
                    <div>
                        <h2 className="text-3xl font-black text-[#050505]">
                            {pathname === "/admin" ? "لوحة التحكم" :
                                pathname === "/admin/articles" ? "إدارة المقالات" :
                                    pathname === "/admin/editor" ? "المحرر الذكي" :
                                        pathname === "/admin/generate-article" ? "التوليد التلقائي" :
                                            pathname === "/admin/scheduler" ? "الجدولة الذكية" : "الإعدادات"}
                        </h2>
                        <p className="text-[#65676B] text-sm mt-1">أهلاً بك مجدداً في نظام إدارة المحتوى</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex gap-2">
                            <button className="w-10 h-10 bg-white border border-[#CED0D4] rounded-full flex items-center justify-center shadow-sm hover:bg-[#F0F2F5] transition-colors">🔔</button>
                            <button className="w-10 h-10 bg-white border border-[#CED0D4] rounded-full flex items-center justify-center shadow-sm hover:bg-[#F0F2F5] transition-colors">💬</button>
                        </div>
                        <div className="w-12 h-12 rounded-full border-2 border-[#1877F2] p-0.5 shadow-sm">
                            <div className="w-full h-full rounded-full bg-gradient-to-br from-[#1877F2] to-[#2D88FF] flex items-center justify-center text-white text-lg font-black">A</div>
                        </div>
                    </div>
                </header>
                <div className="max-w-[1240px]">
                    {children}
                </div>
            </main>
        </div>
    );
}
