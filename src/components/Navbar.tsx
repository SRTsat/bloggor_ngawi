import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo dengan Aksen Violet */}
        <Link 
          href="/" 
          className="text-lg font-bold text-violet-400 hover:text-violet-300 transition"
        >
          bloggor ngawi
        </Link>

        {/* Menu Navigasi */}
        <nav className="flex items-center gap-6 text-sm font-medium text-gray-300">
          <Link href="/" className="hover:text-violet-400 transition">
            Home
          </Link>
          <Link href="/projects" className="hover:text-violet-400 transition">
            Projects
          </Link>
          <Link href="/blog" className="hover:text-violet-400 transition">
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
}