import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "من نحن | Intellify - منصة المعرفة والتكنولوجيا",
    description: "تعرف على فريق Intellify ورؤيتنا في تقديم محتوى عربي متميز في مجالات التكنولوجيا والذكاء الاصطناعي.",
};

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 md:px-6 py-8">
            <article className="max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-black mb-8">
                    <span className="text-gradient">من نحن</span>
                </h1>

                <div className="glass rounded-3xl p-8 md:p-12 border border-white/5 space-y-8 text-white/80 leading-loose">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">رؤيتنا</h2>
                        <p>
                            Intellify هي منصة عربية رائدة تهدف إلى تبسيط عالم التكنولوجيا والذكاء الاصطناعي
                            وجعله متاحاً للجميع. نؤمن بأن المعرفة التقنية يجب ألا تكون حكراً على المتخصصين،
                            بل حقاً لكل شخص يسعى لفهم العالم الرقمي المتسارع من حوله.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">مهمتنا</h2>
                        <p>
                            نسعى لتقديم محتوى عربي أصيل وعالي الجودة يغطي أحدث التطورات في مجالات
                            الذكاء الاصطناعي، البرمجة، الأمن السيبراني، وريادة الأعمال الرقمية. نحرص على
                            أن يكون المحتوى مبنياً على أسس علمية صحيحة ومقدماً بأسلوب سلس يناسب جميع المستويات.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">فريق العمل</h2>
                        <p>
                            يضم فريق Intellify مجموعة من الكتّاب المتخصصين والمهندسين والباحثين في مجالات
                            التكنولوجيا المختلفة. يعمل فريقنا على إنتاج محتوى حصري يُنشر يومياً، مع مراعاة
                            أعلى معايير الجودة والدقة في المعلومات.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                            {[
                                { role: "فريق التحرير", desc: "مسؤول عن مراجعة وتحرير المقالات", emoji: "📝" },
                                { role: "فريق التطوير", desc: "يعمل على تطوير وتحسين المنصة", emoji: "💻" },
                                { role: "فريق المحتوى", desc: "ينتج مقالات ودروس تقنية متخصصة", emoji: "🎯" },
                            ].map((team, idx) => (
                                <div key={idx} className="glass rounded-2xl p-6 text-center border border-white/5">
                                    <div className="text-4xl mb-3">{team.emoji}</div>
                                    <p className="font-bold text-white">{team.role}</p>
                                    <p className="text-sm text-white/40">{team.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">قيمنا</h2>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <span className="text-[#38bdf8]">✦</span>
                                <span><strong className="text-white">الجودة:</strong> نلتزم بتقديم محتوى دقيق وموثوق ومراجع من قبل متخصصين.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#818cf8]">✦</span>
                                <span><strong className="text-white">الأصالة:</strong> جميع مقالاتنا حصرية ومكتوبة خصيصاً لقرائنا العرب.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#c084fc]">✦</span>
                                <span><strong className="text-white">التحديث:</strong> نواكب أحدث التطورات التقنية ونقدمها في الوقت المناسب.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#4ade80]">✦</span>
                                <span><strong className="text-white">الشمولية:</strong> محتوى يناسب المبتدئين والمتقدمين على حد سواء.</span>
                            </li>
                        </ul>
                    </section>
                </div>
            </article>
        </div>
    );
}
