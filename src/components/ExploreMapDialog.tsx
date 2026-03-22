import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { MapPin, Droplets, Sun } from 'lucide-react';

interface ExploreMapDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ExploreMapDialog({ open, onOpenChange }: ExploreMapDialogProps) {
  const [mapType, setMapType] = useState<'flood' | 'drought'>('flood');
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  // Mock data for demonstration
  const floodRiskAreas = [
    { name: 'Nairobi County', risk: 'High', affected: '2.4M people' },
    { name: 'Kisumu County', risk: 'Critical', affected: '1.2M people' },
    { name: 'Mombasa County', risk: 'Medium', affected: '890K people' },
  ];

  const droughtRiskAreas = [
    { name: 'Turkana County', risk: 'Extreme', affected: '1.8M people' },
    { name: 'Marsabit County', risk: 'High', affected: '450K people' },
    { name: 'Garissa County', risk: 'Critical', affected: '780K people' },
  ];

  const currentData = mapType === 'flood' ? floodRiskAreas : droughtRiskAreas;

  const getRiskColor = (risk: string) => {
    switch (risk.toLowerCase()) {
      case 'extreme':
      case 'critical':
        return 'bg-red-500/20 border-red-500 text-red-200';
      case 'high':
        return 'bg-orange-500/20 border-orange-500 text-orange-200';
      case 'medium':
        return 'bg-yellow-500/20 border-yellow-500 text-yellow-200';
      default:
        return 'bg-green-500/20 border-green-500 text-green-200';
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#0F2727] border-[#D4E89E]/20 text-white max-w-6xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-white flex items-center gap-2">
            <MapPin className="w-6 h-6 text-[#D4E89E]" />
            Explore Climate Risk Maps
          </DialogTitle>
        </DialogHeader>
        
        <Tabs value={mapType} onValueChange={(v) => setMapType(v as 'flood' | 'drought')} className="mt-4">
          <TabsList className="bg-[#1A3A3A] border border-[#D4E89E]/20">
            <TabsTrigger 
              value="flood" 
              className="data-[state=active]:bg-[#D4E89E] data-[state=active]:text-[#1A3A3A]"
            >
              <Droplets className="w-4 h-4 mr-2" />
              Flood Risk
            </TabsTrigger>
            <TabsTrigger 
              value="drought" 
              className="data-[state=active]:bg-[#D4E89E] data-[state=active]:text-[#1A3A3A]"
            >
              <Sun className="w-4 h-4 mr-2" />
              Drought Risk
            </TabsTrigger>
          </TabsList>

          <TabsContent value="flood" className="mt-6">
            <div className="grid grid-cols-3 gap-6">
              {/* Map visualization */}
              <div className="col-span-2 bg-[#1A3A3A] rounded-lg border border-[#D4E89E]/20 p-4 h-[500px] relative overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center rounded-lg relative"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1681672705104-c78e31a8d111?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG9vZCUyMGFlcmlhbCUyMHNhdGVsbGl0ZSUyMGltYWdlcnl8ZW58MXx8fHwxNzczODA1ODIxfDA&ixlib=rb-4.1.0&q=80&w=1080')`,
                  }}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2727] via-transparent to-transparent" />
                  
                  {/* Interactive hotspots */}
                  <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="w-4 h-4 bg-red-500 rounded-full animate-ping absolute" />
                      <div className="w-4 h-4 bg-red-500 rounded-full relative" />
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 bg-[#0F2727]/90 backdrop-blur-sm p-3 rounded-lg border border-[#D4E89E]/20">
                    <p className="text-xs text-gray-400">Last Updated</p>
                    <p className="text-sm text-white">15 minutes ago</p>
                  </div>
                  
                  <div className="absolute top-4 right-4 bg-[#0F2727]/90 backdrop-blur-sm p-3 rounded-lg border border-[#D4E89E]/20">
                    <p className="text-xs text-gray-400">Data Source</p>
                    <p className="text-sm text-white">Sentinel-1 SAR</p>
                  </div>
                </div>
              </div>

              {/* Risk list */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">Active Flood Alerts</h3>
                <div className="space-y-3">
                  {floodRiskAreas.map((area, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedRegion(area.name)}
                      className={`w-full text-left p-4 rounded-lg border transition-all ${
                        selectedRegion === area.name
                          ? 'bg-[#D4E89E]/10 border-[#D4E89E]'
                          : 'bg-[#1A3A3A] border-[#D4E89E]/20 hover:border-[#D4E89E]/40'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-white">{area.name}</span>
                        <Badge className={getRiskColor(area.risk)}>{area.risk}</Badge>
                      </div>
                      <p className="text-sm text-gray-400">{area.affected}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="drought" className="mt-6">
            <div className="grid grid-cols-3 gap-6">
              {/* Map visualization */}
              <div className="col-span-2 bg-[#1A3A3A] rounded-lg border border-[#D4E89E]/20 p-4 h-[500px] relative overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center rounded-lg relative"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1722081797648-7a76e8c39935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm91Z2h0JTIwbGFuZCUyMHNhdGVsbGl0ZSUyMHZpZXd8ZW58MXx8fHwxNzczODA1ODIxfDA&ixlib=rb-4.1.0&q=80&w=1080')`,
                  }}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2727] via-transparent to-transparent" />
                  
                  {/* Interactive hotspots */}
                  <div className="absolute top-1/4 right-1/3">
                    <div className="relative">
                      <div className="w-4 h-4 bg-orange-500 rounded-full animate-ping absolute" />
                      <div className="w-4 h-4 bg-orange-500 rounded-full relative" />
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 bg-[#0F2727]/90 backdrop-blur-sm p-3 rounded-lg border border-[#D4E89E]/20">
                    <p className="text-xs text-gray-400">Last Updated</p>
                    <p className="text-sm text-white">2 hours ago</p>
                  </div>
                  
                  <div className="absolute top-4 right-4 bg-[#0F2727]/90 backdrop-blur-sm p-3 rounded-lg border border-[#D4E89E]/20">
                    <p className="text-xs text-gray-400">Data Source</p>
                    <p className="text-sm text-white">Sentinel-2 MSI</p>
                  </div>
                </div>
              </div>

              {/* Risk list */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">Active Drought Alerts</h3>
                <div className="space-y-3">
                  {droughtRiskAreas.map((area, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedRegion(area.name)}
                      className={`w-full text-left p-4 rounded-lg border transition-all ${
                        selectedRegion === area.name
                          ? 'bg-[#D4E89E]/10 border-[#D4E89E]'
                          : 'bg-[#1A3A3A] border-[#D4E89E]/20 hover:border-[#D4E89E]/40'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-white">{area.name}</span>
                        <Badge className={getRiskColor(area.risk)}>{area.risk}</Badge>
                      </div>
                      <p className="text-sm text-gray-400">{area.affected}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
