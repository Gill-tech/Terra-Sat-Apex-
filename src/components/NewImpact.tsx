import { Clock, MapPin, Zap, Users } from 'lucide-react';

export function NewImpact() {
  const metrics = [
    {
      title: 'Claims Cycle',
      value: '80%',
      subtitle: 'Faster',
      description: 'From weeks to days',
      icon: Clock,
    },
    {
      title: 'Field Visit Reduction',
      value: '90%',
      subtitle: '',
      description: 'Remote verification replaces on-site',
      icon: MapPin,
    },
    {
      title: 'Early Warning',
      value: '28+',
      subtitle: 'Hours',
      description: 'Advance notice before events',
      icon: Zap,
    },
  ];

  const stakeholders = [
    {
      role: 'Underwriters',
      description: 'Risk assessment in 6 minutes at quote, not weeks of manual review',
      color: 'from-blue-500/20 to-blue-600/20',
    },
    {
      role: 'Claims Teams',
      description: 'Satellite-verified impact maps eliminate guesswork and fraud',
      color: 'from-purple-500/20 to-purple-600/20',
    },
    {
      role: 'Disaster Managers',
      description: 'Geo-fenced alerts reach affected communities before events hit',
      color: 'from-orange-500/20 to-orange-600/20',
    },
    {
      role: 'Communities',
      description: 'Simple mobile alerts and automatic payouts in local languages',
      color: 'from-green-500/20 to-green-600/20',
    },
  ];

  return (
    <section id="impact" className="py-24 px-6 bg-[#1A3A3A]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-white mb-4">
            Measurable Outcomes
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Faster decisions, fewer losses, better outcomes for every stakeholder in the value chain.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="bg-[#0F2727] border border-[#D4E89E]/20 rounded-lg p-8 hover:border-[#D4E89E]/40 transition-all"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm text-gray-400 uppercase tracking-wide">{metric.title}</span>
                <div className="w-12 h-12 rounded-full bg-[#D4E89E]/10 flex items-center justify-center">
                  <metric.icon className="w-6 h-6 text-[#D4E89E]" />
                </div>
              </div>
              <div className="mb-4">
                <span className="text-5xl font-light text-[#D4E89E]">{metric.value}</span>
                {metric.subtitle && (
                  <span className="text-2xl font-light text-[#D4E89E] ml-2">{metric.subtitle}</span>
                )}
              </div>
              <p className="text-gray-400">{metric.description}</p>
            </div>
          ))}
        </div>

        {/* Impact by Stakeholder */}
        <div className="mb-20">
          <h3 className="text-3xl font-light text-white mb-12 text-center">
            Impact by Stakeholder
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {stakeholders.map((stakeholder, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br ${stakeholder.color} border border-[#D4E89E]/20 rounded-lg p-8`}
              >
                <h4 className="text-2xl font-light text-white mb-3">{stakeholder.role}</h4>
                <p className="text-gray-300 leading-relaxed">{stakeholder.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Coverage Stats */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#0F2727] border border-[#D4E89E]/20 rounded-lg p-8 text-center">
            <div className="text-5xl font-light text-[#D4E89E] mb-2">8</div>
            <div className="text-sm text-gray-400 uppercase tracking-wide mb-4">Countries</div>
            <p className="text-gray-500 text-sm">East Africa Coverage</p>
          </div>
          <div className="bg-[#0F2727] border border-[#D4E89E]/20 rounded-lg p-8 text-center">
            <div className="text-5xl font-light text-[#D4E89E] mb-2">24/7</div>
            <div className="text-sm text-gray-400 uppercase tracking-wide mb-4">Always On</div>
            <p className="text-gray-500 text-sm">Continuous Monitoring</p>
          </div>
          <div className="bg-[#0F2727] border border-[#D4E89E]/20 rounded-lg p-8 text-center">
            <div className="text-5xl font-light text-[#D4E89E] mb-2">100%</div>
            <div className="text-sm text-gray-400 uppercase tracking-wide mb-4">Full Coverage</div>
            <p className="text-gray-500 text-sm">IGAD Regional Network</p>
          </div>
        </div>
      </div>
    </section>
  );
}
