import { getPostBySlug } from '../../../../lib/posts';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc'; // <-- Tambahkan import ini

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function SinglePostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl py-4 space-y-8">
      {/* Tombol Kembali */}
      <Link 
        href="/blog" 
        className="text-sm text-gray-400 hover:text-violet-400 transition inline-block mb-4"
      >
        ← Kembali ke daftar blog
      </Link>

      {/* Header Artikel */}
      <header className="space-y-3 border-b border-gray-800 pb-8">
        <p className="text-xs text-gray-400 font-mono">{post.date}</p>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-100">
          {post.title}
        </h1>
        <p className="text-gray-400 text-base">{post.description}</p>
      </header>

      {/* Isi Konten Artikel (Menggunakan MDXRemote) */}
      <div className="text-gray-300 leading-relaxed space-y-4 font-sans prose prose-invert max-w-none">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}