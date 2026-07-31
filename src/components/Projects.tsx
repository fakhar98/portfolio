import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
  live: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: 'TuneFlow - Online Music Streaming Website',
    description:
      'A responsive music streaming website with playlist creation, search, user login, and track playback controls. Built with React, Node.js, Tailwind CSS, and JWT-based authentication.',
    tags: ['React', 'Node.js',  'Tailwind CSS', 'JWT'],
    image:
      'https://images.pexels.com/photos/4231581/pexels-photo-4231581.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    github: 'https://github.com/fakhar98/TuneFlow',
    live: 'https://fakhar98.github.io/TuneFlow/',
    featured: true,
  },
  {
    title: 'Cinevista - Cinema Ticket Booking Website',
    description:
      'A cinema ticket booking platform with movie listings, seat selection, booking flow, and user account management. Built with React.js, Supabase, and Node.js for a seamless ticket purchasing experience.',
    tags: ['React.js', 'Supabase', 'Node.js'],
    image:
      'https://images.pexels.com/photos/7991489/pexels-photo-7991489.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    github: 'https://github.com/fakhar98/Cinevista',
    live: 'https://cinevista-ten.vercel.app',
    featured: true,
  },
  {
    title: 'EduAssess AI — AI-Powered Assessment Platform',
    description:
      'An AI-powered student assessment platform that generates adaptive quizzes, analyzes performance, and provides feedback. Built with Node.js, Express, PostgreSQL, and AI-driven scoring logic for smarter learning insights.',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'Redis'],
    image:
      'https://images.pexels.com/photos/5473299/pexels-photo-5473299.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    github: 'https://github.com/fakhar98/StudentAssesmentPortal',
    live: 'https://fakhar98.github.io/StudentAssesmentPortal/',
  },
  {
    title: 'Avo — Buisness Website for IT Solutions',
    description:
      'A polished business website for an IT solutions provider featuring service showcases, client case studies, and contact booking. Built with React, Node.js, and MongoDB for modern branding and lead generation.',
    tags: ['React', 'Node.js', 'MongoDB', 'React'],
    image:
      'https://images.pexels.com/photos/6424583/pexels-photo-6424583.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    github: 'https://github.com/fakhar98/Avo',
    live: 'https://fakhar98.github.io/Avo/',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <div className="flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-gray-600" />
            <span className="text-gray-500 text-xs font-medium tracking-widest uppercase">
              Portfolio
            </span>
            <span className="inline-block w-8 h-px bg-gray-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white">Featured Projects</h2>
          <p className="text-gray-500 max-w-md text-base leading-relaxed">
            A selection of things I've shipped — from real-time collaboration tools to
            full-scale e-commerce platforms.
          </p>
        </div>

        {/* Featured projects — large cards */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {projects.filter((p) => p.featured).map((project) => (
            <div
              key={project.title}
              className="group relative rounded-2xl overflow-hidden border border-white/8 bg-neutral-950 hover:border-white/20 transition-all duration-300"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 opacity-50 group-hover:opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-950" />
                <span className="absolute top-4 left-4 text-xs font-bold tracking-wider bg-white text-black px-3 py-1 rounded-full">
                  Featured
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-white font-bold text-lg leading-tight">{project.title}</h3>
                  <div className="flex gap-2 flex-shrink-0 ml-4">
                    <a
                      href={project.github}
                      className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-white/30 transition-all"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={project.live}
                      className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-white/30 transition-all"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other projects — smaller cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.filter((p) => !p.featured).map((project) => (
            <div
              key={project.title}
              className="group bg-neutral-950 border border-white/5 rounded-xl p-5 hover:border-white/20 transition-all duration-300 hover:bg-neutral-900 flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-white font-semibold text-sm leading-snug flex-1">{project.title}</h3>
                <a href={project.live} className="text-gray-600 hover:text-white transition-colors ml-2 flex-shrink-0">
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
              <p className="text-gray-600 text-xs leading-relaxed mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="text-xs text-gray-500 bg-white/3 px-2 py-0.5 rounded-md border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/fakhar98?tab=repositories"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors border-b border-gray-700 hover:border-white pb-0.5"
          >
            View all projects on GitHub <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
