import { useState } from 'react';
import { Satellite, Database, Brain, Map, ArrowRight, CheckCircle, Activity, X } from 'lucide-react';

interface DataPipelineProps {
  onClose: () => void;
}

export function DataPipeline({ onClose }: DataPipelineProps) {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

  const layers = [
    {
      title: 'Data Acquisition Layer',
      icon: Satellite,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      sources: [
        { name: 'Sentinel-1 (SAR)', status: 'active', accuracy: '95%', latency: '12h' },
        { name: 'Sentinel-2 (Optical)', status: 'active', accuracy: '93%', latency: '5 days' },
        { name: 'Copernicus Climate Data', status: 'active', accuracy: '91%', latency: '24h' },
        { name: 'ERA5 Reanalysis', status: 'active', accuracy: '89%', latency: '6h' },
        { name: 'OpenStreetMap', status: 'active', accuracy: '97%', latency: 'Real-time' },
      ],
    },
    {
      title: 'AI Intelligence Layer',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      sources: [
        { name: 'Flood Detection Models', status: 'active', accuracy: '92%', latency: '15min' },
        { name: 'Drought Anomaly Detection', status: 'active', accuracy: '88%', latency: '30min' },
        { name: 'Risk Scoring Engine', status: 'active', accuracy: '90%', latency: '10min' },
        { name: 'Vegetation Health Index', status: 'active', accuracy: '94%', latency: '20min' },
      ],
    },
    {
      title: 'Geospatial Services Layer',
      icon: Database,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      sources: [
        { name: 'Time-Series Storage', status: 'active', accuracy: '99%', latency: '<1s' },
        { name: 'REST APIs', status: 'active', accuracy: '99%', latency: '<500ms' },
        { name: 'GIS-Ready Outputs', status: 'active', accuracy: '98%', latency: '<2s' },
        { name: 'WebSocket Streams', status: 'active', accuracy: '99%', latency: 'Real-time' },
      ],
    },
    {
      title: 'User Interface & Actions',
      icon: Map,
      color: 'text-[#D4E89E]',
      bgColor: 'bg-[#D4E89E]/10',
      borderColor: 'border-[#D4E89E]/30',
      sources: [
        { name: 'Interactive Dashboard', status: 'active', accuracy: '100%', latency: '<3s' },
        { name: 'SMS/USSD Alerts', status: 'active', accuracy: '97%', latency: '<30s' },
        { name: 'API Webhooks', status: 'active', accuracy: '99%', latency: '<1s' },
        { name: 'Data Export', status: 'active', accuracy: '100%', latency: '<5s' },
      ],
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6">
      <div className="bg-[#1A3A3A] border border-[#D4E89E]/20 rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-[#1A3A3A] border-b border-[#D4E89E]/20 px-6 py-4 flex items-center justify-between z-10">
          <div>
            <h2 className="text-2xl text-white font-light">Platform Architecture</h2>
            <p className="text-gray-400 text-sm mt-1">
              Satellite signal → AI intelligence → Local action
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Pipeline Visualization */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {layers.map((layer, index) => {
              const Icon = layer.icon;
              return (
                <div key={index} className="relative">
                  <button
                    onClick={() => setActiveLayer(activeLayer === index ? null : index)}
                    className={`w-full p-4 rounded-lg border ${layer.borderColor} ${layer.bgColor} hover:bg-opacity-20 transition-all ${
                      activeLayer === index ? 'ring-2 ring-[#D4E89E]' : ''
                    }`}
                  >
                    <Icon className={`w-8 h-8 ${layer.color} mb-2`} />
                    <div className="text-white text-sm font-medium mb-1">{layer.title}</div>
                    <div className="text-xs text-gray-400">{layer.sources.length} components</div>
                  </button>
                  
                  {/* Arrow between layers */}
                  {index < layers.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-4 h-4 text-[#D4E89E]" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Detailed Layer Information */}
          {activeLayer !== null && (
            <div className="bg-[#0F2626] rounded-lg border border-[#D4E89E]/20 p-6 animate-fadeIn">
              <h3 className="text-white text-lg font-medium mb-4 flex items-center gap-2">
                {(() => {
                  const Icon = layers[activeLayer].icon;
                  return <Icon className={`w-5 h-5 ${layers[activeLayer].color}`} />;
                })()}
                {layers[activeLayer].title}
              </h3>
              
              <div className="grid gap-3">
                {layers[activeLayer].sources.map((source, idx) => (
                  <div
                    key={idx}
                    className="bg-[#1A3A3A] rounded-lg p-4 border border-[#D4E89E]/10 hover:border-[#D4E89E]/30 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-white font-medium text-sm">{source.name}</span>
                      </div>
                      <span className="flex items-center gap-1 text-xs text-green-400">
                        <Activity className="w-3 h-3" />
                        {source.status.toUpperCase()}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mt-3">
                      <div>
                        <div className="text-xs text-gray-400">Accuracy</div>
                        <div className="text-sm text-[#D4E89E] font-medium">{source.accuracy}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-400">Latency</div>
                        <div className="text-sm text-[#D4E89E] font-medium">{source.latency}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Copernicus Hub Integration Info */}
          <div className="mt-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20 p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Satellite className="w-6 h-6 text-blue-400" />
              </div>
              <div className="flex-1">
                <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                  Copernicus Open Access Hub Integration
                  <span className="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded">LIVE</span>
                </h4>
                <p className="text-gray-300 text-sm mb-3">
                  Direct integration with ESA's Copernicus program providing free, full, and open access to Sentinel satellite data. 
                  All data products are processed within 24 hours of acquisition.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-[#1A3A3A]/50 rounded p-3">
                    <div className="text-xs text-gray-400">Data Freshness</div>
                    <div className="text-[#D4E89E] font-medium">12-24 hours</div>
                  </div>
                  <div className="bg-[#1A3A3A]/50 rounded p-3">
                    <div className="text-xs text-gray-400">Coverage</div>
                    <div className="text-[#D4E89E] font-medium">100% Kenya</div>
                  </div>
                  <div className="bg-[#1A3A3A]/50 rounded p-3">
                    <div className="text-xs text-gray-400">Overall Accuracy</div>
                    <div className="text-[#D4E89E] font-medium">93.5%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Data Flow Summary */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="bg-[#0F2626] rounded-lg border border-[#D4E89E]/10 p-4">
              <div className="text-gray-400 text-sm mb-2">Average Processing Time</div>
              <div className="text-white text-2xl font-light">18 minutes</div>
              <div className="text-xs text-gray-500 mt-1">Satellite pass → Dashboard update</div>
            </div>
            <div className="bg-[#0F2626] rounded-lg border border-[#D4E89E]/10 p-4">
              <div className="text-gray-400 text-sm mb-2">System Availability</div>
              <div className="text-white text-2xl font-light">99.9%</div>
              <div className="text-xs text-gray-500 mt-1">Critical during disaster events</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
