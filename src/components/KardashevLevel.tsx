import React from 'react';

interface KardashevLevelProps {
  type: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  power: string;
  current: boolean;
}

const KardashevLevel: React.FC<KardashevLevelProps> = ({
  type,
  icon,
  title,
  description,
  power,
  current,
}) => {
  return (
    <div
      className={`relative p-6 rounded-xl transition-all duration-500 ${
        current
          ? 'bg-gradient-to-br from-blue-900/50 to-purple-900/50 border border-blue-500'
          : 'bg-gray-900/50'
      }`}
    >
      {current && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-xs px-2 py-1 rounded-full">
          Current Level
        </div>
      )}
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">{icon}</div>
        <h3 className="text-2xl font-bold mb-2">Type {type}</h3>
        <h4 className="text-xl mb-3">{title}</h4>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="font-mono text-sm bg-black/30 px-3 py-1 rounded-full">
          {power}
        </div>
      </div>
    </div>
  );
};

export default KardashevLevel;