import { Link } from 'react-router-dom';
import { Home, Trophy, Award, Star, TrendingUp, Users } from 'lucide-react';
import { userStats } from '../../data/mockData';

export default function Rewards() {
  const badges = [
    { id: 1, name: 'First Report', icon: '🎯', unlocked: true, points: 10 },
    { id: 2, name: 'Eco-Warrior', icon: '🌱', unlocked: true, points: 50 },
    { id: 3, name: 'Community Hero', icon: '🦸', unlocked: true, points: 100 },
    { id: 4, name: 'Clean Streets Champion', icon: '🏆', unlocked: false, points: 200 },
    { id: 5, name: 'Environmental Guardian', icon: '🌍', unlocked: false, points: 500 },
    { id: 6, name: 'Sustainability Master', icon: '⭐', unlocked: false, points: 1000 }
  ];

  const leaderboard = [
    { rank: 1, name: 'Aminata Sow', points: 1250, avatar: '👩🏾', neighborhood: 'Plateau' },
    { rank: 2, name: 'Mamadou Ba', points: 980, avatar: '👨🏿', neighborhood: 'Medina' },
    { rank: 3, name: 'Fatou Diop', points: 875, avatar: '👩🏿', neighborhood: 'Almadies' },
    { rank: 12, name: 'Marie Diop (You)', points: userStats.points, avatar: '👩🏾', neighborhood: 'Plateau', isYou: true },
    { rank: 13, name: 'Ibrahima Fall', points: 420, avatar: '👨🏿', neighborhood: 'Yoff' },
    { rank: 14, name: 'Aissatou Ndiaye', points: 390, avatar: '👩🏾', neighborhood: 'Ouakam' }
  ];

  const rewards = [
    { id: 1, name: '10% Off at Local Market', points: 100, icon: '🛒', available: true },
    { id: 2, name: 'Free Public Transport Day', points: 200, icon: '🚌', available: true },
    { id: 3, name: 'Municipal Recognition Certificate', points: 300, icon: '📜', available: true },
    { id: 4, name: 'Tree Planting Event Invitation', points: 500, icon: '🌳', available: false }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile Container */}
      <div className="max-w-[390px] mx-auto bg-white min-h-screen shadow-2xl">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-6 pb-8">
          <div className="flex items-center justify-between mb-4">
            <Link to="/mobile/home" className="text-white">
              <Home className="w-6 h-6" />
            </Link>
            <h1 className="text-xl font-bold text-white">Rewards & Gamification</h1>
            <div className="w-6" />
          </div>

          {/* Your Stats */}
          <div className="bg-white/10 backdrop-blur rounded-xl p-4">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold text-white">{userStats.points}</p>
                <p className="text-white/80 text-xs">Points</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">#{userStats.rank}</p>
                <p className="text-white/80 text-xs">Rank</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">{userStats.reports}</p>
                <p className="text-white/80 text-xs">Reports</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-4">
          
          {/* Points Breakdown */}
          <div className="card">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500" />
              How to Earn Points
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">Report Verified</p>
                  <p className="text-xs text-gray-600">Based on severity (1-5)</p>
                </div>
                <span className="text-green-600 font-bold">5-50 pts</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">Waste Collected</p>
                  <p className="text-xs text-gray-600">Bonus when collected</p>
                </div>
                <span className="text-blue-600 font-bold">+25 pts</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">Badge Unlocked</p>
                  <p className="text-xs text-gray-600">Achievement rewards</p>
                </div>
                <span className="text-purple-600 font-bold">10-100 pts</span>
              </div>
            </div>
          </div>

          {/* Badges */}
          <div className="card">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-orange-500" />
              Your Badges
            </h3>
            
            <div className="grid grid-cols-3 gap-3">
              {badges.map((badge) => (
                <div
                  key={badge.id}
                  className={`p-3 rounded-xl text-center ${
                    badge.unlocked
                      ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-500'
                      : 'bg-gray-100 border-2 border-gray-300 opacity-50'
                  }`}
                >
                  <div className="text-3xl mb-2">{badge.icon}</div>
                  <p className="text-xs font-semibold text-gray-900 mb-1">{badge.name}</p>
                  <p className="text-xs text-gray-600">+{badge.points} pts</p>
                  {!badge.unlocked && (
                    <p className="text-xs text-gray-500 mt-1">🔒 Locked</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Leaderboard */}
          <div className="card">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-500" />
              Leaderboard
            </h3>
            
            <div className="space-y-2">
              {leaderboard.map((user) => (
                <div
                  key={user.rank}
                  className={`flex items-center gap-3 p-3 rounded-lg ${
                    user.isYou
                      ? 'bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-600'
                      : user.rank <= 3
                      ? 'bg-yellow-50 border border-yellow-300'
                      : 'bg-gray-50'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                    user.rank === 1 ? 'bg-yellow-500 text-white' :
                    user.rank === 2 ? 'bg-gray-400 text-white' :
                    user.rank === 3 ? 'bg-orange-600 text-white' :
                    'bg-gray-300 text-gray-700'
                  }`}>
                    {user.rank}
                  </div>
                  
                  <div className="text-2xl">{user.avatar}</div>
                  
                  <div className="flex-1">
                    <p className={`font-semibold ${user.isYou ? 'text-green-900' : 'text-gray-900'}`}>
                      {user.name}
                    </p>
                    <p className="text-xs text-gray-600">{user.neighborhood}</p>
                  </div>
                  
                  <div className="text-right">
                    <p className="font-bold text-gray-900">{user.points}</p>
                    <p className="text-xs text-gray-600">points</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Out of {userStats.totalUsers.toLocaleString()} active users
              </p>
            </div>
          </div>

          {/* Neighborhood Competition */}
          <div className="card bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-600">
            <div className="flex items-start gap-3 mb-4">
              <Users className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-blue-900 mb-1">Monthly Competition</h3>
                <p className="text-sm text-blue-800">
                  Compete with other neighborhoods for the cleanest area
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 bg-white rounded-lg">
                <span className="text-sm font-semibold">🥇 Plateau</span>
                <span className="text-sm text-gray-600">2,450 pts</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-white rounded-lg">
                <span className="text-sm font-semibold">🥈 Medina</span>
                <span className="text-sm text-gray-600">2,180 pts</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-white rounded-lg">
                <span className="text-sm font-semibold">🥉 Almadies</span>
                <span className="text-sm text-gray-600">1,920 pts</span>
              </div>
            </div>

            <p className="text-xs text-blue-700 mt-3 text-center">
              Ends in 12 days | Prize: Municipal Recognition
            </p>
          </div>

          {/* Partner Rewards */}
          <div className="card">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-500" />
              Redeem Rewards
            </h3>
            
            <div className="space-y-3">
              {rewards.map((reward) => (
                <div
                  key={reward.id}
                  className={`p-4 rounded-xl border-2 ${
                    reward.available
                      ? 'bg-white border-green-600'
                      : 'bg-gray-50 border-gray-300 opacity-60'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-3xl">{reward.icon}</div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">{reward.name}</p>
                      <p className="text-sm text-gray-600">{reward.points} points required</p>
                    </div>
                  </div>
                  
                  {reward.available ? (
                    <button className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold text-sm">
                      Redeem Now
                    </button>
                  ) : (
                    <button className="w-full bg-gray-300 text-gray-600 py-2 rounded-lg font-semibold text-sm" disabled>
                      Not Enough Points
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Your Impact */}
          <div className="card bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-600">
            <h3 className="font-bold text-green-900 mb-3">🌍 Your Environmental Impact</h3>
            <div className="space-y-2 text-sm text-green-800">
              <div className="flex items-center justify-between">
                <span>Waste Removed:</span>
                <span className="font-bold">{userStats.wasteRemoved} kg</span>
              </div>
              <div className="flex items-center justify-between">
                <span>CO2 Avoided:</span>
                <span className="font-bold">{userStats.co2Avoided} tons</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Collections Triggered:</span>
                <span className="font-bold">{userStats.collections}</span>
              </div>
            </div>
            <p className="text-xs text-green-700 mt-3 text-center">
              💚 Thank you for making Dakar cleaner!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
