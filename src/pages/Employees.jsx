// File: src/pages/Employees.jsx
// Purpose: Dedicated employees page with full employee list
// Dependencies: React, EmployeeList, mock data

import { useState, useEffect } from 'react'
import EmployeeList from '../components/EmployeeList'
import { generateEmployees } from '../data/mockData'

function Employees() {
  const [employees, setEmployees] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      const employeeData = generateEmployees(200)
      setEmployees(employeeData)
      setLoading(false)
    }, 500)
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Loading Employees...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Page header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Employees</h1>
        <p className="mt-2 text-gray-600">Manage and view all employee information</p>
      </div>

      {/* Employee Table */}
      <EmployeeList employees={employees} />
    </div>
  )
}

export default Employees;