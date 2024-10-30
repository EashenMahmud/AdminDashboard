import React from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

function MainContent({ children }) {
  const isSidebarOpen = useSelector(state => state.isSidebarOpen);

  return (
    <main
      className={clsx(
        'min-h-screen pt-20 px-4 lg:px-6 transition-all duration-300',
        isSidebarOpen ? 'lg:ml-64' : 'lg:ml-20'
      )}
    >
      <div className="max-w-8xl mx-auto">
        {children}
      </div>
    </main>
  );
}

export default MainContent;