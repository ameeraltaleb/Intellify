"use client";

import { useState } from "react";

interface ScheduleItem {
    id: number;
    title: string;
    type: string;
    time: string;
    status: "مجدول" | "قيد المراجعة" | "منشور";
}

export default function Scheduler() {
    const [schedule, setSchedule] = useState<ScheduleItem[]>([
        { id: 1, title: "ChatGPT vs Gemini: مقارنة شاملة لعام 2026", type: "مدونة", time: "غداً ، ١٠:٠٠ ص", status: "مجدول" },
        { id: 2, title: "دورة Next.js المتقدمة للمحترفين", type: "درس", time: "١٦ فبراير ، ٠٢:٠٠ م", status: "قيد المراجعة" },
        { id: 3, title: "مستقبل الوظائف في عصر الأتمتة", type: "تنبيه", time: "٢٠ فبراير ، ٠٨:٠٠ ص", status: "مجدول" },
    ]);

    const [showForm, setShowForm] = useState(false);

    const statusColors: Record<string, string> = {
        "مجدول": "bg-[#E7F3FF] text-[#1877F2]",
        "قيد المراجعة": "bg-yellow-100 text-yellow-700",
        "منشور": "bg-green-100 text-green-700",
    };

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="text-2xl font-black text-[#050505] flex items-center gap-3">
                        <span className="w-10 h-10 bg-[#FF9D00] text-white rounded-xl flex items-center justify-center text-xl shadow-lg shadow-orange-200">
                            📅
                        </span>
                        الجدولة الذكية للمحتوى
                    </h3>
                    <p className="text-[#65676B] text-sm font-bold mt-2">نظّم مواعيد نشر مقالاتك لضمان أفضل وصول للجمهور.</p>
                </div>
                <button
                    onClick={() => setShowForm(!showForm)}
                    className="fb-btn-primary flex items-center gap-2"
                >
                    {showForm ? "✕ إغلاق" : "✨ إضافة موعد جديد"}
                </button>
            </div>

            {showForm && (
                <div className="fb-card p-8 border-[#1877F2]/20 bg-gradient-to-br from-[#E7F3FF]/30 to-white animate-in slide-in-from-top-4 duration-500">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="md:col-span-2">
                            <label className="block text-xs font-black text-[#65676B] mb-2 mr-1 uppercase">عنوان المحتوى</label>
                            <input type="text" className="fb-input" placeholder="اكتب عنوان المقال المخطط له..." />
                        </div>
                        <div>
                            <label className="block text-xs font-black text-[#65676B] mb-2 mr-1 uppercase">نوع المحتوى</label>
                            <select className="fb-input appearance-none">
                                <option>مدونة</option>
                                <option>درس تقني</option>
                                <option>تنبيه إخباري</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-black text-[#65676B] mb-2 mr-1 uppercase">موعد النشر المقترح</label>
                            <input type="datetime-local" className="fb-input" />
                        </div>
                    </div>
                    <div className="mt-8 flex justify-end gap-3">
                        <button className="fb-btn-secondary px-10" onClick={() => setShowForm(false)}>إلغاء</button>
                        <button className="fb-btn-primary px-10">جدولة المحتوى 🚀</button>
                    </div>
                </div>
            )}

            <div className="fb-card overflow-hidden">
                <table className="w-full text-right border-collapse">
                    <thead className="bg-[#F0F2F5] border-b border-[#CED0D4]">
                        <tr>
                            <th className="px-6 py-4 text-xs font-black text-[#65676B]">المحتوى</th>
                            <th className="px-6 py-4 text-xs font-black text-[#65676B]">النوع</th>
                            <th className="px-6 py-4 text-xs font-black text-[#65676B]">موعد النشر</th>
                            <th className="px-6 py-4 text-xs font-black text-[#65676B]">الحالة</th>
                            <th className="px-6 py-4 text-xs font-black text-[#65676B]">التحكم</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#F0F2F5]">
                        {schedule.map((item) => (
                            <tr key={item.id} className="hover:bg-[#F0F2F5]/30 transition-colors group">
                                <td className="px-6 py-6 font-bold text-[#050505]">{item.title}</td>
                                <td className="px-6 py-6 font-bold text-xs text-[#65676B]">{item.type}</td>
                                <td className="px-6 py-6 text-sm text-[#8A8D91] font-medium">{item.time}</td>
                                <td className="px-6 py-6">
                                    <span className={`px-3 py-1 rounded-lg text-[11px] font-black ${statusColors[item.status]}`}>
                                        {item.status}
                                    </span>
                                </td>
                                <td className="px-6 py-6">
                                    <button className="text-red-600 font-black text-xs hover:underline">حذف</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { label: "مجدول", count: 12, color: "text-[#1877F2]", bg: "bg-[#E7F3FF]" },
                    { label: "بانتظار المراجعة", count: 5, color: "text-yellow-600", bg: "bg-yellow-100" },
                    { label: "نُشر مؤخراً", count: 48, color: "text-green-600", bg: "bg-green-100" },
                ].map((stat, i) => (
                    <div key={i} className="fb-card p-6 flex flex-col items-center justify-center text-center">
                        <div className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-full flex items-center justify-center text-xl font-black mb-4 shadow-inner`}>
                            {stat.count}
                        </div>
                        <p className="text-xs font-black text-[#65676B] uppercase">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
