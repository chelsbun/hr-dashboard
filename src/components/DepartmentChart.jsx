// File: src/components/DepartmentChart.jsx
// Purpose: Professional department distribution chart using Recharts
// Dependencies: React, Recharts

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

function DepartmentChart({ employees }) {
  // Calculate department distribution
  const departmentData = employees.reduce((acc, employee) => {
    const dept = employee.department
    if (acc[dept]) {
      acc[dept]++
    } else {
      acc[dept] = 1
    }
    return acc
  }, {})

  // Convert to array format for Recharts
  const chartData = Object.entries(departmentData)
    .map(([department, count]) => ({
      department,
      employees: count,
      percentage: Math.round((count / employees.length) * 100)
    }))
    .sort((a, b) => b.employees - a.employees) // Sort by employee count
  
  // Fallback data if no employees
  if (chartData.length === 0) {
    chartData.push({ department: 'No Data', employees: 0, percentage: 0 })
  }

  // Custom tooltip component
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-900">{label}</p>
          <p className="text-blue-600">
            <span className="font-medium">{payload[0].value}</span> employees
          </p>
          <p className="text-gray-600 text-sm">
            {payload[0].payload.percentage}% of total
          </p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Department Distribution
        </h3>
        <p className="text-sm text-gray-600">
          Employee count by department
        </p>
      </div>
      
      
      <div style={{ height: '320px', width: '100%' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 60,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="department" 
              angle={-45}
              textAnchor="end"
              height={80}
              fontSize={12}
              stroke="#6b7280"
            />
            <YAxis 
              stroke="#6b7280"
              fontSize={12}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar 
              dataKey="employees" 
              fill="#3b82f6"
              radius={[4, 4, 0, 0]}
              stroke="#1d4ed8"
              strokeWidth={1}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      {/* Summary Stats */}
      <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
        <div className="text-center p-3 bg-blue-50 rounded-lg">
          <div className="font-semibold text-blue-900">
            {chartData.length}
          </div>
          <div className="text-blue-700">Departments</div>
        </div>
        <div className="text-center p-3 bg-green-50 rounded-lg">
          <div className="font-semibold text-green-900">
            {chartData[0]?.department || 'N/A'}
          </div>
          <div className="text-green-700">Largest Dept</div>
        </div>
      </div>
    </div>
  )
}

export default DepartmentChart;