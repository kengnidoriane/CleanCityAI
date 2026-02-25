import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Brain, Mail, Lock, AlertCircle } from 'lucide-react';
import { testUsers, setCurrentUser } from '../data/testUsers';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const role = searchParams.get('role') || 'citizen';

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const user = testUsers.find(
      u => u.email === email && u.password === password && u.role === role
    );

    if (user) {
      setCurrentUser(user);
      
      // Redirect based on role
      if (role === 'citizen') {
        navigate('/mobile/home');
      } else if (role === 'company') {
        navigate('/company/routes');
      } else if (role === 'municipal') {
        navigate('/municipal/overview');
      }
    } else {
      setError('Invalid credentials. Try test accounts below.');
    }
  };

  const quickLogin = (testEmail: string, testPassword: string) => {
    setEmail(testEmail);
    setPassword(testPassword);
  };

  const getRoleInfo = () => {
    switch (role) {
      case 'citizen':
        return {
          title: 'Citizen Portal',
          subtitle: 'Report waste and track collections',
          icon: '📱',
          color: 'from-blue-600 via-cyan-500 to-blue-600',
          shadow: 'shadow-glow-blue'
        };
      case 'company':
        return {
          title: 'Company Dashboard',
          subtitle: 'Optimize routes and manage fleet',
          icon: '💼',
          color: 'from-orange-500 via-red-500 to-orange-500',
          shadow: 'shadow-glow-blue'
        };
      case 'municipal':
        return {
          title: 'Municipal Dashboard',
          subtitle: 'City-wide analytics and insights',
          icon: '🏛️',
          color: 'from-purple-500 via-pink-500 to-purple-500',
          shadow: 'shadow-glow-purple'
        };
      default:
        return {
          title: 'Sign In',
          subtitle: 'Access your account',
          icon: '🔐',
          color: 'from-green-600 via-blue-600 to-green-600',
          shadow: 'shadow-glow-green'
        };
    }
  };

  const roleInfo = getRoleInfo();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-md w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className={`inline-flex items-center gap-3 mb-4 p-4 rounded-2xl bg-gradient-to-r ${roleInfo.color} ${roleInfo.shadow} animate-float`}>
            <span className="text-5xl">{roleInfo.icon}</span>
            <Brain className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-black text-white mb-2 drop-shadow-lg">
            {roleInfo.title}
          </h1>
          <p className="text-gray-300 font-semibold">
            {roleInfo.subtitle}
          </p>
        </div>

        {/* Sign In Card */}
        <div className="card p-8 backdrop-blur-xl bg-white/95 border-2 border-white/20">
          <form onSubmit={handleSignIn} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-600 focus:ring-4 focus:ring-green-600/20 transition-all outline-none font-semibold"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-600 focus:ring-4 focus:ring-green-600/20 transition-all outline-none font-semibold"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border-2 border-red-500 rounded-xl p-4 flex items-center gap-3 animate-pulse">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <p className="text-sm text-red-700 font-semibold">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full btn-primary py-4 text-lg ripple"
            >
              Sign In →
            </button>
          </form>

          {/* Test Accounts */}
          <div className="mt-8 pt-6 border-t-2 border-gray-200">
            <p className="text-sm font-bold text-gray-700 mb-4 text-center">
              🧪 Test Accounts (Click to auto-fill)
            </p>
            <div className="space-y-3">
              {testUsers
                .filter(u => u.role === role)
                .map((user) => (
                  <button
                    key={user.email}
                    onClick={() => quickLogin(user.email, user.password)}
                    className="w-full p-4 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-green-50 hover:to-blue-50 border-2 border-gray-200 hover:border-green-600 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-3xl group-hover:scale-110 transition-transform">{user.avatar}</span>
                      <div className="text-left flex-1">
                        <p className="font-bold text-gray-900 group-hover:text-green-600 transition-colors">{user.name}</p>
                        <p className="text-xs text-gray-600 font-semibold">{user.email}</p>
                      </div>
                      <span className="text-green-600 font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </span>
                    </div>
                  </button>
                ))}
            </div>
          </div>

          {/* Role Switcher */}
          <div className="mt-6 pt-6 border-t-2 border-gray-200">
            <p className="text-sm font-bold text-gray-700 mb-3 text-center">
              Switch Role
            </p>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => navigate('/signin?role=citizen')}
                className={`p-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                  role === 'citizen'
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-400 text-white shadow-glow-blue scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                📱 Citizen
              </button>
              <button
                onClick={() => navigate('/signin?role=company')}
                className={`p-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                  role === 'company'
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-glow-blue scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                💼 Company
              </button>
              <button
                onClick={() => navigate('/signin?role=municipal')}
                className={`p-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                  role === 'municipal'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-glow-purple scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                🏛️ Municipal
              </button>
            </div>
          </div>

          {/* Back to Home */}
          <div className="mt-6 text-center">
            <button
              onClick={() => navigate('/')}
              className="text-gray-600 hover:text-green-600 font-bold text-sm transition-colors"
            >
              ← Back to Home
            </button>
          </div>
        </div>

        {/* Footer Badge */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 glass px-6 py-3">
            <span className="text-white font-bold text-sm">🤖 AI-Powered Platform</span>
          </div>
        </div>
      </div>
    </div>
  );
}
