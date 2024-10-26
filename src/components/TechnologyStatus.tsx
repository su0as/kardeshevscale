import React from 'react';
import { Cpu } from 'lucide-react';
import { TECH_MILESTONES } from '../data/technologies';

interface TechnologyStatusProps {
  level: number;
}

export const TechnologyStatus: React.FC<TechnologyStatusProps> = ({ level }) => (
  <div className="bg-black border border-white/10 rounded p-2">
    <div className="flex items-center gap-2 mb-2">
      <Cpu className="w-4 h-4 text-white" />
      <h2 className="text-sm">TECHNOLOGY STATUS</h2>
    </div>
    <div className="space-y-2 text-xs">
      {TECH_MILESTONES.map((tech, i) => (
        <div key={i} className="flex justify-between">
          <span>{tech.name}</span>
          <div className="flex items-center gap-1">
            <div className={`w-2 h-2 rounded-full ${level >= tech.level ? 'bg-white' : 'bg-white/20'}`} />
            <span>{(tech.progress * 100).toFixed(0)}%</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default TechnologyStatus;