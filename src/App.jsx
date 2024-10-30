import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import DashboardStats from './components/DashboardStats';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Sidebar />
          <Header />
          <MainContent>
            <Routes>
              <Route 
                path="/" 
                element={
                  <>
                    <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h1>
                    <DashboardStats />
                  </>
                } 
              />
              <Route 
                path="*" 
                element={
                  <div className="bg-white rounded-xl border p-6">
                    <h2 className="text-xl font-semibold text-gray-800">Coming Soon</h2>
                    <p className="text-gray-600 mt-2">This page is under construction.</p>
                  </div>
                } 
              />
            </Routes>
          </MainContent>
        </div>
      </Router>
    </Provider>
  );
}

export default App;