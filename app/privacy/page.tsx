import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "سياسة الخصوصية | Intellify",
    description: "سياسة الخصوصية لموقع Intellify وكيفية التعامل مع بياناتك الشخصية.",
};

export default function PrivacyPolicyPage() {
    return (
        <div className="container mx-auto px-4 md:px-6 py-8">
            <article className="max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-black mb-8">
                    <span className="text-gradient">سياسة الخصوصية</span>
                </h1>
                <p className="text-white/40 text-sm mb-8">آخر تحديث: 21 فبراير 2026</p>

                <div className="glass rounded-3xl p-8 md:p-12 border border-white/5 space-y-8 text-white/80 leading-loose">
                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">1. مقدمة</h2>
                        <p>
                            نحن في Intellify نقدر خصوصيتك ونلتزم بحماية بياناتك الشخصية. توضح سياسة الخصوصية
                            هذه كيفية جمعنا واستخدامنا وحمايتنا لمعلوماتك عند زيارة موقعنا الإلكتروني.
                            باستخدامك لموقعنا، فإنك توافق على الشروط الواردة في هذه السياسة.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">2. المعلومات التي نجمعها</h2>
                        <p className="mb-3">قد نجمع الأنواع التالية من المعلومات:</p>
                        <ul className="space-y-2 mr-4">
                            <li className="flex items-start gap-2"><span className="text-[#38bdf8]">•</span> <strong className="text-white">معلومات شخصية:</strong> مثل الاسم والبريد الإلكتروني عند التسجيل في النشرة البريدية أو التواصل معنا.</li>
                            <li className="flex items-start gap-2"><span className="text-[#38bdf8]">•</span> <strong className="text-white">بيانات التصفح:</strong> مثل عنوان IP، نوع المتصفح، الصفحات التي تزورها، ومدة الزيارة.</li>
                            <li className="flex items-start gap-2"><span className="text-[#38bdf8]">•</span> <strong className="text-white">ملفات تعريف الارتباط (Cookies):</strong> نستخدم ملفات تعريف الارتباط لتحسين تجربة التصفح.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">3. كيف نستخدم معلوماتك</h2>
                        <ul className="space-y-2 mr-4">
                            <li className="flex items-start gap-2"><span className="text-[#818cf8]">•</span> تقديم المحتوى والخدمات المطلوبة</li>
                            <li className="flex items-start gap-2"><span className="text-[#818cf8]">•</span> إرسال النشرات البريدية والتحديثات (بموافقتك)</li>
                            <li className="flex items-start gap-2"><span className="text-[#818cf8]">•</span> تحسين وتطوير محتوى الموقع</li>
                            <li className="flex items-start gap-2"><span className="text-[#818cf8]">•</span> تحليل أنماط الاستخدام لتحسين تجربة المستخدم</li>
                            <li className="flex items-start gap-2"><span className="text-[#818cf8]">•</span> عرض إعلانات مخصصة عبر شركاء الإعلان (مثل Google AdSense)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">4. ملفات تعريف الارتباط (Cookies)</h2>
                        <p>
                            يستخدم موقعنا ملفات تعريف الارتباط لتخزين تفضيلاتك وتحسين تجربتك. كما يستخدم
                            شركاء الإعلان لدينا (مثل Google) ملفات تعريف الارتباط لعرض إعلانات بناءً على
                            زياراتك السابقة. يمكنك التحكم في إعدادات ملفات تعريف الارتباط من خلال متصفحك.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">5. الإعلانات</h2>
                        <p>
                            نستخدم خدمة Google AdSense لعرض الإعلانات على موقعنا. تستخدم Google وشركاؤها
                            ملفات تعريف الارتباط لعرض إعلانات بناءً على زيارات المستخدم السابقة لموقعنا أو
                            مواقع أخرى. يمكنك إلغاء الاشتراك في الإعلانات المخصصة بزيارة{" "}
                            <a href="https://www.google.com/settings/ads" className="text-[#38bdf8] hover:underline" target="_blank" rel="noopener noreferrer">
                                إعدادات إعلانات Google
                            </a>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">6. حماية البيانات</h2>
                        <p>
                            نتخذ إجراءات أمنية مناسبة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو
                            التعديل أو الإفصاح. ومع ذلك، لا يمكن ضمان أمان نقل البيانات عبر الإنترنت بنسبة 100%.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">7. حقوقك</h2>
                        <ul className="space-y-2 mr-4">
                            <li className="flex items-start gap-2"><span className="text-[#4ade80]">•</span> الحق في الوصول إلى بياناتك الشخصية</li>
                            <li className="flex items-start gap-2"><span className="text-[#4ade80]">•</span> الحق في تصحيح البيانات غير الدقيقة</li>
                            <li className="flex items-start gap-2"><span className="text-[#4ade80]">•</span> الحق في حذف بياناتك</li>
                            <li className="flex items-start gap-2"><span className="text-[#4ade80]">•</span> الحق في إلغاء الاشتراك في النشرة البريدية في أي وقت</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">8. تواصل معنا</h2>
                        <p>
                            إذا كانت لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا عبر
                            البريد الإلكتروني: <span className="text-[#38bdf8]">privacy@intellify.com</span>
                        </p>
                    </section>
                </div>
            </article>
        </div>
    );
}
