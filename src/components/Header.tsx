import React from 'react';
import { Activity } from 'lucide-react';

interface HeaderProps {
  className?: string;
  level: number;
  power: number;
}

export const Header: React.FC<HeaderProps> = ({ className, level, power }) => (
  <div className={`bg-black border border-white/10 rounded p-2 flex justify-between items-center ${className}`}>
    <div className="flex items-center gap-2">
      <Activity className="w-5 h-5 text-white" />
      <h1 className="text-lg font-bold text-white">
        KARDASHEV SCALE 
      </h1>
    </div>
    
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <span className="text-xs text-white/70">Doing something cracked? DM on</span>
        <a
          href="https://x.com/suhasxi"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded text-xs transition-all"
        >
          X
        </a>
        <a
          href="https://www.paypal.com/ncp/payment/QGV8YP4D8LVFC"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded text-xs transition-all"
        >
          Donate
        </a>
      </div>
      
      <div className="flex gap-4 text-xs">
        <div className="bg-black border border-white/10 px-3 py-1 rounded">
          <span className="text-white/70 mr-2">POWER:</span>
          <span>{power.toExponential(2)} W</span>
        </div>
        <div className="bg-black border border-white/10 px-3 py-1 rounded">
          <span className="text-white/70 mr-2">K-LEVEL:</span>
          <span>{level.toFixed(4)}</span>
        </div>
      </div>
    </div>
  </div>
);

export default Header;