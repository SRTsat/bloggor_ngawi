export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950 text-gray-400 text-sm py-8 mt-auto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} DevPortfolio. Built with Next.js & Tailwind CSS.</p>
        
        <div className="flex gap-4">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-violet-400 transition"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-violet-400 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}