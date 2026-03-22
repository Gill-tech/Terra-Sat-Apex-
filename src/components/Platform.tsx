import kenyaRiskMapImage from 'figma:asset/fd053d5080f52f7565937169a6945d5e3b7010b6.png';
import { Map, BarChart3, Bell, Download } from 'lucide-react';

export function Platform() {
  return (
    <section id="platform" className="py-20 bg-[#0F2626]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-white mb-4">Platform Overview</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Decision-first interface designed for rapid assessment and response
          </p>
        </div>

        <div className="rounded-xl overflow-hidden border border-[#D4E89E]/20 shadow-2xl mb-12">
          <img 
            src={kenyaRiskMapImage}
            alt="Kenya Live Risk Map showing regional flood and drought monitoring"
            className="w-full h-auto"
            style={{ 
              imageRendering: '-webkit-optimize-contrast',
              backfaceVisibility: 'hidden',
              transform: 'translateZ(0)'
            }}
          />
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-[#1A3A3A] p-6 rounded-xl border border-[#D4E89E]/10">
            <Map className="w-8 h-8 text-[#D4E89E] mb-3" />
            <h4 className="text-white mb-2">Risk Mapping</h4>
            <p className="text-gray-400 text-sm">Sub-county level flood and drought risk visualization with time-series analysis</p>
          </div>

          <div className="bg-[#1A3A3A] p-6 rounded-xl border border-[#D4E89E]/10">
            <BarChart3 className="w-8 h-8 text-[#D4E89E] mb-3" />
            <h4 className="text-white mb-2">Exposure Analytics</h4>
            <p className="text-gray-400 text-sm">Population and infrastructure at risk with severity classification</p>
          </div>

          <div className="bg-[#1A3A3A] p-6 rounded-xl border border-[#D4E89E]/10">
            <Bell className="w-8 h-8 text-[#D4E89E] mb-3" />
            <h4 className="text-white mb-2">Alert System</h4>
            <p className="text-gray-400 text-sm">Threshold-based warnings via dashboard, API webhooks, SMS, and USSD</p>
          </div>

          <div className="bg-[#1A3A3A] p-6 rounded-xl border border-[#D4E89E]/10">
            <Download className="w-8 h-8 text-[#D4E89E] mb-3" />
            <h4 className="text-white mb-2">Data Export</h4>
            <p className="text-gray-400 text-sm">GIS-ready outputs in GeoJSON, shapefiles, and raster formats</p>
          </div>
        </div>
      </div>
    </section>
  );
}