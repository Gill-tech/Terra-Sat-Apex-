import { useState } from 'react';
import { Layers, MapPin, Filter, Bell, Download, ChevronDown, ChevronUp, Database } from 'lucide-react';
import { HazardType } from '../../pages/Dashboard';

interface DashboardSidebarProps {
  hazardType: HazardType;
  selectedCounty: string | null;
  setSelectedCounty: (county: string | null) => void;
  setShowAlertPanel: (show: boolean) => void;
  setShowDataPipeline: (show: boolean) => void;
}

const kenyanCounties = [
  'Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Eldoret',
  'Kakamega', 'Nyeri', 'Meru', 'Machakos', 'Kiambu',
  'Garissa', 'Turkana', 'Marsabit', 'Mandera', 'Wajir',
  'Kilifi', 'Kwale', 'Taita Taveta', 'Tana River', 'Lamu'
];

export function DashboardSidebar({
  hazardType,
  selectedCounty,
  setSelectedCounty,
  setShowAlertPanel,
  setShowDataPipeline,
}: DashboardSidebarProps) {
  const [showLayers, setShowLayers] = useState(true);
  const [showFilters, setShowFilters] = useState(true);
  const [layers, setLayers] = useState({
    riskScore: true,
    population: true,
    infrastructure: false,
    floodExtent: hazardType === 'flood',
    vegetationHealth: hazardType === 'drought',
  });

  const toggleLayer = (layer: keyof typeof layers) => {
    setLayers(prev => ({ ...prev, [layer]: !prev[layer] }));
  };

  return (
    <div className="w-80 bg-[#1A3A3A] border-r border-[#D4E89E]/20 overflow-y-auto">
      <div className="p-4 space-y-4">
        {/* Data Pipeline Button */}
        <button
          onClick={() => setShowDataPipeline(true)}
          className="w-full flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-white rounded-lg hover:from-blue-500/20 hover:to-purple-500/20 transition-all border border-blue-500/20"
        >
          <Database className="w-5 h-5 text-blue-400" />
          <div className="flex-1 text-left">
            <div className="text-sm font-medium">Data Architecture</div>
            <div className="text-xs text-gray-400">View pipeline & sources</div>
          </div>
        </button>

        {/* Layers Section */}
        <div className="bg-[#0F2626] rounded-lg border border-[#D4E89E]/10">
          <button
            onClick={() => setShowLayers(!showLayers)}
            className="w-full flex items-center justify-between p-4 text-white hover:bg-[#1A3A3A]/50 transition-colors"
          >
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#D4E89E]" />
              <span>Map Layers</span>
            </div>
            {showLayers ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          
          {showLayers && (
            <div className="p-4 pt-0 space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={layers.riskScore}
                  onChange={() => toggleLayer('riskScore')}
                  className="w-4 h-4 accent-[#D4E89E]"
                />
                <span className="text-sm text-gray-300">Risk Score Heatmap</span>
              </label>
              
              {hazardType === 'flood' && (
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={layers.floodExtent}
                    onChange={() => toggleLayer('floodExtent')}
                    className="w-4 h-4 accent-[#D4E89E]"
                  />
                  <span className="text-sm text-gray-300">Flood Extent</span>
                </label>
              )}
              
              {hazardType === 'drought' && (
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={layers.vegetationHealth}
                    onChange={() => toggleLayer('vegetationHealth')}
                    className="w-4 h-4 accent-[#D4E89E]"
                  />
                  <span className="text-sm text-gray-300">Vegetation Health (NDVI)</span>
                </label>
              )}
              
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={layers.population}
                  onChange={() => toggleLayer('population')}
                  className="w-4 h-4 accent-[#D4E89E]"
                />
                <span className="text-sm text-gray-300">Population Exposure</span>
              </label>
              
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={layers.infrastructure}
                  onChange={() => toggleLayer('infrastructure')}
                  className="w-4 h-4 accent-[#D4E89E]"
                />
                <span className="text-sm text-gray-300">Critical Infrastructure</span>
              </label>
            </div>
          )}
        </div>

        {/* County Selector */}
        <div className="bg-[#0F2626] rounded-lg border border-[#D4E89E]/10">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="w-full flex items-center justify-between p-4 text-white hover:bg-[#1A3A3A]/50 transition-colors"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#D4E89E]" />
              <span>Location Filter</span>
            </div>
            {showFilters ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          
          {showFilters && (
            <div className="p-4 pt-0">
              <select
                value={selectedCounty || ''}
                onChange={(e) => setSelectedCounty(e.target.value || null)}
                className="w-full bg-[#1A3A3A] text-gray-300 px-3 py-2 rounded border border-[#D4E89E]/20 focus:outline-none focus:border-[#D4E89E] text-sm"
              >
                <option value="">All Counties (National)</option>
                {kenyanCounties.map((county) => (
                  <option key={county} value={county}>
                    {county} County
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="space-y-2">
          <button
            onClick={() => setShowAlertPanel(true)}
            className="w-full flex items-center gap-3 px-4 py-3 bg-[#D4E89E] text-[#1A3A3A] rounded-lg hover:bg-[#c5d98f] transition-colors"
          >
            <Bell className="w-5 h-5" />
            <span>Create Alert</span>
          </button>
          
          <button className="w-full flex items-center gap-3 px-4 py-3 bg-[#0F2626] text-gray-300 rounded-lg hover:bg-[#0F2626]/60 transition-colors border border-[#D4E89E]/20">
            <Download className="w-5 h-5" />
            <span>Export Data</span>
          </button>
        </div>

        {/* Export Options - Enhanced */}
        <div className="bg-[#0F2626] rounded-lg border border-[#D4E89E]/10 p-4">
          <div className="flex items-center gap-2 mb-3">
            <Download className="w-5 h-5 text-[#D4E89E]" />
            <span className="text-white text-sm font-medium">Quick Export</span>
          </div>
          <div className="space-y-2 text-xs">
            <button className="w-full text-left px-3 py-2 bg-[#1A3A3A] text-gray-300 rounded hover:bg-[#1A3A3A]/60 transition-colors">
              GeoJSON (Web Maps)
            </button>
            <button className="w-full text-left px-3 py-2 bg-[#1A3A3A] text-gray-300 rounded hover:bg-[#1A3A3A]/60 transition-colors">
              Shapefile (GIS)
            </button>
            <button className="w-full text-left px-3 py-2 bg-[#1A3A3A] text-gray-300 rounded hover:bg-[#1A3A3A]/60 transition-colors">
              Raster (TIFF)
            </button>
            <button className="w-full text-left px-3 py-2 bg-[#1A3A3A] text-gray-300 rounded hover:bg-[#1A3A3A]/60 transition-colors">
              CSV Report
            </button>
          </div>
        </div>

        {/* Risk Legend */}
        <div className="bg-[#0F2626] rounded-lg border border-[#D4E89E]/10 p-4">
          <div className="flex items-center gap-2 mb-3">
            <Filter className="w-5 h-5 text-[#D4E89E]" />
            <span className="text-white">Risk Scale</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-3 bg-green-500 rounded"></div>
              <span className="text-xs text-gray-400">Low (0-30)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-3 bg-yellow-500 rounded"></div>
              <span className="text-xs text-gray-400">Moderate (31-60)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-3 bg-orange-500 rounded"></div>
              <span className="text-xs text-gray-400">High (61-80)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-3 bg-red-500 rounded"></div>
              <span className="text-xs text-gray-400">Critical (81-100)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}