import { Link } from 'react-router-dom';
import { Home, Truck, AlertTriangle, CheckCircle, Clock, MapPin, Navigation } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function FleetManagement() {
  const [trucks, setTrucks] = useState([
    {
      id: 'A-12',
      driver: 'Mamadou Diallo',
      status: 'active',
      location: 'Plateau District',
      route: 'Route 5',
      completion: 65,
      eta: '45 min',
      lastUpdate: '10s ago',
      alerts: [],
      collections: 8,
      totalCollections: 12
    },
    {
      id: 'B-08',
      driver: 'Fatou Sow',
      status: 'active',
      location: 'Medina District',
      route: 'Route 3',
      completion: 40,
      eta: '1h 20min',
      lastUpdate: '8s ago',
      alerts: [],
      collections: 5,
      totalCollections: 12
    },
    {
      id: 'C-15',
      driver: 'Ibrahima Ba',
      status: 'idle',
      location: 'Yoff District',
      route: 'Route 7',
      completion: 80,
      eta: null,
      lastUpdate: '2min ago',
      alerts: ['Idle for 18 minutes'],
      collections: 10,
      totalCollections: 12
    },
    {
      id: 'D-22',
      driver: 'Aissatou Ndiaye',
      status: 'deviated',
      location: 'Almadies District',
      route: 'Route 2',
      completion: 55,
      eta: '1h',
      lastUpdate: '5s ago',
      alerts: ['Deviated 650m from route'],
      collections: 7,
      totalCollections: 12
    }
  ]);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setTrucks(prev => prev.map(truck => ({
        ...truck,
        completion: Math.min(100, truck.completion + Math.random() * 1),
        lastUpdate: `${Math.floor(Math.random() * 60)}s ago`
      })));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-600';
      case 'idle': return 'bg-yellow-500';
      case 'deviated': return 'bg-red-500';
      default: return 'bg-gray-400';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Active';
      case 'idle': return 'Idle';
      case 'deviated': return 'Deviated';
      default: return 'Unknown';
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto p-6">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link to="/company/routes" className="text-green-600 hover:text-green-700 mb-2 inline-block">
              ← Back to Routes
            </Link>
            <h1 className="text-4xl font-bold text-gray-900">
              Real-Time Fleet Management
            </h1>
            <p className="text-gray-600 mt-2">GPS updates every 10 seconds</p>
          </div>
          <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-700 font-semibold">Live Tracking Active</span>
          </div>
        </div>

        {/* Fleet Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-6">
          <div className="card bg-green-50 border-2 border-green-600">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle className="w-8 h-8 text-green-600" />
              <div>
                <p className="text-3xl font-bold text-green-600">2</p>
                <p className="text-sm text-gray-700">Active</p>
              </div>
            </div>
          </div>

          <div className="card bg-yellow-50 border-2 border-yellow-500">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="w-8 h-8 text-yellow-600" />
              <div>
                <p className="text-3xl font-bold text-yellow-600">1</p>
                <p className="text-sm text-gray-700">Idle</p>
              </div>
            </div>
          </div>

          <div className="card bg-red-50 border-2 border-red-500">
            <div className="flex items-center gap-3 mb-2">
              <AlertTriangle className="w-8 h-8 text-red-600" />
              <div>
                <p className="text-3xl font-bold text-red-600">1</p>
                <p className="text-sm text-gray-700">Alerts</p>
              </div>
            </div>
          </div>

          <div className="card bg-blue-50 border-2 border-blue-600">
            <div className="flex items-center gap-3 mb-2">
              <Truck className="w-8 h-8 text-blue-600" />
              <div>
                <p className="text-3xl font-bold text-blue-600">4</p>
                <p className="text-sm text-gray-700">Total Fleet</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trucks List */}
        <div className="space-y-4">
          {trucks.map((truck) => (
            <div key={truck.id} className="card">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 ${getStatusColor(truck.status)} rounded-xl flex items-center justify-center`}>
                    <Truck className="w-8 h-8 text-white" />
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-xl font-bold text-gray-900">Truck {truck.id}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getStatusColor(truck.status)}`}>
                        {getStatusText(truck.status)}
                      </span>
                    </div>
                    <p className="text-gray-600">Driver: {truck.driver}</p>
                    <p className="text-sm text-gray-500">Last update: {truck.lastUpdate}</p>
                  </div>
                </div>

                {truck.eta && (
                  <div className="text-right">
                    <p className="text-3xl font-bold text-green-600">{truck.eta}</p>
                    <p className="text-sm text-gray-600">ETA</p>
                  </div>
                )}
              </div>

              {/* Alerts */}
              {truck.alerts.length > 0 && (
                <div className="mb-4">
                  {truck.alerts.map((alert, index) => (
                    <div key={index} className="bg-red-50 border-2 border-red-500 rounded-lg p-3 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <p className="text-sm text-red-800 font-semibold">{alert}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Progress */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                  <span>Route Completion</span>
                  <span className="font-bold">{Math.round(truck.completion)}%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${getStatusColor(truck.status)} transition-all duration-1000`}
                    style={{ width: `${truck.completion}%` }}
                  ></div>
                </div>
              </div>

              {/* Details Grid */}
              <div className="grid md:grid-cols-4 gap-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-xs text-gray-600">Location</p>
                    <p className="font-semibold text-gray-900">{truck.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Navigation className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-xs text-gray-600">Assigned Route</p>
                    <p className="font-semibold text-gray-900">{truck.route}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-xs text-gray-600">Collections</p>
                    <p className="font-semibold text-gray-900">{truck.collections}/{truck.totalCollections}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-xs text-gray-600">Status</p>
                    <p className="font-semibold text-gray-900 capitalize">{truck.status}</p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-4 flex gap-2">
                <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-semibold text-sm hover:bg-blue-700">
                  View on Map
                </button>
                <button className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg font-semibold text-sm hover:bg-gray-300">
                  Contact Driver
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Alert Settings */}
        <div className="card mt-6 bg-blue-50 border-2 border-blue-600">
          <h3 className="font-bold text-lg text-blue-900 mb-4">Alert Settings</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <div>
                <p className="font-semibold text-gray-900">Route Deviation Alert</p>
                <p className="text-sm text-gray-600">Trigger when truck deviates &gt;500m</p>
              </div>
              <div className="w-12 h-6 bg-green-600 rounded-full relative">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <div>
                <p className="font-semibold text-gray-900">Idle Time Alert</p>
                <p className="text-sm text-gray-600">Trigger when idle &gt;15 minutes</p>
              </div>
              <div className="w-12 h-6 bg-green-600 rounded-full relative">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <div>
                <p className="font-semibold text-gray-900">Collection Complete Notification</p>
                <p className="text-sm text-gray-600">Auto-notify citizens</p>
              </div>
              <div className="w-12 h-6 bg-green-600 rounded-full relative">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="card mt-6 bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-600">
          <p className="text-sm text-purple-900">
            <span className="font-bold">💡 Real-Time Fleet Management:</span> Track all trucks with GPS updates every 10 seconds. Dashboard shows current location, assigned route, completion %, and ETA. Drivers mark collections complete, triggering automatic citizen notifications.
          </p>
        </div>
      </div>
    </div>
  );
}
