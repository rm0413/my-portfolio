export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'PostgreSQL', 'REST APIs', 'GraphQL'],
    },
    {
      category: 'Tools & Others',
      skills: ['Git', 'Docker', 'Figma', 'Jest', 'CI/CD'],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-gray-900 mb-16 text-center">Skills & Expertise</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.category} className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h3>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  >
                    <p className="text-gray-700">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-gray-900 mb-2">5+</p>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-gray-900 mb-2">50+</p>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-gray-900 mb-2">30+</p>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-gray-900 mb-2">100%</p>
            <p className="text-gray-600">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}
