// File: src/data/mockData.js
// Purpose: Generate realistic mock HR data for the dashboard
// Dependencies: None (pure JavaScript)

// Enhanced employee data for more impressive dashboard
const firstNames = [
    'Alice', 'Bob', 'Carol', 'David', 'Emma', 'Frank', 'Grace', 'Henry',
    'Ivy', 'Jack', 'Kate', 'Liam', 'Maya', 'Noah', 'Olivia', 'Paul',
    'Quinn', 'Ruby', 'Sam', 'Tina', 'Uma', 'Victor', 'Wendy', 'Xavier',
    'Yara', 'Zoe', 'Alex', 'Blake', 'Casey', 'Dana', 'Eli', 'Felix',
    'Gabriel', 'Hannah', 'Isaac', 'Julia', 'Kevin', 'Luna', 'Marcus', 'Nina',
    'Oscar', 'Penelope', 'Quentin', 'Riley', 'Sophia', 'Tyler', 'Uma', 'Vincent',
    'Willow', 'Xander', 'Yasmine', 'Zachary', 'Aria', 'Benjamin', 'Chloe', 'Daniel',
    'Elena', 'Finn', 'Giselle', 'Hugo', 'Isabella', 'Jasper', 'Kira', 'Leo'
  ]
  
  const lastNames = [
    'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller',
    'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez',
    'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin',
    'Lee', 'Perez', 'Thompson', 'White', 'Harris', 'Sanchez', 'Clark',
    'Ramirez', 'Lewis', 'Robinson', 'Walker', 'Young', 'Allen', 'King',
    'Wright', 'Scott', 'Torres', 'Nguyen', 'Hill', 'Flores', 'Green',
    'Adams', 'Nelson', 'Baker', 'Hall', 'Rivera', 'Campbell', 'Mitchell',
    'Carter', 'Roberts', 'Gomez', 'Phillips', 'Evans', 'Turner', 'Diaz'
  ]
  
  const _departments = [
    'Engineering', 'Marketing', 'Sales', 'HR', 'Finance', 'Operations', 'Design', 'Support',
    'Product Management', 'Data Science'
  ]
  
  const positions = [
    // Engineering (80% individual contributors, 20% management)
    'Software Engineer', 'Senior Software Engineer', 'Staff Engineer', 'Principal Engineer',
    'Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'DevOps Engineer',
    'Data Engineer', 'Machine Learning Engineer', 'Mobile Developer', 'QA Engineer',
    'Technical Lead', 'Architect', 'Engineering Manager', 'CTO',
    
    // Marketing (85% individual contributors, 15% management)
    'Marketing Specialist', 'Marketing Coordinator', 'Content Specialist', 'Social Media Specialist',
    'Digital Marketing Specialist', 'Brand Specialist', 'Growth Marketing Specialist', 'Marketing Manager',
    'SEO Specialist', 'PPC Specialist', 'Email Marketing Specialist', 'Product Marketing Specialist',
    'Marketing Director',
    
    // Sales (90% individual contributors, 10% management)
    'Sales Representative', 'Account Executive', 'Business Development Representative', 'Account Manager',
    'Sales Engineer', 'Inside Sales Rep', 'Outside Sales Rep', 'Customer Success Specialist',
    'Sales Manager', 'VP of Sales',
    
    // HR (80% individual contributors, 20% management)
    'HR Specialist', 'Recruiter', 'Talent Acquisition Specialist', 'HR Business Partner',
    'Compensation Analyst', 'Benefits Administrator', 'Employee Relations Specialist',
    'HR Manager', 'HR Director', 'People Operations Manager',
    
    // Finance (85% individual contributors, 15% management)
    'Financial Analyst', 'Senior Financial Analyst', 'Budget Analyst', 'Treasury Analyst',
    'Tax Specialist', 'Investment Analyst', 'Accounting Specialist', 'Audit Specialist',
    'Finance Manager', 'Controller', 'CFO',
    
    // Operations (75% individual contributors, 25% management)
    'Operations Analyst', 'Project Coordinator', 'Process Improvement Specialist', 'Supply Chain Specialist',
    'Vendor Specialist', 'Facilities Specialist', 'Administrative Assistant', 'Executive Assistant',
    'Operations Manager', 'Project Manager', 'Program Manager', 'Operations Director',
    
    // Design (85% individual contributors, 15% management)
    'UX Designer', 'UI Designer', 'Product Designer', 'Graphic Designer',
    'Visual Designer', 'User Researcher', 'Brand Designer', 'Motion Designer',
    'Design Manager', 'Creative Director',
    
    // Support (90% individual contributors, 10% management)
    'Customer Support', 'Technical Support', 'Customer Success Specialist',
    'Implementation Specialist', 'Support Engineer', 'Support Manager',
    
    // Other (80% individual contributors, 20% management)
    'Product Manager', 'Data Scientist', 'Business Analyst', 'Security Analyst', 
    'Legal Counsel', 'Compliance Specialist', 'Partnership Specialist'
  ]
  
  const statuses = ['active', 'inactive', 'on-leave', 'contractor', 'intern']
  
  const locations = [
    'New York', 'San Francisco', 'Chicago', 'Austin', 'Seattle', 'Boston', 'Denver', 'Remote',
    'Los Angeles', 'Miami', 'Portland', 'Atlanta', 'Dallas', 'Phoenix', 'Detroit', 'Minneapolis',
    'Nashville', 'Orlando', 'Philadelphia', 'San Diego', 'Toronto', 'Vancouver', 'London', 'Berlin'
  ]
  
  const _skills = [
    // Technical Skills
    'JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'C#', 'Go', 'Rust', 'PHP', 'Ruby',
    'React', 'Vue.js', 'Angular', 'Node.js', 'Express', 'Django', 'Flask', 'Spring Boot',
    'SQL', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'DynamoDB',
    'AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitLab CI',
    'Linux', 'Windows Server', 'MacOS', 'Bash', 'PowerShell', 'Git', 'GitHub', 'GitLab',
    
    // Data & Analytics
    'Machine Learning', 'Deep Learning', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas',
    'NumPy', 'Data Analysis', 'Statistics', 'R', 'Tableau', 'Power BI', 'Looker',
    'Apache Spark', 'Hadoop', 'Data Visualization', 'A/B Testing', 'Business Intelligence',
    'Data Engineering', 'ETL', 'Data Warehousing', 'Data Modeling', 'Predictive Analytics',
    
    // Design & UX
    'Figma', 'Sketch', 'Adobe Creative Suite', 'Photoshop', 'Illustrator', 'InDesign',
    'User Research', 'Usability Testing', 'Wireframing', 'Prototyping', 'Design Systems',
    'Accessibility', 'Responsive Design', 'Mobile Design', 'Web Design', 'Brand Design',
    
    // Business & Soft Skills
    'Project Management', 'Agile', 'Scrum', 'Kanban', 'Leadership', 'Team Management',
    'Communication', 'Public Speaking', 'Presentation Skills', 'Strategic Planning',
    'Business Development', 'Sales', 'Marketing', 'Customer Service', 'Problem Solving',
    'Critical Thinking', 'Time Management', 'Negotiation', 'Mentoring', 'Coaching',
    'Conflict Resolution', 'Change Management', 'Process Improvement', 'Risk Management',
    
    // Industry Specific
    'Fintech', 'Healthcare', 'E-commerce', 'SaaS', 'B2B', 'B2C', 'Startup', 'Enterprise',
    'Compliance', 'Security', 'Privacy', 'GDPR', 'SOX', 'HIPAA', 'PCI DSS', 'SOC 2',
    'Blockchain', 'Cryptocurrency', 'AI Ethics', 'Sustainable Technology', 'Green Tech'
  ]
  
  const _performanceRatings = ['Outstanding', 'Exceeds Expectations', 'Meets Expectations', 'Below Expectations', 'Needs Improvement']
  
  const _educationLevels = ['High School', 'Associate', 'Bachelor', 'Master', 'PhD', 'Certificate', 'Bootcamp', 'Self-taught']
  
  const companies = [
    'TechCorp', 'InnovateLabs', 'DataFlow Systems', 'CloudFirst', 'NextGen Solutions', 'FutureWorks',
    'Digital Dynamics', 'SmartTech', 'Progressive Systems', 'Advanced Analytics', 'Creative Minds',
    'Strategic Partners', 'Global Solutions', 'Elite Technologies', 'Prime Consulting', 'Alpha Corp',
    'Beta Solutions', 'Gamma Systems', 'Delta Technologies', 'Epsilon Labs', 'Zeta Innovations'
  ]
  
  const universities = [
    'Stanford University', 'MIT', 'Harvard University', 'UC Berkeley', 'Carnegie Mellon', 'Georgia Tech',
    'University of Washington', 'University of Texas', 'NYU', 'Columbia University', 'Yale University',
    'Princeton University', 'Caltech', 'UCLA', 'University of Michigan', 'Cornell University',
    'University of Illinois', 'Purdue University', 'University of Wisconsin', 'Ohio State University',
    'Penn State University', 'University of Florida', 'University of North Carolina', 'Duke University',
    'Northwestern University', 'University of Chicago', 'Johns Hopkins University', 'Rice University',
    'University of California', 'University of Southern California', 'Boston University', 'Northeastern University'
  ]
  
  const certifications = [
    'AWS Certified Solutions Architect', 'Google Cloud Professional', 'Microsoft Azure', 'PMP Certification',
    'Certified Scrum Master', 'Certified Product Manager', 'Google Analytics', 'HubSpot Certification',
    'Salesforce Administrator', 'Tableau Desktop Specialist', 'CISSP', 'CISA', 'CPA', 'CFA',
    'Six Sigma Green Belt', 'ITIL Foundation', 'CompTIA Security+', 'Cisco CCNA', 'Kubernetes Administrator',
    'Certified Data Professional', 'Certified Information Security Manager', 'Project Management Professional',
    'Certified Public Accountant', 'Chartered Financial Analyst', 'Certified Internal Auditor'
  ]
  
  const projectTypes = [
    'Mobile App Development', 'Web Application', 'Data Migration', 'System Integration', 'API Development',
    'Machine Learning Model', 'Cloud Migration', 'Security Audit', 'Performance Optimization', 'UI/UX Redesign',
    'Process Automation', 'Database Optimization', 'Microservices Architecture', 'DevOps Implementation',
    'Compliance Project', 'Digital Transformation', 'Customer Portal', 'Analytics Dashboard', 'Mobile Optimization'
  ]
  
  // Generate a random employee with enhanced data
  function generateEmployee(id) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)]
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)]
    // More realistic department distribution for tech company
    const departmentWeights = [
      { dept: 'Engineering', weight: 0.50 },        // 50% - largest department
      { dept: 'Sales', weight: 0.18 },              // 18% - second largest
      { dept: 'Marketing', weight: 0.12 },          // 12% - third largest
      { dept: 'Operations', weight: 0.08 },         // 8% - operations
      { dept: 'Design', weight: 0.04 },             // 4% - design team
      { dept: 'Data Science', weight: 0.03 },       // 3% - data team
      { dept: 'Finance', weight: 0.02 },            // 2% - finance
      { dept: 'Support', weight: 0.02 },            // 2% - customer support
      { dept: 'HR', weight: 0.01 }                  // 1% - HR (small team)
      // Product Management will be assigned via position override
    ]
    
    const random = Math.random()
    let cumulativeWeight = 0
    let department = 'Engineering' // default fallback
    
    for (const { dept, weight } of departmentWeights) {
      cumulativeWeight += weight
      if (random <= cumulativeWeight) {
        department = dept
        break
      }
    }
    
    const position = positions[Math.floor(Math.random() * positions.length)]
    
    // Override department for Product Management positions
    if (position.toLowerCase().includes('product manager')) {
      department = 'Product Management'
    }
    const status = statuses[Math.floor(Math.random() * statuses.length)]
    const location = locations[Math.floor(Math.random() * locations.length)]
    // More realistic education distribution for tech company
    const educationWeights = [
      { level: 'Bachelor', weight: 0.35 },      // 35% - most common
      { level: 'Master', weight: 0.25 },        // 25% - second most common
      { level: 'Associate', weight: 0.15 },     // 15% - some community college
      { level: 'PhD', weight: 0.10 },           // 10% - research roles
      { level: 'Certificate', weight: 0.08 },   // 8% - professional certs
      { level: 'Bootcamp', weight: 0.05 },      // 5% - coding bootcamps
      { level: 'Self-taught', weight: 0.02 }    // 2% - rare but possible
    ]
    
    const educationRandom = Math.random()
    let educationCumulativeWeight = 0
    let education = 'Bachelor' // default fallback
    
    for (const { level, weight } of educationWeights) {
      educationCumulativeWeight += weight
      if (educationRandom <= educationCumulativeWeight) {
        education = level
        break
      }
    }
    // More realistic performance distribution
    const performanceWeights = [
      { rating: 'Meets Expectations', weight: 0.65 },    // 65% - largest group
      { rating: 'Exceeds Expectations', weight: 0.20 },  // 20% - second largest
      { rating: 'Outstanding', weight: 0.08 },           // 8% - top performers
      { rating: 'Below Expectations', weight: 0.05 },    // 5% - underperformers
      { rating: 'Needs Improvement', weight: 0.02 }      // 2% - lowest performers
    ]
    
    const performanceRandom = Math.random()
    let performanceCumulativeWeight = 0
    let performance = 'Meets Expectations' // default fallback
    
    for (const { rating, weight } of performanceWeights) {
      performanceCumulativeWeight += weight
      if (performanceRandom <= performanceCumulativeWeight) {
        performance = rating
        break
      }
    }
    
    // Generate realistic hire date (last 3 years with more recent bias)
    const hireDate = new Date()
    const yearsAgo = Math.random() * 3
    hireDate.setFullYear(hireDate.getFullYear() - yearsAgo)
    hireDate.setMonth(Math.floor(Math.random() * 12))
    hireDate.setDate(Math.floor(Math.random() * 28) + 1)
    
    // Ensure some employees are recent hires (2025)
    if (Math.random() < 0.20) { // 20% chance of being a 2025 hire
      hireDate.setFullYear(2025)
      hireDate.setMonth(Math.floor(Math.random() * 12)) // Random month in 2025
      hireDate.setDate(Math.floor(Math.random() * 28) + 1)
    } else if (Math.random() < 0.15) { // 15% chance of being a recent hire (last 6 months of 2024)
      const monthsAgo = Math.random() * 6 // 0-6 months ago
      hireDate.setMonth(hireDate.getMonth() - monthsAgo)
    }
    
    // Generate salary based on position and department
    const baseSalary = getBaseSalary(position, department)
    const salaryVariation = (Math.random() - 0.5) * 0.3 // ±15% variation
    const salary = Math.floor(baseSalary * (1 + salaryVariation))
    
    // Calculate years of experience first (needed for skills generation)
    const yearsOfExperience = (() => {
      // Calculate years of experience based on position level
      if (position.toLowerCase().includes('senior') || position.toLowerCase().includes('lead')) {
        return Math.floor(Math.random() * 8) + 5 // 5-12 years
      } else if (position.toLowerCase().includes('manager') || position.toLowerCase().includes('director')) {
        return Math.floor(Math.random() * 10) + 8 // 8-17 years
      } else if (position.toLowerCase().includes('principal') || position.toLowerCase().includes('cto') || position.toLowerCase().includes('cfo')) {
        return Math.floor(Math.random() * 8) + 12 // 12-19 years
      } else {
        return Math.floor(Math.random() * 6) + 1 // 1-6 years for entry level
      }
    })()

    // Generate realistic skills based on department, position, and experience
    const getDepartmentSkills = (dept) => {
      const skillMap = {
        'Engineering': ['JavaScript', 'TypeScript', 'Python', 'Java', 'React', 'Node.js', 'SQL', 'AWS', 'Docker', 'Git', 'Linux', 'Agile', 'Problem Solving'],
        'Data Science': ['Python', 'Machine Learning', 'Data Analysis', 'Statistics', 'Pandas', 'NumPy', 'SQL', 'Tableau', 'R', 'TensorFlow', 'AWS', 'Linux', 'Critical Thinking'],
        'Design': ['Figma', 'Adobe Creative Suite', 'User Research', 'Wireframing', 'Prototyping', 'Design Systems', 'Accessibility', 'Responsive Design', 'Communication', 'Creativity'],
        'Marketing': ['Digital Marketing', 'Social Media', 'Content Creation', 'Analytics', 'SEO', 'SEM', 'Email Marketing', 'Project Management', 'Communication', 'Strategic Planning'],
        'Sales': ['Sales', 'Customer Service', 'Communication', 'Negotiation', 'CRM', 'Lead Generation', 'Relationship Building', 'Presentation Skills', 'Business Development'],
        'Operations': ['Project Management', 'Process Improvement', 'Agile', 'Scrum', 'Leadership', 'Team Management', 'Risk Management', 'Change Management', 'Communication'],
        'Finance': ['Financial Analysis', 'Excel', 'SQL', 'Compliance', 'Risk Management', 'Budgeting', 'Forecasting', 'Accounting', 'Critical Thinking', 'Attention to Detail'],
        'HR': ['Human Resources', 'Recruitment', 'Employee Relations', 'Performance Management', 'Communication', 'Leadership', 'Coaching', 'Mentoring', 'Conflict Resolution'],
        'Support': ['Customer Service', 'Technical Support', 'Communication', 'Problem Solving', 'Troubleshooting', 'Documentation', 'Training', 'Patience', 'Empathy'],
        'Product Management': ['Product Strategy', 'Market Research', 'User Research', 'Agile', 'Scrum', 'Data Analysis', 'Communication', 'Leadership', 'Strategic Planning', 'Roadmapping']
      }
      return skillMap[dept] || ['Communication', 'Problem Solving', 'Teamwork', 'Adaptability']
    }

    const getPositionSkills = (pos) => {
      if (pos.toLowerCase().includes('senior') || pos.toLowerCase().includes('lead')) {
        return ['Leadership', 'Mentoring', 'Strategic Planning', 'Advanced Technical Skills']
      }
      if (pos.toLowerCase().includes('manager') || pos.toLowerCase().includes('director')) {
        return ['Leadership', 'Team Management', 'Strategic Planning', 'Budget Management', 'Stakeholder Management']
      }
      if (pos.toLowerCase().includes('principal') || pos.toLowerCase().includes('cto') || pos.toLowerCase().includes('cfo')) {
        return ['Strategic Leadership', 'Executive Communication', 'Vision Setting', 'Board Management', 'Industry Expertise']
      }
      return []
    }

    const getExperienceSkills = (years) => {
      if (years >= 10) return ['Senior Expertise', 'Mentoring', 'Architecture', 'Strategic Thinking']
      if (years >= 5) return ['Advanced Skills', 'Project Leadership', 'Cross-functional Collaboration']
      if (years >= 2) return ['Intermediate Skills', 'Independent Work', 'Problem Solving']
      return ['Entry Level', 'Learning', 'Adaptability']
    }

    // Combine department, position, and experience skills
    const deptSkills = getDepartmentSkills(department)
    const posSkills = getPositionSkills(position)
    const expSkills = getExperienceSkills(yearsOfExperience)
    
    // Add some random technical skills based on department
    const technicalSkills = ['JavaScript', 'Python', 'SQL', 'AWS', 'Git', 'Agile', 'Communication', 'Problem Solving']
    const randomTechSkills = technicalSkills.filter(() => Math.random() > 0.7).slice(0, 2)
    
    // Combine all skills and remove duplicates
    const allSkills = [...new Set([...deptSkills, ...posSkills, ...expSkills, ...randomTechSkills])]
    
    // Limit to 4-8 skills based on experience level
    const maxSkills = yearsOfExperience >= 10 ? 8 : yearsOfExperience >= 5 ? 6 : 4
    const employeeSkills = allSkills.slice(0, Math.min(maxSkills, allSkills.length))
    
    // Generate phone number
    const phone = `+1 (${Math.floor(Math.random() * 900) + 100}) ${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}`
    
    // Generate employee ID
    const employeeId = `EMP${String(id).padStart(4, '0')}`
    
    // Generate manager (some employees have managers)
    const hasManager = Math.random() > 0.3 // 70% have managers
    const manager = hasManager ? `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}` : null
    
    // Generate team size (for managers) based on position level
    const isManager = position.toLowerCase().includes('manager') || position.toLowerCase().includes('director') || position.toLowerCase().includes('lead')
    let teamSize = 0
    if (isManager) {
      if (position.toLowerCase().includes('director') || position.toLowerCase().includes('vp')) {
        teamSize = Math.floor(Math.random() * 8) + 8 // 8-15 people for directors
      } else if (position.toLowerCase().includes('senior manager')) {
        teamSize = Math.floor(Math.random() * 6) + 6 // 6-11 people for senior managers
      } else {
        teamSize = Math.floor(Math.random() * 5) + 3 // 3-7 people for regular managers
      }
    }
    
    // Generate additional realistic data
    const previousCompany = companies[Math.floor(Math.random() * companies.length)]
    const university = universities[Math.floor(Math.random() * universities.length)]
    const certification = Math.random() > 0.7 ? certifications[Math.floor(Math.random() * certifications.length)] : null
    const currentProject = projectTypes[Math.floor(Math.random() * projectTypes.length)]
    
    // Generate work anniversary (some employees have work anniversaries coming up)
    const workAnniversary = new Date(hireDate)
    workAnniversary.setFullYear(workAnniversary.getFullYear() + 1)
    const isAnniversarySoon = Math.random() > 0.8
    
    // Generate employee satisfaction score based on performance and department
    const baseSatisfaction = performance === 'Outstanding' ? 9 : 
                            performance === 'Exceeds Expectations' ? 8 :
                            performance === 'Meets Expectations' ? 7 :
                            performance === 'Below Expectations' ? 5 : 4
    const satisfactionVariation = (Math.random() - 0.5) * 1.5 // ±0.75 variation
    const satisfactionScore = Math.max(1, Math.min(10, Math.round(baseSatisfaction + satisfactionVariation)))
    
    // Generate productivity score based on performance and satisfaction
    const baseProductivity = performance === 'Outstanding' ? 9 : 
                            performance === 'Exceeds Expectations' ? 8 :
                            performance === 'Meets Expectations' ? 7 :
                            performance === 'Below Expectations' ? 5 : 4
    const productivityVariation = (Math.random() - 0.5) * 1.5 // ±0.75 variation
    const productivityScore = Math.max(1, Math.min(10, Math.round(baseProductivity + productivityVariation)))
    
    // Generate training hours based on performance and department
    const baseTrainingHours = performance === 'Outstanding' ? 35 : 
                             performance === 'Exceeds Expectations' ? 25 :
                             performance === 'Meets Expectations' ? 15 :
                             performance === 'Below Expectations' ? 30 : 40 // More training for underperformers
    const trainingVariation = Math.floor(Math.random() * 10) - 5 // ±5 hours
    const trainingHours = Math.max(0, baseTrainingHours + trainingVariation)
    
    // Generate projects completed based on performance and experience
    const baseProjects = performance === 'Outstanding' ? 7 : 
                        performance === 'Exceeds Expectations' ? 5 :
                        performance === 'Meets Expectations' ? 3 :
                        performance === 'Below Expectations' ? 1 : 0
    const projectVariation = Math.floor(Math.random() * 3) - 1 // ±1 project
    const projectsCompleted = Math.max(0, baseProjects + projectVariation)
    
    return {
      id,
      employeeId,
      name: `${firstName} ${lastName}`,
      email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@company.com`,
      phone,
      department,
      position,
      status,
      hireDate: hireDate.toISOString().split('T')[0],
      salary,
      location,
      education,
      performance,
      skills: employeeSkills,
      manager,
      teamSize,
      yearsOfExperience,
      lastReviewDate: new Date(hireDate.getTime() + Math.random() * (Date.now() - hireDate.getTime())).toISOString().split('T')[0],
      isRemote: location === 'Remote',
      timezone: getTimezone(location),
      // Additional enhanced data
      previousCompany,
      university,
      certification,
      currentProject,
      workAnniversary: workAnniversary.toISOString().split('T')[0],
      isAnniversarySoon,
      satisfactionScore,
      productivityScore,
      trainingHours,
      projectsCompleted,
      // Generate some additional metrics
      isHighPerformer: performance === 'Outstanding' || performance === 'Exceeds Expectations',
      isAtRisk: performance === 'Below Expectations' || performance === 'Needs Improvement',
      hasRecentPromotion: Math.random() > 0.9, // 10% chance
      isMentor: Math.random() > 0.8, // 20% chance
      isMentee: Math.random() > 0.7, // 30% chance
      isInternalTransfer: Math.random() > 0.85, // 15% chance
      isNewHire: yearsAgo < 0.25, // Hired in last 3 months
      isVeteran: yearsAgo > 2.5 // Hired more than 2.5 years ago
    }
  }
  
  // Helper function to get base salary based on position and department
  function getBaseSalary(position, department) {
    let baseSalary = 50000 // Default base
    
    // Position-based adjustments
    if (position.toLowerCase().includes('senior') || position.toLowerCase().includes('lead')) {
      baseSalary += 30000
    }
    if (position.toLowerCase().includes('manager') || position.toLowerCase().includes('director')) {
      baseSalary += 40000
    }
    if (position.toLowerCase().includes('principal') || position.toLowerCase().includes('cto') || position.toLowerCase().includes('cfo')) {
      baseSalary += 60000
    }
    
    // Department-based adjustments (realistic tech company salaries)
    const deptMultipliers = {
      'Engineering': 1.4,        // Highest paid - tech skills
      'Data Science': 1.3,       // Second highest - specialized skills
      'Product Management': 1.2, // Third highest - strategic role
      'Design': 1.1,             // Fourth - creative + technical
      'Finance': 1.0,            // Baseline
      'Marketing': 0.9,          // Slightly below baseline
      'Operations': 0.9,         // Slightly below baseline
      'Sales': 0.85,             // Commission-based roles
      'HR': 0.8,                 // Support function
      'Support': 0.75            // Entry-level support
    }
    
    const multiplier = deptMultipliers[department] || 1.0
    return Math.floor(baseSalary * multiplier)
  }
  
  // Helper function to get timezone based on location
  function getTimezone(location) {
    const timezones = {
      'New York': 'EST',
      'San Francisco': 'PST',
      'Chicago': 'CST',
      'Austin': 'CST',
      'Seattle': 'PST',
      'Boston': 'EST',
      'Denver': 'MST',
      'Los Angeles': 'PST',
      'Miami': 'EST',
      'Portland': 'PST',
      'Atlanta': 'EST',
      'Dallas': 'CST',
      'Phoenix': 'MST',
      'Detroit': 'EST',
      'Minneapolis': 'CST',
      'Nashville': 'CST',
      'Orlando': 'EST',
      'Philadelphia': 'EST',
      'San Diego': 'PST',
      'Toronto': 'EST',
      'Vancouver': 'PST',
      'London': 'GMT',
      'Berlin': 'CET',
      'Remote': 'Flexible'
    }
    return timezones[location] || 'EST'
  }
  
  // Generate multiple employees
  function generateEmployees(count = 150) {
    const employees = []
    const deptCounts = {}
    
    for (let i = 1; i <= count; i++) {
      const employee = generateEmployee(i)
      employees.push(employee)
      
      // Track department distribution
      deptCounts[employee.department] = (deptCounts[employee.department] || 0) + 1
    }
    
    return employees
  }
  
  // Calculate enhanced metrics from employee data
  function calculateMetrics(employees) {
    const totalEmployees = employees.length
    const activeEmployees = employees.filter(emp => emp.status === 'active').length
    const departments = [...new Set(employees.map(emp => emp.department))].length
    
    // New hires in 2025
    const newHires = employees.filter(emp => {
      const hireDate = new Date(emp.hireDate)
      return hireDate.getFullYear() === 2025
    }).length
    
    // Remote employees
    const remoteEmployees = employees.filter(emp => emp.isRemote).length
    
    // Average salary
    const totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0)
    const averageSalary = Math.floor(totalSalary / employees.length)
    
    // Performance distribution
    const performanceStats = employees.reduce((acc, emp) => {
      acc[emp.performance] = (acc[emp.performance] || 0) + 1
      return acc
    }, {})
    
    // Department distribution
    const deptDistribution = employees.reduce((acc, emp) => {
      acc[emp.department] = (acc[emp.department] || 0) + 1
      return acc
    }, {})
    
    // Top performing department
    const topDept = Object.entries(deptDistribution)
      .sort(([,a], [,b]) => b - a)[0]
    
    // Managers count (more accurate detection)
    const managers = employees.filter(emp => {
      const pos = emp.position.toLowerCase()
      return pos.includes('manager') || 
             pos.includes('director') || 
             pos.includes('vp') ||
             pos.includes('cto') ||
             pos.includes('cfo') ||
             (pos.includes('lead') && !pos.includes('developer')) // Exclude "Lead Developer"
    }).length
    
    // Contractors and interns
    const contractors = employees.filter(emp => emp.status === 'contractor').length
    const interns = employees.filter(emp => emp.status === 'intern').length
    
    // Recent reviews (last 6 months)
    const recentReviews = employees.filter(emp => {
      const reviewDate = new Date(emp.lastReviewDate)
      const sixMonthsAgo = new Date()
      sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6)
      return reviewDate > sixMonthsAgo
    }).length
    
    // Additional enhanced metrics
    const highPerformers = employees.filter(emp => emp.isHighPerformer).length
    const atRiskEmployees = employees.filter(emp => emp.isAtRisk).length
    const mentors = employees.filter(emp => emp.isMentor).length
    const mentees = employees.filter(emp => emp.isMentee).length
    const recentPromotions = employees.filter(emp => emp.hasRecentPromotion).length
    const internalTransfers = employees.filter(emp => emp.isInternalTransfer).length
    const veterans = employees.filter(emp => emp.isVeteran).length
    
    // Calculate average satisfaction and productivity
    const avgSatisfaction = Math.round(employees.reduce((sum, emp) => sum + emp.satisfactionScore, 0) / employees.length * 10) / 10
    const avgProductivity = Math.round(employees.reduce((sum, emp) => sum + emp.productivityScore, 0) / employees.length * 10) / 10
    const avgTrainingHours = Math.round(employees.reduce((sum, emp) => sum + emp.trainingHours, 0) / employees.length)
    const totalProjectsCompleted = employees.reduce((sum, emp) => sum + emp.projectsCompleted, 0)
    
    // Calculate salary statistics
    const salaries = employees.map(emp => emp.salary).sort((a, b) => a - b)
    const medianSalary = salaries[Math.floor(salaries.length / 2)]
    const minSalary = Math.min(...salaries)
    const maxSalary = Math.max(...salaries)
    
    // Calculate department performance
    const deptPerformance = Object.keys(deptDistribution).map(dept => {
      const deptEmployees = employees.filter(emp => emp.department === dept)
      const deptHighPerformers = deptEmployees.filter(emp => emp.isHighPerformer).length
      const deptAvgSatisfaction = Math.round(deptEmployees.reduce((sum, emp) => sum + emp.satisfactionScore, 0) / deptEmployees.length * 10) / 10
      return {
        department: dept,
        count: deptEmployees.length,
        highPerformers: deptHighPerformers,
        avgSatisfaction: deptAvgSatisfaction,
        performanceRate: Math.round((deptHighPerformers / deptEmployees.length) * 100)
      }
    }).sort((a, b) => b.performanceRate - a.performanceRate)
    
    // Calculate skill distribution
    const skillDistribution = employees.reduce((acc, emp) => {
      emp.skills.forEach(skill => {
        acc[skill] = (acc[skill] || 0) + 1
      })
      return acc
    }, {})
    
    const topSkills = Object.entries(skillDistribution)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 10)
      .map(([skill, count]) => ({ skill, count }))
    
    // Calculate education distribution
    const educationDistribution = employees.reduce((acc, emp) => {
      acc[emp.education] = (acc[emp.education] || 0) + 1
      return acc
    }, {})
    
    // Calculate location distribution
    const locationDistribution = employees.reduce((acc, emp) => {
      acc[emp.location] = (acc[emp.location] || 0) + 1
      return acc
    }, {})
    
    const metrics = {
      totalEmployees,
      activeEmployees,
      departments,
      newHires,
      remoteEmployees,
      averageSalary,
      medianSalary,
      minSalary,
      maxSalary,
      managers,
      contractors,
      interns,
      recentReviews,
      topDepartment: topDept ? topDept[0] : 'N/A',
      topDeptCount: topDept ? topDept[1] : 0,
      performanceStats,
      // Calculate realistic open positions based on company size
      openPositions: Math.floor(totalEmployees * 0.05) + 3, // 5% of workforce + 3
      
      // Calculate retention rate based on actual data
      retentionRate: Math.max(85, Math.min(98, 100 - (atRiskEmployees / totalEmployees * 100))),
      
      // Calculate diversity score based on actual department distribution
      diversityScore: Math.min(95, Math.max(60, 100 - (Object.keys(deptDistribution).length * 2))),
      
      // Enhanced metrics
      highPerformers,
      atRiskEmployees,
      mentors,
      mentees,
      recentPromotions,
      internalTransfers,
      veterans,
      avgSatisfaction,
      avgProductivity,
      avgTrainingHours,
      totalProjectsCompleted,
      deptPerformance,
      topSkills,
      educationDistribution,
      locationDistribution,
      
      // Additional business metrics - all data-driven
      employeeEngagementScore: Math.round(avgSatisfaction * 10), // Based on satisfaction
      turnoverRate: Math.round((atRiskEmployees / totalEmployees) * 100), // Based on at-risk employees
      promotionRate: Math.round((recentPromotions / totalEmployees) * 100),
      trainingCompletionRate: Math.min(100, Math.round((avgTrainingHours / 40) * 100)), // Based on training hours
      crossFunctionalProjects: Math.floor(totalProjectsCompleted / 10), // Based on project completion
      innovationIndex: Math.round(avgProductivity * 10), // Based on productivity
      collaborationScore: Math.round((mentors / totalEmployees) * 100 + 60), // Based on mentorship
      workLifeBalanceScore: Math.round(avgSatisfaction * 8 + 20) // Based on satisfaction
    }
    
    // console.log('Calculated enhanced metrics:', metrics)
    return metrics
  }
  
  // Export functions
  export { generateEmployees, calculateMetrics }