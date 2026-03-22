import { useState } from 'react';
import { AlertTriangle, Users, Building2, TrendingUp, X, Send } from 'lucide-react';
import { HazardType } from '../../pages/Dashboard';

interface RiskPanelProps {
  hazardType: HazardType;
  selectedCounty: string | null;
  showAlertPanel: boolean;
  setShowAlertPanel: (show: boolean) => void;
}

export function RiskPanel({
  hazardType,
  selectedCounty,
  showAlertPanel,
  setShowAlertPanel,
}: RiskPanelProps) {
  const [alertLanguage, setAlertLanguage] = useState('en');
  const [alertMessage, setAlertMessage] = useState('');

  // Mock risk data
  const riskData = {
    flood: {
      score: 78,
      trend: 'increasing',
      population: '2.4M',
      infrastructure: '1,234',
      severity: 'high',
      confidence: 92,
    },
    drought: {
      score: 71,
      trend: 'stable',
      population: '3.1M',
      infrastructure: '987',
      severity: 'high',
      confidence: 88,
    },
  };

  const currentData = riskData[hazardType];

  const getRiskColor = (score: number) => {
    if (score >= 80) return 'text-red-500';
    if (score >= 60) return 'text-orange-500';
    if (score >= 30) return 'text-yellow-500';
    return 'text-green-500';
  };

  const getRiskBg = (score: number) => {
    if (score >= 80) return 'bg-red-500';
    if (score >= 60) return 'bg-orange-500';
    if (score >= 30) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const handleSendAlert = () => {
    // Mock alert sending
    alert(`Alert sent in ${alertLanguage === 'sw' ? 'Kiswahili' : 'English'} via SMS/USSD`);
    setShowAlertPanel(false);
    setAlertMessage('');
  };

  return (
    <div className="w-96 bg-[#1A3A3A] border-l border-[#D4E89E]/20 overflow-y-auto">
      {showAlertPanel ? (
        /* Alert Creation Panel */
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-white text-lg font-medium">Create Alert</h3>
            <button
              onClick={() => setShowAlertPanel(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4">
            {/* Target Location */}
            <div>
              <label className="text-sm text-gray-400 block mb-2">Target Location</label>
              <input
                type="text"
                value={selectedCounty || 'National (All Counties)'}
                readOnly
                className="w-full bg-[#0F2626] text-gray-300 px-3 py-2 rounded border border-[#D4E89E]/20"
              />
            </div>

            {/* Hazard Type */}
            <div>
              <label className="text-sm text-gray-400 block mb-2">Hazard Type</label>
              <input
                type="text"
                value={hazardType === 'flood' ? 'Flood Warning' : 'Drought Alert'}
                readOnly
                className="w-full bg-[#0F2626] text-gray-300 px-3 py-2 rounded border border-[#D4E89E]/20"
              />
            </div>

            {/* Language Selection */}
            <div>
              <label className="text-sm text-gray-400 block mb-2">Message Language</label>
              <select
                value={alertLanguage}
                onChange={(e) => setAlertLanguage(e.target.value)}
                className="w-full bg-[#0F2626] text-gray-300 px-3 py-2 rounded border border-[#D4E89E]/20 focus:outline-none focus:border-[#D4E89E]"
              >
                <option value="en">English</option>
                <option value="sw">Kiswahili</option>
              </select>
            </div>

            {/* Message Preview */}
            <div>
              <label className="text-sm text-gray-400 block mb-2">Alert Message</label>
              <textarea
                value={
                  alertLanguage === 'sw'
                    ? hazardType === 'flood'
                      ? 'TAARIFA YA MAFURIKO: Hatari kubwa ya mafuriko iko karibu na eneo lako ndani ya saa 6 zijazo. Tafadhali chukua tahadhari.'
                      : 'TAARIFA YA UKAME: Hatari ya ukame inaendelea katika eneo lako. Tumia maji kwa busara.'
                    : hazardType === 'flood'
                      ? 'FLOOD WARNING: High flood risk detected in your area within the next 6 hours. Please take necessary precautions.'
                      : 'DROUGHT ALERT: Severe drought conditions persist in your area. Conserve water resources.'
                }
                onChange={(e) => setAlertMessage(e.target.value)}
                rows={4}
                className="w-full bg-[#0F2626] text-gray-300 px-3 py-2 rounded border border-[#D4E89E]/20 focus:outline-none focus:border-[#D4E89E] text-sm"
              />
            </div>

            {/* Delivery Channels */}
            <div>
              <label className="text-sm text-gray-400 block mb-2">Delivery Channels</label>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4 accent-[#D4E89E]" />
                  <span className="text-sm text-gray-300">SMS</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4 accent-[#D4E89E]" />
                  <span className="text-sm text-gray-300">USSD</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4 accent-[#D4E89E]" />
                  <span className="text-sm text-gray-300">Dashboard Notification</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 accent-[#D4E89E]" />
                  <span className="text-sm text-gray-300">API Webhook</span>
                </label>
              </div>
            </div>

            {/* Send Button */}
            <button
              onClick={handleSendAlert}
              className="w-full flex items-center justify-center gap-2 bg-[#D4E89E] text-[#1A3A3A] px-4 py-3 rounded-lg hover:bg-[#c5d98f] transition-colors font-medium"
            >
              <Send className="w-5 h-5" />
              Send Alert
            </button>
          </div>
        </div>
      ) : (
        /* Risk Summary Panel */
        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-white text-lg font-medium mb-1">Risk Summary</h3>
            <p className="text-gray-400 text-sm">
              {selectedCounty ? `${selectedCounty} County` : 'National Overview'}
            </p>
          </div>

          {/* Risk Score */}
          <div className="bg-[#0F2626] rounded-lg border border-[#D4E89E]/10 p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-gray-400 text-sm">Composite Risk Score</span>
              <span className={`text-xs px-2 py-1 rounded ${currentData.severity === 'critical' ? 'bg-red-500/20 text-red-400' : 'bg-orange-500/20 text-orange-400'}`}>
                {currentData.severity.toUpperCase()}
              </span>
            </div>
            <div className="flex items-baseline gap-2 mb-3">
              <span className={`text-5xl font-light ${getRiskColor(currentData.score)}`}>
                {currentData.score}
              </span>
              <span className="text-gray-400">/100</span>
            </div>
            <div className="w-full bg-[#1A3A3A] rounded-full h-2">
              <div
                className={`h-2 rounded-full ${getRiskBg(currentData.score)}`}
                style={{ width: `${currentData.score}%` }}
              ></div>
            </div>
            <div className="flex items-center gap-1 mt-3 text-sm">
              <TrendingUp className={`w-4 h-4 ${currentData.trend === 'increasing' ? 'text-red-400' : 'text-green-400'}`} />
              <span className="text-gray-400">
                {currentData.trend === 'increasing' ? 'Risk Increasing' : 'Risk Stable'}
              </span>
            </div>
          </div>

          {/* Exposure Analysis */}
          <div className="bg-[#0F2626] rounded-lg border border-[#D4E89E]/10 p-5">
            <h4 className="text-white font-medium mb-4">Exposure Analysis</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#D4E89E]/10 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-[#D4E89E]" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Population at Risk</div>
                    <div className="text-white font-medium">{currentData.population}</div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#D4E89E]/10 rounded-lg flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-[#D4E89E]" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Critical Infrastructure</div>
                    <div className="text-white font-medium">{currentData.infrastructure} sites</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decision Prompts */}
          <div className="bg-[#0F2626] rounded-lg border border-[#D4E89E]/10 p-5">
            <h4 className="text-white font-medium mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-orange-400" />
              Recommended Actions
            </h4>
            <ul className="space-y-3">
              {hazardType === 'flood' ? (
                <>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-[#D4E89E] mt-0.5">•</span>
                    <span>Prepare evacuation assets for high-risk wards</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-[#D4E89E] mt-0.5">•</span>
                    <span>Trigger SMS alerts to affected communities</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-[#D4E89E] mt-0.5">•</span>
                    <span>Notify partner humanitarian systems</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-[#D4E89E] mt-0.5">•</span>
                    <span>Pre-position emergency supplies</span>
                  </li>
                </>
              ) : (
                <>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-[#D4E89E] mt-0.5">•</span>
                    <span>Initiate water conservation programs</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-[#D4E89E] mt-0.5">•</span>
                    <span>Alert agricultural extension services</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-[#D4E89E] mt-0.5">•</span>
                    <span>Coordinate livestock support interventions</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-[#D4E89E] mt-0.5">•</span>
                    <span>Monitor food security indicators</span>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* Confidence Indicator */}
          <div className="bg-[#0F2626] rounded-lg border border-[#D4E89E]/10 p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Model Confidence</span>
              <span className="text-[#D4E89E] font-medium">{currentData.confidence}%</span>
            </div>
            <div className="w-full bg-[#1A3A3A] rounded-full h-1.5 mt-2">
              <div
                className="h-1.5 rounded-full bg-[#D4E89E]"
                style={{ width: `${currentData.confidence}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
