import React from 'react';
import { Technology } from '../types';

interface TechTreeProps {
  technologies: Technology[];
  currentLevel: number;
}

const TechTree: React.FC<TechTreeProps> = ({ technologies, currentLevel }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {technologies.map((tech) => {
        const Icon = tech.icon;
        return (
          <div
            key={tech.id}
            className={`p-6 rounded-lg transition-all duration-300 ${
              tech.level <= currentLevel
                ? 'bg-gray-800/60 border border-blue-500/50'
                : 'bg-gray-900/30'
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="text-2xl">
                <Icon size={24} />
              </div>
              <h3 className="text-xl font-semibold">{tech.name}</h3>
            </div>
            <p className="text-gray-400 mb-3">{tech.description}</p>
            <div className="flex flex-wrap gap-2">
              {tech.requirements.map((req) => (
                <span
                  key={req}
                  className="text-xs bg-gray-700/50 px-2 py-1 rounded-full"
                >
                  {req}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TechTree;