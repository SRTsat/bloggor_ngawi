import Link from 'next/link';

// Data dummy proyek (Nanti tinggal lu ubah sesuai proyek riil lu)
const projectsData = [
  {
    id: '1',
    title: 'Situs Portofolio & Blog Pribadi',
    description: 'Situs web personal yang dibangun menggunakan Next.js App Router, Tailwind CSS, dan MDX untuk dokumentasi belajar.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MDX'],
    github: 'https://github.com',
    demo: 'https://vercel.com',
  },
  {
    id: '2',
    title: 'Sistem Manajemen perpustakaan',
    description: 'Aplikasi frontend yang dikembangkan pakai React waktu magang SMK untuk manajemen tugas internal tim.',
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'REST API'],
    github: 'https://github.com',
    demo: '',
  },
  {
    id: '3',
    title: 'Web Sistem Informasi SMK',
    description: 'Proyek akhir SMK menggunakan Laravel untuk backend dan Blade template untuk antarmuka pengguna.',
    tech: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
    github: 'https://github.com',
    demo: '',
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-8 py-4">
      <div>
        <h1 className="text-3xl font-bold text-gray-100">Proyek & Portofolio</h1>
        <p className="text-gray-400 mt-2">
          Kumpulan proyek yang pernah gw kerjain pas SMK, sampai persiapan kuliah sekarang.
        </p>
      </div>

      {/* Grid Proyek */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project) => (
          <div 
            key={project.id}
            className="p-6 bg-gray-900/50 border border-gray-800/80 rounded-xl hover:border-violet-500/50 transition flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-200 group-hover:text-violet-400 transition">
                {project.title}
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                {project.description}
              </p>
              
              {/* Badges Tech Stack */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 bg-violet-950/40 text-violet-300 border border-violet-800/40 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-4 pt-6 mt-4 border-t border-gray-800/50 text-sm font-medium">
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition"
                >
                  GitHub →
                </a>
              )}
              {project.demo && (
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-violet-400 hover:text-violet-300 transition"
                >
                  Live Demo ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}