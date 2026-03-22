import logoImage from 'figma:asset/070f034663b839f300ff8f2103b31e72eb0533b7.png';
import { Linkedin, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0F2727] border-t border-[#D4E89E]/10 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImage} alt="TerraSat" className="w-8 h-8" />
              <span className="text-xl font-light text-white">TerraSat</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Intelligence Flywheel. IoT Groundtruthing Network.
            </p>
            <a 
              href="https://www.linkedin.com/company/terrasatlive/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#D4E89E] hover:text-[#c5d98f] transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span>Follow on LinkedIn</span>
            </a>
          </div>

          <div>
            <h4 className="text-white mb-4 font-medium">Platform</h4>
            <ul className="space-y-2">
              <li><a href="#how-it-works" className="text-gray-400 hover:text-[#D4E89E] transition-colors">How It Works</a></li>
              <li><a href="#impact" className="text-gray-400 hover:text-[#D4E89E] transition-colors">Impact</a></li>
              <li><a href="#who-we-serve" className="text-gray-400 hover:text-[#D4E89E] transition-colors">Who We Serve</a></li>
              <li><a href="/dashboard" className="text-gray-400 hover:text-[#D4E89E] transition-colors">Dashboard</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4 font-medium">Solutions</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Satellite Monitoring</span></li>
              <li><span className="text-gray-400">AI Risk Engine</span></li>
              <li><span className="text-gray-400">Ground Sensors</span></li>
              <li><span className="text-gray-400">Alert System</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4 font-medium">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-4 h-4 text-[#D4E89E] mt-1 flex-shrink-0" />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-start gap-2 text-gray-400">
                <Mail className="w-4 h-4 text-[#D4E89E] mt-1 flex-shrink-0" />
                <span>info@terrasat.earth</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#D4E89E]/10 pt-8 text-center text-gray-500 text-sm">
          <p>TerraSat 2026</p>
        </div>
      </div>
    </footer>
  );
}