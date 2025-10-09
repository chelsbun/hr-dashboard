// File: src/components/MetricCard.jsx
// Purpose: Enhanced metric card with icons and colors
// Dependencies: React, Lucide React icons

import { Users, Building2, UserPlus, Briefcase, DollarSign, UserCheck, TrendingUp, Home, Star, Heart, BookOpen, Shield } from 'lucide-react'

function MetricCard({ title, value, icon, color }) {
  // Icon mapping for different metric types
  const iconMap = {
    users: Users,
    building: Building2,
    userPlus: UserPlus,
    briefcase: Briefcase,
    dollarSign: DollarSign,
    userCheck: UserCheck,
    trendingUp: TrendingUp,
    home: Home,
    star: Star,
    heart: Heart,
    bookOpen: BookOpen,
    shield: Shield
  }

  const IconComponent = iconMap[icon] || Users

  // Get colors based on color prop - using inline styles for now
  let iconBgColor = '#f3f4f6' // gray-50
  let iconTextColor = '#6b7280' // gray-600
  
  if (color === 'blue') {
    iconBgColor = '#dbeafe' // blue-50
    iconTextColor = '#2563eb' // blue-600
  } else if (color === 'green') {
    iconBgColor = '#dcfce7' // green-50
    iconTextColor = '#16a34a' // green-600
  } else if (color === 'purple') {
    iconBgColor = '#f3e8ff' // purple-50
    iconTextColor = '#9333ea' // purple-600
  } else if (color === 'orange') {
    iconBgColor = '#fed7aa' // orange-50
    iconTextColor = '#ea580c' // orange-600
  } else if (color === 'indigo') {
    iconBgColor = '#e0e7ff' // indigo-50
    iconTextColor = '#4f46e5' // indigo-600
  } else if (color === 'emerald') {
    iconBgColor = '#d1fae5' // emerald-50
    iconTextColor = '#059669' // emerald-600
  } else if (color === 'rose') {
    iconBgColor = '#ffe4e6' // rose-50
    iconTextColor = '#e11d48' // rose-600
  } else if (color === 'teal') {
    iconBgColor = '#ccfbf1' // teal-600
    iconTextColor = '#0d9488' // teal-600
  } else if (color === 'yellow') {
    iconBgColor = '#fef3c7' // yellow-50
    iconTextColor = '#d97706' // yellow-600
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
      <div className="flex items-center">
        <div 
          className="p-3 rounded-full"
          style={{ backgroundColor: iconBgColor }}
        >
          <IconComponent 
            className="h-6 w-6"
            style={{ color: iconTextColor }}
          />
        </div>
        <div className="ml-4">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
            {title}
          </h3>
          <p className="mt-1 text-3xl font-bold text-gray-900">
            {value}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MetricCard;