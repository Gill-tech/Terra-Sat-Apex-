import { useState, useEffect } from 'react';
import { MapPin, ZoomIn, ZoomOut, Maximize2, Layers as LayersIcon } from 'lucide-react';
import { HazardType, TimeRange } from '../../pages/Dashboard';
import { DataSourceIndicators } from './DataSourceIndicators';
import { AdministrativeBoundaries } from './AdministrativeBoundaries';

interface DashboardMapProps {
  hazardType: HazardType;
  timeRange: TimeRange;
  selectedCounty: string | null;
  setSelectedCounty: (county: string | null) => void;
}

// Mock data for visualization
const floodHotspots = [
  { name: 'Tana River', risk: 92, lat: -1.5, lng: 39.8, severity: 'critical' },
  { name: 'Garissa', risk: 78, lat: -0.45, lng: 39.65, severity: 'high' },
  { name: 'Kilifi', risk: 65, lat: -3.63, lng: 39.85, severity: 'high' },
  { name: 'Kisumu', risk: 54, lat: -0.09, lng: 34.77, severity: 'moderate' },
];

const droughtHotspots = [
  { name: 'Turkana', risk: 88, lat: 3.1, lng: 35.6, severity: 'critical' },
  { name: 'Marsabit', risk: 82, lat: 2.3, lng: 37.98, severity: 'critical' },
  { name: 'Wajir', risk: 76, lat: 1.75, lng: 40.06, severity: 'high' },
  { name: 'Mandera', risk: 71, lat: 3.93, lng: 41.85, severity: 'high' },
];

