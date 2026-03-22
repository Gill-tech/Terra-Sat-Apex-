import { Shield, TrendingUp, Clock, BarChart3 } from 'lucide-react';

export function Solutions() {
  const solutions = [
    {
      title: 'For Banks',
      icon: TrendingUp,
      description: 'Reduce non-performing loans caused by climate shocks',
      benefits: [
        'Adjust loan-to-value ratios based on climate risk',
        'Dynamic pricing for climate-exposed assets',
        'Protect collateral value with early warnings',
        'Portfolio-level climate risk monitoring',
      ],
    },
    {
      title: 'For Insurance',
      icon: Shield,
      description: 'Improve underwriting accuracy and reduce loss ratios',
      benefits: [
        'Asset-level flood risk scoring at point of quote',
        'Reduce loss ratios with accurate risk assessment',
        'Accelerate claims processing with satellite verification',
        'Real-time catastrophe monitoring',
      ],
    },
    {
      title: 'For Asset Financiers',
      icon: BarChart3,
      description: 'Quantify and manage climate risk proactively',
      benefits: [
        'Asset-level climate risk scoring',
        'Integration with investment systems',
        'Track exposure across portfolios',
        'Proactive risk management vs reactive losses',
      ],
    },
    {
      title: 'For Communities',
      icon: Clock,
      description: 'Improved protection for vulnerable populations',
      benefits: [
        '24-hour early warnings for floods and droughts',
        'Geo-fenced alerts to affected areas',
        'USSD access for feature phone users',
        'Local language support',
      ],
    },
  ];

  return (
    <section id="solutions" className="py-24 px-6 bg-[#1A3A3A]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-white mb-4">
            Solutions
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A satellite-powered data layer for climate risk assessment. TerraSat integrates directly into lending, underwriting, and investment systems, enabling institutions to quantify, price, and manage climate risk proactively.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="bg-[#0F2727] border border-[#D4E89E]/20 rounded-lg p-8 hover:border-[#D4E89E]/60 transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-[#D4E89E]/10 flex items-center justify-center">
                  <solution.icon className="w-7 h-7 text-[#D4E89E]" />
                </div>
                <h3 className="text-2xl font-light text-white">{solution.title}</h3>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">{solution.description}</p>
              
              <ul className="space-y-3">
                {solution.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                    <span className="text-[#D4E89E] mt-1">●</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Impact Statement */}
        <div className="mt-16 bg-[#0F2727] border border-[#D4E89E]/20 rounded-lg p-8">
          <h3 className="text-2xl font-light text-white mb-4 text-center">Impact</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-300 mb-3">● More resilient financial systems</p>
              <p className="text-gray-300 mb-3">● Increased access to climate-aware financing</p>
            </div>
            <div>
              <p className="text-gray-300 mb-3">● Reduced economic losses from disasters</p>
              <p className="text-gray-300 mb-3">● Improved protection for vulnerable communities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
