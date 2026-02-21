import React from 'react';
import Link from 'next/link';

const tools = [
    {
        name: "توليد المقالات",
        description: "اكتب العنوان واترك الباقي لنا. ذكاء اصطناعي يكتب لك مقالات حصرية بلمسة بشرية.",
        icon: "✨",
        color: "bg-blue-100 text-blue-600",
        link: "/admin/generate-article"
    },
    {
        name: "تحسين السيو",
        description: "تأكد من تصدر مقالاتك لمحركات البحث من خلال أدوات التحليل الذكية لدينا.",
        icon: "🚀",
        color: "bg-purple-100 text-purple-600",
        link: "#"
    },
    {
        name: "جدولة المحتوى",
        description: "نشر تلقائي في أفضل الأوقات لضمان وصول المحتوى لأكبر عدد من القراء.",
        icon: "📅",
        color: "bg-orange-100 text-orange-600",
        link: "/admin/scheduler"
    },
    {
        name: "محلل البيانات",
        description: "افهم ردود فعل جمهورك بعمق من خلال تقارير تحليلية شاملة.",
        icon: "📊",
        color: "bg-green-100 text-green-600",
        link: "/admin/analytics"
    },
];

export default function AITools() {
    return (
        <div className="container mx-auto px-4 max-w-[1240px] py-16">
            <div className="text-center mb-20 animate-in fade-in slide-in-from-top-4 duration-700">
                <h1 className="text-4xl md:text-6xl font-black text-[#050505] mb-8">
                    أدوات <span className="text-[#1877F2]">الذكاء الاصطناعي</span>
                </h1>
                <p className="text-[#65676B] text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                    مجموعة متطورة من الأدوات المصممة لتمكين صنّاع المحتوى وتوسيع آفاق الإبداع الرقمي.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                {tools.map((tool, idx) => (
                    <div key={idx} className="fb-card group p-10 hover:shadow-2xl hover:border-[#1877F2]/30 transition-all duration-500">
                        <div className="flex items-start justify-between mb-8">
                            <div className={`w-20 h-20 ${tool.color} rounded-[24px] flex items-center justify-center text-4xl shadow-sm group-hover:scale-110 transition-transform duration-500`}>
                                {tool.icon}
                            </div>
                            <span className="text-[10px] font-black bg-[#F0F2F5] px-4 py-2 rounded-full text-[#65676B]">نسخة Beta</span>
                        </div>
                        <h3 className="text-2xl font-black text-[#050505] mb-4 group-hover:text-[#1877F2] transition-colors">{tool.name}</h3>
                        <p className="text-[#65676B] text-lg font-medium leading-relaxed mb-10">{tool.description}</p>
                        <Link href={tool.link}>
                            <button className="fb-btn-primary w-full py-4 text-sm font-black flex items-center justify-center gap-3">
                                جرب الأداة الآن ⚡
                            </button>
                        </Link>
                    </div>
                ))}
            </div>

            <div className="fb-card p-12 bg-gradient-to-r from-[#1877F2] to-[#2D88FF] text-white rounded-[40px] border-none shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10"></div>
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="text-right">
                        <h2 className="text-3xl font-black mb-4">هل لديك فكرة لأداة جديدة؟</h2>
                        <p className="text-white/80 font-medium">نحن نعمل باستمرار على تطوير أدوات جديدة تخدم مجتمعنا التقني.</p>
                    </div>
                    <Link href="/contact">
                        <button className="px-10 py-4 bg-white text-[#1877F2] font-black rounded-2xl hover:bg-[#F0F2F5] transition-all shadow-xl">شاركنا اقتراحك</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
