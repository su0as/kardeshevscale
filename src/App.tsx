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
    <div className="min-h-screen bg-black text-white font-mono flex flex-col">
      <Header level={kardashevLevel} power={currentPower} className="flex-none p-1.5" />
      
      <div className="flex-1 p-1.5 overflow-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-1.5">
          {/* Left Column */}
          <div className="lg:col-span-3 grid grid-cols-2 lg:grid-cols-1 gap-1.5 auto-rows-min">
            <div className="col-span-2 lg:col-span-1">
              <PowerGrid power={currentPower} />
            </div>
            <ResourceMonitor power={currentPower} />
            <TechnologyStatus level={kardashevLevel} />
            <RequiredAdvances level={kardashevLevel} />
          </div>

          {/* Right Column */}
          <div className="lg:col-span-9 flex flex-col gap-1.5">
            <ScaleVisualization 
              currentLevel={kardashevLevel} 
              selectedType={selectedType}
            />
            
            <div className="grid grid-cols-3 gap-1.5">
              {[1, 2, 3].map(type => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`p-1.5 rounded transition-all text-sm ${
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

      <div className="flex-none flex justify-center p-4 border-t border-white/10">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-32 h-32 rounded-lg object-cover"
        >
          <source src="https://images.beta.cosmos.so/31a76064-219f-4113-b42f-cb69e87e4cd7.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default App;