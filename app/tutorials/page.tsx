export default function Tutorials() {
    const categories = [
        { title: "الذكاء الاصطناعي للمبتدئين", count: 12, icon: "🌱" },
        { title: "البرمجة باستخدام AI", count: 8, icon: "💻" },
        { title: "تصميم الصور المولدة", count: 15, icon: "🎨" },
        { title: "استراتيجيات التسويق بالذكاء", count: 10, icon: "📈" },
    ];

    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold mb-12 text-gradient">مركز الدروس والتعليم</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-4">
                        <span className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary">★</span>
                        التصنيفات الشائعة
                    </h2>
                    {categories.map((cat, idx) => (
                        <div key={idx} className="glass p-6 rounded-2xl flex items-center justify-between hover:bg-white/5 transition-colors cursor-pointer group">
                            <div className="flex items-center gap-6">
                                <span className="text-3xl">{cat.icon}</span>
                                <div>
                                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{cat.title}</h3>
                                    <p className="text-white/40">{cat.count} درس متاح</p>
                                </div>
                            </div>
                            <span className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity">←</span>
                        </div>
                    ))}
                </div>

                <div className="glass rounded-3xl p-8 border border-white/10 flex flex-col justify-center text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] -mr-32 -mt-32"></div>
                    <h2 className="text-3xl font-black mb-6">ابدأ رحلتك التعليمية اليوم</h2>
                    <p className="text-white/60 mb-8 max-w-sm mx-auto">سجل الآن للحصول على وصول مبكر لكافة الدروس الحصرية وتطبيقها عملياً على مشاريعك.</p>
                    <button className="px-12 py-4 bg-gradient-to-r from-primary to-secondary text-background font-bold rounded-2xl mx-auto hover:shadow-xl hover:shadow-primary/20 transition-all active:scale-95">
                        انضم مجاناً
                    </button>
                </div>
            </div>
        </div>
    );
}
