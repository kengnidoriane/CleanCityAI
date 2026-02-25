// Mock data for AI simulations - Based on Clean City AI Proposal

// 8 Waste Categories as per proposal
export const wasteCategories = [
  { id: 1, name: 'Plastic', icon: '♻️', color: 'blue', hazardous: false },
  { id: 2, name: 'Organic', icon: '🍃', color: 'green', hazardous: false },
  { id: 3, name: 'Metal', icon: '🔩', color: 'gray', hazardous: false },
  { id: 4, name: 'Glass', icon: '🥤', color: 'cyan', hazardous: false },
  { id: 5, name: 'Paper', icon: '📄', color: 'yellow', hazardous: false },
  { id: 6, name: 'E-Waste', icon: '💻', color: 'purple', hazardous: true },
  { id: 7, name: 'Medical', icon: '💉', color: 'red', hazardous: true },
  { id: 8, name: 'Mixed', icon: '🗑️', color: 'orange', hazardous: false }
];

export const aiAnalysisResult = {
  processingTime: 3.0, // "AI analyzes the image in 3 seconds"
  detection: {
    type: 'Mixed Waste',
    category: wasteCategories[7], // Mixed
    confidence: 92, // "90%+ accuracy"
    volume: 15,
    severity: 4, // "severity level (1-5)"
    priority: 'HIGH',
    hazardous: false,
    recyclable: true,
    estimatedValue: 5 // USD for waste-to-value
  },
  location: {
    address: 'Republic Street, Dakar',
    coordinates: [14.6928, -17.4467]
  },
  recommendation: 'Urgent collection within 24h',
  imageUrl: 'https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=800',
  // NLP Features
  languages: ['English', 'French', 'Arabic', 'Swahili', 'Hausa', 'Amharic'],
  voiceCommandEnabled: true,
  // Offline capability
  offlineMode: false,
  syncPending: false
};

export const routeOptimization = {
  manual: {
    distance: 45,
    time: 6,
    fuel: 18,
    cost: 25,
    points: 12
  },
  ai: {
    distance: 27,
    time: 3.5,
    fuel: 11,
    cost: 15,
    points: 12
  },
  savings: {
    distance: 40, // "40% fuel savings"
    time: 42,
    fuel: 40,
    cost: 40
  },
  algorithm: 'Traveling Salesman Problem (TSP) + Machine Learning',
  accuracy: 90,
  responseTimeImprovement: 50 // "50% faster response times"
};

export const predictions = [
  {
    zone: 'Central Market',
    confidence: 87, // "target: 85% prediction accuracy"
    risk: 'high',
    date: 'Tomorrow',
    reason: 'Market day + Historical patterns',
    action: 'Preventive collection',
    factors: ['Day of week', 'Market day', 'Historical data']
  },
  {
    zone: 'North Residential District',
    confidence: 82,
    risk: 'medium',
    date: 'In 3 days',
    reason: 'Weather forecast + Population density',
    action: 'Monitoring',
    factors: ['Weather', 'Historical patterns']
  },
  {
    zone: 'Industrial Zone',
    confidence: 78,
    risk: 'low',
    date: 'In 5 days',
    reason: 'Normal pattern',
    action: 'Regular schedule',
    factors: ['Historical data', 'Events']
  }
];

export const impactStats = {
  wasteReduction: 70, // "70% Visible Waste Reduction"
  diseaseReduction: 40, // "40% Waste-Related Disease Reduction"
  fuelSavings: 40, // "40% Fuel Cost Savings"
  costSavings: 2000000, // "$2 million saved in healthcare costs per city"
  aiAccuracy: 92, // "90%+ accuracy"
  predictionsGenerated: 468,
  routesOptimized: 267,
  reportsAnalyzed: 38456,
  predictionAccuracy: 85, // "target: 85% prediction accuracy"
  responseTimeImprovement: 50, // "50% faster response times"
  choleraReduction: 30, // "30% reduction in cholera"
  malariaReduction: 25 // "25% reduction in malaria"
};

export const userStats = {
  points: 450,
  rank: 12,
  totalUsers: 10000, // "10,000+ active citizen users"
  reports: 12,
  collections: 8,
  wasteRemoved: 180,
  co2Avoided: 0.5,
  satisfactionRate: 95 // "95% citizen satisfaction rate"
};

export const cityStats = {
  totalReports: 12847,
  collectionRate: 89,
  responseTime: 24, // hours
  satisfaction: 95,
  activeUsers: 10000,
  companies: 5,
  trucksTracked: 45
};

// Waste-to-Value Marketplace
export const wasteToValue = {
  totalRecycled: 1250, // tons
  revenue: 125000, // USD
  commission: 12500, // 10% commission
  partners: [
    { name: 'EcoPlast Recycling', category: 'Plastic', price: 0.5 },
    { name: 'GreenMetal Co', category: 'Metal', price: 1.2 },
    { name: 'PaperCycle', category: 'Paper', price: 0.3 }
  ]
};

// Audit Trail
export const auditTrail = [
  {
    id: 1,
    action: 'Report Submitted',
    user: 'Marie Diop',
    timestamp: '2024-02-25 14:30:00',
    details: 'Mixed Waste, Republic Street',
    status: 'Verified'
  },
  {
    id: 2,
    action: 'Route Optimized',
    user: 'CleanCorp AI',
    timestamp: '2024-02-25 14:31:00',
    details: 'TSP Algorithm, 40% fuel savings',
    status: 'Completed'
  },
  {
    id: 3,
    action: 'Collection Completed',
    user: 'Driver #12',
    timestamp: '2024-02-25 16:45:00',
    details: '15kg collected, Citizen notified',
    status: 'Confirmed'
  },
  {
    id: 4,
    action: 'Payment Processed',
    user: 'Municipal Authority',
    timestamp: '2024-02-25 17:00:00',
    details: '$50 to CleanCorp',
    status: 'Paid'
  }
];

// Multi-language support
export const supportedLanguages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'sw', name: 'Kiswahili', flag: '🇰🇪' },
  { code: 'ha', name: 'Hausa', flag: '🇳🇬' },
  { code: 'am', name: 'አማርኛ', flag: '🇪🇹' }
];
