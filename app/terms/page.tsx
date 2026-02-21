import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "شروط الاستخدام | Intellify",
    description: "شروط وأحكام استخدام موقع Intellify ومحتواه.",
};

export default function TermsPage() {
    return (
        <div className="container mx-auto px-4 md:px-6 py-8">
            <article className="max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-black mb-8">
                    <span className="text-gradient">شروط الاستخدام</span>
                </h1>
                <p className="text-white/40 text-sm mb-8">آخر تحديث: 21 فبراير 2026</p>

                <div className="glass rounded-3xl p-8 md:p-12 border border-white/5 space-y-8 text-white/80 leading-loose">
                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">1. قبول الشروط</h2>
                        <p>
                            باستخدامك لموقع Intellify، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت
                            لا توافق على أي جزء من هذه الشروط، يرجى عدم استخدام الموقع.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">2. استخدام المحتوى</h2>
                        <p>
                            جميع المحتويات المنشورة على Intellify، بما في ذلك المقالات والصور والرسوم البيانية،
                            محمية بموجب حقوق الملكية الفكرية. يُسمح لك بـ:
                        </p>
                        <ul className="space-y-2 mr-4 mt-3">
                            <li className="flex items-start gap-2"><span className="text-[#38bdf8]">•</span> قراءة ومشاركة المحتوى مع الإشارة إلى المصدر</li>
                            <li className="flex items-start gap-2"><span className="text-[#38bdf8]">•</span> الاقتباس الجزئي مع ذكر المصدر ورابط المقال الأصلي</li>
                        </ul>
                        <p className="mt-3">ولا يُسمح بـ:</p>
                        <ul className="space-y-2 mr-4 mt-3">
                            <li className="flex items-start gap-2"><span className="text-[#f87171]">•</span> نسخ المحتوى بالكامل ونشره في مواقع أخرى</li>
                            <li className="flex items-start gap-2"><span className="text-[#f87171]">•</span> استخدام المحتوى لأغراض تجارية دون إذن كتابي</li>
                            <li className="flex items-start gap-2"><span className="text-[#f87171]">•</span> تعديل المحتوى وإعادة نشره باسم آخر</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">3. حسابات المستخدمين</h2>
                        <p>
                            عند إنشاء حساب على الموقع، أنت مسؤول عن الحفاظ على سرية بيانات الدخول الخاصة بك
                            وعن جميع الأنشطة التي تتم باستخدام حسابك.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">4. التعليقات والمشاركات</h2>
                        <p>
                            عند نشر تعليق أو مشاركة على الموقع، فإنك تتعهد بأن المحتوى لا ينتهك حقوق الآخرين
                            ولا يحتوي على مواد مسيئة أو غير قانونية. نحتفظ بالحق في حذف أي محتوى ينتهك هذه الشروط.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">5. إخلاء المسؤولية</h2>
                        <p>
                            المعلومات المقدمة على موقع Intellify هي لأغراض تعليمية ومعلوماتية فقط. لا نتحمل
                            مسؤولية أي قرارات تُتخذ بناءً على المعلومات المنشورة على الموقع. نسعى جاهدين
                            لضمان دقة المعلومات، ولكن لا نضمن خلوها من الأخطاء.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">6. الروابط الخارجية</h2>
                        <p>
                            قد يحتوي موقعنا على روابط تؤدي إلى مواقع خارجية. نحن لا نتحكم في محتوى هذه المواقع
                            ولا نتحمل مسؤولية محتواها أو سياسات الخصوصية الخاصة بها.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">7. التعديلات</h2>
                        <p>
                            نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم نشر أي تغييرات على هذه الصفحة
                            مع تحديث تاريخ &quot;آخر تحديث&quot;. استمرارك في استخدام الموقع بعد التعديلات
                            يُعد قبولاً للشروط المعدلة.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">8. القانون الواجب التطبيق</h2>
                        <p>
                            تخضع هذه الشروط وتُفسر وفقاً للقوانين المعمول بها، وأي نزاعات تنشأ عن استخدام
                            الموقع تُحل عن طريق التفاوض أولاً، ثم عبر الجهات القضائية المختصة.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-3">9. تواصل معنا</h2>
                        <p>
                            لأي استفسارات بخصوص شروط الاستخدام، تواصل معنا عبر:{" "}
                            <span className="text-[#38bdf8]">legal@intellify.com</span>
                        </p>
                    </section>
                </div>
            </article>
        </div>
    );
}
