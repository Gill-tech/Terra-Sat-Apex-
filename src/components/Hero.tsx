import logoImage from 'figma:asset/070f034663b839f300ff8f2103b31e72eb0533b7.png';
import { Link } from 'react-router';

export function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-[#1A3A3A] to-[#0F2626]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <img src={logoImage} alt="TerraSat" className="w-20 h-20" />
          </div>
          <h1 className="text-5xl md:text-6xl font-light text-white mb-6 leading-tight">
            Satellite Intelligence for<br />Flood and Drought Early Warning
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Real-time climate risk intelligence for Kenya and East Africa. Localized, actionable warnings that reach decision-makers and communities when it matters.
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              to="/dashboard" 
              className="bg-[#D4E89E] text-[#1A3A3A] px-8 py-3 rounded-lg hover:bg-[#c5d98f] transition-colors"
            >
              View Platform
            </Link>
            <a 
              href="https://www.linkedin.com/company/terrasatlive/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#D4E89E] text-[#D4E89E] px-8 py-3 rounded-lg hover:bg-[#D4E89E]/10 transition-colors"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}