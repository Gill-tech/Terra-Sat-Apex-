import { Building2, Users, AlertTriangle, Smartphone, TrendingUp } from 'lucide-react';

export function WhoWeServe() {
  const roles = [
    {
      category: 'ENTERPRISE',
      title: 'Insurance Underwriter',
      description: 'Instant flood and drought risk scoring at point of quote. Make confident decisions in minutes, not weeks.',
      features: ['Flood Score', 'Drought Index'],
      icon: Building2,
      color: 'border-blue-500/30 bg-blue-500/5',
    },
    {
      category: 'ENTERPRISE',
      title: 'Claims Adjuster',
      description: 'Satellite-verified impact maps delivered automatically. Resolve claims faster with less fieldwork.',
      features: ['Impact Map', 'Verification'],
      icon: Users,
      color: 'border-purple-500/30 bg-purple-500/5',
    },
    {
      category: 'ENTERPRISE',
      title: 'Disaster Manager',
      description: 'Hours of advance warning with geo-fenced alerts sent directly to affected communities.',
      features: ['Early Warning', 'Geo-Alerts'],
      icon: AlertTriangle,
      color: 'border-orange-500/30 bg-orange-500/5',
    },
    {
      category: 'LAST MILE',
      title: 'Pastoralist (USSD)',
      description: 'Vegetation and grazing conditions via simple mobile code. No smartphone or internet required.',
      features: ['Auto Payout', 'Local Language'],
      icon: Smartphone,
      color: 'border-green-500/30 bg-green-500/5',
    },
    {
      category: 'ENTERPRISE',
      title: 'Reinsurer / CAT Analyst',
      description: 'Real-time catastrophe monitoring with portfolio-level exposure tracking as events unfold.',
      features: ['Portfolio View', 'Live Monitoring'],
      icon: TrendingUp,
      color: 'border-teal-500/30 bg-teal-500/5',
    },
  ];

  return (
    <section id="who-we-serve" className="py-24 px-6 bg-[#0F2727]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-white mb-4">
            Built for Every Stakeholder
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Whether you're managing a global portfolio or protecting a local community, get the intelligence you need, how you need it.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <div 
              key={index}
              className={`border rounded-lg p-8 hover:border-[#D4E89E]/60 transition-all ${role.color}`}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs text-gray-500 uppercase tracking-wide">{role.category}</span>
                <div className="w-12 h-12 rounded-full bg-[#1A3A3A] flex items-center justify-center">
                  <role.icon className="w-6 h-6 text-[#D4E89E]" />
                </div>
              </div>
              
              <h3 className="text-2xl font-light text-white mb-4">{role.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{role.description}</p>
              
              <div className="flex gap-3">
                {role.features.map((feature, idx) => (
                  <span 
                    key={idx}
                    className="text-xs bg-[#D4E89E]/10 text-[#D4E89E] px-3 py-1 rounded-full border border-[#D4E89E]/20"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}