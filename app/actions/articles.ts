"use server";

import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import { Article } from "@/lib/types";
import { mockArticles } from "@/lib/mockData";
import { revalidatePath } from "next/cache";

export async function getArticles() {
    try {
        if (!isSupabaseConfigured) {
            return mockArticles;
        }

        const { data, error } = await supabase
            .from("articles")
            .select("*")
            .eq("is_published", true)
            .order("created_at", { ascending: false });

        if (error) {
            console.error("Supabase error fetching articles:", error);
            return mockArticles;
        }

        return (data as Article[]) || mockArticles;
    } catch (err) {
        console.error("Unexpected error in getArticles:", err);
        return mockArticles;
    }
}

export async function getArticleBySlug(slug: string) {
    try {
        if (!isSupabaseConfigured) {
            return mockArticles.find(a => a.slug === slug) || null;
        }

        const { data, error } = await supabase
            .from("articles")
            .select("*")
            .eq("slug", slug)
            .single();

        if (error) {
            console.error("Supabase error fetching article:", error);
            return mockArticles.find(a => a.slug === slug) || null;
        }

        return data as Article;
    } catch (err) {
        console.error("Unexpected error in getArticleBySlug:", err);
        return null;
    }
}

export async function createArticle(article: Article) {
    try {
        if (!isSupabaseConfigured) {
            throw new Error("Supabase is not configured yet. Please check your environment variables.");
        }

        const { data, error } = await supabase
            .from("articles")
            .insert([article])
            .select();

        if (error) {
            console.error("Supabase error creating article:", error);
            return { success: false, error: error.message };
        }

        revalidatePath("/");
        revalidatePath("/blog");

        return { success: true, data: data[0] as Article };
    } catch (err: any) {
        console.error("Unexpected error in createArticle:", err);
        return { success: false, error: err.message || "An unexpected error occurred" };
    }
}

export async function getCategories() {
    try {
        if (!isSupabaseConfigured) {
            return [
                { name: "ذكاء اصطناعي", count: 24, icon: "🤖" },
                { name: "برمجة", count: 18, icon: "💻" },
                { name: "تعلم آلي", count: 15, icon: "🧠" },
                { name: "أمن سيبراني", count: 12, icon: "🔒" },
                { name: "ريادة أعمال", count: 9, icon: "🚀" },
                { name: "إنتاجية", count: 7, icon: "⚡" },
            ];
        }

        const { data: categories, error: catError } = await supabase
            .from("categories")
            .select("*");

        if (catError) throw catError;

        const { data: articles, error: artError } = await supabase
            .from("articles")
            .select("category")
            .eq("is_published", true);

        if (artError) throw artError;

        return categories.map((cat: any) => ({
            ...cat,
            count: articles?.filter((a: any) => a.category === cat.name).length || 0
        }));
    } catch (err) {
        console.error("Error fetching dynamic categories:", err);
        return [];
    }
}

export async function getTrendingArticles() {
    try {
        if (!isSupabaseConfigured) {
            return [
                { title: "ChatGPT vs Gemini: مقارنة شاملة لعام 2026", views: "12.4K", slug: "ai-revolution-2026" },
                { title: "أفضل 10 لغات برمجة يجب تعلمها", views: "9.8K", slug: "nextjs-server-components-guide" },
                { title: "مستقبل الوظائف في عصر الأتمتة", views: "7.2K", slug: "ai-revolution-2026" },
            ];
        }

        const { data, error } = await supabase
            .from("articles")
            .select("title, views, slug")
            .eq("is_published", true)
            .order("views", { ascending: false })
            .limit(5);

        if (error) throw error;
        return data.map((item: any) => ({
            ...item,
            views: item.views > 1000 ? (item.views / 1000).toFixed(1) + "K" : item.views.toString()
        }));
    } catch (err) {
        console.error("Error fetching trending articles:", err);
        return [];
    }
}

export async function deleteArticle(id: string) {
    try {
        if (!isSupabaseConfigured) {
            throw new Error("Supabase is not configured.");
        }

        const { error } = await supabase
            .from("articles")
            .delete()
            .eq("id", id);

        if (error) throw error;

        revalidatePath("/");
        revalidatePath("/blog");
        revalidatePath("/admin/articles");

        return { success: true };
    } catch (err: any) {
        console.error("Error deleting article:", err);
        return { success: false, error: err.message };
    }
}


