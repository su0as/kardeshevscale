import React from 'react';
import { Battery, Zap } from 'lucide-react';

interface PowerGridProps {
  power: number;
}

export const PowerGrid: React.FC<PowerGridProps> = ({ power }) => (
  <div className="bg-black border border-white/10 rounded p-2">
    <div className="flex items-center gap-2 mb-2">
      <Zap className="w-4 h-4 text-white" />
      <h2 className="text-sm">POWER GRID STATUS</h2>
    </div>
    <div className="space-y-2 text-xs">
      <div className="flex justify-between">
        <span>Fossil Fuels</span>
        <div className="flex items-center gap-1">
          <Battery className="w-3 h-3" />
          <span>63%</span>
        </div>
      </div>
      <div className="flex justify-between">
        <span>Renewable</span>
        <div className="flex items-center gap-1">
          <Battery className="w-3 h-3" />
          <span>27%</span>
        </div>
      </div>
      <div className="flex justify-between">
        <span>Nuclear</span>
        <div className="flex items-center gap-1">
          <Battery className="w-3 h-3" />
          <span>10%</span>
        </div>
      </div>
    </div>
  </div>
);

export default PowerGrid;