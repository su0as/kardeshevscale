import React, { useState } from 'react';
import { Info } from 'lucide-react';

interface ScaleVisualizationProps {
  currentLevel: number;
}

const milestones = [
  { level: 0.5, label: "Industrial", description: "Advanced industrial civilization with global energy networks", color: 'from-blue-400 to-cyan-400' },
  { level: 0.7, label: "Pre-Type I", description: "Fusion power, advanced AI, and planetary-scale computing", color: 'from-cyan-400 to-teal-400' },
  { level: 1.0, label: "Type I", description: "Full planetary energy utilization and control", color: 'from-teal-400 to-green-400' },
  { level: 1.5, label: "Early Type II", description: "Initial Dyson swarm construction and stellar harvesting", color: 'from-yellow-400 to-orange-400' },
  { level: 2.0, label: "Type II", description: "Complete stellar energy capture and utilization", color: 'from-orange-400 to-red-400' },
  { level: 2.5, label: "Early Type III", description: "Multi-star harvesting and galactic colonization", color: 'from-red-400 to-purple-400' },
  { level: 3.0, label: "Type III", description: "Galaxy-wide energy utilization", color: 'from-purple-400 to-violet-400' }
];

const ScaleVisualization: React.FC<ScaleVisualizationProps> = ({ currentLevel }) => {
  const [hoveredLevel, setHoveredLevel] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const getWidth = (level: number) => {
    return (level / 3) * 100;
  };

  const getCurrentMilestone = (level: number) => {
    return milestones.reduce((prev, curr) => {
      return Math.abs(curr.level - level) < Math.abs(prev.level - level) ? curr : prev;
    });
  };

  const getNextMilestone = (level: number) => {
    return milestones.find(m => m.level > level) || milestones[milestones.length - 1];
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const currentMilestone = getCurrentMilestone(currentLevel);
  const nextMilestone = getNextMilestone(currentLevel);

  // Calculate progress percentage to Type I (level 1.0)
  const progressToTypeI = (currentLevel / 1.0) * 100;
  const remainingToTypeI = 100 - progressToTypeI;
  const currentPowerWatts = Math.pow(10, (currentLevel * 10) + 6);
  const type1PowerWatts = Math.pow(10, 16);
  const remainingPowerWatts = type1PowerWatts - currentPowerWatts;

  return (
    <div className="bg-black border border-white/10 rounded p-4">
      <div className="flex items-center gap-2 mb-4">
        <Info className="w-4 h-4" />
        <h2 className="text-sm">KARDASHEV SCALE PROGRESS</h2>
      </div>

      {/* Progress to Type I Summary */}
      <div className="mb-6 p-4 bg-white/5 rounded-lg">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h3 className="text-sm text-white/70 mb-1">PROGRESS TO TYPE I</h3>
            <div className="text-2xl font-bold">{progressToTypeI.toFixed(2)}%</div>
          </div>
          <div>
            <h3 className="text-sm text-white/70 mb-1">REMAINING ENERGY NEEDED</h3>
            <div className="text-2xl font-mono">{remainingPowerWatts.toExponential(2)} W</div>
          </div>
        </div>
        <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-1000"
            style={{ width: `${progressToTypeI}%` }}
          />
        </div>
      </div>

      {/* Main Scale Bar */}
      <div 
        className="relative h-12 bg-white/5 rounded-lg mb-6 overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        {/* Progress Gradient */}
        <div
          className={`absolute h-full bg-gradient-to-r ${currentMilestone.color} transition-all duration-1000`}
          style={{ width: `${getWidth(currentLevel)}%` }}
        />
        
        {/* Milestone Markers */}
        {milestones.map(({ level, color }) => (
          <div
            key={level}
            className="absolute h-full group"
            style={{ left: `${getWidth(level)}%`, width: '20px', transform: 'translateX(-10px)' }}
            onMouseEnter={() => setHoveredLevel(level)}
            onMouseLeave={() => setHoveredLevel(null)}
          >
            <div className={`w-1 h-full mx-auto transition-opacity duration-300 ${
              hoveredLevel === level ? 'opacity-100' : 'opacity-30'
            } bg-gradient-to-r ${color}`} />
          </div>
        ))}

        {/* Current Position Marker */}
        <div 
          className="absolute w-2 h-full bg-white shadow-lg shadow-white/20"
          style={{ left: `${getWidth(currentLevel)}%` }}
        />
      </div>

      {/* Current Level Display */}
      <div className="text-center mb-4">
        <div className="text-3xl font-bold font-mono">
          {currentLevel.toFixed(4)}
          <span className="text-white/50 ml-2 text-xl">K</span>
        </div>
        <div className="text-sm text-white/70 mt-1">
          Next milestone: {nextMilestone.label} ({nextMilestone.level.toFixed(1)} K)
        </div>
      </div>

      {/* Hover Popup */}
      {hoveredLevel !== null && (
        <div 
          className="fixed z-50 bg-black/90 border border-white/20 rounded-lg p-4 w-64 shadow-lg backdrop-blur-sm"
          style={{ 
            left: mousePos.x + 20,
            top: mousePos.y - 40,
            transform: 'translateY(-50%)'
          }}
        >
          {milestones.map(milestone => {
            if (milestone.level === hoveredLevel) {
              return (
                <div key={milestone.level}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${milestone.color}`} />
                    <span className="font-medium">{milestone.label}</span>
                    <span className="ml-auto font-mono text-white/50">{milestone.level.toFixed(1)}</span>
                  </div>
                  <p className="text-sm text-white/70">{milestone.description}</p>
                  <div className="mt-2 pt-2 border-t border-white/10">
                    <div className="text-xs text-white/50">
                      {milestone.level <= currentLevel ? 'ACHIEVED' : 'PROJECTED'}
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      )}
    </div>
  );
};

export default ScaleVisualization;