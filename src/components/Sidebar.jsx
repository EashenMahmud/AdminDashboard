import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, Settings, BarChart2, FileText, Mail, ChevronLeft } from 'lucide-react';
import clsx from 'clsx';

function Sidebar() {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector(state => state.isSidebarOpen);
  const location = useLocation();

  const menuItems = [
    { text: 'Dashboard', icon: Home, path: '/' },
    { text: 'Analytics', icon: BarChart2, path: '/analytics' },
    { text: 'Users', icon: Users, path: '/users' },
    { text: 'Documents', icon: FileText, path: '/documents' },
    { text: 'Messages', icon: Mail, path: '/messages' },
    { text: 'Settings', icon: Settings, path: '/settings' }
  ];

  const overlay = isSidebarOpen ? (
    <div 
      className="fixed inset-0 bg-black/50 lg:hidden z-40"
      onClick={() => dispatch({ type: 'TOGGLE_SIDEBAR' })}
    />
  ) : null;

  return (
    <>
      {overlay}
      <aside
        className={clsx(
          'fixed left-0 top-0 h-screen bg-white border-r z-50',
          'transform transition-all duration-300 lg:translate-x-0',
          'flex flex-col',
          isSidebarOpen ? 'w-64' : 'w-20',
          !isSidebarOpen && 'lg:w-20',
          !isSidebarOpen && !window.matchMedia('(min-width: 1024px)').matches && '-translate-x-full'
        )}
      >
        {/* Logo Section */}
        <div className="h-16 border-b flex items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">A</span>
            </div>
            {isSidebarOpen && (
              <span className="font-semibold text-xl">Admin</span>
            )}
          </Link>
          <button
            onClick={() => dispatch({ type: 'TOGGLE_SIDEBAR' })}
            className="lg:block hidden p-1 hover:bg-gray-100 rounded-lg"
          >
            <ChevronLeft className={clsx(
              'w-5 h-5 text-gray-500 transition-transform',
              !isSidebarOpen && 'rotate-180'
            )} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <li key={item.text}>
                  <Link
                    to={item.path}
                    className={clsx(
                      'flex items-center rounded-lg transition-colors',
                      'hover:bg-gray-100 hover:text-gray-900',
                      isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-600',
                      isSidebarOpen ? 'px-3 py-2' : 'p-2 justify-center'
                    )}
                    title={!isSidebarOpen ? item.text : undefined}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    {isSidebarOpen && (
                      <span className="ml-3 font-medium">{item.text}</span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;