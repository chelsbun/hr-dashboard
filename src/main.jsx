// File: src/main.jsx
// Purpose: Main entry point with React Router setup and authentication
// Dependencies: React, ReactDOM, React Router, Layout, Pages

import { StrictMode, useState, useEffect, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import Layout from './components/Layout'
import Login from './pages/Login'
import LoadingSkeleton from './components/LoadingSkeleton'
import ErrorBoundary from './components/ErrorBoundary'
import './index.css'

// Lazy load pages for better performance
const Dashboard = lazy(() => import('./pages/Dashboard'))
const Employees = lazy(() => import('./pages/Employees'))
const Analytics = lazy(() => import('./pages/Analytics'))
const Settings = lazy(() => import('./pages/Settings'))

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Check authentication status on app load
  useEffect(() => {
    const checkAuth = () => {
      const authData = localStorage.getItem('hr-dashboard-auth')
      
      if (authData) {
        try {
          const parsed = JSON.parse(authData)
          // Check if session is less than 24 hours old
          const loginTime = new Date(parsed.loginTime)
          const now = new Date()
          const hoursDiff = (now - loginTime) / (1000 * 60 * 60)
          
          if (hoursDiff < 24) {
            setIsAuthenticated(true)
          } else {
            localStorage.removeItem('hr-dashboard-auth')
            setIsAuthenticated(false)
          }
        } catch {
          localStorage.removeItem('hr-dashboard-auth')
          setIsAuthenticated(false)
        }
      } else {
        setIsAuthenticated(false)
      }
      setIsLoading(false)
    }

    // Simulate checking auth (like checking with server)
    setTimeout(checkAuth, 500)
  }, [])

  // Show loading spinner while checking auth
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Router>
          <Routes>
            {/* Public route - Login page */}
            <Route 
              path="/login" 
              element={
                isAuthenticated ? <Navigate to="/" replace /> : <Login />
              } 
            />
            
            {/* Protected routes - require authentication */}
            <Route 
              path="/*" 
              element={
                isAuthenticated ? (
                <Layout onLogout={() => setIsAuthenticated(false)}>
                  <Suspense fallback={
                    <div className="space-y-4 sm:space-y-6">
                      <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-48 animate-pulse"></div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                        <LoadingSkeleton type="card" count={8} />
                      </div>
                      <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 sm:gap-4">
                        <LoadingSkeleton type="chart" count={2} />
                      </div>
                      <LoadingSkeleton type="table" />
                    </div>
                  }>
                    <Routes>
                      <Route path="/" element={<Dashboard />} />
                      <Route path="/employees" element={<Employees />} />
                      <Route path="/analytics" element={<Analytics />} />
                      <Route path="/settings" element={<Settings />} />
                    </Routes>
                  </Suspense>
                </Layout>
                ) : (
                  <Navigate to="/login" replace />
                )
              } 
            />
          </Routes>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)