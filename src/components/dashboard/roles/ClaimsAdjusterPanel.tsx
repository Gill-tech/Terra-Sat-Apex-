import { FileCheck, MapPin, Camera, CheckCircle } from 'lucide-react';
import { Card } from '../../ui/card';
import { Badge } from '../../ui/badge';
import type { HazardType } from '../../../pages/Dashboard';

interface ClaimsAdjusterPanelProps {
  hazardType: HazardType;
  selectedCounty: string | null;
}

export function ClaimsAdjusterPanel({ hazardType, selectedCounty }: ClaimsAdjusterPanelProps) {
  const activeClaims = [
    { id: 'CLM-2401', location: 'Nairobi County', severity: 'High', verified: true },
    { id: 'CLM-2402', location: 'Kisumu County', severity: 'Critical', verified: true },
    { id: 'CLM-2403', location: 'Mombasa County', severity: 'Medium', verified: false },
  ];

  return (
    <div className="w-80 bg-[#1A3A3A] border-l border-[#D4E89E]/20 overflow-y-auto">
      <div className="p-6 space-y-6">
        <div>
          <h3 className="text-white text-lg mb-1">Claims Verification</h3>
          <p className="text-gray-400 text-sm">Satellite-verified impact assessment</p>
        </div>

        {/* Selected Area */}
        <Card className="bg-[#0F2727] border-[#D4E89E]/20 p-4">
          <p className="text-gray-400 text-xs mb-2">Assessment Area</p>
          <p className="text-white">{selectedCounty || 'Select area on map'}</p>
        </Card>

        {/* Impact Summary */}
        <Card className="bg-[#0F2727] border-[#D4E89E]/20 p-4">
          <h4 className="text-white text-sm mb-4 flex items-center gap-2">
            <Camera className="w-4 h-4 text-[#D4E89E]" />
            Satellite Impact Analysis
          </h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">Affected Area</span>
              <span className="text-white text-sm">234 km²</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">Water Coverage</span>
              <span className="text-white text-sm">68%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">Change Detection</span>
              <span className="text-[#D4E89E] text-sm">+42% from baseline</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">Image Date</span>
              <span className="text-white text-sm">Today, 09:15</span>
            </div>
          </div>
        </Card>

        {/* Active Claims */}
        <div>
          <h4 className="text-white text-sm mb-3 flex items-center gap-2">
            <FileCheck className="w-4 h-4 text-[#D4E89E]" />
            Active Claims
          </h4>
          <div className="space-y-2">
            {activeClaims.map((claim) => (
              <Card 
                key={claim.id}
                className="bg-[#0F2727] border-[#D4E89E]/20 p-3 hover:border-[#D4E89E]/40 cursor-pointer transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white text-sm font-medium">{claim.id}</span>
                  <Badge className={
                    claim.severity === 'Critical' 
                      ? 'bg-red-500/20 text-red-300 border-red-500'
                      : claim.severity === 'High'
                      ? 'bg-orange-500/20 text-orange-300 border-orange-500'
                      : 'bg-yellow-500/20 text-yellow-300 border-yellow-500'
                  }>
                    {claim.severity}
                  </Badge>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-xs mb-2">
                  <MapPin className="w-3 h-3" />
                  <span>{claim.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  {claim.verified ? (
                    <>
                      <CheckCircle className="w-3 h-3 text-[#D4E89E]" />
                      <span className="text-[#D4E89E] text-xs">Satellite Verified</span>
                    </>
                  ) : (
                    <span className="text-gray-500 text-xs">Pending Verification</span>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Verification Stats */}
        <Card className="bg-gradient-to-br from-[#D4E89E]/10 to-[#D4E89E]/5 border-[#D4E89E]/30 p-4">
          <h4 className="text-white text-sm mb-4">Processing Speed</h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-2xl font-light text-[#D4E89E]">90%</p>
              <p className="text-xs text-gray-400">Faster Processing</p>
            </div>
            <div>
              <p className="text-2xl font-light text-[#D4E89E]">3.2</p>
              <p className="text-xs text-gray-400">Days Avg. Resolution</p>
            </div>
          </div>
        </Card>

        {/* Quick Actions */}
        <div className="space-y-2">
          <button className="w-full bg-[#D4E89E] text-[#1A3A3A] py-2 px-4 rounded-lg hover:bg-[#C8DD8C] transition-colors">
            Generate Impact Map
          </button>
          <button className="w-full bg-[#0F2727] text-white border border-[#D4E89E]/20 py-2 px-4 rounded-lg hover:border-[#D4E89E]/40 transition-colors">
            Export Verification Report
          </button>
        </div>

        <div className="flex items-center gap-2 text-xs text-gray-500">
          <CheckCircle className="w-4 h-4 text-[#D4E89E]" />
          <span>Sentinel-1 SAR · 10m resolution</span>
        </div>
      </div>
    </div>
  );
}
