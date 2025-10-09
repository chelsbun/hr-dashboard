// File: src/components/AnalyticsOverview.jsx
// Purpose: Analytics overview with clean, readable horizontal bar charts
// Dependencies: React, Recharts, Lucide React

import { useState } from 'react'
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts'
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Target, 
  Award,
  Calendar,
  Heart
} from 'lucide-react'

function AnalyticsOverview({ employees, metrics }) {
  const [activeTab, setActiveTab] = useState('overview')

  if (!metrics) return null

  // Prepare department data - show ALL departments in horizontal bar chart
  const departmentData = (metrics.deptPerformance || [])
    .map(data => ({
      department: data.department,
      employees: data.count,
      highPerformers: data.highPerformers,
      avgSatisfaction: data.avgSatisfaction,
      performanceRate: data.performanceRate,
      percentage: Math.round((data.count / employees.length) * 100)
    }))
    .sort((a, b) => b.employees - a.employees)

  // Salary data
  const salaryByDept = employees.reduce((acc, emp) => {
    if (!acc[emp.department]) {
      acc[emp.department] = { total: 0, count: 0, avg: 0 }
    }
    acc[emp.department].total += emp.salary
    acc[emp.department].count += 1
    acc[emp.department].avg = Math.round(acc[emp.department].total / acc[emp.department].count)
    return acc
  }, {})

  const salaryData = Object.entries(salaryByDept).map(([dept, data]) => ({
    department: dept,
    averageSalary: data.avg,
    employees: data.count
  })).sort((a, b) => b.averageSalary - a.averageSalary)


  // Education data (limited for pie chart)
  const educationData = Object.entries(metrics.educationDistribution || {}).map(([level, count]) => ({
    level,
    count,
    percentage: Math.round((count / employees.length) * 100)
  }))

  const tabs = [
    { id: 'overview', label: 'Overview', icon: TrendingUp },
    { id: 'departments', label: 'Departments', icon: Users },
    { id: 'performance', label: 'Performance', icon: Target },
    { id: 'trends', label: 'Trends', icon: Calendar }
  ]

  // Custom tooltip for department charts
  const DepartmentTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload
      return (
        <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-900 mb-2">{label}</p>
          <div className="space-y-1 text-sm">
            <p className="text-blue-600">
              <span className="font-medium">{data.employees}</span> employees ({data.percentage}%)
            </p>
            <p className="text-green-600">
              <span className="font-medium">{data.highPerformers}</span> high performers
            </p>
            <p className="text-purple-600">
              <span className="font-medium">{data.avgSatisfaction}/10</span> avg satisfaction
            </p>
          </div>
        </div>
      )
    }
    return null
  }

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900">Analytics Overview</h2>
        <p className="text-gray-600 mt-1">Comprehensive insights into your workforce</p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8 px-6">
          {tabs.map(tab => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </div>
              </button>
            )
          })}
        </nav>
      </div>

      {/* Content */}
      <div className="p-6">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Key Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <Users className="h-8 w-8 text-blue-600" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-blue-600">Total Employees</p>
                    <p className="text-2xl font-bold text-blue-900">{metrics.totalEmployees}</p>
                  </div>
                </div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <Award className="h-8 w-8 text-green-600" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-green-600">High Performers</p>
                    <p className="text-2xl font-bold text-green-900">{metrics.highPerformers}</p>
                  </div>
                </div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <Heart className="h-8 w-8 text-purple-600" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-purple-600">Avg Satisfaction</p>
                    <p className="text-2xl font-bold text-purple-900">{metrics.avgSatisfaction}/10</p>
                  </div>
                </div>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <DollarSign className="h-8 w-8 text-orange-600" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-orange-600">Avg Salary</p>
                    <p className="text-2xl font-bold text-orange-900">${metrics.averageSalary?.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Department Performance */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Department Performance</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={departmentData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="department" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="employees" fill="#3B82F6" name="Total Employees" />
                  <Bar dataKey="highPerformers" fill="#10B981" name="High Performers" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {activeTab === 'departments' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Department Distribution - HORIZONTAL BAR CHART */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Employee Distribution by Department</h3>
                <div className="h-96">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={departmentData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis 
                        dataKey="department"
                        angle={-45}
                        textAnchor="end"
                        height={80}
                        tick={{ fontSize: 11 }}
                      />
                      <YAxis 
                        tick={{ fontSize: 12 }}
                        tickFormatter={(value) => `${value}`}
                      />
                      <Tooltip content={<DepartmentTooltip />} />
                      <Bar 
                        dataKey="employees" 
                        fill="#3B82F6"
                        radius={[4, 4, 0, 0]}
                        name="Employees"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                
                {/* Summary Stats */}
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="font-semibold text-blue-900">
                      {departmentData.length}
                    </div>
                    <div className="text-blue-700">Total Departments</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="font-semibold text-green-900">
                      {departmentData[0]?.department || 'N/A'}
                    </div>
                    <div className="text-green-700">Largest Department</div>
                  </div>
                </div>
              </div>

              {/* Salary by Department - HORIZONTAL BAR CHART */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Average Salary by Department</h3>
                {salaryData.length > 0 ? (
                  <div className="h-96">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart 
                        data={salaryData} 
                        margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis 
                          dataKey="department"
                          angle={-45}
                          textAnchor="end"
                          height={80}
                          tick={{ fontSize: 11 }}
                        />
                        <YAxis 
                          tick={{ fontSize: 12 }}
                          tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                        />
                        <Tooltip 
                          formatter={(value) => [`$${value.toLocaleString()}`, 'Average Salary']}
                          labelFormatter={(label) => `Department: ${label}`}
                        />
                        <Bar 
                          dataKey="averageSalary" 
                          fill="#8B5CF6"
                          radius={[4, 4, 0, 0]}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-64 text-gray-500">
                    <p>No salary data available</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'performance' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Performance Distribution */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Ratings</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={Object.entries(metrics.performanceStats || {}).map(([rating, count]) => ({
                    rating: rating.replace('Expectations', '').trim(),
                    count,
                    percentage: Math.round((count / employees.length) * 100)
                  }))}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="rating" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count" fill="#F59E0B" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Education Distribution - Pie chart for limited data */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Education Levels</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={educationData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ level, percentage }) => `${level} (${percentage}%)`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="count"
                    >
                      {educationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'][index % 5]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'trends' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Monthly Hiring Trends */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Hiring Trends</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={Array.from({ length: 12 }, (_, i) => {
                    const month = new Date(new Date().getFullYear(), i, 1).toLocaleDateString('en-US', { month: 'short' })
                    const hires = employees.filter(emp => {
                      const hireDate = new Date(emp.hireDate)
                      return hireDate.getFullYear() === new Date().getFullYear() && hireDate.getMonth() === i
                    }).length
                    return { month, hires }
                  })}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="hires" fill="#10B981" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Location Distribution */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Employee Locations</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={Object.entries(metrics.locationDistribution || {}).map(([location, count]) => ({
                    location,
                    count,
                    percentage: Math.round((count / employees.length) * 100)
                  }))}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="location" angle={-45} textAnchor="end" height={100} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count" fill="#EF4444" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AnalyticsOverview
