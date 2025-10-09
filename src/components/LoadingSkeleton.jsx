// File: src/components/LoadingSkeleton.jsx
// Purpose: Loading skeleton component for better UX
// Dependencies: React

function LoadingSkeleton({ type = 'card', count = 1 }) {
  const renderSkeleton = () => {
    switch (type) {
      case 'card':
        return (
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 animate-pulse">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-gray-200"></div>
              <div className="ml-4 flex-1">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-6 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        )
      
      case 'table':
        return (
          <div className="bg-white rounded-lg shadow-md border border-gray-200">
            <div className="px-4 sm:px-6 py-4 border-b border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <div className="h-6 bg-gray-200 rounded w-32"></div>
                <div className="h-4 bg-gray-200 rounded w-24"></div>
              </div>
              <div className="h-10 bg-gray-200 rounded"></div>
            </div>
            <div className="p-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex items-center space-x-4 py-3 border-b border-gray-100 last:border-b-0">
                  <div className="h-4 bg-gray-200 rounded w-24"></div>
                  <div className="h-4 bg-gray-200 rounded w-32"></div>
                  <div className="h-4 bg-gray-200 rounded w-20"></div>
                  <div className="h-4 bg-gray-200 rounded w-16"></div>
                </div>
              ))}
            </div>
          </div>
        )
      
      case 'chart':
        return (
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 animate-pulse">
            <div className="mb-6">
              <div className="h-6 bg-gray-200 rounded w-48 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-64"></div>
            </div>
            <div className="h-64 bg-gray-200 rounded"></div>
          </div>
        )
      
      default:
        return (
          <div className="bg-gray-200 rounded animate-pulse h-20"></div>
        )
    }
  }

  if (count === 1) {
    return renderSkeleton()
  }

  return (
    <div className="space-y-4">
      {[...Array(count)].map((_, i) => (
        <div key={i}>
          {renderSkeleton()}
        </div>
      ))}
    </div>
  )
}

export default LoadingSkeleton;
