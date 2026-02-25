import { Link } from 'react-router-dom';
import { Home, TrendingDown, Clock, Fuel, DollarSign, MapPin, Brain } from 'lucide-react';
import { routeOptimization } from '../../data/mockData';

export default function RouteOptimization() {
  const { manual, ai, savings, algorithm, responseTimeImprovement } = routeOptimization;

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto p-6">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link to="/" className="text-green-600 hover:text-green-700 mb-2 inline-block">
              ← Back to Home
            </Link>
            <h1 className="text-4xl font-bold text-gray-900">
              Route Optimization
            </h1>
            <p className="text-gray-600 mt-2">AI-powered route planning for maximum efficiency</p>
          </div>
          <div className="ai-badge text-lg">
            <Brain className="w-5 h-5" />
            AI ACTIVE
          </div>
        </div>

        {/* Algorithm Info */}
        <div className="card mb-6 bg-gradient-to-r from-blue-600 to-cyan-400 text-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Brain className="w-8 h-8" />
                <h2 className="text-2xl font-bold">AI-OPTIMIZED ROUTE</h2>
              </div>
              <p className="text-white/90 mb-1">Algorithm: {algorithm}</p>
              <p className="text-white/90">Considers: Traffic, truck capacity, time windows</p>
              <p className="text-white/90 text-sm mt-2">Learns from historical data to improve suggestions</p>
            </div>
            <div className="text-6xl">🗺️</div>
          </div>
        </div>

        {/* Key Results */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="card bg-green-50 border-2 border-green-600">
            <div className="text-center">
              <p className="text-5xl font-bold text-green-600 mb-2">{savings.fuel}%</p>
              <p className="text-gray-700 font-semibold">Fuel Savings</p>
              <p className="text-sm text-gray-600 mt-1">As stated in proposal</p>
            </div>
          </div>
          <div className="card bg-blue-50 border-2 border-blue-600">
            <div className="text-center">
              <p className="text-5xl font-bold text-blue-600 mb-2">{responseTimeImprovement}%</p>
              <p className="text-gray-700 font-semibold">Faster Response</p>
              <p className="text-sm text-gray-600 mt-1">Time to collection</p>
            </div>
          </div>
          <div className="card bg-orange-50 border-2 border-orange-500">
            <div className="text-center">
              <p className="text-5xl font-bold text-orange-500 mb-2">{savings.distance}%</p>
              <p className="text-gray-700 font-semibold">Distance Reduced</p>
              <p className="text-sm text-gray-600 mt-1">Optimized routing</p>
            </div>
          </div>
        </div>

        {/* Map Visualization */}
        <div className="card mb-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-blue-600" />
            Route Comparison
          </h3>
          <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center relative overflow-hidden">
            {/* Simulated Map */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100">
              {/* Manual Route (Red) */}
              <svg className="absolute inset-0 w-full h-full">
                <path
                  d="M 50 50 Q 150 100, 250 80 T 450 150 Q 550 200, 650 180"
                  stroke="#EF4444"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray="10,5"
                />
              </svg>
              
              {/* AI Route (Green) */}
              <svg className="absolute inset-0 w-full h-full">
                <path
                  d="M 50 50 L 200 100 L 350 120 L 500 140 L 650 180"
                  stroke="#10B981"
                  strokeWidth="4"
                  fill="none"
                />
              </svg>

              {/* Legend */}
              <div className="absolute top-4 right-4 bg-white rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-1 bg-red-500"></div>
                  <span className="text-sm">Manual Route (45 km)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-1 bg-green-600"></div>
                  <span className="text-sm">AI Route (27 km)</span>
                </div>
              </div>

              {/* Collection Points */}
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-4 h-4 bg-blue-600 rounded-full border-2 border-white"
                  style={{
                    left: `${50 + i * 50}px`,
                    top: `${100 + Math.sin(i) * 50}px`
                  }}
                />
              ))}
            </div>

            <div className="relative z-10 text-center">
              <div className="bg-white/90 backdrop-blur rounded-xl p-6 inline-block">
                <Brain className="w-12 h-12 text-green-600 mx-auto mb-2" />
                <p className="font-bold text-2xl text-green-600">-{savings.distance}% Distance</p>
                <p className="text-gray-600">AI Optimization</p>
                <p className="text-sm text-gray-500 mt-2">Clusters nearby reports within 100m</p>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="card">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            📊 Performance Comparison
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-bold text-gray-700">Metric</th>
                  <th className="text-center py-4 px-4 font-bold text-gray-700">Manual</th>
                  <th className="text-center py-4 px-4 font-bold text-gray-700">AI</th>
                  <th className="text-center py-4 px-4 font-bold text-green-600">Savings</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4 flex items-center gap-2">
                    <TrendingDown className="w-5 h-5 text-gray-600" />
                    <span className="font-semibold">Distance</span>
                  </td>
                  <td className="text-center py-4 px-4 text-gray-600">{manual.distance} km</td>
                  <td className="text-center py-4 px-4 font-semibold text-green-600">{ai.distance} km</td>
                  <td className="text-center py-4 px-4">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full font-bold">
                      -{savings.distance}%
                    </span>
                  </td>
                </tr>

                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-gray-600" />
                    <span className="font-semibold">Time</span>
                  </td>
                  <td className="text-center py-4 px-4 text-gray-600">{manual.time}h</td>
                  <td className="text-center py-4 px-4 font-semibold text-green-600">{ai.time}h</td>
                  <td className="text-center py-4 px-4">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full font-bold">
                      -{savings.time}%
                    </span>
                  </td>
                </tr>

                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4 flex items-center gap-2">
                    <Fuel className="w-5 h-5 text-gray-600" />
                    <span className="font-semibold">Fuel</span>
                  </td>
                  <td className="text-center py-4 px-4 text-gray-600">{manual.fuel} L</td>
                  <td className="text-center py-4 px-4 font-semibold text-green-600">{ai.fuel} L</td>
                  <td className="text-center py-4 px-4">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full font-bold">
                      -{savings.fuel}%
                    </span>
                  </td>
                </tr>

                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-4 flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-gray-600" />
                    <span className="font-semibold">Cost</span>
                  </td>
                  <td className="text-center py-4 px-4 text-gray-600">${manual.cost}</td>
                  <td className="text-center py-4 px-4 font-semibold text-green-600">${ai.cost}</td>
                  <td className="text-center py-4 px-4">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full font-bold">
                      -{savings.cost}%
                    </span>
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="py-4 px-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-gray-600" />
                    <span className="font-semibold">Collection Points</span>
                  </td>
                  <td className="text-center py-4 px-4 text-gray-600">{manual.points}</td>
                  <td className="text-center py-4 px-4 font-semibold text-green-600">{ai.points}</td>
                  <td className="text-center py-4 px-4">
                    <span className="bg-gray-400 text-white px-3 py-1 rounded-full font-bold">
                      Same
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* AI Note */}
          <div className="mt-6 bg-blue-50 border-2 border-blue-600 rounded-xl p-4">
            <p className="text-sm text-blue-900">
              <span className="font-bold">💡 AI Insight:</span> The algorithm grouped 4 nearby collection points (within 100m) and avoided 2 high-traffic zones, resulting in significant time and fuel savings. Dynamic re-routing available for high-priority reports.
            </p>
          </div>

          {/* Action Button */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            <button className="btn-primary text-lg">
              Apply This Route
            </button>
            <Link
              to="/company/fleet"
              className="btn-secondary text-lg text-center flex items-center justify-center"
            >
              View Fleet →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
