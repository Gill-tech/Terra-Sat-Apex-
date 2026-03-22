import { useState } from 'react';
import { MapPin, ChevronDown, ChevronUp } from 'lucide-react';

interface AdministrativeBoundariesProps {
  selectedCounty: string | null;
}

export function AdministrativeBoundaries({ selectedCounty }: AdministrativeBoundariesProps) {
  const [expanded, setExpanded] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState<'county' | 'subcounty' | 'ward'>('county');

  // Mock administrative data - in real app, this would come from OpenStreetMap/GIS APIs
  const administrativeData = {
    counties: 47,
    subcounties: 290,
    wards: 1450,
  };

  const kenyaCounties = [
    { name: 'Nairobi', subcounties: 17, wards: 85, population: '4.4M' },
    { name: 'Mombasa', subcounties: 6, wards: 30, population: '1.2M' },
    { name: 'Kisumu', subcounties: 7, wards: 35, population: '1.1M' },
    { name: 'Nakuru', subcounties: 11, wards: 55, population: '2.2M' },
    { name: 'Turkana', subcounties: 6, wards: 30, population: '926K' },
    { name: 'Garissa', subcounties: 7, wards: 35, population: '841K' },
    { name: 'Tana River', subcounties: 3, wards: 15, population: '316K' },
    { name: 'Marsabit', subcounties: 4, wards: 20, population: '459K' },
  ];

  return (
    <div className="absolute bottom-20 right-4 z-10">
      <div className="bg-[#1A3A3A]/95 backdrop-blur-sm border border-[#D4E89E]/20 rounded-lg overflow-hidden w-80">
        {/* Header */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full px-4 py-3 flex items-center justify-between hover:bg-[#0F2626]/50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-[#D4E89E]" />
            <div>
              <div className="text-white text-sm font-medium">Administrative Levels</div>
              <div className="text-gray-400 text-xs">
                {selectedCounty ? `${selectedCounty} County` : 'Kenya National'}
              </div>
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
            {/* Level Selector */}
            <div className="p-4 space-y-3">
              <div>
                <label className="text-xs text-gray-400 block mb-2">Display Level</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setSelectedLevel('county')}
                    className={`px-3 py-2 rounded text-xs transition-colors ${
                      selectedLevel === 'county'
                        ? 'bg-[#D4E89E] text-[#1A3A3A]'
                        : 'bg-[#0F2626] text-gray-300 hover:bg-[#0F2626]/60'
                    }`}
                  >
                    County
                  </button>
                  <button
                    onClick={() => setSelectedLevel('subcounty')}
                    className={`px-3 py-2 rounded text-xs transition-colors ${
                      selectedLevel === 'subcounty'
                        ? 'bg-[#D4E89E] text-[#1A3A3A]'
                        : 'bg-[#0F2626] text-gray-300 hover:bg-[#0F2626]/60'
                    }`}
                  >
                    Sub-County
                  </button>
                  <button
                    onClick={() => setSelectedLevel('ward')}
                    className={`px-3 py-2 rounded text-xs transition-colors ${
                      selectedLevel === 'ward'
                        ? 'bg-[#D4E89E] text-[#1A3A3A]'
                        : 'bg-[#0F2626] text-gray-300 hover:bg-[#0F2626]/60'
                    }`}
                  >
                    Ward
                  </button>
                </div>
              </div>

              {/* Statistics */}
              <div className="bg-[#0F2626] rounded-lg p-3 border border-[#D4E89E]/10">
                <div className="text-gray-400 text-xs mb-2">National Coverage</div>
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <div className="text-white text-lg font-light">{administrativeData.counties}</div>
                    <div className="text-gray-500 text-xs">Counties</div>
                  </div>
                  <div>
                    <div className="text-white text-lg font-light">{administrativeData.subcounties}</div>
                    <div className="text-gray-500 text-xs">Sub-Counties</div>
                  </div>
                  <div>
                    <div className="text-white text-lg font-light">{administrativeData.wards}</div>
                    <div className="text-gray-500 text-xs">Wards</div>
                  </div>
                </div>
              </div>

              {/* Selected County Details */}
              {selectedCounty && (
                <div className="bg-gradient-to-r from-[#D4E89E]/10 to-[#D4E89E]/5 rounded-lg p-3 border border-[#D4E89E]/20">
                  <div className="text-white text-xs font-medium mb-2 flex items-center gap-2">
                    <MapPin className="w-3 h-3 text-[#D4E89E]" />
                    {selectedCounty} County Breakdown
                  </div>
                  {kenyaCounties
                    .filter(c => c.name === selectedCounty)
                    .map((county, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-400">Sub-Counties</span>
                          <span className="text-[#D4E89E] font-medium">{county.subcounties}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-400">Wards</span>
                          <span className="text-[#D4E89E] font-medium">{county.wards}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-400">Population</span>
                          <span className="text-[#D4E89E] font-medium">{county.population}</span>
                        </div>
                      </div>
                    ))}
                </div>
              )}

              {/* Boundary Display Info */}
              <div className="bg-[#0F2626] rounded-lg p-3 border border-[#D4E89E]/10">
                <div className="text-gray-400 text-xs mb-2">Current Display</div>
                <div className="flex items-center justify-between">
                  <span className="text-white text-xs">
                    {selectedLevel === 'county' && 'County boundaries'}
                    {selectedLevel === 'subcounty' && 'Sub-county divisions'}
                    {selectedLevel === 'ward' && 'Ward-level detail'}
                  </span>
                  <div className="flex items-center gap-1">
                    <div className="w-8 h-0.5 bg-[#D4E89E]"></div>
                    <div className={`w-2 h-2 rounded-full ${
                      selectedLevel === 'county' ? 'bg-blue-400' :
                      selectedLevel === 'subcounty' ? 'bg-green-400' :
                      'bg-purple-400'
                    }`}></div>
                  </div>
                </div>
              </div>

              {/* Data Source */}
              <div className="text-xs text-gray-500 pt-2 border-t border-[#D4E89E]/10">
                Source: OpenStreetMap · Kenya National Bureau of Statistics
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
