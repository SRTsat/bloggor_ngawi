import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="space-y-6">
        <div className="inline-block px-3 py-1 text-xs font-semibold text-violet-400 bg-violet-950/50 border border-violet-800/50 rounded-full">
          ambawi
        </div>
        
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-100 leading-tight">
          Halo, saya <span className="text-violet-400">Web Developer</span>.
        </h1>
        
        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl leading-relaxed">
          a larper become web developer, have less skill in communication, and love searching about new tech.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 pt-2">
          <Link 
            href="/projects" 
            className="px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white font-medium rounded-lg transition shadow-lg shadow-violet-900/20"
          >
            see more about my irrelevant projects
          </Link>
          <Link 
            href="/blog" 
            className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-gray-300 font-medium rounded-lg border border-gray-800 transition"
          >
            read my blog like good individual
          </Link>
        </div>
      </section>

      {/* Tech Stack Preview */}
      <section className="border-t border-gray-800/80 pt-12">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-6">
          Tech yang Pernah Gw Pake atau yang pernah gw sentuh.
        </h2>
        <div className="flex flex-wrap gap-3">
          {['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Laravel', 'PHP', 'Git', 'MySQL'].map((tech) => (
            <span 
              key={tech} 
              className="px-3.5 py-1.5 bg-gray-900 text-gray-300 border border-gray-800 rounded-md text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}