import { Code2, ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-gray-500">
          <Code2 className="w-4 h-4" />
          <span className="text-sm font-medium">Fakhar Karamat</span>
          <span className="text-gray-700">·</span>
          <span className="text-sm text-gray-500">Mern Stack Developer</span>
        </div>

        <p className="text-gray-700 text-xs">
          © {new Date().getFullYear()} All rights reserved.
        </p>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-600 hover:text-white hover:border-white/30 transition-all duration-200"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
}
