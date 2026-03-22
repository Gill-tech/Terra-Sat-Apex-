import { Target, MapPin, Clock } from 'lucide-react';

export function Impact() {
  return (
    <section id="impact" className="py-20 bg-[#0F2626]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-white mb-4">Current Coverage</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Early deployment metrics from Kenya
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#1A3A3A] p-8 rounded-xl border border-[#D4E89E]/10 text-center">
            <Target className="w-12 h-12 text-[#D4E89E] mx-auto mb-4" />
            <div className="text-5xl text-white mb-2">85%</div>
            <p className="text-gray-400">Flood detection accuracy within 7-day window</p>
          </div>

          <div className="bg-[#1A3A3A] p-8 rounded-xl border border-[#D4E89E]/10 text-center">
            <MapPin className="w-12 h-12 text-[#D4E89E] mx-auto mb-4" />
            <div className="text-5xl text-white mb-2">12</div>
            <p className="text-gray-400">Counties with ward-level risk mapping</p>
          </div>

          <div className="bg-[#1A3A3A] p-8 rounded-xl border border-[#D4E89E]/10 text-center">
            <Clock className="w-12 h-12 text-[#D4E89E] mx-auto mb-4" />
            <div className="text-5xl text-white mb-2">&lt;6h</div>
            <p className="text-gray-400">Satellite pass to alert generation time</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://www.linkedin.com/company/terrasatlive/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#D4E89E] text-[#1A3A3A] px-8 py-3 rounded-lg hover:bg-[#c5d98f] transition-colors"
          >
            Request Access
          </a>
        </div>
      </div>
    </section>
  );
}
