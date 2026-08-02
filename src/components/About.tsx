import { User, MapPin, Mail, Calendar } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-28 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 lg:translate-x-4 lg:translate-y-4 border border-white/10 rounded-2xl" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <img
                  src="https://images.pexels.com/photos/34803969/pexels-photo-34803969.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Developer workspace"
                  className="w-full h-80 object-cover grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute bottom-0 right-0 lg:-bottom-5 lg:-right-5 bg-neutral-900 border border-white/10 rounded-xl px-5 py-3 shadow-2xl">
                <p className="text-white font-bold text-2xl">1+</p>
                <p className="text-gray-500 text-xs">Years of Experience</p>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-gray-600" />
              <span className="text-gray-500 text-xs font-medium tracking-widest uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Passionate about
              <br />
              <span className="text-gray-500">clean code &amp; craft.</span>
            </h2>

            <p className="text-gray-400 leading-relaxed text-base">
              I'm a full-stack MERN developer with over one years of experience designing and
              building web applications from the ground up. I care deeply about performance,
              maintainability, and user experience — writing code that's not just functional
              but genuinely well-crafted.
            </p>
            <p className="text-gray-400 leading-relaxed text-base">
              From RESTful APIs and JWT authentication to real-time features with Socket.io
              and scalable deployments on AWS &amp; Docker, I enjoy working across the entire
              stack to deliver polished products that make an impact.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-2">
              {[
                { icon: User, label: 'Name', value: 'Fakhar Karamat' },
                { icon: Calendar, label: 'Available', value: 'Remote / Full-time' },
                { icon: MapPin, label: 'Location', value: 'Multan, PK' },
                { icon: Mail, label: 'Email', value: 'fakharkaramat9@gmail.com' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-xs uppercase tracking-wide">{label}</p>
                    <p className="text-white text-sm font-medium mt-0.5">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
