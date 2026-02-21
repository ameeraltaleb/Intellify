-- Create Articles Table
CREATE TABLE public.articles (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    excerpt TEXT,
    content TEXT[] NOT NULL,
    category TEXT NOT NULL,
    read_time TEXT,
    views INTEGER DEFAULT 0,
    is_published BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT now(),
    tags TEXT[] DEFAULT '{}'
);

-- Create Categories Table
CREATE TABLE public.categories (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    icon TEXT,
    count INTEGER DEFAULT 0
);

-- Insert Initial Categories
INSERT INTO public.categories (name, icon, count) VALUES
('ذكاء اصطناعي', '🤖', 24),
('برمجة', '💻', 18),
('تعلم آلي', '🧠', 15),
('أمن سيبراني', '🔒', 12),
('ريادة أعمال', '🚀', 9),
('إنتاجية', '⚡', 7);

-- Enable RLS
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;

-- Create Policies (Select for everyone, Insert/Update/Delete for authenticated only)
CREATE POLICY "Public articles are viewable by everyone" ON public.articles
    FOR SELECT USING (is_published = true);

CREATE POLICY "Authenticated users can manage articles" ON public.articles
    FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Public categories are viewable by everyone" ON public.categories
    FOR SELECT USING (true);

CREATE POLICY "Authenticated users can manage categories" ON public.categories
    FOR ALL USING (auth.role() = 'authenticated');
