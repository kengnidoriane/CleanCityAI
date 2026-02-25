import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Home, Camera, Upload, Info } from 'lucide-react';

export default function TakePhoto() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = () => {
    if (selectedImage) {
      navigate('/mobile/ai-analysis');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile Container */}
      <div className="max-w-[390px] mx-auto bg-white min-h-screen shadow-2xl">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-400 p-6">
          <div className="flex items-center justify-between mb-4">
            <Link to="/mobile/home" className="text-white">
              <Home className="w-6 h-6" />
            </Link>
            <h1 className="text-xl font-bold text-white">Report Waste</h1>
            <div className="w-6" />
          </div>
          <p className="text-white/90 text-sm text-center">
            Take a photo and let AI analyze it in 3 seconds
          </p>
        </div>

        {/* Content */}
        <div className="p-4 space-y-4">
          
          {/* Instructions */}
          <div className="card bg-blue-50 border-2 border-blue-600">
            <div className="flex items-start gap-3">
              <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-blue-900 mb-2">How it works:</p>
                <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
                  <li>Take a clear photo of the waste</li>
                  <li>AI analyzes type, volume, and severity</li>
                  <li>GPS captures location automatically</li>
                  <li>Submit with one tap</li>
                  <li>Earn 5-50 points based on severity</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Camera Area */}
          <div className="card p-0 overflow-hidden">
            {selectedImage ? (
              <div className="relative">
                <img
                  src={selectedImage}
                  alt="Selected waste"
                  className="w-full h-80 object-cover"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg font-semibold"
                >
                  ✕ Remove
                </button>
              </div>
            ) : (
              <div className="h-80 bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center">
                <Camera className="w-20 h-20 text-gray-400 mb-4" />
                <p className="text-gray-600 font-semibold mb-2">No photo selected</p>
                <p className="text-sm text-gray-500">Take or upload a photo to continue</p>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            {/* Take Photo */}
            <label className="btn-primary w-full flex items-center justify-center gap-2 cursor-pointer">
              <Camera className="w-5 h-5" />
              <span>Take Photo</span>
              <input
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleImageSelect}
                className="hidden"
              />
            </label>

            {/* Upload from Gallery */}
            <label className="btn-secondary w-full flex items-center justify-center gap-2 cursor-pointer">
              <Upload className="w-5 h-5" />
              <span>Upload from Gallery</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageSelect}
                className="hidden"
              />
            </label>

            {/* Analyze Button */}
            {selectedImage && (
              <button
                onClick={handleAnalyze}
                className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-4 rounded-lg font-bold text-lg hover:from-green-700 hover:to-green-800 transition-all"
              >
                🤖 Analyze with AI
              </button>
            )}
          </div>

          {/* AI Features */}
          <div className="card bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-600">
            <h3 className="font-bold text-purple-900 mb-3">AI Features:</h3>
            <div className="space-y-2 text-sm text-purple-800">
              <div className="flex items-center gap-2">
                <span className="text-lg">🧠</span>
                <span>Deep Learning Model (100,000+ training images)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">🎯</span>
                <span>90%+ accuracy across 8 waste categories</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">⚡</span>
                <span>Analysis in 3 seconds</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">🌙</span>
                <span>Works in low-light conditions</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">⚠️</span>
                <span>Detects hazardous waste automatically</span>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="card bg-yellow-50 border-2 border-yellow-500">
            <p className="font-bold text-yellow-900 mb-2">💡 Tips for best results:</p>
            <ul className="text-sm text-yellow-800 space-y-1 list-disc list-inside">
              <li>Ensure good lighting</li>
              <li>Get close to the waste</li>
              <li>Avoid blurry photos</li>
              <li>Include surrounding context</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
