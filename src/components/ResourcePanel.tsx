import React from 'react';
import { calculateResourceRequirements } from '../utils/resources';

interface ResourcePanelProps {
  currentPower: number;
}

const ResourcePanel: React.FC<ResourcePanelProps> = ({ currentPower }) => {
  const resources = calculateResourceRequirements(currentPower);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {resources.map((resource) => (
        <div
          key={resource.name}
          className="bg-gray-900/50 p-6 rounded-lg"
        >
          <h3 className="text-xl font-semibold mb-3">{resource.name}</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-400">Required:</span>
              <span className="font-mono">{resource.required}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Available:</span>
              <span className="font-mono">{resource.available}</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${resource.percentage}%` }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResourcePanel;