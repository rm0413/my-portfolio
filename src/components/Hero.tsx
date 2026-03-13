import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 tracking-tight">
            Hello, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Reinabels
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A creative developer crafting beautiful digital experiences with clean code and
            thoughtful design
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-gray-400" size={32} />
        </div>
      </div>
    </section>
  );
}
