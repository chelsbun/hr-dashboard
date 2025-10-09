// File: src/components/InsightsPanel.jsx
// Purpose: AI-powered insights and recommendations based on HR data
// Dependencies: React, Lucide React

import { 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  CheckCircle, 
  Lightbulb, 
  Target,
  Users,
  DollarSign,
  Award,
  Calendar,
  MapPin,
  GraduationCap
} from 'lucide-react'

function InsightsPanel({ metrics }) {
  if (!metrics) return null

  // Generate insights based on data
  const generateInsights = () => {
    const insights = []
    
    // High performer insights
    const highPerformerRate = Math.round((metrics.highPerformers / metrics.totalEmployees) * 100)
    if (highPerformerRate > 30) {
      insights.push({
        type: 'positive',
        icon: Award,
        title: 'Excellent Performance Culture',
        description: `${highPerformerRate}% of employees are high performers. This indicates a strong performance culture and effective talent management.`,
        recommendation: 'Consider implementing a mentorship program to share best practices across teams.'
      })
    } else if (highPerformerRate < 15) {
      insights.push({
        type: 'warning',
        icon: AlertTriangle,
        title: 'Performance Improvement Needed',
        description: `Only ${highPerformerRate}% of employees are high performers. This suggests opportunities for performance improvement.`,
        recommendation: 'Implement targeted training programs and performance coaching initiatives.'
      })
    }

    // Satisfaction insights
    if (metrics.avgSatisfaction >= 8) {
      insights.push({
        type: 'positive',
        icon: CheckCircle,
        title: 'High Employee Satisfaction',
        description: `Average satisfaction score of ${metrics.avgSatisfaction}/10 indicates a highly engaged workforce.`,
        recommendation: 'Maintain current practices and consider expanding successful engagement initiatives.'
      })
    } else if (metrics.avgSatisfaction < 6) {
      insights.push({
        type: 'warning',
        icon: AlertTriangle,
        title: 'Low Employee Satisfaction',
        description: `Average satisfaction score of ${metrics.avgSatisfaction}/10 indicates potential engagement issues.`,
        recommendation: 'Conduct employee surveys to identify specific concerns and develop improvement plans.'
      })
    }

    // Remote work insights
    const remoteRate = Math.round((metrics.remoteEmployees / metrics.totalEmployees) * 100)
    if (remoteRate > 50) {
      insights.push({
        type: 'info',
        icon: MapPin,
        title: 'High Remote Work Adoption',
        description: `${remoteRate}% of employees work remotely. This suggests successful remote work implementation.`,
        recommendation: 'Ensure remote employees have access to collaboration tools and regular team interactions.'
      })
    }

    // Salary insights
    const salaryRange = metrics.maxSalary - metrics.minSalary
    const salaryVariation = Math.round((salaryRange / metrics.averageSalary) * 100)
    if (salaryVariation > 200) {
      insights.push({
        type: 'warning',
        icon: DollarSign,
        title: 'High Salary Variation',
        description: `Salary variation of ${salaryVariation}% indicates significant pay disparities across roles.`,
        recommendation: 'Review compensation structure to ensure fair and competitive pay practices.'
      })
    }

    // Department insights
    const topDept = metrics.deptPerformance?.[0]
    if (topDept && topDept.performanceRate > 80) {
      insights.push({
        type: 'positive',
        icon: TrendingUp,
        title: 'Outstanding Department Performance',
        description: `${topDept.department} department shows ${topDept.performanceRate}% high performer rate.`,
        recommendation: 'Study and replicate successful practices from this department across the organization.'
      })
    }

    // Training insights
    if (metrics.avgTrainingHours > 30) {
      insights.push({
        type: 'positive',
        icon: GraduationCap,
        title: 'Strong Learning Culture',
        description: `Average of ${metrics.avgTrainingHours} training hours per employee shows commitment to development.`,
        recommendation: 'Continue investing in learning and development programs to maintain competitive advantage.'
      })
    } else if (metrics.avgTrainingHours < 15) {
      insights.push({
        type: 'warning',
        icon: AlertTriangle,
        title: 'Limited Training Investment',
        description: `Only ${metrics.avgTrainingHours} average training hours may impact skill development.`,
        recommendation: 'Increase training budget and create structured learning paths for career development.'
      })
    }

    // Retention insights
    if (metrics.retentionRate >= 90) {
      insights.push({
        type: 'positive',
        icon: CheckCircle,
        title: 'Excellent Retention Rate',
        description: `${metrics.retentionRate}% retention rate indicates strong employee loyalty and satisfaction.`,
        recommendation: 'Maintain current retention strategies and consider expanding successful programs.'
      })
    } else if (metrics.retentionRate < 80) {
      insights.push({
        type: 'warning',
        icon: AlertTriangle,
        title: 'Retention Concerns',
        description: `${metrics.retentionRate}% retention rate suggests potential turnover issues.`,
        recommendation: 'Conduct exit interviews and implement retention strategies focused on top performers.'
      })
    }

    // New hire insights
    if (metrics.newHires > 20) {
      insights.push({
        type: 'info',
        icon: Users,
        title: 'Rapid Growth',
        description: `${metrics.newHires} new hires in 2025 indicates significant company growth.`,
        recommendation: 'Ensure onboarding processes are scalable and maintain company culture during expansion.'
      })
    }

    return insights
  }

  const insights = generateInsights()

  const getInsightIcon = (type) => {
    switch (type) {
      case 'positive':
        return CheckCircle
      case 'warning':
        return AlertTriangle
      case 'info':
        return Lightbulb
      default:
        return Target
    }
  }

  const getInsightColor = (type) => {
    switch (type) {
      case 'positive':
        return 'text-green-600 bg-green-50 border-green-200'
      case 'warning':
        return 'text-yellow-600 bg-yellow-50 border-yellow-200'
      case 'info':
        return 'text-blue-600 bg-blue-50 border-blue-200'
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200'
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900">AI Insights & Recommendations</h2>
        <p className="text-gray-600 mt-1">Data-driven insights to optimize your workforce</p>
      </div>

      <div className="p-6">
        <div className="space-y-4">
          {insights.map((insight, index) => {
            const Icon = getInsightIcon(insight.type)
            const colorClasses = getInsightColor(insight.type)
            
            return (
              <div key={index} className={`p-4 rounded-lg border ${colorClasses}`}>
                <div className="flex items-start">
                  <Icon className="h-5 w-5 mt-0.5 mr-3 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm mb-2">{insight.title}</h3>
                    <p className="text-sm mb-3">{insight.description}</p>
                    <div className="bg-white/50 p-3 rounded border-l-4 border-current">
                      <p className="text-xs font-medium mb-1">💡 Recommendation:</p>
                      <p className="text-xs">{insight.recommendation}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Summary Stats */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{metrics.totalEmployees}</div>
              <div className="text-sm text-gray-600">Total Employees</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{metrics.highPerformers}</div>
              <div className="text-sm text-gray-600">High Performers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{metrics.avgSatisfaction}/10</div>
              <div className="text-sm text-gray-600">Avg Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">{metrics.retentionRate}%</div>
              <div className="text-sm text-gray-600">Retention Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InsightsPanel