export function DashboardMap({
  hazardType,
  timeRange,
  selectedCounty,
  setSelectedCounty,
}: DashboardMapProps) {
  const [zoom, setZoom] = useState(1);
  const [activeHotspots, setActiveHotspots] = useState(floodHotspots);
  const [showOSMLayer, setShowOSMLayer] = useState(true);

  useEffect(() => {
    setActiveHotspots(hazardType === 'flood' ? floodHotspots : droughtHotspots);
  }, [hazardType]);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-500';
      case 'high': return 'bg-orange-500';
      case 'moderate': return 'bg-yellow-500';
      default: return 'bg-green-500';
    }
  };

  const getSeverityBorder = (severity: string) => {
    switch (severity) {
      case 'critical': return 'border-red-500';
      case 'high': return 'border-orange-500';
      case 'moderate': return 'border-yellow-500';
      default: return 'border-green-500';
    }
  };

  return (
    <div className="flex-1 relative bg-[#0F2626]">
      {/* Data Source Indicators */}
      <DataSourceIndicators />

      {/* Administrative Boundaries Control */}
      <AdministrativeBoundaries selectedCounty={selectedCounty} />

      {/* Map Container */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Kenya Map Visualization */}
        <div className="w-full h-full relative flex items-center justify-center p-8">
          {/* OpenStreetMap Base Layer */}
          <div
            className="relative w-full h-full rounded-lg border-2 border-[#D4E89E]/20 overflow-hidden bg-[#0F2626]"
          >
            {/* OSM Tile Layer with Kenya centered */}
            {showOSMLayer && (
              <div className="absolute inset-0 opacity-40">
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=33.9098%2C-4.6784%2C41.8854%2C5.5060&layer=mapnik&marker=0.1762%2C37.9062"
                  className="w-full h-full border-0"
                  style={{ 
                    filter: 'grayscale(100%) contrast(1.2)',
                    pointerEvents: 'none'
                  }}
                  title="Kenya OpenStreetMap"
                />
              </div>
            )}

            {/* Risk Overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: hazardType === 'flood'
                  ? 'radial-gradient(circle at 60% 60%, rgba(59, 130, 246, 0.15), rgba(15, 38, 38, 0.3))'
                  : 'radial-gradient(circle at 40% 40%, rgba(234, 179, 8, 0.15), rgba(15, 38, 38, 0.3))',
              }}
            >
            </div>

            {/* Kenya Outline Shape */}
            <svg
              viewBox="0 0 800 600"
              className="absolute inset-0 w-full h-full opacity-20"
              style={{ transform: `scale(${zoom})` }}
            >
              {/* Simplified Kenya shape */}
              <path
                d="M 300 100 L 450 80 L 550 120 L 600 200 L 620 300 L 580 400 L 520 480 L 450 520 L 380 500 L 320 450 L 280 380 L 260 280 L 280 180 Z"
                stroke="#D4E89E"
                strokeWidth="2"
                fill="rgba(212, 232, 158, 0.05)"
              />
            </svg>

            {/* Risk Hotspots */}
            {activeHotspots.map((hotspot, index) => {
              const x = 300 + (hotspot.lng - 35) * 40;
              const y = 300 - (hotspot.lat + 1) * 60;
              
              return (
                <div
                  key={hotspot.name}
                  className="absolute cursor-pointer group"
                  style={{
                    left: `${(x / 800) * 100}%`,
                    top: `${(y / 600) * 100}%`,
                    transform: `translate(-50%, -50%) scale(${zoom})`,
                  }}
                  onClick={() => setSelectedCounty(hotspot.name)}
                >
                  {/* Pulsing risk indicator */}
                  <div className={`w-16 h-16 rounded-full ${getSeverityColor(hotspot.severity)} opacity-30 animate-ping absolute`}></div>
                  <div className={`w-12 h-12 rounded-full ${getSeverityColor(hotspot.severity)} border-2 border-white flex items-center justify-center`}>
                    <span className="text-white text-xs font-bold">{hotspot.risk}</span>
                  </div>
                  
                  {/* Tooltip */}
                  <div className={`absolute left-1/2 -translate-x-1/2 -top-16 bg-[#1A3A3A] border-2 ${getSeverityBorder(hotspot.severity)} px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10`}>
                    <div className="text-white text-sm font-medium">{hotspot.name}</div>
                    <div className="text-gray-300 text-xs">Risk Score: {hotspot.risk}/100</div>
                    <div className={`text-xs ${hotspot.severity === 'critical' ? 'text-red-400' : hotspot.severity === 'high' ? 'text-orange-400' : 'text-yellow-400'}`}>
                      {hotspot.severity.toUpperCase()}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Hazard-specific overlay visualizations */}
            {hazardType === 'flood' && (
              <div className="absolute inset-0 pointer-events-none">
                <div
                  className="absolute w-64 h-64 rounded-full bg-blue-500/20 blur-3xl animate-pulse"
                  style={{ left: '55%', top: '55%' }}
                ></div>
              </div>
            )}

            {hazardType === 'drought' && (
              <div className="absolute inset-0 pointer-events-none">
                <div
                  className="absolute w-64 h-64 rounded-full bg-yellow-500/20 blur-3xl animate-pulse"
                  style={{ left: '35%', top: '35%' }}
                ></div>
              </div>
            )}

            {/* County Label if selected */}
            {selectedCounty && (
              <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-[#1A3A3A] border border-[#D4E89E] px-6 py-3 rounded-lg">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#D4E89E]" />
                  <span className="text-white font-medium">{selectedCounty} County</span>
                </div>
              </div>
            )}

            {/* Time Indicator */}
            <div className="absolute bottom-4 left-4 bg-[#1A3A3A]/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-[#D4E89E]/20">
              <div className="text-gray-400 text-xs">Time Period</div>
              <div className="text-white text-sm font-medium">
                {timeRange === '24h' ? 'Last 24 Hours' :
                 timeRange === '7d' ? 'Last 7 Days' :
                 timeRange === '30d' ? 'Last 30 Days' :
                 'Current Season'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Controls */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
        <button
          onClick={() => setZoom(Math.min(zoom + 0.2, 2))}
          className="bg-[#1A3A3A] p-3 rounded-lg border border-[#D4E89E]/20 hover:bg-[#1A3A3A]/80 transition-colors"
        >
          <ZoomIn className="w-5 h-5 text-[#D4E89E]" />
        </button>
        <button
          onClick={() => setZoom(Math.max(zoom - 0.2, 0.6))}
          className="bg-[#1A3A3A] p-3 rounded-lg border border-[#D4E89E]/20 hover:bg-[#1A3A3A]/80 transition-colors"
        >
          <ZoomOut className="w-5 h-5 text-[#D4E89E]" />
        </button>
        <button
          onClick={() => setZoom(1)}
          className="bg-[#1A3A3A] p-3 rounded-lg border border-[#D4E89E]/20 hover:bg-[#1A3A3A]/80 transition-colors"
        >
          <Maximize2 className="w-5 h-5 text-[#D4E89E]" />
        </button>
        <button
          onClick={() => setShowOSMLayer(!showOSMLayer)}
          className="bg-[#1A3A3A] p-3 rounded-lg border border-[#D4E89E]/20 hover:bg-[#1A3A3A]/80 transition-colors"
        >
          <LayersIcon className="w-5 h-5 text-[#D4E89E]" />
        </button>
      </div>
    </div>
  );
}