import React from 'react';
import Link from 'next/link';

export default function TutorialsPage() {
    return (
        <div className="container mx-auto px-4 max-w-[1240px] py-16">
            <div className="text-center mb-20 animate-in fade-in slide-in-from-top-4 duration-700">
                <h1 className="text-4xl md:text-6xl font-black text-[#050505] mb-8">
                    مكتبة <span className="text-[#1877F2]">الدروس التقنية</span>
                </h1>
                <p className="text-[#65676B] text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                    دروس تعليمية مفصلة خطوة بخطوة لمساعدتك في احتراف أدوات المستقبل.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {[
                    { title: "اساسيات الذكاء الاصطناعي", level: "مبتدئ", time: "2 ساعة", icon: "🧠" },
                    { title: "تطوير تطبيقات الويب بـ Next.js", level: "متوسط", time: "5 ساعات", icon: "🌐" },
                    { title: "هندسة الأوامر (Prompt Engineering)", level: "متقدم", time: "3 ساعات", icon: "✍️" },
                ].map((item, idx) => (
                    <div key={idx} className="fb-card p-8 hover:shadow-2xl transition-all group">
                        <div className="w-16 h-16 bg-[#F0F2F5] rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:bg-[#E7F3FF] transition-colors">
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-black text-[#050505] mb-4">{item.title}</h3>
                        <div className="flex items-center gap-4 mb-8">
                            <span className="text-xs font-bold text-[#1877F2] bg-[#E7F3FF] px-3 py-1 rounded-lg">{item.level}</span>
                            <span className="text-xs font-bold text-[#65676B]">⏱️ {item.time}</span>
                        </div>
                        <button className="w-full fb-btn-secondary text-xs font-black">قريباً جداً</button>
                    </div>
                ))}
            </div>

            <div className="mt-24 py-20 fb-card bg-[#F0F2F5] border-dashed border-2 border-[#CED0D4] text-center">
                <div className="text-6xl mb-6 opacity-30">📚</div>
                <h2 className="text-2xl font-black mb-4">المزيد من الدروس قيد التحضير</h2>
                <p className="text-[#65676B] font-bold">اشترك في قائمتنا البريدية لتكون أول من يعلم عند إطلاق الدروس الجديدة.</p>
                <div className="mt-10 max-w-md mx-auto flex gap-3">
                    <input type="email" placeholder="بريدك الإلكتروني" className="fb-input" />
                    <button className="fb-btn-primary px-8">اشتراك</button>
                </div>
            </div>
        </div>
    );
}
