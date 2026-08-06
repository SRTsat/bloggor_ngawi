import Link from 'next/link';
import { getAllPosts } from '../../../lib/posts';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="space-y-8 py-4">
      <div>
        <h1 className="text-3xl font-bold text-gray-100">Blog & Catatan</h1>
      </div>

      <div className="space-y-6">
        {posts.length === 0 ? (
          <p className="text-gray-500">Belum ada tulisan yang dipublis.</p>
        ) : (
          posts.map((post) => (
            <article 
              key={post.slug}
              className="p-6 bg-gray-900/40 border border-gray-800/80 rounded-xl hover:border-gray-500/50 transition group"
            >
              <Link href={`/blog/${post.slug}`} className="block space-y-2">
                <div className="text-xs text-violet-400 font-mono">
                  {post.date}
                </div>
                <h2 className="text-xl font-semibold text-gray-100 group-hover:text-gray-400 transition">
                  {post.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {post.description}
                </p>
              </Link>
            </article>
          ))
        )}
      </div>
    </div>
  );
}