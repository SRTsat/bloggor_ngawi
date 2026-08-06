import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="win95-window p-1 w-full max-w-6xl mx-auto mb-4">
      <div className="flex items-center justify-between gap-2">
        {/* Start Button Khas Win95 */}
        <Link 
          href="/" 
          className="win95-btn px-3 py-1 font-bold text-sm flex items-center gap-2 hover:bg-gray-300"
        >
          <span className="bg-[#000080] text-white px-1 text-xs">Bloggor</span>
          <span>Start</span>
        </Link>

        {/* Menu Navigasi berbentuk Tombol Program */}
        <nav className="flex items-center gap-1 text-xs font-bold">
          <Link 
            href="/" 
            className="win95-btn px-3 py-1 text-black active:bg-gray-300"
          >
            Home.exe
          </Link>
          <Link 
            href="/projects" 
            className="win95-btn px-3 py-1 text-black active:bg-gray-300"
          >
            Projects.exe
          </Link>
          <Link 
            href="/blog" 
            className="win95-btn px-3 py-1 text-black active:bg-gray-300"
          >
            Blog.exe
          </Link>
        </nav>
      </div>
    </header>
  );
}