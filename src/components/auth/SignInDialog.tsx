import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router';

interface SignInDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSwitchToSignUp: () => void;
}

export function SignInDialog({ open, onOpenChange, onSwitchToSignUp }: SignInDialogProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication - retrieve role from localStorage
    const userRole = localStorage.getItem('userRole') || 'disaster-manager';
    localStorage.setItem('isAuthenticated', 'true');
    navigate('/dashboard');
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#1A3A3A] border-[#D4E89E]/20 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl text-white">Sign In to TerraSat</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSignIn} className="space-y-6 mt-4">
          <div className="space-y-2">
            <Label htmlFor="signin-email" className="text-gray-300">Email</Label>
            <Input
              id="signin-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#0F2727] border-[#D4E89E]/20 text-white placeholder:text-gray-500"
              placeholder="your@email.com"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="signin-password" className="text-gray-300">Password</Label>
            <Input
              id="signin-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#0F2727] border-[#D4E89E]/20 text-white placeholder:text-gray-500"
              placeholder="••••••••"
              required
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-[#D4E89E] text-[#1A3A3A] hover:bg-[#C8DD8C]"
          >
            Sign In
          </Button>
          <p className="text-center text-sm text-gray-400">
            Don't have an account?{' '}
            <button
              type="button"
              onClick={onSwitchToSignUp}
              className="text-[#D4E89E] hover:underline"
            >
              Get Started
            </button>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
