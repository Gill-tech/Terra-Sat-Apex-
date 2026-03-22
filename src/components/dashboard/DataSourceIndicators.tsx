import { useState, useEffect } from 'react';
import { Satellite, Cloud, Database, Radio, ChevronDown, ChevronUp } from 'lucide-react';

export function DataSourceIndicators() {
  const [expanded, setExpanded] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdate(new Date());
    }, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  const dataSources = [
    {
      name: 'Sentinel-1 SAR',
      provider: 'Copernicus',
      status: 'active',
      accuracy: 95,
      lastPass: '18 mins ago',
      coverage: '100%',
      icon: Satellite,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
    },
    {
      name: 'Sentinel-2 Optical',
      provider: 'Copernicus',
      status: 'active',
      accuracy: 93,
      lastPass: '2.3 hours ago',
      coverage: '100%',
      icon: Satellite,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
    },
    {
      name: 'ERA5 Climate',
      provider: 'Copernicus',
      status: 'active',
      accuracy: 89,
      lastPass: '45 mins ago',
      coverage: 'Regional',
      icon: Cloud,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
    },
    {
      name: 'OpenStreetMap',
      provider: 'OSM Foundation',
      status: 'active',
      accuracy: 97,
      lastPass: 'Real-time',
      coverage: 'Kenya',
      icon: Database,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
    },
  ];

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  return (
    <div className="absolute top-4 left-4 z-10">
      <div className="bg-[#1A3A3A]/95 backdrop-blur-sm border border-[#D4E89E]/20 rounded-lg overflow-hidden">
        {/* Header - Always Visible */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full px-4 py-3 flex items-center justify-between hover:bg-[#0F2626]/50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="relative">
              <Radio className="w-5 h-5 text-[#D4E89E]" />
              <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <div>
              <div className="text-white text-sm font-medium">Live Data Feeds</div>
              <div className="text-gray-400 text-xs">{dataSources.length} sources active</div>
            </div>
          </div>
          {expanded ? (
            <ChevronUp className="w-4 h-4 text-gray-400" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-400" />
          )}
        </button>

        {/* Expanded Content */}
        {expanded && (
          <div className="border-t border-[#D4E89E]/10">
            <div className="p-4 space-y-3">
              {dataSources.map((source, index) => {
                const Icon = source.icon;
                return (
                  <div
                    key={index}
                    className={`${source.bgColor} rounded-lg p-3 border border-[#D4E89E]/10`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Icon className={`w-4 h-4 ${source.color}`} />
                        <div>
                          <div className="text-white text-xs font-medium">{source.name}</div>
                          <div className="text-gray-400 text-xs">{source.provider}</div>
                        </div>
                      </div>
                      <span className="flex items-center gap-1 text-xs text-green-400">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                        LIVE
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div>
                        <div className="text-gray-500">Accuracy</div>
                        <div className={`${source.color} font-medium`}>{source.accuracy}%</div>
                      </div>
                      <div>
                        <div className="text-gray-500">Last Update</div>
                        <div className="text-gray-300">{source.lastPass}</div>
                      </div>
                      <div>
                        <div className="text-gray-500">Coverage</div>
                        <div className="text-gray-300">{source.coverage}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Copernicus Hub Info */}
            <div className="border-t border-[#D4E89E]/10 bg-gradient-to-r from-blue-500/5 to-purple-500/5 p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Satellite className="w-5 h-5 text-blue-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white text-xs font-medium mb-1">Copernicus Open Access Hub</div>
                  <p className="text-gray-400 text-xs leading-relaxed mb-2">
                    ESA's free satellite data platform providing real-time Earth observation
                  </p>
                  <div className="flex items-center gap-4 text-xs">
                    <div>
                      <span className="text-gray-500">Status:</span>{' '}
                      <span className="text-green-400">Operational</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Latency:</span>{' '}
                      <span className="text-[#D4E89E]">12-24h</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* System Time */}
            <div className="border-t border-[#D4E89E]/10 px-4 py-2 bg-[#0F2626]/50">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500">System Time (EAT)</span>
                <span className="text-[#D4E89E] font-mono">{formatTime(lastUpdate)}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
