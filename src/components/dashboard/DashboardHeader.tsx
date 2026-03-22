import { Droplets, Sun, Calendar } from 'lucide-react';
import { HazardType, TimeRange } from '../../pages/Dashboard';

interface DashboardHeaderProps {
  hazardType: HazardType;
  setHazardType: (type: HazardType) => void;
  timeRange: TimeRange;
  setTimeRange: (range: TimeRange) => void;
}

export function DashboardHeader({
  hazardType,
  setHazardType,
  timeRange,
  setTimeRange,
}: DashboardHeaderProps) {
  const timeRanges: { value: TimeRange; label: string }[] = [
    { value: '24h', label: 'Last 24 Hours' },
    { value: '7d', label: 'Last 7 Days' },
    { value: '30d', label: 'Last 30 Days' },
    { value: 'season', label: 'Current Season' },
  ];

  return (
    <div className="bg-[#1A3A3A] border-b border-[#D4E89E]/20 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left: Hazard Type Selector */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setHazardType('flood')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              hazardType === 'flood'
                ? 'bg-[#D4E89E] text-[#1A3A3A]'
                : 'bg-[#0F2626] text-gray-300 hover:bg-[#0F2626]/60'
            }`}
          >
            <Droplets className="w-5 h-5" />
            Flood Intelligence
          </button>
          <button
            onClick={() => setHazardType('drought')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              hazardType === 'drought'
                ? 'bg-[#D4E89E] text-[#1A3A3A]'
                : 'bg-[#0F2626] text-gray-300 hover:bg-[#0F2626]/60'
            }`}
          >
            <Sun className="w-5 h-5" />
            Drought Intelligence
          </button>
        </div>

        {/* Center: Location & Status */}
        <div className="text-center">
          <div className="text-white text-lg">Kenya · National Overview</div>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mt-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Live Monitoring Active
          </div>
        </div>

        {/* Right: Time Range Selector */}
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-gray-400" />
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value as TimeRange)}
            className="bg-[#0F2626] text-gray-300 px-4 py-2 rounded-lg border border-[#D4E89E]/20 focus:outline-none focus:border-[#D4E89E]"
          >
            {timeRanges.map((range) => (
              <option key={range.value} value={range.value}>
                {range.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
