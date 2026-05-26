import fs from "fs";
import path from "path";

const CONTENT_DIR = path.join(process.cwd(), "content");
const POSTS_DIR = path.join(CONTENT_DIR, "posts");
const PAGES_DIR = path.join(CONTENT_DIR, "pages");

export type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  status: "draft" | "published";
  author: string;
  featuredImage?: string;
  createdAt: string;
  updatedAt: string;
};

export type PageContent = {
  id: string;
  title: string;
  slug: string;
  content: string;
  status: "draft" | "published";
  updatedAt: string;
};

export type MediaItem = {
  id: string;
  filename: string;
  originalName: string;
  url: string;
  size: number;
  type: string;
  uploadedAt: string;
};

function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Posts
export function getAllPosts(): Post[] {
  ensureDir(POSTS_DIR);
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".json"));
  const posts = files.map((f) => {
    const data = fs.readFileSync(path.join(POSTS_DIR, f), "utf-8");
    return JSON.parse(data) as Post;
  });
  return posts.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function getPostById(id: string): Post | null {
  const filePath = path.join(POSTS_DIR, `${id}.json`);
  if (!fs.existsSync(filePath)) return null;
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

export function getPostBySlug(slug: string): Post | null {
  const posts = getAllPosts();
  return posts.find((p) => p.slug === slug) || null;
}

export function createPost(
  data: Omit<Post, "id" | "slug" | "createdAt" | "updatedAt">
): Post {
  ensureDir(POSTS_DIR);
  const id = generateId();
  const now = new Date().toISOString();
  const post: Post = {
    ...data,
    id,
    slug: slugify(data.title),
    createdAt: now,
    updatedAt: now,
  };
  fs.writeFileSync(path.join(POSTS_DIR, `${id}.json`), JSON.stringify(post, null, 2));
  return post;
}

export function updatePost(id: string, data: Partial<Post>): Post | null {
  const post = getPostById(id);
  if (!post) return null;
  const updated: Post = {
    ...post,
    ...data,
    id: post.id,
    updatedAt: new Date().toISOString(),
  };
  if (data.title && data.title !== post.title) {
    updated.slug = slugify(data.title);
  }
  fs.writeFileSync(
    path.join(POSTS_DIR, `${id}.json`),
    JSON.stringify(updated, null, 2)
  );
  return updated;
}

export function deletePost(id: string): boolean {
  const filePath = path.join(POSTS_DIR, `${id}.json`);
  if (!fs.existsSync(filePath)) return false;
  fs.unlinkSync(filePath);
  return true;
}

// Media
const MEDIA_INDEX = path.join(CONTENT_DIR, "media.json");

export function getAllMedia(): MediaItem[] {
  if (!fs.existsSync(MEDIA_INDEX)) return [];
  return JSON.parse(fs.readFileSync(MEDIA_INDEX, "utf-8"));
}

export function addMedia(item: MediaItem): void {
  const items = getAllMedia();
  items.unshift(item);
  fs.writeFileSync(MEDIA_INDEX, JSON.stringify(items, null, 2));
}

export function deleteMedia(id: string): boolean {
  const items = getAllMedia();
  const item = items.find((m) => m.id === id);
  if (!item) return false;

  // Delete file
  const filePath = path.join(process.cwd(), "public", item.url);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }

  // Update index
  const filtered = items.filter((m) => m.id !== id);
  fs.writeFileSync(MEDIA_INDEX, JSON.stringify(filtered, null, 2));
  return true;
}

export { generateId, slugify };
