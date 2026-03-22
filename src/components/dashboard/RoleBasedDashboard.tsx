import { useState, useEffect } from 'react';
import { DashboardSidebar } from './DashboardSidebar';
import { DashboardMap } from './DashboardMap';
import { RiskPanel } from './RiskPanel';
import { DashboardHeader } from './DashboardHeader';
import { DataPipeline } from './DataPipeline';
import { UnderwriterPanel } from './roles/UnderwriterPanel';
import { ClaimsAdjusterPanel } from './roles/ClaimsAdjusterPanel';
import { LoanManagerPanel } from './roles/LoanManagerPanel';
import { ReinsurerPanel } from './roles/ReinsurerPanel';
import type { HazardType, TimeRange } from '../../pages/Dashboard';

export function RoleBasedDashboard() {
  const [hazardType, setHazardType] = useState<HazardType>('flood');
  const [timeRange, setTimeRange] = useState<TimeRange>('7d');
  const [selectedCounty, setSelectedCounty] = useState<string | null>(null);
  const [showAlertPanel, setShowAlertPanel] = useState(false);
  const [showDataPipeline, setShowDataPipeline] = useState(false);
  const [userRole, setUserRole] = useState<string>('disaster-manager');
  const [userName, setUserName] = useState<string>('User');

  useEffect(() => {
    const role = localStorage.getItem('userRole') || 'disaster-manager';
    const name = localStorage.getItem('userName') || 'User';
    setUserRole(role);
    setUserName(name);
  }, []);

  // Render the appropriate right panel based on role
  const renderRightPanel = () => {
    switch (userRole) {
      case 'insurance-underwriter':
        return (
          <UnderwriterPanel
            hazardType={hazardType}
            selectedCounty={selectedCounty}
          />
        );
      case 'claims-adjuster':
        return (
          <ClaimsAdjusterPanel
            hazardType={hazardType}
            selectedCounty={selectedCounty}
          />
        );
      case 'loan-manager':
        return (
          <LoanManagerPanel
            hazardType={hazardType}
            selectedCounty={selectedCounty}
          />
        );
      case 'reinsurer-analyst':
        return (
          <ReinsurerPanel
            hazardType={hazardType}
            selectedCounty={selectedCounty}
          />
        );
      case 'disaster-manager':
      default:
        return (
          <RiskPanel
            hazardType={hazardType}
            selectedCounty={selectedCounty}
            showAlertPanel={showAlertPanel}
            setShowAlertPanel={setShowAlertPanel}
          />
        );
    }
  };

  const getRoleTitle = () => {
    const roles: Record<string, string> = {
      'insurance-underwriter': 'Insurance Underwriter',
      'claims-adjuster': 'Claims Adjuster',
      'disaster-manager': 'Disaster Manager',
      'reinsurer-analyst': 'Reinsurer / CAT Analyst',
      'loan-manager': 'Loan Manager',
    };
    return roles[userRole] || 'User';
  };

  return (
    <>
      {/* Dashboard Header with Role Info */}
      <div className="bg-[#1A3A3A] border-b border-[#D4E89E]/20 px-6 py-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">Role</p>
            <p className="text-white">{getRoleTitle()}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500 uppercase tracking-wide">Welcome</p>
            <p className="text-white">{userName}</p>
          </div>
        </div>
      </div>

      <DashboardHeader
        hazardType={hazardType}
        setHazardType={setHazardType}
        timeRange={timeRange}
        setTimeRange={setTimeRange}
      />

      {/* Main Dashboard Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar */}
        <DashboardSidebar
          hazardType={hazardType}
          selectedCounty={selectedCounty}
          setSelectedCounty={setSelectedCounty}
          setShowAlertPanel={setShowAlertPanel}
          setShowDataPipeline={setShowDataPipeline}
        />

        {/* Center Map Area */}
        <DashboardMap
          hazardType={hazardType}
          timeRange={timeRange}
          selectedCounty={selectedCounty}
          setSelectedCounty={setSelectedCounty}
        />

        {/* Right Panel - Role Based */}
        {renderRightPanel()}
      </div>

      {/* Data Pipeline Modal */}
      {showDataPipeline && <DataPipeline onClose={() => setShowDataPipeline(false)} />}
    </>
  );
}
