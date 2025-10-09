// File: src/contexts/ThemeContext.jsx
// Purpose: Theme context for managing light/dark mode
// Dependencies: React, createContext, useState, useEffect

import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')

  // Get system theme preference
  const getSystemTheme = () => {
    if (window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      return mediaQuery.matches ? 'dark' : 'light'
    }
    return 'light'
  }

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('hr-dashboard-settings')
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings)
        if (parsed.display?.theme) {
          if (parsed.display.theme === 'auto') {
            const systemTheme = getSystemTheme()
            setTheme(systemTheme)
          } else {
            setTheme(parsed.display.theme)
          }
        }
      } catch {
        setTheme('light')
      }
    } else {
      setTheme('light')
    }
  }, [])

  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement
    
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [theme])

  // Listen for system theme changes when in auto mode
  useEffect(() => {
    const savedSettings = localStorage.getItem('hr-dashboard-settings')
    let currentThemeSetting = 'light'
    
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings)
        currentThemeSetting = parsed.display?.theme || 'light'
      } catch {
        // Use default theme if parsing fails
      }
    }

    if (currentThemeSetting === 'auto') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      
      const handleChange = (e) => {
        const newTheme = e.matches ? 'dark' : 'light'
        setTheme(newTheme)
      }

      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  // Update theme and save to localStorage
  const updateTheme = (newTheme) => {
    // If auto mode, get the current system theme
    if (newTheme === 'auto') {
      const systemTheme = getSystemTheme()
      setTheme(systemTheme)
    } else {
      setTheme(newTheme)
    }
    
    // Save to localStorage
    const savedSettings = localStorage.getItem('hr-dashboard-settings')
    let settings = {}
    
    if (savedSettings) {
      try {
        settings = JSON.parse(savedSettings)
      } catch {
        // Use default settings if parsing fails
      }
    }
    
    settings.display = {
      ...settings.display,
      theme: newTheme
    }
    
    localStorage.setItem('hr-dashboard-settings', JSON.stringify(settings))
  }

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}