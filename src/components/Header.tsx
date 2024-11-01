import React from 'react';
import { Activity } from 'lucide-react';

interface HeaderProps {
  className?: string;
  level: number;
  power: number;
}

export const Header: React.FC<HeaderProps> = ({ className, level, power }) => (
  <div className={`bg-black border border-white/10 rounded p-2 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 ${className}`}>
    <div className="flex items-center gap-2">
      <Activity className="w-5 h-5 text-white" />
      <h1 className="text-lg font-bold text-white">
        KARDASHEV SCALE 
      </h1>
    </div>
    
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full sm:w-auto">
      <div className="flex items-center gap-2 text-xs order-2 sm:order-1">
        <span className="text-white/70 whitespace-nowrap">Connect:</span>
        <a
          href="https://x.com/suhasxi"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded transition-all"
        >
          X
        </a>
        <a
          href="https://www.paypal.com/ncp/payment/QGV8YP4D8LVFC"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded transition-all"
        >
          Donate
        </a>
      </div>
      
      <div className="flex gap-2 text-xs order-1 sm:order-2 w-full sm:w-auto">
        <div className="bg-black border border-white/10 px-3 py-1 rounded flex-1 sm:flex-none">
          <span className="text-white/70 mr-2">POWER:</span>
          <span className="font-mono">{power.toExponential(2)} W</span>
        </div>
        <div className="bg-black border border-white/10 px-3 py-1 rounded flex-1 sm:flex-none">
          <span className="text-white/70 mr-2">K-LEVEL:</span>
          <span className="font-mono">{level.toFixed(4)}</span>
        </div>
      </div>
    </div>
  </div>
);

export default Header;