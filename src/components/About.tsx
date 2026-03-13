import { Code2, Palette, Rocket } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable solutions that stand the test of time',
    },
    {
      icon: Palette,
      title: 'Design Focus',
      description: 'Merging aesthetics with functionality for delightful user experiences',
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Optimizing every detail for speed and efficiency',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-gray-900 mb-16 text-center">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a passionate developer with a keen eye for design and a love for creating
              seamless digital experiences. With expertise in modern web technologies, I
              transform ideas into elegant, functional solutions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              My approach combines technical excellence with creative problem-solving,
              ensuring every project is both beautiful and performant.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 h-80 flex items-center justify-center">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-900 rounded-full mx-auto mb-4"></div>
              <p className="text-gray-600">Your Image Here</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="p-8 border border-gray-100 rounded-2xl hover:shadow-lg transition-shadow duration-300"
            >
              <item.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
