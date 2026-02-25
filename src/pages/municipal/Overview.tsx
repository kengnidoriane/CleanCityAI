import { Link } from 'react-router-dom';
import { TrendingDown, Activity, Brain } from 'lucide-react';
import { impactStats, predictions } from '../../data/mockData';

export default function MunicipalOverview() {
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
              Municipal Dashboard
            </h1>
            <p className="text-gray-600 mt-2">City-wide AI analytics and impact tracking</p>
          </div>
          <div className="flex gap-3">
            <Link to="/municipal/audit" className="btn-secondary">
              🔒 Audit Trail
            </Link>
            <div className="ai-badge text-lg">
              <Brain className="w-5 h-5" />
              AI ACTIVE
            </div>
          </div>
        </div>

        {/* AI Stats Card */}
        <div className="card mb-6 bg-gradient-to-r from-green-600 to-green-700 text-white">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Brain className="w-8 h-8" />
            ARTIFICIAL INTELLIGENCE
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-white/80 text-sm">Reports Analyzed</p>
              <p className="text-3xl font-bold">{impactStats.reportsAnalyzed.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-white/80 text-sm">Predictions Generated</p>
              <p className="text-3xl font-bold">{impactStats.predictionsGenerated}</p>
            </div>
            <div>
              <p className="text-white/80 text-sm">Routes Optimized</p>
              <p className="text-3xl font-bold">{impactStats.routesOptimized}</p>
            </div>
            <div>
              <p className="text-white/80 text-sm">Healthcare Savings</p>
              <p className="text-3xl font-bold">${(impactStats.costSavings / 1000000).toFixed(1)}M</p>
            </div>
          </div>
        </div>

        {/* Impact Grid - Key Metrics from Proposal */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* Waste Reduction */}
          <div className="card bg-green-50 border-2 border-green-600">
            <div className="flex items-center justify-between mb-4">
              <TrendingDown className="w-10 h-10 text-green-600" />
              <span className="text-4xl">♻️</span>
            </div>
            <h3 className="text-gray-600 text-sm mb-2">Visible Waste Reduction</h3>
            <p className="text-4xl font-bold text-green-600 mb-2">
              {impactStats.wasteReduction}%
            </p>
            <p className="text-xs text-gray-500">↓ Within 3 months</p>
            <p className="text-xs text-green-700 font-semibold mt-1">As per proposal</p>
          </div>

          {/* Disease Reduction */}
          <div className="card bg-blue-50 border-2 border-blue-600">
            <div className="flex items-center justify-between mb-4">
              <Activity className="w-10 h-10 text-blue-600" />
              <span className="text-4xl">🏥</span>
            </div>
            <h3 className="text-gray-600 text-sm mb-2">Disease Reduction</h3>
            <p className="text-4xl font-bold text-blue-600 mb-2">
              {impactStats.diseaseReduction}%
            </p>
            <p className="text-xs text-gray-500">↓ Waste-related diseases</p>
            <p className="text-xs text-blue-700 font-semibold mt-1">As per proposal</p>
          </div>

          {/* Fuel Savings */}
          <div className="card bg-orange-50 border-2 border-orange-500">
            <div className="flex items-center justify-between mb-4">
              <TrendingDown className="w-10 h-10 text-orange-500" />
              <span className="text-4xl">⛽</span>
            </div>
            <h3 className="text-gray-600 text-sm mb-2">Fuel Cost Savings</h3>
            <p className="text-4xl font-bold text-orange-500 mb-2">
              {impactStats.fuelSavings}%
            </p>
            <p className="text-xs text-gray-500">↓ Through AI optimization</p>
            <p className="text-xs text-orange-700 font-semibold mt-1">As per proposal</p>
          </div>

          {/* Prediction Accuracy */}
          <div className="card bg-purple-50 border-2 border-purple-600">
            <div className="flex items-center justify-between mb-4">
              <Brain className="w-10 h-10 text-purple-600" />
              <span className="text-4xl">🎯</span>
            </div>
            <h3 className="text-gray-600 text-sm mb-2">Prediction Accuracy</h3>
            <p className="text-4xl font-bold text-purple-600 mb-2">
              {impactStats.predictionAccuracy}%
            </p>
            <p className="text-xs text-gray-500">7-day forecasts</p>
            <p className="text-xs text-purple-700 font-semibold mt-1">Target achieved</p>
          </div>
        </div>

        {/* Health Impact Correlation */}
        <div className="card mb-6">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            📊 Health Impact (AI Correlation)
          </h3>
          <p className="text-gray-600 mb-4">
            AI identified strong correlation between waste cleanup and health improvements
          </p>
          <div className="bg-green-50 border-2 border-green-600 rounded-xl p-6">
            <div className="grid md:grid-cols-4 gap-6 mb-4">
              <div className="text-center">
                <p className="text-gray-600 mb-2">Waste</p>
                <p className="text-4xl font-bold text-green-600">-{impactStats.wasteReduction}%</p>
                <p className="text-sm text-gray-500">↓</p>
              </div>
              <div className="text-center">
                <p className="text-gray-600 mb-2">Overall Diseases</p>
                <p className="text-4xl font-bold text-blue-600">-{impactStats.diseaseReduction}%</p>
                <p className="text-sm text-gray-500">↓</p>
              </div>
              <div className="text-center">
                <p className="text-gray-600 mb-2">Cholera Cases</p>
                <p className="text-4xl font-bold text-blue-600">-{impactStats.choleraReduction}%</p>
                <p className="text-sm text-gray-500">↓</p>
              </div>
              <div className="text-center">
                <p className="text-gray-600 mb-2">Malaria Cases</p>
                <p className="text-4xl font-bold text-blue-600">-{impactStats.malariaReduction}%</p>
                <p className="text-sm text-gray-500">↓ Fewer breeding sites</p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-700">
                <span className="font-bold">AI Confidence: 89%</span> | Based on 3 months of data correlation
              </p>
              <p className="text-xs text-gray-600 mt-2">
                💡 Proves public health impact: "30% reduction in cholera after cleanup"
              </p>
            </div>
          </div>
          
          {/* Healthcare Cost Savings */}
          <div className="mt-4 bg-blue-50 border-2 border-blue-600 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-700 font-semibold">Healthcare Cost Savings</p>
                <p className="text-xs text-gray-600">Evidence-based budget justification</p>
              </div>
              <p className="text-3xl font-bold text-blue-600">
                ${(impactStats.costSavings / 1000000).toFixed(1)}M
              </p>
            </div>
          </div>
        </div>

        {/* AI Predictions */}
        <div className="card">
          <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
            🔮 AI Predictions (Next 7 Days)
          </h3>
          <p className="text-gray-600 mb-4">
            Machine learning models forecast waste accumulation based on historical patterns, weather, events, and market days
          </p>
          
          <div className="space-y-4">
            {predictions.map((pred, index) => (
              <div
                key={index}
                className={`p-4 rounded-xl border-2 ${
                  pred.risk === 'high'
                    ? 'bg-red-50 border-red-500'
                    : pred.risk === 'medium'
                    ? 'bg-orange-50 border-orange-500'
                    : 'bg-green-50 border-green-500'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">
                        {pred.risk === 'high' ? '🔴' : pred.risk === 'medium' ? '🟡' : '🟢'}
                      </span>
                      <h4 className="font-bold text-lg">{pred.zone}</h4>
                      {pred.confidence >= 80 && (
                        <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                          80%+ triggers action
                        </span>
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-gray-600">Date:</span>
                        <span className="font-semibold ml-2">{pred.date}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Confidence:</span>
                        <span className="font-bold text-blue-600 ml-2">{pred.confidence}%</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Reason:</span>
                        <span className="font-semibold ml-2">{pred.reason}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Action:</span>
                        <span className="font-semibold ml-2">{pred.action}</span>
                      </div>
                    </div>
                    
                    {/* Factors Analyzed */}
                    <div className="mt-2 flex flex-wrap gap-1">
                      {pred.factors.map((factor, i) => (
                        <span key={i} className="text-xs bg-white px-2 py-1 rounded-full border border-gray-300">
                          {factor}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-blue-50 border-2 border-blue-600 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <Brain className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <div>
                <p className="text-sm text-blue-900 font-semibold mb-1">
                  Predictive Analytics Engine
                </p>
                <p className="text-sm text-blue-800">
                  <span className="font-bold">Accuracy:</span> {impactStats.predictionAccuracy}% (target achieved) | 
                  <span className="font-bold"> Factors:</span> Day of week, weather, events, market days, holidays | 
                  <span className="font-bold"> Enables:</span> Proactive collection instead of reactive cleanup
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
