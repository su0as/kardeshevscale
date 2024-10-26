import React from 'react';
import { Globe2, Sun, Stars } from 'lucide-react';
import { CIVILIZATION_DATA } from '../data/civilizations';

interface CivilizationPanelProps {
  type: number;
  currentLevel: number;
  expanded: boolean;
}

export const CivilizationPanel: React.FC<CivilizationPanelProps> = ({ 
  type, 
  currentLevel,
  expanded 
}) => {
  const data = CIVILIZATION_DATA[type - 1];
  const Icon = type === 1 ? Globe2 : type === 2 ? Sun : Stars;
  const isActive = currentLevel >= type - 0.5;

  return (
    <div className={`bg-black rounded p-4 flex-1 overflow-hidden transition-all ${
      isActive ? 'border border-white/20' : 'border border-white/5'
    }`}>
      <div className="flex items-center gap-2 mb-4">
        <Icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-white/30'}`} />
        <h2 className="text-xl">TYPE {type} CIVILIZATION</h2>
      </div>

      <div className="grid grid-cols-2 gap-4 h-[calc(100%-3rem)]">
        <div className="space-y-4">
          <div className="bg-white/5 rounded p-4">
            <h3 className="text-white/70 text-lg mb-2">ENERGY USAGE</h3>
            <p className="text-2xl font-mono">{data.power}</p>
            <p className="text-sm text-white/50 mt-2">{data.description}</p>
          </div>

          <div className="bg-white/5 rounded p-4">
            <h3 className="text-white/70 mb-3">KEY TECHNOLOGIES</h3>
            <ul className="space-y-2">
              {data.technologies.slice(0, 4).map((tech, i) => (
                <li key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                  <span>{tech}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white/5 rounded p-4">
            <h3 className="text-white/70 mb-3">MAJOR ACHIEVEMENTS</h3>
            <ul className="space-y-2">
              {data.achievements.slice(0, 4).map((achievement, i) => (
                <li key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 rounded p-4">
            <h3 className="text-white/70 mb-3">CHALLENGES</h3>
            <ul className="space-y-2">
              {data.challenges.slice(0, 4).map((challenge, i) => (
                <li key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CivilizationPanel;