import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';

// Mobile Pages
import MobileHome from './pages/mobile/MobileHome';
import TakePhoto from './pages/mobile/TakePhoto';
import MobileAIAnalysis from './pages/mobile/AIAnalysis';
import TrackingMap from './pages/mobile/TrackingMap';
import Rewards from './pages/mobile/Rewards';
import WasteToValue from './pages/mobile/WasteToValue';

// Company Pages
import CompanyRoutes from './pages/company/RouteOptimization';
import FleetManagement from './pages/company/FleetManagement';

// Municipal Pages
import MunicipalOverview from './pages/municipal/Overview';
import AuditTrail from './pages/municipal/AuditTrail';

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing */}
        <Route path="/" element={<Home />} />
        
        {/* Authentication */}
        <Route path="/signin" element={<SignIn />} />
        
        {/* Mobile App (Citizen) */}
        <Route path="/mobile" element={<Navigate to="/mobile/home" />} />
        <Route path="/mobile/home" element={<MobileHome />} />
        <Route path="/mobile/take-photo" element={<TakePhoto />} />
        <Route path="/mobile/ai-analysis" element={<MobileAIAnalysis />} />
        <Route path="/mobile/tracking" element={<TrackingMap />} />
        <Route path="/mobile/rewards" element={<Rewards />} />
        <Route path="/mobile/waste-to-value" element={<WasteToValue />} />
        
        {/* Company Dashboard */}
        <Route path="/company" element={<Navigate to="/company/routes" />} />
        <Route path="/company/routes" element={<CompanyRoutes />} />
        <Route path="/company/fleet" element={<FleetManagement />} />
        
        {/* Municipal Dashboard */}
        <Route path="/municipal" element={<Navigate to="/municipal/overview" />} />
        <Route path="/municipal/overview" element={<MunicipalOverview />} />
        <Route path="/municipal/audit" element={<AuditTrail />} />
        
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
