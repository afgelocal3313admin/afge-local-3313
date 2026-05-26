"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type Stats = {
  posts: number;
  published: number;
  drafts: number;
  media: number;
};

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({ posts: 0, published: 0, drafts: 0, media: 0 });
  const [recentPosts, setRecentPosts] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/admin/posts")
      .then((r) => r.json())
      .then((posts) => {
        setStats({
          posts: posts.length,
          published: posts.filter((p: any) => p.status === "published").length,
          drafts: posts.filter((p: any) => p.status === "draft").length,
          media: 0,
        });
        setRecentPosts(posts.slice(0, 5));
      });
    fetch("/api/admin/media")
      .then((r) => r.json())
      .then((media) => {
        setStats((s) => ({ ...s, media: media.length }));
      });
  }, []);

  const statCards = [
    { label: "Total Posts", value: stats.posts, color: "bg-blue-600", icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" },
    { label: "Published", value: stats.published, color: "bg-green-600", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
    { label: "Drafts", value: stats.drafts, color: "bg-yellow-600", icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" },
    { label: "Media Files", value: stats.media, color: "bg-purple-600", icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" },
  ];

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <p className="text-gray-400 text-sm mt-1">
            Welcome to the AFGE Local 3313 content management system
          </p>
        </div>
        <Link
          href="/admin/posts/new"
          className="px-4 py-2.5 bg-union-blue text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          New Post
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {statCards.map((card) => (
          <div
            key={card.label}
            className="bg-gray-800 border border-gray-700 rounded-xl p-6"
          >
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 ${card.color} rounded-lg flex items-center justify-center`}>
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={card.icon} />
                </svg>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">{card.value}</p>
                <p className="text-gray-400 text-sm">{card.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid lg:grid-cols-2 gap-6 mb-10">
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
          <h2 className="text-lg font-bold text-white mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { name: "New Post", href: "/admin/posts/new", color: "bg-blue-600 hover:bg-blue-700" },
              { name: "Upload Media", href: "/admin/media", color: "bg-purple-600 hover:bg-purple-700" },
              { name: "View Posts", href: "/admin/posts", color: "bg-gray-700 hover:bg-gray-600" },
              { name: "View Website", href: "/", color: "bg-gray-700 hover:bg-gray-600" },
            ].map((action) => (
              <Link
                key={action.name}
                href={action.href}
                target={action.href === "/" ? "_blank" : undefined}
                className={`${action.color} text-white text-sm font-medium rounded-lg px-4 py-3 text-center transition-colors`}
              >
                {action.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
          <h2 className="text-lg font-bold text-white mb-4">Site Pages</h2>
          <p className="text-gray-400 text-sm mb-3">17 static pages built into the site</p>
          <div className="flex flex-wrap gap-2">
            {[
              "/", "/about", "/benefits", "/how-to-join", "/union-officials",
              "/presidents-message", "/news", "/events", "/contact", "/faq",
              "/grievance", "/resources", "/meeting-recordings",
              "/new-member-orientation", "/in-the-news", "/labor-management-forums",
            ].map((page) => (
              <Link
                key={page}
                href={page}
                target="_blank"
                className="px-2.5 py-1 bg-gray-700 text-gray-300 text-xs rounded-md hover:bg-gray-600 hover:text-white transition-colors"
              >
                {page}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-white">Recent Posts</h2>
          <Link href="/admin/posts" className="text-sm text-union-blue hover:underline">
            View all &rarr;
          </Link>
        </div>
        {recentPosts.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">No posts yet</p>
            <Link
              href="/admin/posts/new"
              className="inline-block mt-3 text-sm text-union-blue hover:underline"
            >
              Create your first post &rarr;
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {recentPosts.map((post) => (
              <Link
                key={post.id}
                href={`/admin/posts/edit?id=${post.id}`}
                className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <div>
                  <p className="text-white text-sm font-medium">{post.title}</p>
                  <p className="text-gray-500 text-xs mt-0.5">
                    {new Date(post.createdAt).toLocaleDateString()} &middot; {post.category}
                  </p>
                </div>
                <span
                  className={`px-2 py-0.5 rounded text-xs font-medium ${
                    post.status === "published"
                      ? "bg-green-900/50 text-green-400"
                      : "bg-yellow-900/50 text-yellow-400"
                  }`}
                >
                  {post.status}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
