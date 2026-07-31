import { ArrowDown, Github, Linkedin, Twitter, Download } from 'lucide-react';
import CV from '../assets/Fakhar Karamat.pdf';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black"
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/5473299/pexels-photo-5473299.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)',
        }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />

      {/* Animated grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-20">
        <div className="flex flex-col gap-6 max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="inline-block w-10 h-px bg-gray-500" />
            <span className="text-gray-500 text-sm font-medium tracking-widest uppercase">
              MERN Stack Developer
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-white to-gray-400">
              Fakhar
            </span>
            <br />
            <span className="text-gray-500">Karamat.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl">
            I build scalable full-stack web applications using{' '}
            <span className="text-white font-medium">MongoDB</span>,{' '}
            <span className="text-white font-medium">Express</span>,{' '}
            <span className="text-white font-medium">React</span>, and{' '}
            <span className="text-white font-medium">Node.js</span> — turning ideas
            into production-ready products.
          </p>

          <div className="flex flex-wrap gap-4 mt-2">
            <button
              onClick={() =>
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-8 py-3.5 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all duration-200 text-sm tracking-wide"
            >
              View My Work
            </button>
            <a
              href={CV}
              download
              className="px-8 py-3.5 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-200 flex items-center gap-2 text-sm tracking-wide"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-6 pt-8 border-t border-white/10">
            {[
              { number: '1+', label: 'Years Experience' },
              { number: '5+', label: 'Projects Completed' },
              { number: '15+', label: 'Open Source Repos' },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-black text-white">{s.number}</p>
                <p className="text-gray-500 text-xs mt-0.5 tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Social links */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-5">
        {[
          { icon: Github, href: 'https://github.com/fakhar98' },
          { icon: Linkedin, href: 'https://www.linkedin.com/in/fakhar-karamat-a3b2a125a/' },
          { icon: Twitter, href: 'https://x.com/fakhar_karamat' },
        ].map(({ icon: Icon, href }) => (
          <a
            key={href}
            href={href}
            className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-white/30 transition-all duration-200"
          >
            <Icon className="w-4 h-4" />
          </a>
        ))}
        <div className="w-px h-16 bg-white/10 mx-auto" />
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() =>
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 hover:text-gray-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-5 h-5" />
      </button>
    </section>
  );
}
