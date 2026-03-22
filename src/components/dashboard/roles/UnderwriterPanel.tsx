import { TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';
import { Card } from '../../ui/card';
import { Badge } from '../../ui/badge';
import type { HazardType } from '../../../pages/Dashboard';

interface UnderwriterPanelProps {
  hazardType: HazardType;
  selectedCounty: string | null;
}

export function UnderwriterPanel({ hazardType, selectedCounty }: UnderwriterPanelProps) {
  const floodScore = selectedCounty ? 7.2 : 6.8;
  const droughtIndex = selectedCounty ? 4.5 : 5.2;
  
  const riskLevel = hazardType === 'flood' 
    ? (floodScore > 7 ? 'High' : floodScore > 5 ? 'Medium' : 'Low')
    : (droughtIndex > 6 ? 'High' : droughtIndex > 4 ? 'Medium' : 'Low');

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'High': return 'bg-red-500/20 text-red-300 border-red-500';
      case 'Medium': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500';
      default: return 'bg-green-500/20 text-green-300 border-green-500';
    }
  };

  return (
    <div className="w-80 bg-[#1A3A3A] border-l border-[#D4E89E]/20 overflow-y-auto">
      <div className="p-6 space-y-6">
        <div>
          <h3 className="text-white text-lg mb-1">Risk Scoring</h3>
          <p className="text-gray-400 text-sm">Instant quote assessment</p>
        </div>

        {/* Location Info */}
        <Card className="bg-[#0F2727] border-[#D4E89E]/20 p-4">
          <p className="text-gray-400 text-xs mb-2">Selected Location</p>
          <p className="text-white">{selectedCounty || 'No location selected'}</p>
        </Card>

        {/* Risk Score */}
        <Card className="bg-[#0F2727] border-[#D4E89E]/20 p-4">
          <div className="flex items-center justify-between mb-4">
            <p className="text-gray-400 text-sm">
              {hazardType === 'flood' ? 'Flood Risk Score' : 'Drought Risk Index'}
            </p>
            <Badge className={getRiskColor(riskLevel)}>{riskLevel}</Badge>
          </div>
          
          <div className="flex items-end gap-2 mb-4">
            <span className="text-4xl font-light text-[#D4E89E]">
              {hazardType === 'flood' ? floodScore.toFixed(1) : droughtIndex.toFixed(1)}
            </span>
            <span className="text-gray-500 text-sm mb-1">/10</span>
          </div>

          <div className="h-2 bg-[#1A3A3A] rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#D4E89E] rounded-full transition-all"
              style={{ width: `${(hazardType === 'flood' ? floodScore : droughtIndex) * 10}%` }}
            />
          </div>
        </Card>

        {/* Underwriting Factors */}
        <Card className="bg-[#0F2727] border-[#D4E89E]/20 p-4">
          <h4 className="text-white text-sm mb-4">Key Factors</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">Historical Events</span>
              <span className="text-white text-sm">3 in 5 years</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">Population Density</span>
              <span className="text-white text-sm">High</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">Infrastructure</span>
              <span className="text-white text-sm">Moderate</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">Elevation Risk</span>
              <span className="text-white text-sm">Low-lying</span>
            </div>
          </div>
        </Card>

        {/* Premium Recommendation */}
        <Card className="bg-gradient-to-br from-[#D4E89E]/10 to-[#D4E89E]/5 border-[#D4E89E]/30 p-4">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-5 h-5 text-[#D4E89E]" />
            <h4 className="text-white text-sm">Premium Guidance</h4>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">Base Rate</span>
              <span className="text-white">2.5%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">Risk Adjustment</span>
              <span className="text-[#D4E89E]">+1.2%</span>
            </div>
            <div className="border-t border-[#D4E89E]/20 pt-2 mt-2">
              <div className="flex items-center justify-between">
                <span className="text-white">Recommended Rate</span>
                <span className="text-[#D4E89E] font-medium">3.7%</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Quick Actions */}
        <div className="space-y-2">
          <button className="w-full bg-[#D4E89E] text-[#1A3A3A] py-2 px-4 rounded-lg hover:bg-[#C8DD8C] transition-colors">
            Generate Quote
          </button>
          <button className="w-full bg-[#0F2727] text-white border border-[#D4E89E]/20 py-2 px-4 rounded-lg hover:border-[#D4E89E]/40 transition-colors">
            Export Risk Report
          </button>
        </div>

        {/* Data Confidence */}
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <CheckCircle className="w-4 h-4 text-[#D4E89E]" />
          <span>Data confidence: 92% · Updated 5 mins ago</span>
        </div>
      </div>
    </div>
  );
}
