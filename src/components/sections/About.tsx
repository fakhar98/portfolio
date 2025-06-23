import React from 'react';
import { Code, Rocket, Users, Award } from 'lucide-react';
import Card from '../ui/Card';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400">
            A passionate frontend developer and student at NFC IET University, dedicated to creating exceptional user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              My Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Currently pursuing my degree at NFC IET University, I've already begun making strides in the tech industry. My journey in web development started with a strong foundation in HTML, CSS, and JavaScript, which I've been continuously expanding through both academic studies and practical experience.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I recently completed a valuable 3-month internship at Eztech Institute, where I gained hands-on experience in real-world project development. During my internship, I worked with modern web technologies and collaborated with experienced developers, enhancing my technical skills and professional growth.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              As a student developer, I'm passionate about learning new technologies and applying them to create innovative solutions. I combine my academic knowledge with practical experience to build responsive, user-friendly web applications that deliver exceptional user experiences.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 dark:bg-blue-900 rounded-lg z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-100 dark:bg-purple-900 rounded-lg z-0"></div>
              <img 
                src="https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Developer working" 
                className="rounded-lg shadow-lg relative z-10 w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard 
            icon={<Code className="text-blue-500\" size={24} />}
            title="Education"
            value="NFC IET University"
            description="Computer Science Student"
          />
          <StatsCard 
            icon={<Rocket className="text-purple-500\" size={24} />}
            title="Experience"
            value="3 Months"
            description="Internship at Eztech Institute"
          />
          <StatsCard 
            icon={<Users className="text-teal-500\" size={24} />}
            title="Projects"
            value="5+"
            description="Completed projects"
          />
          <StatsCard 
            icon={<Award className="text-amber-500\" size={24} />}
            title="Skills"
            value="Frontend"
            description="Web Development"
          />
        </div>
      </div>
    </section>
  );
};

interface StatsCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ icon, title, value, description }) => {
  return (
    <Card className="p-6 text-center">
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-2xl font-bold mb-2 text-blue-600 dark:text-blue-400">{value}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
    </Card>
  );
};

export default About;