// Test users for prototype demonstration

export const testUsers = [
  // Citizens
  {
    email: 'citizen@test.com',
    password: 'test123',
    role: 'citizen',
    name: 'Marie Diop',
    avatar: '👩🏾',
    points: 450,
    rank: 12,
    reports: 12
  },
  {
    email: 'john@test.com',
    password: 'test123',
    role: 'citizen',
    name: 'John Mensah',
    avatar: '👨🏿',
    points: 320,
    rank: 45,
    reports: 8
  },
  
  // Company
  {
    email: 'company@test.com',
    password: 'test123',
    role: 'company',
    name: 'CleanCorp Dakar',
    avatar: '🚛',
    trucks: 12,
    drivers: 45
  },
  
  // Municipal
  {
    email: 'municipal@test.com',
    password: 'test123',
    role: 'municipal',
    name: 'City of Dakar',
    avatar: '🏛️',
    population: 1200000,
    districts: 19
  }
];

export const getCurrentUser = () => {
  const userStr = localStorage.getItem('currentUser');
  return userStr ? JSON.parse(userStr) : null;
};

export const setCurrentUser = (user: any) => {
  localStorage.setItem('currentUser', JSON.stringify(user));
};

export const logout = () => {
  localStorage.removeItem('currentUser');
};
