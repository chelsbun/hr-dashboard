// File: src/components/TrendChart.jsx
// Purpose: Professional hiring trends chart using Recharts
// Dependencies: React, Recharts

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

function TrendChart({ employees }) {
  // Generate monthly hiring data for the last 12 months
  const generateHiringTrends = () => {
    const trends = []
    const now = new Date()
    
    for (let i = 11; i >= 0; i--) {
      const date = new Date(now.getFullYear(), now.getMonth() - i, 1)
      const monthName = date.toLocaleDateString('en-US', { month: 'short' })
      const year = date.getFullYear()
      
      // Count employees hired in this month
      const hiredThisMonth = employees.filter(employee => {
        const hireDate = new Date(employee.hireDate)
        return hireDate.getMonth() === date.getMonth() && 
               hireDate.getFullYear() === date.getFullYear()
      }).length
      
      trends.push({
        month: `${monthName} ${year}`,
        hires: hiredThisMonth,
        cumulative: 0 // Will calculate below
      })
    }
    
    // Calculate cumulative hires
    let cumulative = 0
    trends.forEach(trend => {
      cumulative += trend.hires
      trend.cumulative = cumulative
    })
    
    return trends
  }

  const trendData = generateHiringTrends()

  // Custom tooltip component
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-900">{label}</p>
          <p className="text-blue-600">
            <span className="font-medium">{payload[0].value}</span> new hires
          </p>
          <p className="text-green-600">
            <span className="font-medium">{payload[1].value}</span> total employees
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
          Hiring Trends
        </h3>
        <p className="text-sm text-gray-600">
          Monthly hiring activity over the last 12 months
        </p>
      </div>
      
      
      <div style={{ height: '320px', width: '100%' }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={trendData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 60,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="month" 
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
            <Line 
              type="monotone" 
              dataKey="hires" 
              stroke="#3b82f6" 
              strokeWidth={3}
              dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#3b82f6', strokeWidth: 2 }}
            />
            <Line 
              type="monotone" 
              dataKey="cumulative" 
              stroke="#10b981" 
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ fill: '#10b981', strokeWidth: 2, r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      {/* Legend */}
      <div className="mt-4 flex justify-center space-x-6 text-sm">
        <div className="flex items-center">
          <div className="w-4 h-0.5 bg-blue-600 mr-2"></div>
          <span className="text-gray-700">Monthly Hires</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-0.5 bg-green-600 mr-2" style={{borderTop: '2px dashed #10b981'}}></div>
          <span className="text-gray-700">Cumulative Total</span>
        </div>
      </div>
    </div>
  )
}

export default TrendChart;