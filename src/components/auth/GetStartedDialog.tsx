import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { useNavigate } from 'react-router';

interface GetStartedDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSwitchToSignIn: () => void;
}

const ROLES = [
  {
    id: 'insurance-underwriter',
    name: 'Insurance Underwriter',
    description: 'Flood and drought risk scoring at quote',
  },
  {
    id: 'claims-adjuster',
    name: 'Claims Adjuster',
    description: 'Satellite-verified claims resolution',
  },
  {
    id: 'disaster-manager',
    name: 'Disaster Manager',
    description: 'Early warning and alert management',
  },
  {
    id: 'reinsurer-analyst',
    name: 'Reinsurer / CAT Analyst',
    description: 'Portfolio exposure and catastrophe monitoring',
  },
  {
    id: 'loan-manager',
    name: 'Loan Manager (Bank)',
    description: 'Climate risk for lending decisions',
  },
];

export function GetStartedDialog({ open, onOpenChange, onSwitchToSignIn }: GetStartedDialogProps) {
  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('disaster-manager');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store role and auth status
    localStorage.setItem('userRole', selectedRole);
    localStorage.setItem('userName', fullName);
    localStorage.setItem('userCompany', company);
    localStorage.setItem('isAuthenticated', 'true');
    
    // Navigate to dashboard
    navigate('/dashboard');
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#1A3A3A] border-[#D4E89E]/20 text-white max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-white">Get Started with TerraSat</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullname" className="text-gray-300">Full Name</Label>
              <Input
                id="fullname"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="bg-[#0F2727] border-[#D4E89E]/20 text-white placeholder:text-gray-500"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company" className="text-gray-300">Company</Label>
              <Input
                id="company"
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="bg-[#0F2727] border-[#D4E89E]/20 text-white placeholder:text-gray-500"
                placeholder="Your Organization"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-300">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#0F2727] border-[#D4E89E]/20 text-white placeholder:text-gray-500"
              placeholder="your@email.com"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-300">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#0F2727] border-[#D4E89E]/20 text-white placeholder:text-gray-500"
              placeholder="••••••••"
              required
            />
          </div>

          <div className="space-y-3">
            <Label className="text-gray-300">Select Your Role</Label>
            <RadioGroup value={selectedRole} onValueChange={setSelectedRole} className="space-y-3">
              {ROLES.map((role) => (
                <div key={role.id} className="flex items-start space-x-3">
                  <RadioGroupItem 
                    value={role.id} 
                    id={role.id}
                    className="mt-1 border-[#D4E89E] text-[#D4E89E]"
                  />
                  <div className="flex-1">
                    <Label htmlFor={role.id} className="text-white cursor-pointer">
                      {role.name}
                    </Label>
                    <p className="text-sm text-gray-400">{role.description}</p>
                  </div>
                </div>
              ))}
            </RadioGroup>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-[#D4E89E] text-[#1A3A3A] hover:bg-[#C8DD8C]"
          >
            Create Account
          </Button>
          
          <p className="text-center text-sm text-gray-400">
            Already have an account?{' '}
            <button
              type="button"
              onClick={onSwitchToSignIn}
              className="text-[#D4E89E] hover:underline"
            >
              Sign In
            </button>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
