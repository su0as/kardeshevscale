import React from 'react';
import { Lightbulb } from 'lucide-react';

interface RequiredAdvancesProps {
  level: number;
}

const getNextAdvances = (level: number) => {
  if (level < 0.7) return [
    { name: "Fusion Power", priority: "CRITICAL" },
    { name: "Global Grid", priority: "HIGH" },
    { name: "AI Systems", priority: "HIGH" },
    { name: "Space Industry", priority: "MEDIUM" }
  ];
  
  if (level < 1.0) return [
    { name: "Weather Control", priority: "CRITICAL" },
    { name: "Quantum Network", priority: "HIGH" },
    { name: "Space Elevator", priority: "HIGH" },
    { name: "Energy Storage", priority: "MEDIUM" }
  ];
  
  if (level < 2.0) return [
    { name: "Dyson Swarm", priority: "CRITICAL" },
    { name: "Star Lifting", priority: "HIGH" },
    { name: "FTL Comms", priority: "HIGH" },
    { name: "Antimatter", priority: "MEDIUM" }
  ];
  
  return [
    { name: "Wormholes", priority: "CRITICAL" },
    { name: "Dark Energy", priority: "HIGH" },
    { name: "Star Farming", priority: "HIGH" },
    { name: "Reality Eng", priority: "MEDIUM" }
  ];
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "CRITICAL": return "text-red-400";
    case "HIGH": return "text-yellow-400";
    case "MEDIUM": return "text-blue-400";
    default: return "text-white/50";
  }
};

export const RequiredAdvances: React.FC<RequiredAdvancesProps> = ({ level }) => (
  <div className="bg-black border border-white/10 rounded p-2">
    <div className="flex items-center gap-2 mb-2">
      <Lightbulb className="w-4 h-4 text-white" />
      <h2 className="text-sm">REQUIRED ADVANCES</h2>
    </div>
    <div className="space-y-2 text-xs">
      {getNextAdvances(level).map((advance, i) => (
        <div key={i} className="flex justify-between">
          <span>{advance.name}</span>
          <span className={getPriorityColor(advance.priority)}>{advance.priority}</span>
        </div>
      ))}
    </div>
  </div>
);

export default RequiredAdvances;