"use client";

import { useState } from "react";
import type { Metadata } from "next";

export default function ContactPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [sent, setSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate sending
        setSent(true);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setTimeout(() => setSent(false), 5000);
    };

    return (
        <div className="container mx-auto px-4 md:px-6 py-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-black mb-8">
                    <span className="text-gradient">اتصل بنا</span>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Contact Info */}
                    <div className="space-y-4">
                        <div className="glass rounded-2xl p-6 border border-white/5">
                            <div className="text-2xl mb-2">📧</div>
                            <h3 className="font-bold text-white mb-1">البريد الإلكتروني</h3>
                            <p className="text-white/50 text-sm">contact@intellify.com</p>
                        </div>
                        <div className="glass rounded-2xl p-6 border border-white/5">
                            <div className="text-2xl mb-2">🕐</div>
                            <h3 className="font-bold text-white mb-1">ساعات العمل</h3>
                            <p className="text-white/50 text-sm">الأحد - الخميس: 9ص - 6م</p>
                        </div>
                        <div className="glass rounded-2xl p-6 border border-white/5">
                            <div className="text-2xl mb-2">📍</div>
                            <h3 className="font-bold text-white mb-1">الموقع</h3>
                            <p className="text-white/50 text-sm">الشرق الأوسط - عن بُعد</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="md:col-span-2">
                        <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 border border-white/5 space-y-5">
                            {sent && (
                                <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-300 text-sm">
                                    ✅ تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.
                                </div>
                            )}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm text-white/60 mb-2">الاسم الكامل *</label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm focus:border-[#38bdf8] outline-none text-white placeholder:text-white/30"
                                        placeholder="اسمك الكامل"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-white/60 mb-2">البريد الإلكتروني *</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm focus:border-[#38bdf8] outline-none text-white placeholder:text-white/30"
                                        placeholder="email@example.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm text-white/60 mb-2">الموضوع *</label>
                                <input
                                    type="text"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm focus:border-[#38bdf8] outline-none text-white placeholder:text-white/30"
                                    placeholder="موضوع رسالتك"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-white/60 mb-2">الرسالة *</label>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                    rows={5}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm focus:border-[#38bdf8] outline-none text-white placeholder:text-white/30 resize-none"
                                    placeholder="اكتب رسالتك هنا..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 bg-[#38bdf8] text-[#0f172a] font-bold rounded-xl hover:opacity-90 transition-opacity"
                            >
                                إرسال الرسالة
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
