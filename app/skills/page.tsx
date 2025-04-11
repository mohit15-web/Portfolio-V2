'use client';
import { useState, ReactElement} from 'react';
import { Code, Palette, Globe, ChevronRight, Database, Server } from 'lucide-react';
type SkillType = {
  name: string;
  level: number;
};

type CategoryType = {
  title: string;
  icon: ReactElement;
  skills: SkillType[];
};

type CategoriesType = {
  frontend: CategoryType;
  design: CategoryType;
  backend: CategoryType;
  database: CategoryType;
  other: CategoryType;
};

export default function Skills() {
  // Define type for category keys
  type CategoryKey = keyof CategoriesType;
  
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('frontend');

  const categories: CategoriesType = {
    frontend: {
      title: "Frontend Development",
      icon: <Code className="text-emerald-400" />,
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3/SCSS", level: 85 },
        { name: "JavaScript", level: 88 },
        { name: "React", level: 82 },
        { name: "Tailwind CSS", level: 78 },
        { name: "TypeScript", level: 75 }
      ]
    },
    design: {
      title: "UI/UX Design",
      icon: <Palette className="text-pink-400" />,
      skills: [
        { name: "Figma", level: 85 },
      ]
    },
    backend: {
      title: "Backend Development",
      icon: <Server className="text-cyan-400" />,
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express", level: 76 },
        { name: "RESTful APIs", level: 82 },
        { name: "Authentication", level: 78 }
      ]
    },
    database: {
      title: "Database",
      icon: <Database className="text-amber-400" />,
      skills: [
        { name: "MongoDB", level: 78 },
        { name: "Firebase", level: 75 },
        { name: "SQL", level: 70 },
      ]
    },
    other: {
      title: "Other Skills",
      icon: <Globe className="text-violet-400" />,
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "AWS", level: 50 },
        { name: "GCP", level: 50 },
        { name: "Testing", level: 75 },
        { name: "Problem Solving", level: 90 }
      ]
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">My Skills</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Here&apos;s a comprehensive overview of my technical expertise and professional capabilities.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          <div className="">
            <div className="bg-zinc-900 rounded-xl border border-zinc-800 shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-semibold mb-6 text-white">Categories</h3>
              <nav className="space-y-2">
                {(Object.keys(categories) as CategoryKey[]).map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`flex items-center justify-between w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                      activeCategory === category
                        ? 'bg-emerald-500 text-black font-medium'
                        : 'text-gray-300 hover:bg-zinc-800'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className="mr-3">
                        {categories[category].icon}
                      </div>
                      <span>{categories[category].title}</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${
                      activeCategory === category ? 'transform rotate-90' : ''
                    }`} />
                  </button>
                ))}
              </nav>
            </div>
          </div>

          <div className="">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-8">
                <div className="p-3 rounded-lg bg-zinc-800 mr-4">
                  {categories[activeCategory].icon}
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {categories[activeCategory].title}
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {categories[activeCategory].skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between mb-2">
                      <h4 className="font-medium text-gray-200">{skill.name}</h4>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-3 w-full bg-zinc-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-1000 ease-out group-hover:from-emerald-400 group-hover:to-teal-400"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
              <h4 className="font-semibold text-gray-200 mb-3">Always Learning</h4>
              <p className="text-gray-400">
                Technology evolves rapidly, and I&apos;m committed to continuous learning and growth.
                Currently exploring: Web3, Machine Learning, and Advanced Animation Techniques.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}