// File: src/pages/Settings.jsx
// Purpose: Settings page with user preferences and system configuration
// Dependencies: React, useState, useEffect

import { useState, useEffect } from 'react'
import { User, Bell, Palette, Shield, Database, Download } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

function Settings() {
  const { theme, updateTheme } = useTheme()
  const [settings, setSettings] = useState({
    notifications: {
      emailNotifications: true,
      pushNotifications: false,
      weeklyReports: true,
      newHireAlerts: true
    },
    display: {
      theme: 'light',
      itemsPerPage: 10,
      defaultSort: 'name',
      showAvatars: true
    },
    data: {
      autoRefresh: true,
      refreshInterval: 30,
      exportFormat: 'csv',
      includeInactive: false
    }
  })

  const [isLoading, setIsLoading] = useState(false)
  const [saveStatus, setSaveStatus] = useState('')

  // Load settings from localStorage on component mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('hr-dashboard-settings')
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings)
        setSettings(prev => ({ ...prev, ...parsed }))
      } catch {
        // Silently handle invalid settings data
      }
    }
  }, [])

  // Sync theme with context
  useEffect(() => {
    setSettings(prev => ({
      ...prev,
      display: {
        ...prev.display,
        theme: theme
      }
    }))
  }, [theme])

  // Save settings to localStorage
  const saveSettings = () => {
    setIsLoading(true)
    setSaveStatus('')
    
    setTimeout(() => {
      try {
        localStorage.setItem('hr-dashboard-settings', JSON.stringify(settings))
        setSaveStatus('Settings saved successfully!')
        
        // Clear success message after 3 seconds
        setTimeout(() => setSaveStatus(''), 3000)
      } catch {
        setSaveStatus('Error saving settings')
      }
      setIsLoading(false)
    }, 500)
  }

  // Handle setting changes
  const handleSettingChange = (category, key, value) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: value
      }
    }))
    
    // Special handling for theme changes
    if (category === 'display' && key === 'theme') {
      updateTheme(value)
    }
  }

  // Reset to defaults
  const resetToDefaults = () => {
    const defaultSettings = {
      notifications: {
        emailNotifications: true,
        pushNotifications: false,
        weeklyReports: true,
        newHireAlerts: true
      },
      display: {
        theme: 'light',
        itemsPerPage: 10,
        defaultSort: 'name',
        showAvatars: true
      },
      data: {
        autoRefresh: true,
        refreshInterval: 30,
        exportFormat: 'csv',
        includeInactive: false
      }
    }
    
    setSettings(defaultSettings)
    updateTheme('light')
    localStorage.setItem('hr-dashboard-settings', JSON.stringify(defaultSettings))
    
    setSaveStatus('Settings reset to defaults!')
    setTimeout(() => setSaveStatus(''), 3000)
  }

  // Export all data
  const exportAllData = () => {
    setSaveStatus('Exporting data...')
    
    setTimeout(() => {
      // This would typically export all employee data
      setSaveStatus('Data exported successfully!')
      setTimeout(() => setSaveStatus(''), 3000)
    }, 1000)
  }

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Settings</h1>
        <p className="mt-2 text-sm sm:text-base text-gray-600">Manage your preferences and system configuration</p>
      </div>

      {/* Save status */}
      {saveStatus && (
        <div className={`p-4 rounded-md ${
          saveStatus.includes('Error') 
            ? 'bg-red-50 text-red-700 border border-red-200' 
            : 'bg-green-50 text-green-700 border border-green-200'
        }`}>
          {saveStatus}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Notifications Settings */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
          <div className="flex items-center mb-4">
            <Bell className="h-5 w-5 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-gray-700">Email Notifications</label>
                <p className="text-xs text-gray-500">Receive updates via email</p>
              </div>
              <input
                type="checkbox"
                checked={settings.notifications.emailNotifications}
                onChange={(e) => handleSettingChange('notifications', 'emailNotifications', e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-gray-700">Push Notifications</label>
                <p className="text-xs text-gray-500">Browser notifications</p>
              </div>
              <input
                type="checkbox"
                checked={settings.notifications.pushNotifications}
                onChange={(e) => handleSettingChange('notifications', 'pushNotifications', e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-gray-700">Weekly Reports</label>
                <p className="text-xs text-gray-500">Automated weekly summaries</p>
              </div>
              <input
                type="checkbox"
                checked={settings.notifications.weeklyReports}
                onChange={(e) => handleSettingChange('notifications', 'weeklyReports', e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-gray-700">New Hire Alerts</label>
                <p className="text-xs text-gray-500">Notifications for new employees</p>
              </div>
              <input
                type="checkbox"
                checked={settings.notifications.newHireAlerts}
                onChange={(e) => handleSettingChange('notifications', 'newHireAlerts', e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
            </div>
          </div>
        </div>

        {/* Display Settings */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
          <div className="flex items-center mb-4">
            <Palette className="h-5 w-5 text-purple-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Display</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Theme</label>
              <select
                value={settings.display.theme}
                onChange={(e) => handleSettingChange('display', 'theme', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="auto">Auto</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Items per page</label>
              <select
                value={settings.display.itemsPerPage}
                onChange={(e) => handleSettingChange('display', 'itemsPerPage', parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Default sort</label>
              <select
                value={settings.display.defaultSort}
                onChange={(e) => handleSettingChange('display', 'defaultSort', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="name">Name</option>
                <option value="department">Department</option>
                <option value="status">Status</option>
                <option value="position">Position</option>
              </select>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-gray-700">Show Avatars</label>
                <p className="text-xs text-gray-500">Display profile pictures</p>
              </div>
              <input
                type="checkbox"
                checked={settings.display.showAvatars}
                onChange={(e) => handleSettingChange('display', 'showAvatars', e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
            </div>
          </div>
        </div>

        {/* Data Settings */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
          <div className="flex items-center mb-4">
            <Database className="h-5 w-5 text-green-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Data</h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-gray-700">Auto Refresh</label>
                <p className="text-xs text-gray-500">Automatically refresh data</p>
              </div>
              <input
                type="checkbox"
                checked={settings.data.autoRefresh}
                onChange={(e) => handleSettingChange('data', 'autoRefresh', e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Refresh Interval (seconds)</label>
              <input
                type="number"
                min="10"
                max="300"
                value={settings.data.refreshInterval}
                onChange={(e) => handleSettingChange('data', 'refreshInterval', parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Export Format</label>
              <select
                value={settings.data.exportFormat}
                onChange={(e) => handleSettingChange('data', 'exportFormat', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="csv">CSV</option>
                <option value="xlsx">Excel</option>
                <option value="json">JSON</option>
              </select>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-gray-700">Include Inactive</label>
                <p className="text-xs text-gray-500">Include inactive employees in exports</p>
              </div>
              <input
                type="checkbox"
                checked={settings.data.includeInactive}
                onChange={(e) => handleSettingChange('data', 'includeInactive', e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
            </div>
          </div>
        </div>

        {/* Account Settings */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
          <div className="flex items-center mb-4">
            <User className="h-5 w-5 text-indigo-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Account</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value="admin@company.com"
                disabled
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
              <input
                type="text"
                value="Administrator"
                disabled
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Login</label>
              <input
                type="text"
                value={new Date().toLocaleString()}
                disabled
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-end">
        <button
          onClick={resetToDefaults}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
        >
          Reset to Defaults
        </button>
        
        <button
          onClick={exportAllData}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors flex items-center"
        >
          <Download className="h-4 w-4 mr-2" />
          Export All Data
        </button>
        
        <button
          onClick={saveSettings}
          disabled={isLoading}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 transition-colors"
        >
          {isLoading ? 'Saving...' : 'Save Settings'}
        </button>
      </div>
    </div>
  )
}

export default Settings;
