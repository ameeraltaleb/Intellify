export default function AdminDashboard() {
    const stats = [
        { label: "إجمالي الزيارات", value: "٢٥.٤ ألف", change: "+١٢٪", color: "bg-[#1877F2]" },
        { label: "المقالات المولدة", value: "١٤٢", change: "+٨٪", color: "bg-[#42B72A]" },
        { label: "المشتركون الجدد", value: "٨٩", change: "+١٥٪", color: "bg-purple-500" },
        { label: "معدل الارتداد", value: "٣٢٪", change: "-٥٪", color: "bg-red-500" },
    ];

    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, idx) => (
                    <div key={idx} className="fb-card p-6 border-[#CED0D4] hover:shadow-md transition-shadow">
                        <p className="text-[#65676B] text-[11px] font-black uppercase mb-3 tracking-wider">{stat.label}</p>
                        <div className="flex items-end justify-between">
                            <span className="text-3xl font-black text-[#050505]">{stat.value}</span>
                            <span className={`text-xs font-black px-2 py-1 rounded-md ${stat.change.startsWith('+') ? 'bg-green-100 text-[#42B72A]' : 'bg-red-100 text-red-600'}`}>
                                {stat.change}
                            </span>
                        </div>
                        <div className="w-full h-1.5 bg-[#F0F2F5] mt-6 rounded-full overflow-hidden">
                            <div className={`h-full ${stat.color} rounded-full`} style={{ width: '70%' }}></div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 fb-card p-8 border-[#CED0D4] min-h-[450px]">
                    <div className="flex items-center justify-between mb-10">
                        <h3 className="text-xl font-black text-[#050505]">نمو الزيارات (آخر ٣٠ يوم)</h3>
                        <select className="fb-input w-auto text-xs font-bold border border-[#CED0D4] bg-white px-4">
                            <option>آخر ٣٠ يوم</option>
                            <option>آخر ٧ أيام</option>
                        </select>
                    </div>
                    <div className="w-full h-64 flex items-end gap-3 px-2">
                        {[40, 60, 45, 70, 85, 65, 90, 75, 55, 80, 95, 85].map((h, i) => (
                            <div
                                key={i}
                                className="flex-1 bg-[#1877F2]/10 hover:bg-[#1877F2] transition-all rounded-t-lg relative group cursor-pointer"
                                style={{ height: `${h}%` }}
                            >
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#050505] text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10">
                                    {h}%
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 flex justify-between text-[10px] font-bold text-[#8A8D91] px-2 italic">
                        <span>١ فبراير</span>
                        <span>١٠ فبراير</span>
                        <span>٢٠ فبراير</span>
                        <span>٣٠ فبراير</span>
                    </div>
                </div>

                <div className="fb-card p-8 border-[#CED0D4]">
                    <h3 className="text-xl font-black text-[#050505] mb-8">نشاطات الإدارة</h3>
                    <div className="space-y-6">
                        {[
                            { text: "تم توليد مقال جديد عن الذكاء الاصطناعي", time: "منذ ٢٠ دقيقة", type: "article" },
                            { text: "تم تحديث إعدادات الأمان للموقع", time: "منذ ساعة واحدة", type: "settings" },
                            { text: "اشترك ٥ مستخدمين جدد في النشرة", time: "منذ ٣ ساعات", type: "user" },
                            { text: "تمت أرشفة مقالين في محرك بحث جوجل", time: "منذ ٥ ساعات", type: "seo" },
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 items-start group">
                                <div className="w-10 h-10 rounded-full bg-[#F0F2F5] flex items-center justify-center text-sm shadow-inner group-hover:bg-[#E7F3FF] transition-colors">
                                    {item.type === "article" ? "✍️" : item.type === "settings" ? "⚙️" : item.type === "user" ? "👤" : "🔍"}
                                </div>
                                <div>
                                    <p className="text-[14px] font-bold text-[#050505] leading-snug group-hover:text-[#1877F2] transition-colors">{item.text}</p>
                                    <p className="text-[11px] text-[#8A8D91] mt-1 font-medium">{item.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-10 py-3 fb-btn-secondary text-xs font-black">شاهد السجل الكامل</button>
                </div>
            </div>
        </div>
    );
}
