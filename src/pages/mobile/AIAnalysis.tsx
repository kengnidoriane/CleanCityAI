import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, MapPin, AlertTriangle, Brain, Mic, Globe, Wifi, WifiOff } from 'lucide-react';
import { aiAnalysisResult, wasteCategories } from '../../data/mockData';

export default function AIAnalysis() {
  const [isAnalyzing, setIsAnalyzing] = useState(true);
  const [progress, setProgress] = useState(0);
  const [confidence, setConfidence] = useState(0);

  // Simulate AI analysis - 3 seconds as per proposal
  useEffect(() => {
    if (isAnalyzing) {
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            setTimeout(() => setIsAnalyzing(false), 300);
            return 100;
          }
          return prev + 3.33; // 100% in 3 seconds
        });
      }, 100);

      return () => clearInterval(progressInterval);
    }
  }, [isAnalyzing]);

  // Animate confidence counter
  useEffect(() => {
    if (!isAnalyzing) {
      const confidenceInterval = setInterval(() => {
        setConfidence(prev => {
          if (prev >= aiAnalysisResult.detection.confidence) {
            clearInterval(confidenceInterval);
            return aiAnalysisResult.detection.confidence;
          }
          return prev + 1;
        });
      }, 20);

      return () => clearInterval(confidenceInterval);
    }
  }, [isAnalyzing]);

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
            <h1 className="text-xl font-bold text-white">AI Analysis</h1>
            <div className="flex gap-2">
              {/* Language Selector */}
              <button className="text-white/80 hover:text-white">
                <Globe className="w-5 h-5" />
              </button>
              {/* Offline Indicator */}
              {aiAnalysisResult.offlineMode ? (
                <WifiOff className="w-5 h-5 text-yellow-300" />
              ) : (
                <Wifi className="w-5 h-5 text-white/80" />
              )}
            </div>
          </div>

          {isAnalyzing ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="inline-block mb-3"
              >
                <Brain className="w-12 h-12 text-white" />
              </motion.div>
              <p className="text-white text-lg font-semibold">AI ANALYZING...</p>
              <p className="text-white/80 text-sm">Computer Vision Processing</p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="text-4xl mb-2">✅</div>
              <p className="text-white text-lg font-bold">AI ANALYSIS COMPLETE</p>
              <p className="text-white/90 text-sm">
                Time: {aiAnalysisResult.processingTime.toFixed(1)} seconds
              </p>
              <p className="text-white/80 text-xs mt-1">
                Deep Learning Model | 100,000+ training images
              </p>
            </motion.div>
          )}

          {/* Progress Bar */}
          {isAnalyzing && (
            <div className="mt-4">
              <div className="bg-white/20 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="bg-white h-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-white/80 text-xs text-center mt-2">{Math.round(progress)}%</p>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 space-y-4">
          
          {/* Photo with Detection Box */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isAnalyzing ? 0.5 : 1 }}
            className="relative"
          >
            <img
              src={aiAnalysisResult.imageUrl}
              alt="Waste"
              className="w-full h-64 object-cover rounded-xl"
            />
            
            {!isAnalyzing && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-blue-600 rounded-lg w-48 h-32"
              >
                <div className="absolute -top-8 left-0 bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-bold">
                  {aiAnalysisResult.detection.type} {confidence}%
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Detection Card */}
          {!isAnalyzing && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="card p-0 overflow-hidden"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-blue-600 to-cyan-400 p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Brain className="w-5 h-5 text-white" />
                  <h2 className="text-white font-bold text-lg">
                    AUTOMATIC DETECTION
                  </h2>
                </div>
                <p className="text-white/90 text-xs">Computer Vision | 8 waste categories | 90%+ accuracy</p>
              </div>

              {/* Card Content */}
              <div className="p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Category:</span>
                  <span className="font-semibold text-gray-900 flex items-center gap-2">
                    <span className="text-2xl">{aiAnalysisResult.detection.category.icon}</span>
                    {aiAnalysisResult.detection.type}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Confidence:</span>
                  <span className="font-bold text-green-600 text-lg">
                    {confidence}%
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Volume:</span>
                  <span className="font-semibold text-gray-900">
                    ~{aiAnalysisResult.detection.volume} kg
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Severity:</span>
                  <span className="font-semibold text-orange-500 flex items-center gap-1">
                    {aiAnalysisResult.detection.severity}/5 <AlertTriangle className="w-4 h-4" />
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Priority:</span>
                  <span className="font-bold text-red-500 text-lg">
                    {aiAnalysisResult.detection.priority}
                  </span>
                </div>

                {/* Hazardous Warning */}
                {aiAnalysisResult.detection.category.hazardous && (
                  <div className="bg-red-50 border-2 border-red-500 rounded-lg p-3 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                    <div>
                      <p className="text-sm font-bold text-red-900">HAZARDOUS WASTE DETECTED</p>
                      <p className="text-xs text-red-700">High-priority alert triggered</p>
                    </div>
                  </div>
                )}

                {/* Recyclable Badge */}
                {aiAnalysisResult.detection.recyclable && (
                  <div className="bg-green-50 border border-green-500 rounded-lg p-2 flex items-center justify-between">
                    <span className="text-sm text-green-900">♻️ Recyclable</span>
                    <span className="text-sm font-bold text-green-600">
                      Est. Value: ${aiAnalysisResult.detection.estimatedValue}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* 8 Waste Categories */}
          {!isAnalyzing && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="card"
            >
              <h3 className="font-bold text-sm text-gray-700 mb-3">
                AI Detects 8 Waste Categories
              </h3>
              <div className="grid grid-cols-4 gap-2">
                {wasteCategories.map((cat) => (
                  <div
                    key={cat.id}
                    className={`text-center p-2 rounded-lg ${
                      cat.name === aiAnalysisResult.detection.type
                        ? 'bg-blue-100 border-2 border-blue-600'
                        : 'bg-gray-50'
                    }`}
                  >
                    <span className="text-2xl block mb-1">{cat.icon}</span>
                    <p className="text-xs font-semibold text-gray-700">{cat.name}</p>
                    {cat.hazardous && (
                      <span className="text-xs text-red-500">⚠️</span>
                    )}
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Trained on 100,000+ images | 90%+ accuracy
              </p>
            </motion.div>
          )}

          {/* NLP Features */}
          {!isAnalyzing && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="card bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-500"
            >
              <div className="flex items-center gap-2 mb-3">
                <Mic className="w-5 h-5 text-purple-600" />
                <h3 className="font-bold text-sm text-gray-900">
                  NLP Features Available
                </h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-700">🗣️ Voice Commands</span>
                  <span className="text-green-600 font-semibold">Enabled</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-700">🌍 Multi-Language</span>
                  <span className="text-blue-600 font-semibold">6 Languages</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-700">💬 Sentiment Analysis</span>
                  <span className="text-purple-600 font-semibold">Active</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                English, French, Arabic, Swahili, Hausa, Amharic
              </p>
            </motion.div>
          )}

          {/* Location */}
          {!isAnalyzing && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-gray-100 rounded-xl p-4"
            >
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xs text-gray-600 mb-1">GPS Location (Auto-captured)</p>
                  <p className="font-semibold text-gray-900">
                    {aiAnalysisResult.location.address}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Coordinates: {aiAnalysisResult.location.coordinates.join(', ')}
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* AI Recommendation */}
          {!isAnalyzing && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="bg-yellow-50 border-2 border-orange-500 rounded-xl p-4"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <p className="text-sm font-semibold text-yellow-900 mb-1">
                    AI Recommends:
                  </p>
                  <p className="text-sm text-yellow-800">
                    "{aiAnalysisResult.recommendation}"
                  </p>
                  <p className="text-xs text-yellow-700 mt-2">
                    Based on severity level and historical response times
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Action Buttons */}
          {!isAnalyzing && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex gap-3 pt-2"
            >
              <button className="btn-primary flex-1">
                ✓ Confirm & Submit
              </button>
              <button className="btn-secondary flex-1">
                ✏️ Edit Details
              </button>
            </motion.div>
          )}

          {/* Info Footer */}
          {!isAnalyzing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="text-center text-xs text-gray-500 pt-2"
            >
              <p>Earn 5-50 points based on severity | One-tap submission</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
