"use client";

import { useEffect, useState } from "react";
import { getArticles, deleteArticle } from "../../actions/articles";
import { Article } from "@/lib/types";
import Link from "next/link";

export default function AdminArticles() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        loadArticles();
    }, []);

    const loadArticles = async () => {
        setIsLoading(true);
        const data = await getArticles();
        // Since we are in admin, we might want to fetch even unpublished ones in the future,
        // but for now, let's use the existing getArticles.
        setArticles(data);
        setIsLoading(false);
    };

    const handleDelete = async (id: string) => {
        if (!confirm("هل أنت متأكد من رغبتك في حذف هذا المقال بصورة نهائية؟")) return;

        const result = await deleteArticle(id);
        if (result.success) {
            alert("تم حذف المقال بنجاح.");
            loadArticles();
        } else {
            alert("فشل الحذف: " + result.error);
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-black text-[#050505]">إدارة المقالات</h1>
                    <p className="text-[#65676B] font-bold mt-2">تحكم في محتواك المنشور بكل سهولة.</p>
                </div>
                <Link href="/admin/generate-article">
                    <button className="fb-btn-primary flex items-center gap-2">
                        <span>✨</span> توليد مقال جديد
                    </button>
                </Link>
            </div>

            <div className="fb-card overflow-hidden border-[#CED0D4]">
                <div className="overflow-x-auto">
                    <table className="w-full text-right border-collapse">
                        <thead className="bg-[#F0F2F5] border-b border-[#CED0D4]">
                            <tr>
                                <th className="px-6 py-4 text-xs font-black text-[#65676B] uppercase">المقال</th>
                                <th className="px-6 py-4 text-xs font-black text-[#65676B] uppercase">التصنيف</th>
                                <th className="px-6 py-4 text-xs font-black text-[#65676B] uppercase">المشاهدات</th>
                                <th className="px-6 py-4 text-xs font-black text-[#65676B] uppercase">التاريخ</th>
                                <th className="px-6 py-4 text-xs font-black text-[#65676B] uppercase text-left">التحكم</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#F0F2F5]">
                            {isLoading ? (
                                <tr>
                                    <td colSpan={5} className="px-6 py-20 text-center">
                                        <div className="flex flex-col items-center gap-3">
                                            <span className="animate-spin text-3xl">⏳</span>
                                            <span className="font-bold text-[#65676B]">جاري تحميل المقالات...</span>
                                        </div>
                                    </td>
                                </tr>
                            ) : articles.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="px-6 py-20 text-center text-[#65676B] font-bold">
                                        لا يوجد مقالات حتى الآن. ابدأ بتوليد أول مقال لك!
                                    </td>
                                </tr>
                            ) : (
                                articles.map((article) => (
                                    <tr key={article.id} className="hover:bg-[#F0F2F5]/50 transition-colors">
                                        <td className="px-6 py-6 font-bold text-[#050505] min-w-[300px]">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-lg bg-[#E7F3FF] flex items-center justify-center text-xl">📝</div>
                                                <div className="line-clamp-1">{article.title}</div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-6">
                                            <span className="text-xs font-black px-3 py-1 bg-white border border-[#CED0D4] rounded-lg">
                                                {article.category}
                                            </span>
                                        </td>
                                        <td className="px-6 py-6 text-sm font-bold text-[#65676B]">
                                            {article.views || 0}
                                        </td>
                                        <td className="px-6 py-6 text-sm text-[#65676B] font-medium">
                                            {article.created_at ? new Date(article.created_at).toLocaleDateString("ar-SA") : "غير محدد"}
                                        </td>
                                        <td className="px-6 py-6 text-left space-x-2 space-x-reverse">
                                            <Link href={`/blog/${article.slug}`} target="_blank">
                                                <button className="p-2 hover:bg-white rounded-lg transition-colors text-[#1877F2]" title="عرض المقال">
                                                    👁️
                                                </button>
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(article.id!)}
                                                className="p-2 hover:bg-white rounded-lg transition-colors text-[#FA3E3E]"
                                                title="حذف المقال"
                                            >
                                                🗑️
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
