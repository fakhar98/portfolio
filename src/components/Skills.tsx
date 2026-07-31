import { useState } from 'react';

type Skill = { name: string; level: number; category: string };

const skills: Skill[] = [
  { name: 'MongoDB', level: 55, category: 'Database' },
  { name: 'Express.js', level: 60, category: 'Backend' },
  { name: 'React.js', level: 65, category: 'Frontend' },
  { name: 'Node.js', level: 60, category: 'Backend' },
  { name: 'TypeScript', level: 60, category: 'Frontend' },
  { name: 'Next.js', level: 50, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 70, category: 'Frontend' },
  { name: 'Redux', level: 45, category: 'Frontend' },
  { name: 'REST APIs', level: 60, category: 'Backend' },
  { name: 'GraphQL', level: 40, category: 'Backend' },
  { name: 'Socket.io', level: 45, category: 'Backend' },
  { name: 'Docker', level: 50, category: 'DevOps' },
  { name: 'AWS', level: 35, category: 'DevOps' },
  { name: 'JWT / Auth', level: 55, category: 'Backend' },
  { name: 'PostgreSQL', level: 45, category: 'Database' },
  { name: 'Redis', level: 35, category: 'Database' },
];

const categories = ['Frontend', 'Backend', 'Database', 'DevOps'];

const categoryColors: Record<string, string> = {
  Frontend: 'bg-white text-black',
  Backend: 'bg-gray-700 text-white',
  Database: 'bg-gray-600 text-white',
  DevOps: 'bg-gray-800 text-white border border-white/20',
};

export default function Skills() {
  const [selected, setSelected] = useState<'All' | string>('All');

  const visible = selected === 'All' ? skills : skills.filter((s) => s.category === selected);

  return (
    <section id="skills" className="py-28 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <div className="flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-gray-600" />
            <span className="text-gray-500 text-xs font-medium tracking-widest uppercase">
              Technical Skills
            </span>
            <span className="inline-block w-8 h-px bg-gray-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white">My Tech Stack</h2>
          <p className="text-gray-500 max-w-md text-base leading-relaxed">
            Tools and technologies I use every day to build modern, production-ready apps.
          </p>
        </div>

        {/* Category filter display (now interactive) */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {['All', ...categories].map((cat) => {
            const isAll = cat === 'All';
            const isActive = selected === cat;
            const base = isAll ? 'px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-white/5 text-gray-200' : `${categoryColors[cat]} px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide`;
            return (
              <button
                key={cat}
                onClick={() => setSelected(cat)}
                className={`${base} ${isActive ? 'ring-2 ring-white/20' : 'opacity-90 hover:opacity-100'} focus:outline-none`}
                aria-pressed={isActive}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {visible.map((skill) => (
            <div
              key={skill.name}
              className="group bg-neutral-900 border border-white/5 rounded-xl p-5 hover:border-white/20 transition-all duration-300 hover:bg-neutral-800/80"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-white font-semibold text-sm">{skill.name}</span>
                <span className="text-gray-400 text-xs font-medium">{skill.level}%</span>
              </div>

              <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-gray-400 to-white rounded-full transition-all duration-700 group-hover:opacity-100 opacity-80"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <span className="mt-3 inline-block text-gray-600 text-xs">{skill.category}</span>
            </div>
          ))}
        </div>

        {/* Tool icons strip */}
        <div className="mt-16 pt-10 border-t border-white/5">
          <p className="text-center text-gray-600 text-xs tracking-widest uppercase mb-8">Also worked with</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Git & GitHub', 'Vercel',
              'Postman', 'Figma', 'Linux', 'CI/CD',
            ].map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 text-xs text-gray-500 border border-white/5 rounded-lg hover:border-white/15 hover:text-gray-300 transition-all"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
