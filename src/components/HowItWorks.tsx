import { Satellite, Brain, Radio } from 'lucide-react';
import floodMapImage from 'figma:asset/6b89f858fdd6fc053b1bfa44a9e7f1af460d0f82.png';

export function HowItWorks() {
  const layers = [
    {
      number: '1',
      title: 'Satellite Monitoring',
      subtitle: 'All-Weather Coverage',
      description: 'Continuous flood extent mapping and drought monitoring that works through cloud cover. Get real-time visibility into environmental conditions across your entire coverage area with no gaps, no blind spots.',
      icon: Satellite,
      image: floodMapImage,
    },
    {
      number: '2',
      title: 'AI Risk Engine',
      subtitle: 'Self-Improving Accuracy',
      description: 'Our AI learns from every event, continuously improving predictions. Each feedback cycle from ground-truth data recalibrates the model, meaning your risk assessments get sharper over time, not stale.',
      icon: Brain,
      image: 'https://images.unsplash.com/photo-1759752393975-7ca7b302fcc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwcHJvY2Vzc2luZyUyMHdvcmtmbG93JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzQxNjc4Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      number: '3',
      title: 'Ground-Truth Sensors',
      subtitle: 'Real-Time Verification',
      description: 'On-the-ground environmental sensors verify satellite data in real time. When events unfold, you get verified measurements, not estimates, for faster, more confident decision-making.',
      icon: Radio,
      image: 'https://images.unsplash.com/photo-1681672705104-c78e31a8d111?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG9vZCUyMGFlcmlhbCUyMHNhdGVsbGl0ZSUyMGltYWdlcnl8ZW58MXx8fHwxNzczODA1ODIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 bg-[#0F2727]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-white mb-4">
            The Intelligence Flywheel
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Three layers feeding a self-improving loop. Every event makes the system smarter and your decisions faster.
          </p>
        </div>

        {/* Layers */}
        <div className="space-y-12">
          {layers.map((layer, index) => (
            <div 
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#D4E89E]/10 border border-[#D4E89E] flex items-center justify-center">
                    <span className="text-2xl font-light text-[#D4E89E]">{layer.number}</span>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-[#1A3A3A] flex items-center justify-center">
                    <layer.icon className="w-6 h-6 text-[#D4E89E]" />
                  </div>
                </div>
                <div className="mb-4">
                  <h3 className="text-3xl font-light text-white mb-2">{layer.title}</h3>
                  <p className="text-lg text-[#D4E89E]">{layer.subtitle}</p>
                </div>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {layer.description}
                </p>
              </div>
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <div 
                  className="h-80 rounded-lg bg-cover bg-center border border-[#D4E89E]/20"
                  style={{ backgroundImage: `url('${layer.image}')` }}
                >
                  <div className="h-full bg-gradient-to-t from-[#0F2727]/80 to-transparent rounded-lg" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Continuous improvement banner */}
        <div className="mt-16 bg-[#1A3A3A] border border-[#D4E89E]/20 rounded-lg p-8 text-center">
          <p className="text-xl text-[#D4E89E]">
            Continuous Improvement → Every event makes predictions more accurate and alerts faster
          </p>
        </div>
      </div>
    </section>
  );
}