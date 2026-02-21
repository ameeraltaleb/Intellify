"use client";

import { useState } from "react";

export default function ContactPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [sent, setSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSent(true);
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => setSent(false), 5000);
    };

    return (
        <div className="container mx-auto px-4 max-w-[1000px] py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                {/* Contact Info */}
                <div className="lg:col-span-5 space-y-8">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-black text-[#050505] mb-6">اتصل <span className="text-[#1877F2]">بنا</span></h1>
                        <p className="text-[#65676B] text-lg font-medium leading-relaxed">نحن هنا للإجابة على تساؤلاتك واستقبال اقتراحاتك لتطوير المنصة.</p>
                    </div>

                    <div className="space-y-4 pt-10">
                        {[
                            { title: "البريد الإلكتروني", value: "contact@intellify.com", icon: "📧", sub: "نرد خلال 24 ساعة" },
                            { title: "ساعات العمل", value: "الأحد - الخميس: 9ص - 6م", icon: "🕐", sub: "بتوقيت مكة المكرمة" },
                            { title: "الموقع الرئيسي", value: "الشرق الأوسط - عن بُعد", icon: "📍", sub: "فريق عالمي موزع" },
                        ].map((info, idx) => (
                            <div key={idx} className="fb-card p-6 flex items-center gap-6 group hover:border-[#1877F2] transition-colors">
                                <div className="w-14 h-14 rounded-2xl bg-[#F0F2F5] flex items-center justify-center text-2xl group-hover:bg-[#E7F3FF] group-hover:text-[#1877F2] transition-colors">
                                    {info.icon}
                                </div>
                                <div>
                                    <h3 className="text-xs font-black text-[#65676B] uppercase tracking-wider mb-1">{info.title}</h3>
                                    <p className="font-black text-[#050505]">{info.value}</p>
                                    <p className="text-[10px] font-bold text-[#8A8D91] mt-1">{info.sub}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-7">
                    <div className="fb-card p-10 md:p-12 shadow-2xl shadow-[#1877F2]/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-1 bg-[#1877F2]"></div>

                        {sent ? (
                            <div className="py-20 text-center animate-in zoom-in duration-500">
                                <div className="text-7xl mb-6">✅</div>
                                <h2 className="text-2xl font-black mb-4">تم الإرسال بنجاح!</h2>
                                <p className="text-[#65676B] font-medium">شكراً لتواصلك معنا، سيتواصل معك أحد أعضاء الفريق قريباً.</p>
                                <button onClick={() => setSent(false)} className="mt-8 text-[#1877F2] font-black text-sm hover:underline">إرسال رسالة أخرى</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-black text-[#65676B] mb-2 mr-1">الاسم الكامل</label>
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                            className="fb-input"
                                            placeholder="احمد محمد"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-black text-[#65676B] mb-2 mr-1">البريد الإلكتروني</label>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            className="fb-input"
                                            placeholder="email@example.com"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-black text-[#65676B] mb-2 mr-1">الموضوع</label>
                                    <input
                                        type="text"
                                        required
                                        className="fb-input"
                                        placeholder="كيف يمكننا مساعدتك؟"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-black text-[#65676B] mb-2 mr-1">الرسالة بالتفصيل</label>
                                    <textarea
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        required
                                        rows={6}
                                        className="fb-input min-h-[150px] resize-none"
                                        placeholder="اكتب استفسارك هنا..."
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="fb-btn-primary w-full py-4 text-sm font-black shadow-xl hover:translate-y-[-2px] transition-all"
                                >
                                    إرسال الرسالة الآن 🚀
                                </button>
                                <p className="text-[10px] text-center text-[#8A8D91] font-medium">
                                    بالضغط على إرسال، أنت توافق على معالجة بياناتك وفقاً لسياسة الخصوصية.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
