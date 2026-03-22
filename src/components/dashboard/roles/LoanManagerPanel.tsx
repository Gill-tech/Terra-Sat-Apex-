import { DollarSign, TrendingDown, AlertTriangle, CheckCircle } from 'lucide-react';
import { Card } from '../../ui/card';
import { Badge } from '../../ui/badge';
import type { HazardType } from '../../../pages/Dashboard';

interface LoanManagerPanelProps {
  hazardType: HazardType;
  selectedCounty: string | null;
}

export function LoanManagerPanel({ hazardType, selectedCounty }: LoanManagerPanelProps) {
  const climateRiskScore = selectedCounty ? 6.8 : 5.5;
  const portfolioExposure = 'Medium';
  
  const riskLevel = climateRiskScore > 7 ? 'High' : climateRiskScore > 5 ? 'Medium' : 'Low';

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
          <h3 className="text-white text-lg mb-1">Climate Risk Assessment</h3>
          <p className="text-gray-400 text-sm">Lending decision intelligence</p>
        </div>

        {/* Location Info */}
        <Card className="bg-[#0F2727] border-[#D4E89E]/20 p-4">
          <p className="text-gray-400 text-xs mb-2">Assessment Location</p>
          <p className="text-white">{selectedCounty || 'No location selected'}</p>
        </Card>

        {/* Climate Risk Score */}
        <Card className="bg-[#0F2727] border-[#D4E89E]/20 p-4">
          <div className="flex items-center justify-between mb-4">
            <p className="text-gray-400 text-sm">Climate Risk Score</p>
            <Badge className={getRiskColor(riskLevel)}>{riskLevel}</Badge>
          </div>
          
          <div className="flex items-end gap-2 mb-4">
            <span className="text-4xl font-light text-[#D4E89E]">
              {climateRiskScore.toFixed(1)}
            </span>
            <span className="text-gray-500 text-sm mb-1">/10</span>
          </div>

          <div className="h-2 bg-[#1A3A3A] rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#D4E89E] rounded-full transition-all"
              style={{ width: `${climateRiskScore * 10}%` }}
            />
          </div>
        </Card>

        {/* Risk Factors */}
        <Card className="bg-[#0F2727] border-[#D4E89E]/20 p-4">
          <h4 className="text-white text-sm mb-4 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-[#D4E89E]" />
            Key Risk Factors
          </h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">Flood Exposure</span>
              <Badge className="bg-orange-500/20 text-orange-300 border-orange-500">High</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">Drought Risk</span>
              <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500">Medium</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">Infrastructure Resilience</span>
              <Badge className="bg-green-500/20 text-green-300 border-green-500">Good</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">Historical Losses</span>
              <span className="text-white text-sm">$2.4M (3yr)</span>
            </div>
          </div>
        </Card>

        {/* Portfolio Analysis */}
        <Card className="bg-[#0F2727] border-[#D4E89E]/20 p-4">
          <h4 className="text-white text-sm mb-4 flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-[#D4E89E]" />
            Loan Portfolio Exposure
          </h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">Active Loans</span>
              <span className="text-white text-sm">142</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">Total Exposure</span>
              <span className="text-white text-sm">$18.6M</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">High Risk Loans</span>
              <span className="text-[#D4E89E] text-sm">23 (16%)</span>
            </div>
          </div>
        </Card>

        {/* Recommendation */}
        <Card className="bg-gradient-to-br from-[#D4E89E]/10 to-[#D4E89E]/5 border-[#D4E89E]/30 p-4">
          <div className="flex items-center gap-2 mb-3">
            <TrendingDown className="w-5 h-5 text-[#D4E89E]" />
            <h4 className="text-white text-sm">Lending Recommendation</h4>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">Approval Status</span>
              <span className="text-yellow-300">Conditional</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">Suggested LTV</span>
              <span className="text-white">75%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">Risk Premium</span>
              <span className="text-[#D4E89E]">+1.5%</span>
            </div>
            <div className="border-t border-[#D4E89E]/20 pt-2 mt-2">
              <p className="text-xs text-gray-400">
                Recommend climate insurance requirement for loan approval
              </p>
            </div>
          </div>
        </Card>

        {/* Quick Actions */}
        <div className="space-y-2">
          <button className="w-full bg-[#D4E89E] text-[#1A3A3A] py-2 px-4 rounded-lg hover:bg-[#C8DD8C] transition-colors">
            Generate Risk Assessment
          </button>
          <button className="w-full bg-[#0F2727] text-white border border-[#D4E89E]/20 py-2 px-4 rounded-lg hover:border-[#D4E89E]/40 transition-colors">
            View Portfolio Heatmap
          </button>
        </div>

        <div className="flex items-center gap-2 text-xs text-gray-500">
          <CheckCircle className="w-4 h-4 text-[#D4E89E]" />
          <span>Risk model updated daily</span>
        </div>
      </div>
    </div>
  );
}
