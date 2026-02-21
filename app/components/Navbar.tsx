"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleSearch = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && searchQuery.trim()) {
            router.push(`/blog?search=${encodeURIComponent(searchQuery.trim())}`);
        }
    };

    const navLinks = [
        { name: "الرئيسية", href: "/" },
        { name: "المدونة", href: "/blog" },
        { name: "أدوات AI", href: "/ai-tools" },
        { name: "دروس", href: "/tutorials" },
        { name: "اتصل بنا", href: "/contact" },
    ];

    return (
        <nav
            className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-2" : "bg-white py-4 border-b border-[#F0F2F5]"
                }`}
        >
            <div className="container mx-auto px-4 max-w-[1240px]">
                <div className="flex items-center justify-between gap-8">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group shrink-0">
                        <div className="w-10 h-10 bg-[#1877F2] rounded-xl flex items-center justify-center text-white text-2xl font-black shadow-lg group-hover:rotate-12 transition-transform">
                            i
                        </div>
                        <span className="text-2xl font-black text-[#050505] tracking-tight group-hover:text-[#1877F2] transition-colors">
                            Intellify
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1 font-bold">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`px-4 py-2 rounded-lg transition-all text-sm ${pathname === link.href
                                    ? "text-[#1877F2] bg-[#E7F3FF]"
                                    : "text-[#65676B] hover:bg-[#F0F2F5] hover:text-[#050505]"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Search Bar */}
                    <div className="hidden md:flex flex-1 max-w-md relative">
                        <input
                            type="text"
                            placeholder="ابحث عن مقال، تقنية، أو أداة..."
                            className="w-full bg-[#F0F2F5] border-none rounded-full py-2.5 px-12 text-sm focus:ring-2 focus:ring-[#1877F2]/20 transition-all outline-none"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={handleSearch}
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8A8D91]">🔍</span>
                    </div>

                    {/* CTA & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <Link href="/admin/login" className="hidden sm:block">
                            <button className="fb-btn-secondary px-6 py-2.5 text-xs font-black">لوحة التحكم</button>
                        </Link>

                        <button
                            className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span className={`w-6 h-0.5 bg-[#050505] transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                            <span className={`w-6 h-0.5 bg-[#050505] transition-all ${isOpen ? "opacity-0" : ""}`}></span>
                            <span className={`w-6 h-0.5 bg-[#050505] transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="lg:hidden mt-4 pb-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-300">
                        <div className="relative mb-6 md:hidden">
                            <input
                                type="text"
                                placeholder="ابحث..."
                                className="w-full bg-[#F0F2F5] rounded-xl py-3 px-12 text-sm outline-none"
                            />
                            <span className="absolute right-4 top-1/2 -translate-y-1/2">🔍</span>
                        </div>
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`block p-4 rounded-xl font-bold text-sm ${pathname === link.href
                                    ? "bg-[#E7F3FF] text-[#1877F2]"
                                    : "text-[#65676B] hover:bg-[#F0F2F5]"
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}
