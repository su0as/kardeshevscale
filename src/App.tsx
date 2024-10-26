import React, { useState, useEffect } from 'react';
import { calculateCurrentLevel } from './utils/kardashev';
import Header from './components/Header';
import PowerGrid from './components/PowerGrid';
import CivilizationPanel from './components/CivilizationPanel';
import ResourceMonitor from './components/ResourceMonitor';
import TechnologyStatus from './components/TechnologyStatus';
import RequiredAdvances from './components/RequiredAdvances';
import ScaleVisualization from './components/ScaleVisualization';

function App() {
  const [currentPower, setCurrentPower] = useState(1.74e13);
  const [selectedType, setSelectedType] = useState(1);
  const kardashevLevel = calculateCurrentLevel(currentPower);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPower(prev => prev * 1.00000001);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen bg-black text-white p-2 flex flex-col gap-2 font-mono max-h-screen overflow-hidden">
      <Header level={kardashevLevel} power={currentPower} />
      
      <div className="grid grid-cols-12 gap-2 flex-1 min-h-0">
        {/* Left Column */}
        <div className="col-span-3 grid grid-rows-4 gap-2 max-h-full">
          <PowerGrid power={currentPower} />
          <ResourceMonitor power={currentPower} />
          <TechnologyStatus level={kardashevLevel} />
          <RequiredAdvances level={kardashevLevel} />
        </div>

        {/* Right Column */}
        <div className="col-span-9 flex flex-col gap-2 max-h-full">
          <ScaleVisualization currentLevel={kardashevLevel} />
          
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map(type => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`p-2 rounded transition-all ${
                  selectedType === type 
                    ? 'bg-white/20 border border-white/40' 
                    : 'bg-white/5 border border-white/10 hover:bg-white/10'
                }`}
              >
                Type {type}
              </button>
            ))}
          </div>
          
          <CivilizationPanel 
            type={selectedType} 
            currentLevel={kardashevLevel} 
            expanded={true}
          />
        </div>
      </div>
    </div>
  );
}

export default App;