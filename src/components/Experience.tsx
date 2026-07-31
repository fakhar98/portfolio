import { Briefcase, GraduationCap } from 'lucide-react';

type Entry = {
  type: 'work' | 'edu';
  role: string;
  org: string;
  period: string;
  location: string;
  bullets: string[];
};

const timeline: Entry[] = [
  {
    type: 'work',
    role: 'MERN Stack Developer',
    org: 'Wajid & Co',
    period: '2025 – 2026',
    location: 'Multan, PK',
    bullets: [
      'Developed backend APIs using Node.js and Express.js.',
      'Optimized website speed, responsiveness, and user experience',
      'Participated in testing, debugging, and deployment of web applications',
    ],
  },
  
  {
    type: 'work',
    role: 'Intern Web Developer',
    org: 'Ezitech',
    period: ' 2024 – 2024',
    location: 'Islamabad, PK',
    bullets: [
      'Developed REST APIs and React front-ends for small to mid-size client websites.',
      'Collaborated with designers to implement pixel-perfect, responsive UIs.',
    ],
  },
  {
    type: 'edu',
    role: 'B.Sc. Sodtware Engineering',
    org: 'NFC IET, Multan',
    period: '2022 – 2026',
    location: 'Multan, PK',
    bullets: [
      'Graduated with — GPA 2.95/4.0.',
      'Specialization in Web Development',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <div className="flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-gray-600" />
            <span className="text-gray-500 text-xs font-medium tracking-widest uppercase">
              Background
            </span>
            <span className="inline-block w-8 h-px bg-gray-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white">Experience</h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2" />

          <div className="flex flex-col gap-12">
            {timeline.map((entry, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={entry.role}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 top-5 -translate-x-1/2 z-10">
                    <div className="w-4 h-4 rounded-full bg-neutral-950 border-2 border-gray-600 ring-4 ring-neutral-950" />
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card */}
                  <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                    <div className="bg-neutral-900 border border-white/5 rounded-2xl p-6 hover:border-white/15 transition-all duration-300 group">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                          {entry.type === 'work' ? (
                            <Briefcase className="w-4 h-4 text-gray-400" />
                          ) : (
                            <GraduationCap className="w-4 h-4 text-gray-400" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-white font-bold text-base leading-snug">{entry.role}</h3>
                          <p className="text-gray-400 text-sm font-medium">{entry.org}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 mb-4 flex-wrap">
                        <span className="text-gray-600 text-xs border border-white/8 rounded-full px-3 py-0.5">
                          {entry.period}
                        </span>
                        <span className="text-gray-600 text-xs">{entry.location}</span>
                      </div>

                      <ul className="flex flex-col gap-2">
                        {entry.bullets.map((b) => (
                          <li key={b} className="flex gap-2 text-gray-500 text-sm leading-relaxed">
                            <span className="text-gray-600 flex-shrink-0 mt-1.5 w-1 h-1 rounded-full bg-gray-600 block" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
