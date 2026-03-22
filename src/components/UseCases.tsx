import { Building2, Heart, Users } from 'lucide-react';

export function UseCases() {
  return (
    <section id="use-cases" className="py-20 bg-[#1A3A3A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-white mb-4">Built For Decision-Makers</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Supporting disaster preparedness and response across sectors
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#0F2626] p-8 rounded-xl border border-[#D4E89E]/10">
            <Building2 className="w-12 h-12 text-[#D4E89E] mb-6" />
            <h3 className="text-xl text-white mb-3">Government</h3>
            <p className="text-gray-400 mb-4">
              National and county disaster management units use TerraSat for evacuation planning, resource allocation, and infrastructure protection.
            </p>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>• County-level risk assessments</li>
              <li>• Emergency response coordination</li>
              <li>• Policy and planning support</li>
            </ul>
          </div>

          <div className="bg-[#0F2626] p-8 rounded-xl border border-[#D4E89E]/10">
            <Heart className="w-12 h-12 text-[#D4E89E] mb-6" />
            <h3 className="text-xl text-white mb-3">Humanitarian Organizations</h3>
            <p className="text-gray-400 mb-4">
              NGOs and aid agencies deploy targeted assistance using early warning data and population exposure mapping.
            </p>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>• Pre-positioning of relief supplies</li>
              <li>• Vulnerable population identification</li>
              <li>• Impact assessment and reporting</li>
            </ul>
          </div>

          <div className="bg-[#0F2626] p-8 rounded-xl border border-[#D4E89E]/10">
            <Users className="w-12 h-12 text-[#D4E89E] mb-6" />
            <h3 className="text-xl text-white mb-3">Communities</h3>
            <p className="text-gray-400 mb-4">
              Farmers, pastoralists, and flood-prone communities receive timely warnings through SMS and USSD in local languages.
            </p>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>• Seasonal drought forecasts</li>
              <li>• Flood risk notifications</li>
              <li>• Water resource alerts</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
