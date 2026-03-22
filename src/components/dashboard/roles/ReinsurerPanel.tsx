import { PieChart, Activity, AlertCircle, CheckCircle } from 'lucide-react';
import { Card } from '../../ui/card';
import { Badge } from '../../ui/badge';
import type { HazardType } from '../../../pages/Dashboard';

interface ReinsurerPanelProps {
  hazardType: HazardType;
  selectedCounty: string | null;
}

export function ReinsurerPanel({ hazardType, selectedCounty }: ReinsurerPanelProps) {
  const portfolioValue = '$248M';
  const exposedValue = '$64M';
  const exposurePercent = 25.8;

  return (
    <div className="w-80 bg-[#1A3A3A] border-l border-[#D4E89E]/20 overflow-y-auto">
      <div className="p-6 space-y-6">
        <div>
          <h3 className="text-white text-lg mb-1">Catastrophe Monitoring</h3>
          <p className="text-gray-400 text-sm">Real-time portfolio exposure</p>
        </div>

        {/* Event Region */}
        <Card className="bg-[#0F2727] border-[#D4E89E]/20 p-4">
          <p className="text-gray-400 text-xs mb-2">Event Region</p>
          <p className="text-white">{selectedCounty || 'Regional Overview'}</p>
        </Card>

        {/* Portfolio Overview */}
        <Card className="bg-[#0F2727] border-[#D4E89E]/20 p-4">
          <h4 className="text-white text-sm mb-4 flex items-center gap-2">
            <PieChart className="w-4 h-4 text-[#D4E89E]" />
            Portfolio Exposure
          </h4>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400 text-sm">Total Portfolio Value</span>
                <span className="text-white text-lg">{portfolioValue}</span>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400 text-sm">Exposed to Event</span>
                <span className="text-[#D4E89E] text-lg">{exposedValue}</span>
              </div>
              <div className="h-2 bg-[#1A3A3A] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#D4E89E] rounded-full"
                  style={{ width: `${exposurePercent}%` }}
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">{exposurePercent}% of portfolio</p>
            </div>
          </div>
        </Card>

        {/* Active Events */}
        <Card className="bg-[#0F2727] border-[#D4E89E]/20 p-4">
          <h4 className="text-white text-sm mb-4 flex items-center gap-2">
            <Activity className="w-4 h-4 text-[#D4E89E]" />
            Active Catastrophic Events
          </h4>
          <div className="space-y-3">
            <div className="p-3 bg-[#1A3A3A] rounded border border-red-500/30">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white text-sm">Nairobi Flooding</span>
                <Badge className="bg-red-500/20 text-red-300 border-red-500">Critical</Badge>
              </div>
              <p className="text-xs text-gray-400 mb-2">Est. Loss: $12.4M</p>
              <p className="text-xs text-gray-500">Updated 15 mins ago</p>
            </div>
            <div className="p-3 bg-[#1A3A3A] rounded border border-orange-500/30">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white text-sm">Turkana Drought</span>
                <Badge className="bg-orange-500/20 text-orange-300 border-orange-500">High</Badge>
              </div>
              <p className="text-xs text-gray-400 mb-2">Est. Loss: $6.8M</p>
              <p className="text-xs text-gray-500">Updated 2 hours ago</p>
            </div>
          </div>
        </Card>

        {/* Risk Metrics */}
        <Card className="bg-[#0F2727] border-[#D4E89E]/20 p-4">
          <h4 className="text-white text-sm mb-4">Event Metrics</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">Affected Policies</span>
              <span className="text-white text-sm">1,847</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">Expected Claims</span>
              <span className="text-white text-sm">623</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">Avg. Claim Size</span>
              <span className="text-white text-sm">$19.9K</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">Reserve Adequacy</span>
              <Badge className="bg-green-500/20 text-green-300 border-green-500">Good</Badge>
            </div>
          </div>
        </Card>

        {/* Modeling Confidence */}
        <Card className="bg-gradient-to-br from-[#D4E89E]/10 to-[#D4E89E]/5 border-[#D4E89E]/30 p-4">
          <div className="flex items-center gap-2 mb-3">
            <AlertCircle className="w-5 h-5 text-[#D4E89E]" />
            <h4 className="text-white text-sm">Loss Estimation</h4>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">Best Case</span>
              <span className="text-white">$15.2M</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">Most Likely</span>
              <span className="text-[#D4E89E] font-medium">$19.2M</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">Worst Case</span>
              <span className="text-white">$28.6M</span>
            </div>
            <div className="border-t border-[#D4E89E]/20 pt-2 mt-2">
              <p className="text-xs text-gray-400">
                Model confidence: 88% (High)
              </p>
            </div>
          </div>
        </Card>

        {/* Quick Actions */}
        <div className="space-y-2">
          <button className="w-full bg-[#D4E89E] text-[#1A3A3A] py-2 px-4 rounded-lg hover:bg-[#C8DD8C] transition-colors">
            Generate CAT Report
          </button>
          <button className="w-full bg-[#0F2727] text-white border border-[#D4E89E]/20 py-2 px-4 rounded-lg hover:border-[#D4E89E]/40 transition-colors">
            View Portfolio Heatmap
          </button>
        </div>

        <div className="flex items-center gap-2 text-xs text-gray-500">
          <CheckCircle className="w-4 h-4 text-[#D4E89E]" />
          <span>Live satellite monitoring active</span>
        </div>
      </div>
    </div>
  );
}
