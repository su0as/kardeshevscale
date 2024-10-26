import React from 'react';

interface TimelineProps {
  currentLevel: number;
}

const Timeline: React.FC<TimelineProps> = ({ currentLevel }) => {
  const milestones = [
    { year: 2100, level: 0.8, event: "Advanced Fusion Power" },
    { year: 2200, level: 1.0, event: "Complete Earth Energy Utilization" },
    { year: 2500, level: 1.5, event: "First Dyson Swarm Components" },
    { year: 3000, level: 2.0, event: "Complete Dyson Sphere" },
    { year: 10000, level: 2.5, event: "Interstellar Expansion" },
  ];

  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-800" />
      {milestones.map((milestone, index) => (
        <div
          key={milestone.year}
          className={`relative flex items-center mb-12 ${
            index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
          }`}
        >
          <div className="w-1/2" />
          <div
            className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full ${
              currentLevel >= milestone.level
                ? 'bg-blue-500'
                : 'bg-gray-700'
            }`}
          />
          <div
            className={`w-1/2 p-6 ${
              currentLevel >= milestone.level
                ? 'bg-blue-900/20'
                : 'bg-gray-900/20'
            } rounded-lg`}
          >
            <h3 className="text-2xl font-bold mb-2">{milestone.year}</h3>
            <p className="text-gray-400">{milestone.event}</p>
            <p className="text-sm text-gray-500">Level {milestone.level}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;