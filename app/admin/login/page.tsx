"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            setError("فشل تسجيل الدخول: " + error.message);
            setLoading(false);
        } else {
            router.push("/admin");
            router.refresh();
        }
    };

    return (
        <div className="min-h-screen bg-[#F0F2F5] flex items-center justify-center p-4">
            <div className="fb-card w-full max-w-[400px] p-8">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-[#1877F2] rounded-xl flex items-center justify-center text-white text-3xl font-black mx-auto mb-4 shadow-md">i</div>
                    <h1 className="text-2xl font-black text-[#050505]">لوحة تحكم Intellify</h1>
                    <p className="text-[#65676B] text-sm mt-2">يرجى تسجيل الدخول للمتابعة</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-xs font-bold text-[#65676B] mb-1.5 mr-1">البريد الإلكتروني</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="fb-input border border-[#CED0D4] focus:border-[#1877F2]"
                            placeholder="name@example.com"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-[#65676B] mb-1.5 mr-1">كلمة المرور</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="fb-input border border-[#CED0D4] focus:border-[#1877F2]"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    {error && (
                        <div className="bg-red-50 text-red-600 p-3 rounded-lg text-xs font-bold border border-red-100 italic">
                            ⚠️ {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="fb-btn-primary w-full py-3.5 text-sm font-black shadow-md disabled:opacity-50"
                    >
                        {loading ? "جاري التحقق..." : "تسجيل الدخول"}
                    </button>
                </form>

                <div className="mt-8 pt-6 border-t border-[#F0F2F5] text-center">
                    <p className="text-[#8A8D91] text-[11px]">نسيت كلمة المرور؟ يرجى التواصل مع المدير التقني.</p>
                </div>
            </div>
        </div>
    );
}
