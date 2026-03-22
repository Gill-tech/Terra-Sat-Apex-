import { Satellite, Cpu, MapPin } from 'lucide-react';
import alertImage from 'figma:asset/ce836cd0b5d5adb2656d9843841a871e754aa3f1.png';

export function Solution() {
  return (
    <section className="py-20 bg-[#1A3A3A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-white mb-4">How TerraSat Works</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Satellite data transformed into decision-ready intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-20 h-20 bg-[#D4E89E]/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#D4E89E]/20">
              <Satellite className="w-10 h-10 text-[#D4E89E]" />
            </div>
            <h3 className="text-xl text-white mb-3">Satellite Observation</h3>
            <p className="text-gray-400">
              Sentinel-1 SAR and Sentinel-2 optical data provide cloud-independent monitoring of flood extent, vegetation health, and soil moisture.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-[#D4E89E]/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#D4E89E]/20">
              <Cpu className="w-10 h-10 text-[#D4E89E]" />
            </div>
            <h3 className="text-xl text-white mb-3">AI Risk Analysis</h3>
            <p className="text-gray-400">
              Machine learning models detect flood events, identify drought anomalies, and generate risk scores based on hazard, exposure, and vulnerability.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-[#D4E89E]/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#D4E89E]/20">
              <MapPin className="w-10 h-10 text-[#D4E89E]" />
            </div>
            <h3 className="text-xl text-white mb-3">Localized Warnings</h3>
            <p className="text-gray-400">
              Ward and sub-county level alerts delivered via web dashboard, API, SMS, and USSD to governments, NGOs, and communities.
            </p>
          </div>
        </div>

        {/* Community Alert System */}
        <div className="mt-20 max-w-2xl mx-auto">
          <div className="rounded-xl overflow-hidden border border-[#D4E89E]/20 shadow-2xl">
            <img 
              src={alertImage}
              alt="Community member receiving flood alert on basic phone via SMS and USSD"
              className="w-full h-auto"
              style={{ 
                imageRendering: '-webkit-optimize-contrast',
                backfaceVisibility: 'hidden',
                transform: 'translateZ(0)'
              }}
            />
          </div>
          <p className="text-center text-gray-300 mt-6 text-lg">
            Early warning floods in basic phone via USSD, SMS in local languages
          </p>
        </div>
      </div>
    </section>
  );
}