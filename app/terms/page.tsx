export default function TermsPage() {
    return (
        <div className="container mx-auto px-4 max-w-[800px] py-20">
            <div className="fb-card p-10 md:p-16">
                <h1 className="text-3xl font-black text-[#050505] mb-10 pb-6 border-b border-[#F0F2F5]">شروط الاستخدام</h1>

                <div className="article-content">
                    <p>باستخدامك لموقع Intellify، فإنك توافق على الالتزام بالشروط والأحكام التالية:</p>

                    <h2 className="text-2xl font-black mt-12 mb-6">الملكية الفكرية</h2>
                    <p>جميع حقوق المحتوى المنشور في Intellify (نصوص، صور، برمجيات) هي ملكية حصرية للمنصة ما لم يُذكر خلاف ذلك. يُمنع إعادة نشر المحتوى دون ذكر المصدر برابط مباشر.</p>

                    <h2 className="text-2xl font-black mt-12 mb-6">الاستخدام المسموح</h2>
                    <p>يُتوقع من المستخدمين استخدام الموقع لأغراض تعليمية ومعرفية فقط. يُمنع استخدام الموقع لأي أنشطة تخريبية أو غير قانونية تضر بالمنصة أو المستخدمين الآخرين.</p>

                    <h2 className="text-2xl font-black mt-12 mb-6">إخلاء المسؤولية</h2>
                    <p>نحن نبذل قصارى جهدنا لضمان دقة المعلومات المنشورة، ولكننا لا نتحمل مسؤولية أي أخطاء غير مقصودة أو نتائج ناتجة عن استخدام المعلومات التقنية الواردة في الموقع.</p>
                </div>

                <div className="mt-16 pt-10 border-t border-[#F0F2F5] text-xs font-bold text-[#8A8D91]">
                    آخر تحديث: 21 فبراير 2026
                </div>
            </div>
        </div>
    );
}
