"use client";

export default function Analytics() {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-2xl font-black text-[#050505] flex items-center gap-4">
                        <span className="w-10 h-10 bg-[#3AC8B0] text-white rounded-xl flex items-center justify-center text-xl shadow-lg shadow-teal-100">
                            📈
                        </span>
                        تحليلات الأداء الشاملة
                    </h3>
                    <p className="text-[#65676B] text-sm font-bold mt-2">راقب نمو جمهورك وتفاعلهم مع محتواك التقني.</p>
                </div>
                <div className="flex gap-2">
                    <button className="fb-btn-secondary text-xs">تصدير PDF</button>
                    <button className="fb-btn-primary text-xs">تحديث البيانات</button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="fb-card p-10 lg:col-span-2">
                    <h4 className="text-lg font-black text-[#050505] mb-8">مصادر الزيارات وتوزيع الجمهور</h4>
                    <div className="space-y-8">
                        {[
                            { label: "بحث جوجل (Organic)", value: "٤٥٪", color: "bg-[#1877F2]", width: "45%" },
                            { label: "فيسبوك وانستغرام", value: "٣٠٪", color: "bg-[#42B72A]", width: "30%" },
                            { label: "إحالات مباشرة (Direct)", value: "١٥٪", color: "bg-[#FA3E3E]", width: "15%" },
                            { label: "رسائل البريد الإلكتروني", value: "١٠٪", color: "bg-purple-500", width: "10%" },
                        ].map((source, i) => (
                            <div key={i} className="space-y-3">
                                <div className="flex justify-between items-center text-sm font-black">
                                    <span className="text-[#050505]">{source.label}</span>
                                    <span className="text-[#1877F2]">{source.value}</span>
                                </div>
                                <div className="w-full h-3 bg-[#F0F2F5] rounded-full overflow-hidden shadow-inner">
                                    <div className={`h-full ${source.color} rounded-full transition-all duration-1000`} style={{ width: source.width }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="fb-card p-10 flex flex-col justify-center items-center text-center bg-gradient-to-b from-white to-[#F0F2F5]">
                    <div className="w-24 h-24 rounded-full border-8 border-[#1877F2]/10 border-t-[#1877F2] animate-spin mb-8"></div>
                    <h4 className="text-xl font-black text-[#050505] mb-4">التحليلات الحية</h4>
                    <p className="text-[#65676B] text-sm font-medium leading-relaxed">جاري معالجة البيانات المتقدمة وسلوك المستخدمين في الوقت الفعلي...</p>
                    <button className="mt-10 text-[#1877F2] font-black text-xs hover:underline">عرض التقارير القديمة</button>
                </div>
            </div>
        </div>
    );
}
