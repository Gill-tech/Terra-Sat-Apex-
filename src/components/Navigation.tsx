import logoImage from 'figma:asset/070f034663b839f300ff8f2103b31e72eb0533b7.png';
import { useState } from 'react';
import { SignInDialog } from './auth/SignInDialog';
import { GetStartedDialog } from './auth/GetStartedDialog';

export function Navigation() {
  const [signInOpen, setSignInOpen] = useState(false);
  const [getStartedOpen, setGetStartedOpen] = useState(false);

  const handleSwitchToSignUp = () => {
    setSignInOpen(false);
    setGetStartedOpen(true);
  };

  const handleSwitchToSignIn = () => {
    setGetStartedOpen(false);
    setSignInOpen(true);
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-[#1A3A3A]/95 backdrop-blur-sm border-b border-[#D4E89E]/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoImage} alt="TerraSat" className="w-8 h-8" />
            <span className="text-xl font-light text-white">TerraSat</span>
          </div>
          <div className="flex items-center gap-8">
            <a href="#how-it-works" className="text-gray-300 hover:text-[#D4E89E] transition-colors">How It Works</a>
            <a href="#solutions" className="text-gray-300 hover:text-[#D4E89E] transition-colors">Solutions</a>
            <a href="#capabilities" className="text-gray-300 hover:text-[#D4E89E] transition-colors">Capabilities</a>
            <a href="#impact" className="text-gray-300 hover:text-[#D4E89E] transition-colors">Impact</a>
            <a href="#who-we-serve" className="text-gray-300 hover:text-[#D4E89E] transition-colors">Who We Serve</a>
            <button 
              onClick={() => setSignInOpen(true)}
              className="text-gray-300 hover:text-[#D4E89E] transition-colors"
            >
              Sign In
            </button>
            <button 
              onClick={() => setGetStartedOpen(true)}
              className="border border-[#D4E89E] text-[#D4E89E] px-6 py-2 rounded-lg hover:bg-[#D4E89E]/10 transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <SignInDialog 
        open={signInOpen} 
        onOpenChange={setSignInOpen}
        onSwitchToSignUp={handleSwitchToSignUp}
      />
      <GetStartedDialog 
        open={getStartedOpen} 
        onOpenChange={setGetStartedOpen}
        onSwitchToSignIn={handleSwitchToSignIn}
      />
    </>
  );
}