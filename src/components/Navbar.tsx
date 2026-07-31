import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/5 shadow-2xl' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 text-white font-bold text-lg tracking-tight hover:text-gray-300 transition-colors"
        >
          <Code2 className="w-5 h-5 text-gray-400" />
          <span>Fakhar Karamat</span>
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className="text-sm text-gray-400 hover:text-white transition-colors font-medium tracking-wide uppercase"
              >
                {link}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => scrollTo('Contact')}
              className="text-sm font-medium px-5 py-2 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-200"
            >
              Hire Me
            </button>
          </li>
        </ul>

        <button
          className="md:hidden text-gray-400 hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-left text-gray-400 hover:text-white transition-colors font-medium py-2 border-b border-white/5 last:border-0"
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
