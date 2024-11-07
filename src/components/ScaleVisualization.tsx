import React, { useState } from 'react';
import { Info } from 'lucide-react';

interface ScaleVisualizationProps {
  currentLevel: number;
  selectedType: number;
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

const ScaleVisualization: React.FC<ScaleVisualizationProps> = ({ currentLevel, selectedType }) => {
  const [hoveredLevel, setHoveredLevel] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [containerRect, setContainerRect] = useState<DOMRect | null>(null);

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
    const rect = e.currentTarget.getBoundingClientRect();
    setContainerRect(rect);
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const currentMilestone = getCurrentMilestone(currentLevel);
  const nextMilestone = getNextMilestone(currentLevel);

  const getProgressToType = (type: number) => {
    const typeLevel = type;
    const progress = (currentLevel / typeLevel) * 100;
    return Math.min(progress, 100);
  };

  const progressToSelectedType = getProgressToType(selectedType);
  const currentPowerWatts = Math.pow(10, (currentLevel * 10) + 6);
  const targetPowerWatts = Math.pow(10, (selectedType * 10) + 6);
  const remainingPowerWatts = targetPowerWatts - currentPowerWatts;

  const getPopupPosition = () => {
    if (!containerRect) return {};
    
    const popupWidth = 256;
    const padding = 12;
    
    let left = mousePos.x + padding;
    let top = mousePos.y;
    
    if (left + popupWidth > containerRect.width) {
      left = mousePos.x - popupWidth - padding;
    }
    
    return {
      left: `${left}px`,
      top: `${top}px`
    };
  };

  return (
    <div className="bg-black border border-white/10 rounded p-2 font-mono relative">
      <div className="flex items-center gap-2 mb-2">
        <Info className="w-4 h-4" />
        <h2 className="text-xs">KARDASHEV SCALE PROGRESS</h2>
      </div>

      <div className="mb-3 p-2 bg-white/5 rounded-lg">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div>
            <h3 className="text-xs text-white/70 mb-0.5">PROGRESS TO TYPE {selectedType}</h3>
            <div className="text-base font-bold">{progressToSelectedType.toFixed(2)}%</div>
          </div>
          <div>
            <h3 className="text-xs text-white/70 mb-0.5">REMAINING ENERGY NEEDED</h3>
            <div className="text-base">{remainingPowerWatts.toExponential(2)} W</div>
          </div>
        </div>
        <div className="mt-2 h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-1000"
            style={{ width: `${progressToSelectedType}%` }}
          />
        </div>
      </div>

      <div 
        className="relative h-8 bg-white/5 rounded-lg mb-3 overflow-hidden touch-none"
        onMouseMove={handleMouseMove}
      >
        <div
          className={`absolute h-full bg-gradient-to-r ${currentMilestone.color} transition-all duration-1000`}
          style={{ width: `${getWidth(currentLevel)}%` }}
        />
        
        {milestones.map(({ level, color }) => (
          <div
            key={level}
            className="absolute h-full group cursor-pointer"
            style={{ left: `${getWidth(level)}%`, width: '20px', transform: 'translateX(-10px)' }}
            onMouseEnter={() => setHoveredLevel(level)}
            onMouseLeave={() => setHoveredLevel(null)}
            onTouchStart={() => setHoveredLevel(level)}
            onTouchEnd={() => setHoveredLevel(null)}
          >
            <div className={`w-0.5 h-full mx-auto transition-opacity duration-300 ${
              hoveredLevel === level ? 'opacity-100' : 'opacity-30'
            } bg-gradient-to-r ${color}`} />
          </div>
        ))}

        <div 
          className="absolute w-1.5 h-full bg-white shadow-lg shadow-white/20"
          style={{ left: `${getWidth(currentLevel)}%` }}
        />
      </div>

      <div className="text-center mb-2">
        <div className="text-xl font-bold">
          {currentLevel.toFixed(4)}
          <span className="text-white/50 ml-1 text-base">K</span>
        </div>
        <div className="text-xs text-white/70">
          Next milestone: {nextMilestone.label} ({nextMilestone.level.toFixed(1)} K)
        </div>
      </div>

      {hoveredLevel !== null && (
        <div 
          className="absolute z-50 bg-black/90 border border-white/20 rounded-lg p-2 w-64 shadow-lg backdrop-blur-sm"
          style={getPopupPosition()}
        >
          {milestones.map(milestone => {
            if (milestone.level === hoveredLevel) {
              return (
                <div key={milestone.level}>
                  <div className="flex items-center gap-2 mb-1">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${milestone.color}`} />
                    <span className="text-sm font-medium">{milestone.label}</span>
                    <span className="ml-auto text-xs text-white/50">{milestone.level.toFixed(1)}</span>
                  </div>
                  <p className="text-xs text-white/70">{milestone.description}</p>
                  <div className="mt-1.5 pt-1.5 border-t border-white/10">
                    <div className="text-[10px] text-white/50">
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