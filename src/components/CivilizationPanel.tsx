import React from 'react';
import { Globe2, Sun, Stars } from 'lucide-react';
import { CIVILIZATION_DATA } from '../data/civilizations';

interface CivilizationPanelProps {
  type: number;
  currentLevel: number;
  expanded: boolean;
}

const CivilizationPanel: React.FC<CivilizationPanelProps> = ({ 
  type, 
  currentLevel,
  expanded 
}) => {
  const data = CIVILIZATION_DATA[type - 1];
  const Icon = type === 1 ? Globe2 : type === 2 ? Sun : Stars;
  const isActive = currentLevel >= type - 0.5;

  return (
    <div className={`bg-black rounded p-2 flex flex-col h-full ${
      isActive ? 'border border-white/20' : 'border border-white/5'
    }`}>
      <div className="flex items-center gap-2 mb-2 flex-none">
        <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-white/30'}`} />
        <h2 className="text-base">TYPE {type} CIVILIZATION</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 flex-1 overflow-auto min-h-0">
        <div className="space-y-2">
          <div className="bg-white/5 rounded p-2">
            <h3 className="text-white/70 text-sm mb-1">ENERGY USAGE</h3>
            <p className="text-lg font-mono">{data.power}</p>
            <p className="text-xs text-white/50 mt-1">{data.description}</p>
          </div>

          <div className="bg-white/5 rounded p-2">
            <h3 className="text-white/70 text-sm mb-2">KEY TECHNOLOGIES</h3>
            <ul className="space-y-1 text-xs">
              {data.technologies.map((tech, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  <div className="w-1 h-1 rounded-full bg-white/50" />
                  <span>{tech}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-2">
          <div className="bg-white/5 rounded p-2">
            <h3 className="text-white/70 text-sm mb-2">MAJOR ACHIEVEMENTS</h3>
            <ul className="space-y-1 text-xs">
              {data.achievements.map((achievement, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  <div className="w-1 h-1 rounded-full bg-white/50" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 rounded p-2">
            <h3 className="text-white/70 text-sm mb-2">CHALLENGES</h3>
            <ul className="space-y-1 text-xs">
              {data.challenges.map((challenge, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  <div className="w-1 h-1 rounded-full bg-white/50" />
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