import React from 'react';

const tools = [
    { name: "توليد المقالات", description: "اكتب العنوان واترك الباقي لنا", icon: "✍️", color: "from-blue-500 to-cyan-500" },
    { name: "محسن السيو", description: "تأكد من تصدر مقالاتك لمحركات البحث", icon: "🚀", color: "from-purple-500 to-pink-500" },
    { name: "جدولة المحتوى", description: "نشر تلقائي في أفضل الأوقات", icon: "📅", color: "from-orange-500 to-yellow-500" },
    { name: "تحليل المشاعر", description: "افهم ردود فعل جمهورك بعمق", icon: "🧠", color: "from-green-500 to-emerald-500" },
];

export default function AITools() {
    return (
        <div className="container mx-auto px-6 py-12">
            <div className="text-center mb-16">
                <h1 className="text-5xl font-black mb-6 text-gradient">أدوات الذكاء الاصطناعي</h1>
                <p className="text-xl text-white/60 max-w-2xl mx-auto">مجموعة متنوعة من الأدوات المصممة لزيادة إنتاجيتك وتحسين جودة محتواك.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {tools.map((tool, idx) => (
                    <div key={idx} className="glass group p-8 rounded-3xl border border-white/10 hover:border-primary/50 transition-all cursor-pointer">
                        <div className={`w-16 h-16 bg-gradient-to-br ${tool.color} rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg shadow-black/50 group-hover:scale-110 transition-transform`}>
                            {tool.icon}
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{tool.name}</h3>
                        <p className="text-white/60 leading-relaxed">{tool.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
