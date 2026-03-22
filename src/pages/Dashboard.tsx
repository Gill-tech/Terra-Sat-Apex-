import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { RoleBasedDashboard } from '../components/dashboard/RoleBasedDashboard';
import { LogOut } from 'lucide-react';
import logoImage from 'figma:asset/070f034663b839f300ff8f2103b31e72eb0533b7.png';

export type HazardType = 'flood' | 'drought';
export type TimeRange = '24h' | '7d' | '30d' | 'season';

export function Dashboard() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userName');
    localStorage.removeItem('userCompany');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#0F2626] flex flex-col">
      {/* Top Navigation Bar */}
      <nav className="bg-[#1A3A3A] border-b border-[#D4E89E]/20 px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoImage} alt="TerraSat" className="w-10 h-10" />
            <span className="text-white text-xl">TerraSat</span>
          </Link>
          <div className="flex items-center gap-6">
            <div className="text-gray-400 text-sm">
              Climate Risk Intelligence Platform
            </div>
            <button
              onClick={handleSignOut}
              className="flex items-center gap-2 text-gray-400 hover:text-[#D4E89E] transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span className="text-sm">Sign Out</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Role-based Dashboard Content */}
      <RoleBasedDashboard />

      {/* Footer */}
      <footer className="bg-[#1A3A3A] border-t border-[#D4E89E]/20 px-6 py-3">
        <div className="flex items-center justify-between text-xs text-gray-400">
          <div className="flex items-center gap-6">
            <span>Data: Sentinel-1, Sentinel-2, ERA5</span>
            <span>Update: 5 mins ago</span>
            <span className="flex items-center gap-1">
              Confidence: <span className="text-[#D4E89E]">High (92%)</span>
            </span>
          </div>
          <div>© 2026 TerraSat · Kenya Data Protection Act Compliant</div>
        </div>
      </footer>
    </div>
  );
}