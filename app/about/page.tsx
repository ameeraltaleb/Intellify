import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "من نحن | Intellify - رؤيتنا وقصتنا",
    description: "تعرف على فريق Intellify ورؤيتنا في تقديم محتوى عربي متميز في مجالات التكنولوجيا والذكاء الاصطناعي.",
};

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 max-w-[1000px] py-16">
            <div className="text-center mb-16 animate-in fade-in slide-in-from-top-4 duration-700">
                <div className="w-20 h-20 bg-[#1877F2] rounded-[24px] flex items-center justify-center text-white text-4xl font-black shadow-xl mx-auto mb-8">i</div>
                <h1 className="text-4xl md:text-6xl font-black text-[#050505] mb-6">قصة <span className="text-[#1877F2]">Intellify</span></h1>
                <p className="text-[#65676B] text-xl font-medium max-w-2xl mx-auto leading-relaxed">بوابتك العربية الموثوقة لاستكشاف آفاق الذكاء الاصطناعي والمستقبل الرقمي.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                <div className="fb-card p-10 bg-gradient-to-br from-[#E7F3FF] to-white border-[#1877F2]/10 scale-105 z-10">
                    <h2 className="text-2xl font-black text-[#1877F2] mb-6 flex items-center gap-3">
                        <span>🎯</span> رؤيتنا
                    </h2>
                    <p className="text-[#050505] leading-loose font-medium">
                        Intellify هي منصة عربية رائدة تهدف إلى تبسيط عالم التكنولوجيا والذكاء الاصطناعي وجعله متاحاً للجميع. نؤمن بأن المعرفة التقنية يجب ألا تكون حكراً على المتخصصين، بل حقاً لكل شخص يسعى لفهم العالم الرقمي المتسارع من حوله.
                    </p>
                </div>
                <div className="fb-card p-10 flex flex-col justify-center">
                    <h2 className="text-2xl font-black text-[#050505] mb-6 flex items-center gap-3">
                        <span>🚀</span> مهمتنا
                    </h2>
                    <p className="text-[#65676B] leading-loose font-medium">
                        نسعى لتقديم محتوى عربي أصيل وعالي الجودة يغطي أحدث التطورات في مجالات الذكاء الاصطناعي، البرمجة، الأمن السيبراني، وريادة الأعمال الرقمية بأسلوب سلس يناسب الجميع.
                    </p>
                </div>
            </div>

            <section className="mb-20">
                <h3 className="text-3xl font-black text-center mb-12">لماذا نعتمد على <span className="text-[#1877F2]">المعرفة؟</span></h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { title: "الجودة العالية", desc: "نلتزم بتقديم محتوى دقيق وموثوق ومراجع من قبل متخصصين.", icon: "💎" },
                        { title: "الأصالة", desc: "جميع مقالاتنا حصرية ومكتوبة خصيصاً لتعزيز المحتوى العربي.", icon: "🖋️" },
                        { title: "التحديث المستمر", desc: "نواكب أحدث التطورات التقنية ونقدمها فور حدوثها.", icon: "⚡" },
                    ].map((item, idx) => (
                        <div key={idx} className="fb-card p-8 text-center hover:bg-[#F0F2F5]/50 transition-colors">
                            <div className="text-4xl mb-6">{item.icon}</div>
                            <h4 className="font-black text-lg mb-4">{item.title}</h4>
                            <p className="text-sm text-[#65676B] font-medium leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <div className="fb-card p-12 bg-[#050505] text-white text-center rounded-[40px] border-none shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#1877F2] opacity-20 rounded-full blur-[100px]"></div>
                <h2 className="text-3xl font-black mb-6 relative z-10">انضم إلى رحلتنا المعرفية</h2>
                <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto font-medium relative z-10">نحن دائماً نبحث عن المواهب والشراكات التي تساهم في نمو المجتمع التقني العربي.</p>
                <div className="flex flex-wrap justify-center gap-4 relative z-10">
                    <Link href="/contact">
                        <button className="fb-btn-primary px-12 py-4">تواصل معنا</button>
                    </Link>
                    <Link href="/blog">
                        <button className="fb-btn-secondary px-12 py-4 bg-white/10 text-white hover:bg-white/20">تصفح المدونة</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
