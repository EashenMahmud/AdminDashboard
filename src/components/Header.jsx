import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Menu, Bell, User, ChevronLeft } from 'lucide-react';
import clsx from 'clsx';

function Header() {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector(state => state.isSidebarOpen);

  return (
    <header className={clsx(
      'fixed top-0 right-0 bg-white border-b z-40 transition-all duration-300',
      isSidebarOpen ? 'lg:left-64' : 'lg:left-20',
      'left-0'
    )}>
      <div className="flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => dispatch({ type: 'TOGGLE_SIDEBAR' })}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors lg:hidden"
            aria-label="Toggle sidebar"
          >
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={() => dispatch({ type: 'TOGGLE_SIDEBAR' })}
            className="lg:block hidden p-1 hover:bg-gray-100 rounded-lg"
          >
            <Menu className={clsx(
              'w-5 h-5 text-gray-500 transition-transform',
              !isSidebarOpen 
            )} />
          </button>
          <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <Bell className="w-6 h-6 text-gray-600" />
          </button>
          <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <User className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
