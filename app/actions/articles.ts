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
