export default function PrivacyPage() {
    return (
        <div className="container mx-auto px-4 max-w-[800px] py-20">
            <div className="fb-card p-10 md:p-16">
                <h1 className="text-3xl font-black text-[#050505] mb-10 pb-6 border-b border-[#F0F2F5]">سياسة الخصوصية</h1>

                <div className="article-content">
                    <p>في Intellify، نلتزم بحماية خصوصيتك ومعلوماتك الشخصية. توضح هذه السياسة طبيعة المعلومات التي نجمعها وكيفية معالجتها.</p>

                    <h2 className="text-2xl font-black mt-12 mb-6">المعلومات التي نجمعها</h2>
                    <p>نقوم بجمع معلومات بسيطة عند استخدامك للموقع، مثل:</p>
                    <ul className="list-disc pr-6 space-y-2 text-[#65676B] font-medium">
                        <li>عنوان البريد الإلكتروني عند الاشتراك في النشرة البريدية.</li>
                        <li>بيانات التصفح لغرض تحسين تجربة المستخدم وتحليل الأداء.</li>
                        <li>المعلومات التي تقدمها طواعية عند التواصل معنا عبر النماذج المخصصة.</li>
                    </ul>

                    <h2 className="text-2xl font-black mt-12 mb-6">كيفية استخدام المعلومات</h2>
                    <p>نستخدم هذه البيانات من أجل:</p>
                    <ul className="list-disc pr-6 space-y-2 text-[#65676B] font-medium">
                        <li>إرسال تحديثات المدونة والمحتوى الجديد (إذا كنت مشتركاً).</li>
                        <li>تحسين واجهة الموقع وتقديم محتوى أكثر صلة باهتماماتك.</li>
                        <li>الرد على استفساراتك وتقديم الدعم الفني.</li>
                    </ul>

                    <h2 className="text-2xl font-black mt-12 mb-6">ملفات التعريف (Cookies)</h2>
                    <p>نستخدم الكوكيز لتعزيز تجربة التصفح وحفظ تفضيلاتك. يمكنك إيقاف تشغيل الكوكيز من إعدادات المتصفح الخاص بك في أي وقت.</p>
                </div>

                <div className="mt-16 pt-10 border-t border-[#F0F2F5] text-xs font-bold text-[#8A8D91]">
                    آخر تحديث: 21 فبراير 2026
                </div>
            </div>
        </div>
    );
}
