export default function Footer() {
  return (
    <footer className="win95-window p-1 w-full max-w-6xl mx-auto mt-4 text-xs">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-2 px-2 py-1">
        <p>© {new Date().getFullYear()} Bloggor Ngawi. Windows 95 Edition.</p>
        
        <div className="flex gap-2 font-bold">
          <a href="https://github.com/SRTsat" target="_blank" className="win95-btn px-2 py-0.5 text-black">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" className="win95-btn px-2 py-0.5 text-black">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}