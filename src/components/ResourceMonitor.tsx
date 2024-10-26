import React from 'react';
import { Database } from 'lucide-react';

interface ResourceMonitorProps {
  power: number;
}

export const ResourceMonitor: React.FC<ResourceMonitorProps> = ({ power }) => (
  <div className="bg-black border border-white/10 rounded p-2">
    <div className="flex items-center gap-2 mb-2">
      <Database className="w-4 h-4 text-white" />
      <h2 className="text-sm">RESOURCE MONITOR</h2>
    </div>
    <div className="space-y-2 text-xs">
      <div className="flex justify-between">
        <span>Rare Elements</span>
        <span className="text-yellow-400">LIMITED</span>
      </div>
      <div className="flex justify-between">
        <span>Helium-3</span>
        <span className="text-red-400">SCARCE</span>
      </div>
      <div className="flex justify-between">
        <span>Fresh Water</span>
        <span className="text-orange-400">STRESSED</span>
      </div>
      <div className="flex justify-between">
        <span>Computing Power</span>
        <span className="text-green-400">ADEQUATE</span>
      </div>
    </div>
  </div>
);

export default ResourceMonitor;