import { Home, Users, Settings, BarChart2, FileText, Mail } from 'lucide-react';

const menuItems = [
  { text: 'Dashboard', icon: Home, path: '/' },
  { text: 'Analytics', icon: BarChart2, path: '/analytics' },
  { text: 'Users', icon: Users, path: '/users' },
  { text: 'Documents', icon: FileText, path: '/documents' },
  { text: 'Messages', icon: Mail, path: '/messages' },
  { text: 'Settings', icon: Settings, path: '/settings' }
];

export default menuItems;
