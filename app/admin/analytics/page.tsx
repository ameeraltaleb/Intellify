export default function Analytics() {
    return (
        <div className="space-y-8">
            <h3 className="text-2xl font-bold">تحليلات متقدمة</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="glass p-8 rounded-3xl border border-white/5">
                    <h4 className="text-lg font-bold mb-6">مصادر الزيارات</h4>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <span>بحث جوجل</span>
                            <span className="font-bold">٤٥٪</span>
                        </div>
                        <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-primary" style={{ width: '45%' }}></div>
                        </div>
                        <div className="flex justify-between items-center">
                            <span>وسائل التواصل</span>
                            <span className="font-bold">٣٠٪</span>
                        </div>
                        <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-secondary" style={{ width: '30%' }}></div>
                        </div>
                        <div className="flex justify-between items-center">
                            <span>زيارات مباشرة</span>
                            <span className="font-bold">٢٥٪</span>
                        </div>
                        <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-accent" style={{ width: '25%' }}></div>
                        </div>
                    </div>
                </div>

                <div className="glass p-8 rounded-3xl border border-white/5 flex items-center justify-center">
                    <div className="text-center">
                        <div className="text-6xl mb-4">📈</div>
                        <p className="text-white/60">رسوم بيانية تفاعلية قيد التطوير</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
