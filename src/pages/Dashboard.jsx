// File: src/pages/Dashboard.jsx
// Purpose: Dashboard page with metrics and charts
// Dependencies: React, MetricCard, DepartmentChart, TrendChart, EmployeeList, mock data

import { useState, useEffect } from 'react'
import MetricCard from '../components/MetricCard'
import DepartmentChart from '../components/DepartmentChart'
import TrendChart from '../components/TrendChart'
import EmployeeList from '../components/EmployeeList'
import LoadingSkeleton from '../components/LoadingSkeleton'
import { generateEmployees, calculateMetrics } from '../data/mockData'

function Dashboard() {
  const [employees, setEmployees] = useState([])
  const [metrics, setMetrics] = useState(null)
  const [loading, setLoading] = useState(true)

  // Load mock data when component mounts
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
      <div className="space-y-4 sm:space-y-6">
        {/* Page header skeleton */}
        <div>
          <div className="h-8 bg-gray-200 rounded w-48 mb-2 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-96 animate-pulse"></div>
        </div>

        {/* Metric cards skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <LoadingSkeleton type="card" count={8} />
        </div>

        {/* Charts skeleton */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 sm:gap-4">
          <LoadingSkeleton type="chart" count={2} />
        </div>

        {/* Table skeleton */}
        <LoadingSkeleton type="table" />
      </div>
    )
  }

  return (
    <div className="space-y-4 sm:space-y-6 lg:space-y-4">
      {/* Page header */}
      <div className="lg:pt-0">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-sm sm:text-base text-gray-600">Overview of your HR metrics and employee data</p>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <MetricCard 
          title="Total Employees" 
          value={metrics.totalEmployees} 
          icon="users" 
          color="blue" 
        />
        <MetricCard 
          title="Active Employees" 
          value={metrics.activeEmployees} 
          icon="building" 
          color="green" 
        />
        <MetricCard 
          title="Departments" 
          value={metrics.departments} 
          icon="userPlus" 
          color="purple" 
        />
        <MetricCard 
          title="New Hires (2025)" 
          value={metrics.newHires} 
          icon="briefcase" 
          color="orange" 
        />
      </div>

      {/* Additional Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <MetricCard 
          title="High Performers" 
          value={metrics.highPerformers} 
          icon="star" 
          color="yellow" 
        />
        <MetricCard 
          title="Satisfaction Score" 
          value={`${metrics.avgSatisfaction}/10`} 
          icon="heart" 
          color="rose" 
        />
        <MetricCard 
          title="Training Hours" 
          value={metrics.avgTrainingHours} 
          icon="bookOpen" 
          color="indigo" 
        />
        <MetricCard 
          title="Engagement Score" 
          value={`${metrics.employeeEngagementScore}%`} 
          icon="trendingUp" 
          color="emerald" 
        />
      </div>

      {/* Third Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <MetricCard 
          title="Remote Employees" 
          value={metrics.remoteEmployees} 
          icon="home" 
          color="blue" 
        />
        <MetricCard 
          title="Average Salary" 
          value={`$${metrics.averageSalary.toLocaleString()}`} 
          icon="dollarSign" 
          color="green" 
        />
        <MetricCard 
          title="Managers" 
          value={metrics.managers} 
          icon="userCheck" 
          color="purple" 
        />
        <MetricCard 
          title="Retention Rate" 
          value={`${metrics.retentionRate}%`} 
          icon="shield" 
          color="teal" 
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 sm:gap-4">
        <DepartmentChart employees={employees} />
        <TrendChart employees={employees} />
      </div>

      {/* Employee Table */}
      <EmployeeList employees={employees} />
    </div>
  )
}

export default Dashboard;