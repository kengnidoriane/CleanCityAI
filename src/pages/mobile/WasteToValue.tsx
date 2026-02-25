import { Link } from 'react-router-dom';
import { Home, TrendingUp, DollarSign } from 'lucide-react';
import { wasteToValue, wasteCategories } from '../../data/mockData';

export default function WasteToValue() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile Container */}
      <div className="max-w-[390px] mx-auto bg-white min-h-screen shadow-2xl">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 pb-8">
          <div className="flex items-center justify-between mb-4">
            <Link to="/mobile/home" className="text-white">
              <Home className="w-6 h-6" />
            </Link>
            <h1 className="text-xl font-bold text-white">Waste-to-Value</h1>
            <div className="w-6" />
          </div>

          <div className="text-center">
            <div className="text-4xl mb-2">♻️</div>
            <p className="text-white text-lg font-bold">Circular Economy</p>
            <p className="text-white/90 text-sm">Turn waste into value</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-4">
          
          {/* Total Impact */}
          <div className="card bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-500">
            <div className="text-center mb-4">
              <p className="text-sm text-gray-600 mb-1">Total Recycled (City-Wide)</p>
              <p className="text-4xl font-bold text-green-600">{wasteToValue.totalRecycled}</p>
              <p className="text-sm text-gray-600">tons</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <p className="text-2xl font-bold text-gray-900">
                  ${(wasteToValue.revenue / 1000).toFixed(0)}K
                </p>
                <p className="text-xs text-gray-600">Revenue Generated</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <p className="text-2xl font-bold text-gray-900">
                  ${(wasteToValue.commission / 1000).toFixed(0)}K
                </p>
                <p className="text-xs text-gray-600">Platform Commission</p>
              </div>
            </div>

            <div className="mt-4 text-center">
              <p className="text-xs text-gray-500">
                10% commission on recyclable waste sales
              </p>
            </div>
          </div>

          {/* Recycling Partners */}
          <div className="card">
            <h3 className="font-bold text-lg mb-4">Recycling Partners</h3>
            
            <div className="space-y-3">
              {wasteToValue.partners.map((partner, index) => {
                const category = wasteCategories.find(c => c.name === partner.category);
                return (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{category?.icon}</span>
                        <div>
                          <p className="font-semibold text-gray-900">{partner.name}</p>
                          <p className="text-xs text-gray-600">{partner.category}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-green-600">${partner.price}/kg</p>
                        <p className="text-xs text-gray-500">Buy price</p>
                      </div>
                    </div>
                    <button className="w-full btn-primary text-sm py-2">
                      Sell to Partner
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* How It Works */}
          <div className="card bg-blue-50 border-2 border-blue-500">
            <h3 className="font-bold text-lg mb-3 text-blue-900">How It Works</h3>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Report Recyclable Waste</p>
                  <p className="text-xs text-gray-600">AI identifies recyclable materials</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Collection & Sorting</p>
                  <p className="text-xs text-gray-600">Companies collect and sort waste</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Sell to Partners</p>
                  <p className="text-xs text-gray-600">Recycling partners buy materials</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Earn Rewards</p>
                  <p className="text-xs text-gray-600">Citizens get bonus points</p>
                </div>
              </div>
            </div>
          </div>

          {/* Your Recyclable Contributions */}
          <div className="card">
            <h3 className="font-bold text-lg mb-4">Your Contributions</h3>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="text-xl">♻️</span>
                  <span className="text-sm font-semibold text-gray-900">Plastic</span>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">8.5 kg</p>
                  <p className="text-xs text-green-600">+$4.25</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🔩</span>
                  <span className="text-sm font-semibold text-gray-900">Metal</span>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">3.2 kg</p>
                  <p className="text-xs text-green-600">+$3.84</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="text-xl">📄</span>
                  <span className="text-sm font-semibold text-gray-900">Paper</span>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">5.0 kg</p>
                  <p className="text-xs text-green-600">+$1.50</p>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-green-100 rounded-lg text-center">
              <p className="text-sm text-gray-700">Total Value Generated</p>
              <p className="text-2xl font-bold text-green-600">$9.59</p>
              <p className="text-xs text-gray-600 mt-1">+95 bonus points earned</p>
            </div>
          </div>

          {/* Environmental Impact */}
          <div className="card bg-gradient-to-br from-green-50 to-blue-50">
            <h3 className="font-bold text-lg mb-3">Environmental Impact</h3>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">🌳 Trees Saved</span>
                <span className="font-bold text-green-600">12</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">💧 Water Saved</span>
                <span className="font-bold text-blue-600">450 L</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">⚡ Energy Saved</span>
                <span className="font-bold text-yellow-600">85 kWh</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">🌍 CO2 Avoided</span>
                <span className="font-bold text-purple-600">25 kg</span>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="text-center text-xs text-gray-500 pb-4">
            <p>Building a circular economy for African cities</p>
            <p className="mt-1">Creating jobs • Reducing waste • Generating value</p>
          </div>
        </div>
      </div>
    </div>
  );
}
