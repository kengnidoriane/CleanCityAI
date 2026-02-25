import { Link } from 'react-router-dom';
import { Home, MapPin, Truck, Clock, Navigation } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function TrackingMap() {
  const [trucks, setTrucks] = useState([
    { id: 1, name: 'Truck A-12', lat: 14.6928, lng: -17.4467, status: 'active', eta: 15, completion: 65 },
    { id: 2, name: 'Truck B-08', lat: 14.7167, lng: -17.4677, status: 'active', eta: 45, completion: 40 },
    { id: 3, name: 'Truck C-15', lat: 14.6850, lng: -17.4550, status: 'idle', eta: null, completion: 80 }
  ]);

  // Simulate real-time updates every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTrucks(prev => prev.map(truck => ({
        ...truck,
        lat: truck.lat + (Math.random() - 0.5) * 0.001,
        lng: truck.lng + (Math.random() - 0.5) * 0.001,
        completion: Math.min(100, truck.completion + Math.random() * 2)
      })));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile Container */}
      <div className="max-w-[390px] mx-auto bg-white min-h-screen shadow-2xl">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6">
          <div className="flex items-center justify-between mb-4">
            <Link to="/mobile/home" className="text-white">
              <Home className="w-6 h-6" />
            </Link>
            <h1 className="text-xl font-bold text-white">Track Trucks</h1>
            <div className="w-6" />
          </div>
          <div className="flex items-center gap-2 text-white/90 text-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Real-time updates every 10 seconds</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-4">
          
          {/* Map Placeholder */}
          <div className="card p-0 overflow-hidden">
            <div className="h-64 bg-gradient-to-br from-blue-100 to-green-100 relative">
              {/* Simulated Map */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-2" />
                  <p className="text-gray-600 font-semibold">Interactive Map</p>
                  <p className="text-sm text-gray-500">Dakar, Senegal</p>
                </div>
              </div>

              {/* Truck Markers */}
              {trucks.map((truck, index) => (
                <div
                  key={truck.id}
                  className="absolute"
                  style={{
                    left: `${20 + index * 30}%`,
                    top: `${30 + index * 20}%`
                  }}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    truck.status === 'active' ? 'bg-green-600' : 'bg-gray-400'
                  } animate-pulse`}>
                    <Truck className="w-5 h-5 text-white" />
                  </div>
                </div>
              ))}

              {/* Your Location */}
              <div className="absolute bottom-4 left-4">
                <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
              </div>
            </div>

            {/* Map Legend */}
            <div className="p-3 bg-gray-50 border-t">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span>Your Location</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <span>Active Trucks</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                  <span>Idle</span>
                </div>
              </div>
            </div>
          </div>

          {/* Nearby Trucks */}
          <div className="card">
            <h3 className="font-bold text-lg mb-4">Nearby Trucks</h3>
            
            <div className="space-y-3">
              {trucks.map((truck) => (
                <div
                  key={truck.id}
                  className={`p-4 rounded-xl border-2 ${
                    truck.status === 'active'
                      ? 'bg-green-50 border-green-600'
                      : 'bg-gray-50 border-gray-300'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        truck.status === 'active' ? 'bg-green-600' : 'bg-gray-400'
                      }`}>
                        <Truck className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{truck.name}</p>
                        <p className="text-sm text-gray-600 capitalize">{truck.status}</p>
                      </div>
                    </div>
                    {truck.eta && (
                      <div className="text-right">
                        <p className="text-2xl font-bold text-green-600">{truck.eta}min</p>
                        <p className="text-xs text-gray-600">ETA</p>
                      </div>
                    )}
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-2">
                    <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                      <span>Route Completion</span>
                      <span className="font-bold">{Math.round(truck.completion)}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-600 transition-all duration-1000"
                        style={{ width: `${truck.completion}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="flex items-center gap-1 text-gray-600">
                      <Navigation className="w-3 h-3" />
                      <span>2.3 km away</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                      <Clock className="w-3 h-3" />
                      <span>Updated 5s ago</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Notification Settings */}
          <div className="card bg-blue-50 border-2 border-blue-600">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🔔</span>
              <div>
                <p className="font-bold text-blue-900 mb-1">Push Notifications</p>
                <p className="text-sm text-blue-800 mb-3">
                  Get notified when a truck is approaching your area
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                  Enable Notifications
                </button>
              </div>
            </div>
          </div>

          {/* Collection Schedule */}
          <div className="card">
            <h3 className="font-bold text-lg mb-4">Collection Schedule</h3>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">Monday & Thursday</p>
                  <p className="text-sm text-gray-600">Regular Collection</p>
                </div>
                <p className="text-sm font-bold text-green-600">8:00 AM</p>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">Saturday</p>
                  <p className="text-sm text-gray-600">Recyclables Only</p>
                </div>
                <p className="text-sm font-bold text-blue-600">10:00 AM</p>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="card bg-yellow-50 border-2 border-yellow-500">
            <p className="text-sm text-yellow-900">
              <span className="font-bold">💡 Tip:</span> Trucks are tracked with GPS updates every 10 seconds. You'll receive a notification when a truck is within 15 minutes of your location.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
