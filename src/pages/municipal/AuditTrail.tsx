import { Link } from 'react-router-dom';
import { Home, Shield, CheckCircle, Clock, DollarSign } from 'lucide-react';
import { auditTrail } from '../../data/mockData';

export default function AuditTrail() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto p-6">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              🔒 Audit Trail & Transparency
            </h1>
            <p className="text-gray-600">
              Comprehensive audit trails of all actions - reports, collections, and payments
            </p>
          </div>
          <Link to="/municipal/overview" className="btn-secondary">
            <Home className="w-5 h-5 mr-2" />
            Back to Overview
          </Link>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-6">
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">12,847</p>
                <p className="text-sm text-gray-600">Total Actions</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">11,432</p>
                <p className="text-sm text-gray-600">Verified</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">1,415</p>
                <p className="text-sm text-gray-600">Pending</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">$125K</p>
                <p className="text-sm text-gray-600">Payments</p>
              </div>
            </div>
          </div>
        </div>

        {/* Transparency Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="card bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-500">
            <div className="text-center">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Full Transparency
              </h3>
              <p className="text-sm text-gray-700">
                Citizens can verify any action through the system
              </p>
            </div>
          </div>

          <div className="card bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-500">
            <div className="text-center">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Public Reports
              </h3>
              <p className="text-sm text-gray-700">
                Monthly reports showing activities, costs, and outcomes
              </p>
            </div>
          </div>

          <div className="card bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-500">
            <div className="text-center">
              <div className="text-4xl mb-3">🔐</div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Blockchain Ready
              </h3>
              <p className="text-sm text-gray-700">
                Decentralized governance for maximum accountability
              </p>
            </div>
          </div>
        </div>

        {/* Audit Trail Table */}
        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Recent Actions</h2>
            <div className="flex gap-2">
              <button className="btn-secondary text-sm">
                Export CSV
              </button>
              <button className="btn-secondary text-sm">
                Filter
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">ID</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Action</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">User</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Timestamp</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Details</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody>
                {auditTrail.map((entry) => (
                  <tr key={entry.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4 text-sm text-gray-600">#{entry.id}</td>
                    <td className="py-4 px-4">
                      <span className="font-semibold text-gray-900">{entry.action}</span>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-700">{entry.user}</td>
                    <td className="py-4 px-4 text-sm text-gray-600">{entry.timestamp}</td>
                    <td className="py-4 px-4 text-sm text-gray-700">{entry.details}</td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        entry.status === 'Verified' ? 'bg-green-100 text-green-700' :
                        entry.status === 'Completed' ? 'bg-blue-100 text-blue-700' :
                        entry.status === 'Confirmed' ? 'bg-purple-100 text-purple-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {entry.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Showing 4 of 12,847 actions
            </p>
            <div className="flex gap-2">
              <button className="btn-secondary text-sm">Previous</button>
              <button className="btn-primary text-sm">Next</button>
            </div>
          </div>
        </div>

        {/* Verification Process */}
        <div className="card bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-orange-500 mt-6">
          <h3 className="font-bold text-lg text-gray-900 mb-4">
            🔍 Citizen Verification Process
          </h3>
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold">
                1
              </div>
              <p className="text-sm font-semibold text-gray-900">Report ID</p>
              <p className="text-xs text-gray-600 mt-1">Enter report number</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold">
                2
              </div>
              <p className="text-sm font-semibold text-gray-900">View Status</p>
              <p className="text-xs text-gray-600 mt-1">See current status</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold">
                3
              </div>
              <p className="text-sm font-semibold text-gray-900">Check Actions</p>
              <p className="text-xs text-gray-600 mt-1">View all actions taken</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold">
                ✓
              </div>
              <p className="text-sm font-semibold text-gray-900">Verified</p>
              <p className="text-xs text-gray-600 mt-1">Full transparency</p>
            </div>
          </div>

          <div className="mt-4 text-center">
            <button className="btn-primary">
              Verify a Report
            </button>
          </div>
        </div>

        {/* Data Privacy */}
        <div className="card mt-6">
          <h3 className="font-bold text-lg text-gray-900 mb-4">
            🔐 Data Privacy & Security
          </h3>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">AES-256 Encryption</p>
                <p className="text-xs text-gray-600 mt-1">
                  All data encrypted at rest and in transit
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">GDPR Compliant</p>
                <p className="text-xs text-gray-600 mt-1">
                  Full compliance with data protection regulations
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Anonymized Data</p>
                <p className="text-xs text-gray-600 mt-1">
                  Citizen data anonymized for analytics
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
