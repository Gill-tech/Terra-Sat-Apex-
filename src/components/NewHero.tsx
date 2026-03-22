import { useState } from 'react';
import { Button } from './ui/button';
import { ExploreMapDialog } from './ExploreMapDialog';
import { Map } from 'lucide-react';

export function NewHero() {
  const [exploreMapOpen, setExploreMapOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="https://videos.pexels.com/video-files/7710243/7710243-uhd_2560_1440_30fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A3A3A]/60 via-[#1A3A3A]/80 to-[#1A3A3A]" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-block mb-6">
            <span className="text-xs tracking-[0.3em] text-[#D4E89E] uppercase">
              Climate Intelligence Platform
            </span>
          </div>
          
          <h1 className="text-6xl font-light text-white mb-6 leading-tight">
            Actionable Climate Risk Intelligence
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            From satellite signals to last-mile alerts — climate intelligence that protects every asset and every community, at every level of the risk chain across East Africa.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto">
            <div className="bg-[#0F2727]/60 backdrop-blur-sm border border-[#D4E89E]/20 rounded-lg p-6">
              <div className="text-4xl font-light text-[#D4E89E] mb-2">Faster Claims</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Processing</div>
            </div>
            <div className="bg-[#0F2727]/60 backdrop-blur-sm border border-[#D4E89E]/20 rounded-lg p-6">
              <div className="text-4xl font-light text-[#D4E89E] mb-2">East Africa</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Coverage</div>
            </div>
            <div className="bg-[#0F2727]/60 backdrop-blur-sm border border-[#D4E89E]/20 rounded-lg p-6">
              <div className="text-4xl font-light text-[#D4E89E] mb-2">24 Hours</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Early Warning</div>
            </div>
          </div>

          <Button 
            onClick={() => setExploreMapOpen(true)}
            className="bg-[#D4E89E] text-[#1A3A3A] hover:bg-[#C8DD8C] px-8 py-6 text-lg"
          >
            <Map className="w-5 h-5 mr-2" />
            Explore Data
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-2 text-gray-400">
            <span className="text-xs uppercase tracking-wide">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-gray-400 to-transparent" />
          </div>
        </div>
      </section>

      <ExploreMapDialog open={exploreMapOpen} onOpenChange={setExploreMapOpen} />
    </>
  );
}