"use client";

import { useState } from "react";

export default function AdminSettings() {
    const [siteName, setSiteName] = useState("Intellify");
    const [siteDesc, setSiteDesc] = useState("منصة المعرفة والتكنولوجيا");

    const handleSave = () => {
        alert("تم حفظ الإعدادات بنجاح (محاكاة)");
    };

    return (
        <div className="space-y-8">
            <div className="fb-card p-10 max-w-2xl">
                <h3 className="text-2xl font-black mb-8 flex items-center gap-4">
                    <span className="w-12 h-12 bg-[#F0F2F5] rounded-xl flex items-center justify-center text-xl">⚙️</span>
                    إعدادات الموقع العام
                </h3>

                <div className="space-y-6">
                    <div>
                        <label className="block text-xs font-black text-[#65676B] mb-2 mr-1 uppercase">اسم الموقع</label>
                        <input
                            type="text"
                            value={siteName}
                            onChange={(e) => setSiteName(e.target.value)}
                            className="fb-input"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-black text-[#65676B] mb-2 mr-1 uppercase">وصف الموقع</label>
                        <textarea
                            value={siteDesc}
                            onChange={(e) => setSiteDesc(e.target.value)}
                            className="fb-input min-h-[100px]"
                        />
                    </div>
                    <div className="pt-4">
                        <button
                            onClick={handleSave}
                            className="fb-btn-primary w-full"
                        >
                            حفظ كافة التغييرات
                        </button>
                    </div>
                </div>
            </div>

            <div className="fb-card p-10 max-w-2xl border-red-100 bg-red-50/10">
                <h3 className="text-xl font-black mb-6 text-red-600 flex items-center gap-4">
                    <span className="w-10 h-10 bg-red-100 text-red-600 rounded-xl flex items-center justify-center text-lg">⚠️</span>
                    منطقة الخطر
                </h3>
                <p className="text-sm text-[#65676B] mb-6 font-bold">حذف البيانات أو إعادة ضبط النظام لا يمكن الرجوع عنه.</p>
                <button className="px-6 py-3 bg-white border-2 border-red-200 text-red-600 font-black rounded-xl hover:bg-red-600 hover:text-white hover:border-red-600 transition-all text-xs">
                    إعادة ضبط المصنع للمدونة
                </button>
            </div>
        </div>
    );
}
