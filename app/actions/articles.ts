"use server";

import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import { Article } from "@/lib/types";
import { mockArticles } from "@/lib/mockData";

export async function getArticles() {
    if (!isSupabaseConfigured) {
        return mockArticles;
    }

    const { data, error } = await supabase
        .from("articles")
        .select("*")
        .eq("is_published", true)
        .order("created_at", { ascending: false });

    if (error) {
        console.error("Error fetching articles:", error);
        return mockArticles;
    }

    return data as Article[];
}

export async function getArticleBySlug(slug: string) {
    if (!isSupabaseConfigured) {
        return mockArticles.find(a => a.slug === slug) || null;
    }

    const { data, error } = await supabase
        .from("articles")
        .select("*")
        .eq("slug", slug)
        .single();

    if (error) {
        console.error("Error fetching article:", error);
        return mockArticles.find(a => a.slug === slug) || null;
    }

    return data as Article;
}

export async function createArticle(article: Article) {
    if (!isSupabaseConfigured) {
        console.log("Supabase not configured. Mocking save:", article);
        return article;
    }

    const { data, error } = await supabase
        .from("articles")
        .insert([article])
        .select();

    if (error) {
        console.error("Error creating article:", error);
        throw new Error(error.message);
    }

    return data[0] as Article;
}
