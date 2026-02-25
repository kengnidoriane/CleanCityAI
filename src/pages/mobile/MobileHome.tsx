import { Link, useNavigate } from 'react-router-dom';
import { Camera, Map, TrendingUp, LogOut, Bell, Award } from 'lucide-react';
import { getCurrentUser, logout } from '../../data/testUsers';
import { userStats } from '../../data/mockData';

export default function MobileHome() {
  const navigate = useNavigate();
  const user = getCurrentUser();

  if (!user) {
    navigate('/signin?role=citizen');
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile Container */}
      <div className="max-w-[390px] mx-auto bg-white min-h-screen shadow-2xl">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 pb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl">
                {user.avatar}
              </div>
              <div>
                <p className="text-white/80 text-sm">Welcome back</p>
                <p className="text-white font-bold text-lg">{user.name}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bell className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={handleLogout}
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
              >
                <LogOut className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* AI Status */}
          <div className="bg-white/10 backdrop-blur rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <p className="text-white font-semibold">AI System Active</p>
            </div>
            <p className="text-white/80 text-sm">
              127 waste detected | 89% collected | Next pickup: 2h
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-4">
          
          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-3">
            <Link
              to="/mobile/take-photo"
              className="card bg-gradient-to-br from-blue-600 to-cyan-400 text-white hover:scale-105 transition-transform"
            >
              <Camera className="w-8 h-8 mb-3" />
              <p className="font-bold text-lg">Report Waste</p>
              <p className="text-sm text-white/80">Take a photo</p>
            </Link>

            <Link
              to="/mobile/tracking"
              className="card bg-gradient-to-br from-green-600 to-green-700 text-white hover:scale-105 transition-transform"
            >
              <Map className="w-8 h-8 mb-3" />
              <p className="font-bold text-lg">View Map</p>
              <p className="text-sm text-white/80">Predictions</p>
            </Link>
          </div>

          {/* Your Stats */}
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg">Your Impact</h3>
              <Link to="/mobile/rewards" className="text-green-600 text-sm font-semibold">
                View All →
              </Link>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900">{userStats.points}</p>
                <p className="text-xs text-gray-600">Points</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900">#{userStats.rank}</p>
                <p className="text-xs text-gray-600">Rank</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Camera className="w-6 h-6 text-orange-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900">{userStats.reports}</p>
                <p className="text-xs text-gray-600">Reports</p>
              </div>
            </div>
          </div>

          {/* AI Prediction */}
          <div className="card bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-orange-500">
            <div className="flex items-start gap-3">
              <span className="text-3xl">🔮</span>
              <div>
                <p className="font-bold text-gray-900 mb-1">AI Prediction</p>
                <p className="text-sm text-gray-700">
                  High accumulation expected tomorrow (Market day)
                </p>
                <p className="text-xs text-gray-600 mt-2">
                  Confidence: 87% | Zone: Central Market
                </p>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="card">
            <h3 className="font-bold text-lg mb-4">Recent Activity</h3>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white">
                  ✓
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">Waste Collected</p>
                  <p className="text-xs text-gray-600">Republic Street • 2 hours ago</p>
                </div>
                <span className="text-green-600 font-bold">+25</span>
              </div>

              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
                  📷
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">Report Submitted</p>
                  <p className="text-xs text-gray-600">Market Area • 5 hours ago</p>
                </div>
                <span className="text-blue-600 font-bold">+15</span>
              </div>

              <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white">
                  🏆
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">Badge Unlocked</p>
                  <p className="text-xs text-gray-600">Eco-Warrior • Yesterday</p>
                </div>
                <span className="text-purple-600 font-bold">+50</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-3 gap-2">
            <Link
              to="/mobile/tracking"
              className="card text-center hover:bg-gray-50 transition-colors"
            >
              <span className="text-2xl mb-2 block">🚛</span>
              <p className="text-xs font-semibold text-gray-700">Track Truck</p>
            </Link>
            
            <Link
              to="/mobile/waste-to-value"
              className="card text-center hover:bg-gray-50 transition-colors"
            >
              <span className="text-2xl mb-2 block">♻️</span>
              <p className="text-xs font-semibold text-gray-700">Marketplace</p>
            </Link>
            
            <Link
              to="/mobile/rewards"
              className="card text-center hover:bg-gray-50 transition-colors"
            >
              <span className="text-2xl mb-2 block">🎁</span>
              <p className="text-xs font-semibold text-gray-700">Rewards</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
