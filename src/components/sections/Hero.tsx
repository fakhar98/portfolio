import React, { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  const typingRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    if (!typingRef.current) return;
    
    const words = ['Developer', 'Designer', 'Problem Solver'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 150;
    
    const type = () => {
      const currentWord = words[wordIndex];
      
      if (isDeleting) {
        if (typingRef.current) {
          typingRef.current.textContent = currentWord.substring(0, charIndex - 1);
          charIndex--;
        }
        typingDelay = 50;
      } else {
        if (typingRef.current) {
          typingRef.current.textContent = currentWord.substring(0, charIndex + 1);
          charIndex++;
        }
        typingDelay = 150;
      }
      
      if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        typingDelay = 1500; // Pause at end of word
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typingDelay = 500; // Pause before typing next word
      }
      
      setTimeout(type, typingDelay);
    };
    
    setTimeout(type, 1000);
    
    // Cleanup function
    return () => {
      clearTimeout(type as unknown as number);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center relative pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900 z-0"></div>
      
      {/* Abstract shapes */}
      <div className="absolute top-20 right-[10%] w-72 h-72 bg-blue-300 dark:bg-blue-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-20 left-[10%] w-72 h-72 bg-purple-300 dark:bg-purple-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/3 left-[20%] w-72 h-72 bg-teal-300 dark:bg-teal-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              <span className="block">Hello, I'm</span>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Fakhar Karamat</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 flex flex-col md:flex-row gap-2 justify-center md:justify-start">
              <span>Frontend</span>
              <span ref={typingRef} className="text-blue-600 dark:text-blue-400">Developer</span>
              <span className="animate-blink">|</span>
            </h2>
            
            <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto md:mx-0">
              I build exceptional and accessible digital experiences for the web, focusing on responsive design and modern frameworks.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Get in Touch
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => {
                  const projectsSection = document.getElementById('projects');
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                View My Work
              </Button>
            </div>
            
            <div className="flex gap-4 justify-center md:justify-start pt-4">
              <SocialLink href="https://github.com/fakhar98" icon={<Github />} label="GitHub" />
              <SocialLink href="https://www.linkedin.com/in/fakhar-karamat-a3b2a125a/" icon={<Linkedin />} label="LinkedIn" />
              <SocialLink href="mailto:fakharkaramat9@gmail.com" icon={<Mail />} label="Email" />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full overflow-hidden p-1">
                <img 
                  src="https://media.licdn.com/dms/image/v2/D4D03AQGd9Yi-k9CVaQ/profile-displayphoto-shrink_800_800/B4DZciMMRKHMAc-/0/1748625311478?e=1753920000&v=beta&t=uaLrVR-L7SWIl9nzfOlLsj98yo3dAYbCNaJaFthecqM" 
                  alt="Fakhar Karamat" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4">
                <span className="text-2xl">👨‍💻</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md text-blue-500 dark:text-blue-400"
            onClick={() => {
              const aboutSection = document.getElementById('about');
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            aria-label="Scroll down"
          >
            <ArrowDown size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 border border-gray-200 dark:border-gray-700 rounded-full hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
    aria-label={label}
  >
    {icon}
  </a>
);

export default Hero;