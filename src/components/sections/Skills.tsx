import React from 'react';
import { skills } from '../../data/skills';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400">
            My technical toolkit and areas of expertise in frontend development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skills.categories.map((category, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{category.name}</h3>
              <div className="space-y-4">
                {category.items.map((skill, skillIndex) => (
                  <SkillBar key={skillIndex} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-sm">
          <h3 className="text-xl font-bold mb-6 text-center text-gray-900 dark:text-white">Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.technologies.map((tech, index) => (
              <TechBadge key={index} name={tech.name} icon={tech.icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface SkillBarProps {
  name: string;
  level: number; // 0-100
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level }) => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{name}</span>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full" 
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

interface TechBadgeProps {
  name: string;
  icon: string;
}

const TechBadge: React.FC<TechBadgeProps> = ({ name, icon }) => {
  return (
    <div className="flex items-center gap-2 py-2 px-4 bg-white dark:bg-gray-700 rounded-full shadow-sm">
      <span 
        className="text-xl" 
        role="img" 
        aria-label={name}
      >
        {icon}
      </span>
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{name}</span>
    </div>
  );
};

export default Skills;