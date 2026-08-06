import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-6">
      {/* Jendela Utama */}
      <div className="win95-window p-1">
        {/* Title Bar Navy Blue */}
        <div className="bg-[#000080] text-white px-2 py-1 flex justify-between items-center text-xs font-bold">
          <span>C:\AMBAWI\WELCOME.EXE</span>
          <div className="flex gap-1">
            <button className="win95-btn text-black px-1.5 py-0 text-xs">_</button>
            <button className="win95-btn text-black px-1.5 py-0 text-xs">X</button>
          </div>
        </div>

        {/* Isi Dalam Jendela */} 
        <div className="p-4 sm:p-6 space-y-6">
          <div className="flex items-center gap-2">
            <span className="win95-btn px-2 py-0.5 text-xs font-bold">Status:</span>
            <span className="text-xs font-bold text-blue-900">online</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-black">
            Halo, saya <span className="bg-[#000080] text-white px-1">Web Developer.</span>
          </h1>

          <div className="win95-inset p-3 text-sm text-gray-800 font-mono">
            a larger become web developer, have less skill in communication, and love searching about new tech.
          </div>

          <div className="flex flex-wrap gap-3 pt-2 text-xs font-bold">
            <Link 
              href="/projects" 
              className="win95-btn px-4 py-2 text-black hover:bg-gray-300"
            >
              See Projects
            </Link>
            <Link 
              href="/blog" 
              className="win95-btn px-4 py-2 text-black hover:bg-gray-300"
            >
              Read Blog
            </Link>
          </div>
        </div>
      </div>

      {/* Jendela Tech Stack */}
      <div className="win95-window p-1">
        <div className="bg-[#808080] text-white px-2 py-1 text-xs font-bold">
          SYSTEM_PROPERTIES.SYS
        </div>
        <div className="p-4">
          <p className="text-xs font-bold mb-3">TECH YANG PERNAH GW PAKE ATAU GW SENTUH:</p>
          <div className="flex flex-wrap gap-2 text-xs">
            {['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Laravel', 'PHP', 'Git', 'MySQL'].map((tech) => (
              <span key={tech} className="win95-btn px-2 py-1 text-black font-mono">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 