import { Link } from 'react-router-dom';
import { Smartphone, Building2, Building } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-600 via-green-700 to-blue-600 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-4xl w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4 animate-float">
            <span className="text-7xl drop-shadow-2xl">🤖</span>
            <h1 className="text-6xl font-black text-white drop-shadow-2xl">
              Clean City AI
            </h1>
          </div>
          <p className="text-2xl text-white font-bold mb-2 drop-shadow-lg">
            AI-Powered Waste Management Platform for African Cities
          </p>
          <p className="text-lg text-white/90 drop-shadow-md">
            BeOrchid Africa Developers Hackathon - Stage 2 Prototype
          </p>
          
          {/* Key Metrics with Modern Design */}
          <div className="grid grid-cols-3 gap-4 mt-8 max-w-2xl mx-auto">
            <div className="glass p-6 hover:scale-110 transition-all duration-300 cursor-pointer group">
              <p className="text-5xl font-black text-white mb-2 group-hover:scale-110 transition-transform">70%</p>
              <p className="text-sm text-white/90 font-semibold">Waste Reduction</p>
              <div className="mt-2 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
            </div>
            <div className="glass p-6 hover:scale-110 transition-all duration-300 cursor-pointer group">
              <p className="text-5xl font-black text-white mb-2 group-hover:scale-110 transition-transform">40%</p>
              <p className="text-sm text-white/90 font-semibold">Disease Reduction</p>
              <div className="mt-2 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
            </div>
            <div className="glass p-6 hover:scale-110 transition-all duration-300 cursor-pointer group">
              <p className="text-5xl font-black text-white mb-2 group-hover:scale-110 transition-transform">40%</p>
              <p className="text-sm text-white/90 font-semibold">Fuel Savings</p>
              <div className="mt-2 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Demo Cards with Enhanced Design */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Mobile App */}
          <Link
            to="/signin?role=citizen"
            className="card hover:scale-105 transition-all duration-300 cursor-pointer group relative overflow-hidden"
          >
            {/* Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-cyan-400/0 group-hover:from-blue-600/10 group-hover:to-cyan-400/10 transition-all duration-300"></div>
            
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-glow-blue">
                <Smartphone className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-black text-gray-900 mb-2">
                📱 Mobile App
              </h2>
              <p className="text-gray-600 mb-4 font-semibold">
                Citizen Experience
              </p>
              <div className="ai-badge mb-3">
                🤖 Computer Vision
              </div>
              <p className="text-sm text-gray-500 font-semibold">
                AI analyzes photos in 3 seconds
              </p>
              <p className="text-sm text-gray-500 font-semibold">
                90%+ accuracy • 8 categories
              </p>
              <div className="mt-4 text-blue-600 font-black text-lg group-hover:translate-x-2 transition-transform">
                View Demo →
              </div>
            </div>
          </Link>

          {/* Company Dashboard */}
          <Link
            to="/signin?role=company"
            className="card hover:scale-105 transition-all duration-300 cursor-pointer group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-red-500/0 group-hover:from-orange-500/10 group-hover:to-red-500/10 transition-all duration-300"></div>
            
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-glow-blue">
                <Building2 className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-black text-gray-900 mb-2">
                💼 Company Dashboard
              </h2>
              <p className="text-gray-600 mb-4 font-semibold">
                Route Optimization
              </p>
              <div className="ai-badge mb-3" style={{ background: 'linear-gradient(135deg, #f97316, #ef4444)' }}>
                🤖 TSP Algorithm
              </div>
              <p className="text-sm text-gray-500 font-semibold">
                40% fuel savings
              </p>
              <p className="text-sm text-gray-500 font-semibold">
                50% faster response
              </p>
              <div className="mt-4 text-orange-500 font-black text-lg group-hover:translate-x-2 transition-transform">
                View Demo →
              </div>
            </div>
          </Link>

          {/* Municipal Dashboard */}
          <Link
            to="/signin?role=municipal"
            className="card hover:scale-105 transition-all duration-300 cursor-pointer group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300"></div>
            
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-glow-purple">
                <Building className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-black text-gray-900 mb-2">
                🏛️ Municipal Dashboard
              </h2>
              <p className="text-gray-600 mb-4 font-semibold">
                City-Wide Analytics
              </p>
              <div className="ai-badge mb-3" style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)' }}>
                🤖 Predictive Analytics
              </div>
              <p className="text-sm text-gray-500 font-semibold">
                85% prediction accuracy
              </p>
              <p className="text-sm text-gray-500 font-semibold">
                7-day forecasts
              </p>
              <div className="mt-4 text-purple-500 font-black text-lg group-hover:translate-x-2 transition-transform">
                View Demo →
              </div>
            </div>
          </Link>
        </div>

        {/* Footer with Modern Design */}
        <div className="text-center mt-12 text-white/90">
          <div className="glass p-6 inline-block">
            <p className="text-sm font-semibold mb-2">
              Created by FOSSO KENGNI Doriane | dorianekengni@gmail.com
            </p>
            <p className="text-xs mt-2">
              Prototype demonstrating AI-powered waste management for African cities
            </p>
            <p className="text-xs mt-1 font-bold">
              🌍 Connecting citizens, companies, and municipal authorities through smart technology
            </p>
            <div className="mt-4 flex items-center justify-center gap-4 text-xs">
              <span className="badge-success">5 AI Technologies</span>
              <span className="badge-info">14 Pages</span>
              <span className="badge-warning">55+ Features</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
