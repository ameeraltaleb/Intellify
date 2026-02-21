"use client";

import { useEffect, useState } from "react";
import { getAdminStats } from "../actions/articles";

export default function AdminDashboard() {
    const [statsData, setStatsData] = useState({
        totalVisits: "٠",
        articleCount: 0,
        newSubscribers: 0,
        bounceRate: "٠٪"
    });

    useEffect(() => {
        getAdminStats().then(setStatsData);
    }, []);

    const stats = [
        { label: "إجمالي المشاهدات", value: statsData.totalVisits, change: "+١٢٪", color: "bg-[#1877F2]", icon: "👥" },
        { label: "المقالات المنشورة", value: statsData.articleCount.toString(), change: "+٨٪", color: "bg-[#42B72A]", icon: "📝" },
        { label: "المشتركون (تقديري)", value: statsData.newSubscribers.toString(), change: "+١٥٪", color: "bg-purple-500", icon: "📧" },
        { label: "معدل الارتداد", value: statsData.bounceRate, change: "-٥٪", color: "bg-red-500", icon: "📉" },
    ];

    return (
        <div className="space-y-10 animate-in fade-in duration-700">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, idx) => (
                    <div key={idx} className="fb-card p-8 border-[#CED0D4] hover:shadow-xl hover:translate-y-[-5px] transition-all">
                        <div className="flex items-center justify-between mb-6">
                            <span className="text-2xl">{stat.icon}</span>
                            <span className={`text-[10px] font-black px-3 py-1 rounded-full ${stat.change.startsWith('+') ? 'bg-green-100 text-[#42B72A]' : 'bg-red-100 text-red-600'}`}>
                                {stat.change}
                            </span>
                        </div>
                        <p className="text-[#65676B] text-xs font-black uppercase mb-2 tracking-wider">{stat.label}</p>
                        <span className="text-3xl font-black text-[#050505]">{stat.value}</span>
                        <div className="w-full h-1.5 bg-[#F0F2F5] mt-6 rounded-full overflow-hidden">
                            <div className={`h-full ${stat.color} rounded-full`} style={{ width: '70%', transition: 'width 2s' }}></div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 fb-card p-10 border-[#CED0D4] min-h-[500px]">
                    <div className="flex items-center justify-between mb-12">
                        <div>
                            <h3 className="text-xl font-black text-[#050505]">نمو الزيارات والجمهور</h3>
                            <p className="text-xs font-bold text-[#65676B] mt-1">تطور أداء المنصة خلال آخر ٣٠ يوماً</p>
                        </div>
                        <select className="bg-[#F0F2F5] border-none rounded-xl px-4 py-2 text-xs font-black outline-none focus:ring-2 focus:ring-[#1877F2]/20">
                            <option>آخر ٣٠ يوم</option>
                            <option>آخر ٧ أيام</option>
                        </select>
                    </div>
                    <div className="w-full h-80 flex items-end gap-3 px-2">
                        {[40, 60, 45, 70, 85, 65, 90, 75, 55, 80, 95, 85].map((h, i) => (
                            <div
                                key={i}
                                className="flex-1 bg-[#1877F2]/10 hover:bg-[#1877F2] transition-all rounded-t-xl relative group cursor-pointer"
                                style={{ height: `${h}%` }}
                            >
                                <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#050505] text-white text-[10px] font-black px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all z-10 shadow-xl">
                                    {h}%
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 flex justify-between text-[11px] font-black text-[#8A8D91] px-2 italic uppercase">
                        <span>١ فبراير</span>
                        <span>١٠ فبراير</span>
                        <span>٢٠ فبراير</span>
                        <span>٣٠ فبراير</span>
                    </div>
                </div>

                <div className="fb-card p-10 border-[#CED0D4] flex flex-col">
                    <h3 className="text-xl font-black text-[#050505] mb-10">نشاطات الإدارة</h3>
                    <div className="space-y-8 flex-1">
                        {[
                            { text: "تم توليد مقال جديد عن الذكاء الاصطناعي", time: "منذ ٢٠ دقيقة", type: "article", color: "bg-blue-100 text-blue-600" },
                            { text: "تم تحديث إعدادات الأمان للموقع", time: "منذ ساعة واحدة", type: "settings", color: "bg-orange-100 text-orange-600" },
                            { text: "اشترك ٥ مستخدمين جدد في النشرة", time: "منذ ٣ ساعات", type: "user", color: "bg-purple-100 text-purple-600" },
                            { text: "تمت أرشفة مقالين في جوجل سيو", time: "منذ ٥ ساعات", type: "seo", color: "bg-green-100 text-green-600" },
                        ].map((item, i) => (
                            <div key={i} className="flex gap-5 items-start group">
                                <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center text-lg shadow-sm group-hover:scale-110 transition-transform`}>
                                    {item.type === "article" ? "✍️" : item.type === "settings" ? "⚙️" : item.type === "user" ? "👤" : "🔍"}
                                </div>
                                <div className="flex-1 border-b border-[#F0F2F5] pb-4">
                                    <p className="text-sm font-black text-[#050505] leading-snug group-hover:text-[#1877F2] transition-colors">{item.text}</p>
                                    <p className="text-[10px] text-[#8A8D91] mt-1 font-bold">{item.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-10 py-4 fb-btn-secondary text-sm font-black rounded-2xl hover:bg-[#1877F2] hover:text-white translation-colors">مشاهدة السجل الكامل</button>
                </div>
            </div>
        </div>
    );
}
