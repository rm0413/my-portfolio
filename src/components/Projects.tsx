import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-stack shopping experience with real-time inventory and secure payments',
      tags: ['React', 'Node.js', 'PostgreSQL'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Design System',
      description: 'Comprehensive component library with accessibility and theming support',
      tags: ['TypeScript', 'Storybook', 'Tailwind'],
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'Analytics Dashboard',
      description: 'Real-time data visualization with interactive charts and insights',
      tags: ['React', 'D3.js', 'WebSocket'],
      gradient: 'from-orange-500 to-amber-500',
    },
    {
      title: 'Mobile App',
      description: 'Cross-platform social networking app with live messaging',
      tags: ['React Native', 'Firebase', 'Redux'],
      gradient: 'from-rose-500 to-pink-500',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-gray-900 mb-16 text-center">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div
                className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="flex items-center gap-2 text-gray-900 hover:text-blue-600 transition-colors"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-gray-900 hover:text-blue-600 transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
