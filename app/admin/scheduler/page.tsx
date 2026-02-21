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
        { id: 1, title: "أدوات الذكاء الاصطناعي في ٢٠٢٦", type: "مدونة", time: "غداً ، ١٠:٠٠ ص", status: "مجدول" },
        { id: 2, title: "دورة Next.js المتقدمة", type: "درس", time: "١٦ فبراير ، ٠٢:٠٠ م", status: "قيد المراجعة" },
        { id: 3, title: "تحديثات النظام الشهرية", type: "تنبيه", time: "٢٠ فبراير ، ٠٨:٠٠ ص", status: "مجدول" },
    ]);

    const [showForm, setShowForm] = useState(false);
    const [newTitle, setNewTitle] = useState("");
    const [newType, setNewType] = useState("مدونة");
    const [newTime, setNewTime] = useState("");

    const addItem = () => {
        if (!newTitle.trim() || !newTime.trim()) return;
        const newItem: ScheduleItem = {
            id: Date.now(),
            title: newTitle,
            type: newType,
            time: newTime,
            status: "مجدول",
        };
        setSchedule([...schedule, newItem]);
        setNewTitle("");
        setNewTime("");
        setShowForm(false);
    };

    const deleteItem = (id: number) => {
        setSchedule(schedule.filter((item) => item.id !== id));
    };

    const toggleStatus = (id: number) => {
        setSchedule(
            schedule.map((item) => {
                if (item.id !== id) return item;
                const statusOrder: ScheduleItem["status"][] = ["مجدول", "قيد المراجعة", "منشور"];
                const currentIdx = statusOrder.indexOf(item.status);
                const nextStatus = statusOrder[(currentIdx + 1) % statusOrder.length];
                return { ...item, status: nextStatus };
            })
        );
    };

    const statusColors: Record<string, string> = {
        "مجدول": "text-[#38bdf8] bg-[#38bdf8]/10",
        "قيد المراجعة": "text-[#fbbf24] bg-[#fbbf24]/10",
        "منشور": "text-[#4ade80] bg-[#4ade80]/10",
    };

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                    <span className="w-10 h-10 bg-gradient-to-br from-[#fbbf24] to-[#f97316] rounded-xl flex items-center justify-center text-xl">
                        📅
                    </span>
                    جدولة المحتوى
                </h3>
                <button
                    onClick={() => setShowForm(!showForm)}
                    className={`px-6 py-3 font-bold rounded-xl text-sm transition-all duration-300 ${showForm
                            ? "bg-red-500/20 text-red-400 hover:bg-red-500/30"
                            : "bg-white text-black hover:scale-105"
                        }`}
                >
                    {showForm ? "✕ إلغاء" : "＋ إضافة موعد جديد"}
                </button>
            </div>

            {/* Add New Form */}
            <div
                className={`overflow-hidden transition-all duration-500 ${showForm ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="glass p-6 rounded-2xl border border-white/5 space-y-4">
                    <input
                        type="text"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        placeholder="عنوان المحتوى..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-[#38bdf8] outline-none text-white placeholder:text-white/30"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <select
                            value={newType}
                            onChange={(e) => setNewType(e.target.value)}
                            className="bg-white/5 border border-white/10 rounded-xl p-4 focus:border-[#38bdf8] outline-none text-white"
                        >
                            <option value="مدونة">📝 مدونة</option>
                            <option value="درس">📚 درس</option>
                            <option value="تنبيه">🔔 تنبيه</option>
                        </select>
                        <input
                            type="text"
                            value={newTime}
                            onChange={(e) => setNewTime(e.target.value)}
                            placeholder="موعد النشر (مثلاً: غداً ١٠ صباحاً)"
                            className="bg-white/5 border border-white/10 rounded-xl p-4 focus:border-[#38bdf8] outline-none text-white placeholder:text-white/30"
                        />
                    </div>
                    <button
                        onClick={addItem}
                        disabled={!newTitle.trim() || !newTime.trim()}
                        className="w-full py-3 bg-[#38bdf8] text-[#0f172a] font-bold rounded-xl hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                        ✅ إضافة للجدول
                    </button>
                </div>
            </div>

            {/* Schedule Table */}
            <div className="glass rounded-3xl border border-white/5 overflow-hidden">
                {schedule.length === 0 ? (
                    <div className="p-16 text-center text-white/30">
                        <span className="text-5xl block mb-4">📭</span>
                        لا توجد محتويات مجدولة حالياً
                    </div>
                ) : (
                    <table className="w-full text-right">
                        <thead className="bg-white/5">
                            <tr>
                                <th className="p-5 text-sm text-white/50">المحتوى</th>
                                <th className="p-5 text-sm text-white/50">النوع</th>
                                <th className="p-5 text-sm text-white/50">موعد النشر</th>
                                <th className="p-5 text-sm text-white/50">الحالة</th>
                                <th className="p-5 text-sm text-white/50">إجراءات</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {schedule.map((item) => (
                                <tr
                                    key={item.id}
                                    className="hover:bg-white/5 transition-colors group"
                                >
                                    <td className="p-5 font-bold">{item.title}</td>
                                    <td className="p-5">
                                        <span className="px-3 py-1 bg-white/10 rounded-full text-xs">
                                            {item.type}
                                        </span>
                                    </td>
                                    <td className="p-5 text-white/60">{item.time}</td>
                                    <td className="p-5">
                                        <button
                                            onClick={() => toggleStatus(item.id)}
                                            className={`px-3 py-1 rounded-full text-xs font-bold cursor-pointer transition-all hover:scale-105 ${statusColors[item.status]}`}
                                        >
                                            {item.status}
                                        </button>
                                    </td>
                                    <td className="p-5">
                                        <button
                                            onClick={() => deleteItem(item.id)}
                                            className="text-red-400/70 hover:text-red-400 transition-colors text-sm"
                                        >
                                            🗑️ حذف
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            {/* Summary */}
            <div className="grid grid-cols-3 gap-4">
                <div className="glass p-4 rounded-2xl text-center border border-white/5">
                    <p className="text-2xl font-black text-[#38bdf8]">
                        {schedule.filter((s) => s.status === "مجدول").length}
                    </p>
                    <p className="text-xs text-white/40 mt-1">مجدول</p>
                </div>
                <div className="glass p-4 rounded-2xl text-center border border-white/5">
                    <p className="text-2xl font-black text-[#fbbf24]">
                        {schedule.filter((s) => s.status === "قيد المراجعة").length}
                    </p>
                    <p className="text-xs text-white/40 mt-1">قيد المراجعة</p>
                </div>
                <div className="glass p-4 rounded-2xl text-center border border-white/5">
                    <p className="text-2xl font-black text-[#4ade80]">
                        {schedule.filter((s) => s.status === "منشور").length}
                    </p>
                    <p className="text-xs text-white/40 mt-1">منشور</p>
                </div>
            </div>
        </div>
    );
}
