// File: src/pages/Analytics.jsx
// Purpose: Analytics page with detailed charts and insights
// Dependencies: React, DepartmentChart, TrendChart, mock data

import { useState, useEffect } from 'react'
import DepartmentChart from '../components/DepartmentChart'
import TrendChart from '../components/TrendChart'
import AnalyticsOverview from '../components/AnalyticsOverview'
import InsightsPanel from '../components/InsightsPanel'
import { generateEmployees, calculateMetrics } from '../data/mockData'

function Analytics() {
  const [employees, setEmployees] = useState([])
  const [metrics, setMetrics] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      const employeeData = generateEmployees(200)
      const calculatedMetrics = calculateMetrics(employeeData)
      
      setEmployees(employeeData)
      setMetrics(calculatedMetrics)
      setLoading(false)
    }, 1000)
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Loading Analytics...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
        <p className="mt-2 text-gray-600">Detailed insights and data visualization</p>
      </div>

      {/* Comprehensive Analytics Overview */}
      <AnalyticsOverview employees={employees} metrics={metrics} />

      {/* AI Insights Panel */}
      <InsightsPanel employees={employees} metrics={metrics} />

      {/* Traditional Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DepartmentChart employees={employees} />
        <TrendChart employees={employees} />
      </div>
    </div>
  )
}

export default Analytics;