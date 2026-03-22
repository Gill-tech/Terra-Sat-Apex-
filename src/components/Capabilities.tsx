import { Database, Zap, Globe, LineChart } from 'lucide-react';

export function Capabilities() {
  const capabilities = [
    {
      title: 'Data Layer Integration',
      icon: Database,
      description: 'Seamlessly integrate climate risk data into your existing systems',
      details: [
        'API-first architecture for easy integration',
        'Real-time data feeds for lending platforms',
        'Direct connection to underwriting systems',
        'Investment portfolio management tools',
      ],
    },
    {
      title: 'Asset-Level Risk Scoring',
      icon: LineChart,
      description: 'Precise risk assessment for individual assets and portfolios',
      details: [
        'Flood risk scores at point of quote',
        'Drought risk indexing for agriculture',
        'Historical event analysis',
        'Future risk projections',
      ],
    },
    {
      title: 'Real-Time Monitoring',
      icon: Zap,
      description: 'Continuous surveillance of climate events as they unfold',
      details: [
        '24-hour early warning system',
        'Automated alert distribution',
        'Geo-fenced notifications',
        'Satellite-verified impact maps',
      ],
    },
    {
      title: 'East Africa Coverage',
      icon: Globe,
      description: 'Comprehensive coverage across the region',
      details: [
        'Kenya and East Africa focus',
        'All-weather satellite monitoring',
        'Ground sensor verification network',
        'Multi-hazard risk assessment',
      ],
    },
  ];

  return (
    <section id="capabilities" className="py-24 px-6 bg-[#0F2727]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-white mb-4">
            Capabilities
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From satellite signals to last-mile alerts. Insurance-grade climate intelligence accessible to reinsurers and communities alike.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {capabilities.map((capability, index) => (
            <div 
              key={index}
              className="bg-[#1A3A3A] border border-[#D4E89E]/20 rounded-lg p-8 hover:border-[#D4E89E]/60 transition-all"
            >
              <div className="mb-6">
                <div className="w-14 h-14 rounded-full bg-[#D4E89E]/10 flex items-center justify-center mb-4">
                  <capability.icon className="w-7 h-7 text-[#D4E89E]" />
                </div>
                <h3 className="text-2xl font-light text-white mb-2">{capability.title}</h3>
                <p className="text-gray-400 leading-relaxed">{capability.description}</p>
              </div>
              
              <ul className="space-y-3">
                {capability.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                    <span className="text-[#D4E89E] mt-1">●</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Platform Positioning */}
        <div className="mt-16 bg-gradient-to-r from-[#1A3A3A] to-[#0F2727] border border-[#D4E89E]/20 rounded-lg p-10 text-center">
          <p className="text-2xl font-light text-white mb-4">
            Shift from Reactive Loss Management to Proactive Risk Prevention
          </p>
          <p className="text-lg text-gray-400">
            TerraSat provides financial institutions with the intelligence layer needed to quantify, price, and manage climate risk before it becomes a loss.
          </p>
        </div>
      </div>
    </section>
  );
}
