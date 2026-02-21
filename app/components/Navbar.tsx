"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#CED0D4] shadow-sm">
            <nav className="container mx-auto px-4 h-16 flex justify-between items-center max-w-[1240px]">
                {/* Logo */}
                <div className="flex items-center gap-4">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 bg-[#1877F2] rounded-lg flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300 shadow-sm">
                            <span className="text-white font-black text-2xl">i</span>
                        </div>
                        <span className="text-xl font-black text-[#050505] hidden sm:block">Intellify</span>
                    </Link>
                </div>

                {/* Desktop Links - Blog Style */}
                <div className="hidden lg:flex items-center gap-8">
                    {[
                        { href: "/", label: "الرئيسية" },
                        { href: "/blog", label: "المدونة" },
                        { href: "/tutorials", label: "الدروس" },
                        { href: "/ai-tools", label: "أدوات الذكاء" },
                        { href: "/about", label: "من نحن" },
                        { href: "/contact", label: "اتصل بنا" },
                    ].map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-[#65676B] font-bold text-sm hover:text-[#1877F2] transition-colors relative py-1 group"
                        >
                            {item.label}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1877F2] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                </div>

                {/* Right Area - Admin/Search */}
                <div className="flex items-center gap-4">
                    <Link href="/admin" className="fb-btn-secondary text-xs px-4 py-2 hidden sm:block">
                        لوحة التحكم
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden w-10 h-10 flex items-center justify-center text-[#050505] bg-[#F0F2F5] rounded-lg hover:bg-[#E4E6EB] transition-colors"
                    >
                        {isOpen ? "✕" : "☰"}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`lg:hidden overflow-hidden transition-all duration-500 bg-white border-b border-[#CED0D4] ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="p-6 space-y-4">
                    {[
                        { href: "/", label: "الرئيسية" },
                        { href: "/blog", label: "المدونة" },
                        { href: "/tutorials", label: "الدروس" },
                        { href: "/ai-tools", label: "أدوات الذكاء" },
                        { href: "/about", label: "من نحن" },
                        { href: "/contact", label: "اتصل بنا" },
                        { href: "/admin", label: "لوحة التحكم" },
                    ].map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="block text-lg font-bold text-[#050505] hover:text-[#1877F2] transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
}
