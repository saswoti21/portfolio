// Mock data for portfolio website
export const mockData = {
  // Personal Information
  personal: {
    name: "Saswoti Panda",
    title: "Data Analyst & Machine Learning Enthusiast",
    email: "saswotipanda9@gmail.com",
    phone: "+91-7205735662",
    location: "Cuttack, Odisha",
    linkedin: "https://www.linkedin.com/in/saswoti-panda",
    resumeUrl: "https://customer-assets.emergentagent.com/job_4b2a9b6b-69cd-4619-8357-fd872d7de9df/artifacts/vmmanboc_Saswoti_Resume.pdf"
  },

  // About Section
  about: {
    description: "I am passionate about harnessing data to drive insightful decision-making. With a strong academic foundation and hands-on experience in data analysis, I am eager to transition into the professional world as a data analyst. My coursework has equipped me with essential skills in programming languages such as Python, along with knowledge in data visualization tools like Tableau and Power BI. I thrive in collaborative environments and am committed to continuous learning, always seeking to contribute effectively to team projects and innovate through data-driven solutions.",
    education: "Bachelor of Technology in Computer Science from DRIEMS University, Tangi, Cuttack",
    careerObjective: "Aspiring data analyst seeking to enroll in Google Data Analytics Apprenticeship Program to gain practical experience with real-world datasets and support data-driven decision-making."
  },

  // Experience
  experience: [
    {
      id: 1,
      title: "Machine Learning Intern",
      company: "Codveda Technologies",
      duration: "August 2025",
      description: "Worked on ML-based Customer Churn prediction project using Python and Random Forest algorithms. Involved in data cleaning, feature selection, model training, and evaluation to build an accurate pricing model.",
      skills: ["Python", "Machine Learning", "Random Forest", "Data Cleaning", "Model Training"]
    },
    {
      id: 2,
      title: "AI & Machine Learning Intern",
      company: "Edunet Foundation (AICET Collaboration)",
      duration: "July 18, 2025 – August 30, 2025",
      description: "Participated in comprehensive AI and ML training program, gaining hands-on experience with various machine learning algorithms and techniques.",
      skills: ["Artificial Intelligence", "Machine Learning", "Data Science", "Python"]
    },
    {
      id: 3,
      title: "AI & Data Analytics Intern",
      company: "AICTE, Shell India Private Limited & Edunet Foundation",
      duration: "July 15, 2025 – August 16, 2025",
      description: "Collaborated on data analytics projects with industry mentorship, focusing on real-world application of AI and data analytics techniques.",
      skills: ["Data Analytics", "AI Applications", "Industry Projects", "Collaboration"]
    }
  ],

  // Projects
  projects: [
    {
      id: 1,
      title: "Employee Salary Prediction (KNN Model)",
      description: "Built a machine learning model using K-Nearest Neighbors to predict employee salaries. Cleaned and preprocessed dataset, handled missing values, and optimized K value to achieve 87% accuracy.",
      features: [
        "Data cleaning and preprocessing",
        "Missing value handling",
        "K-value optimization",
        "Salary distribution visualization",
        "87% prediction accuracy"
      ],
      technologies: ["Python", "KNN Algorithm", "Scikit-learn", "Pandas", "Data Visualization"],
      metrics: {
        accuracy: "87%",
        dataset: "Employee Records",
        algorithm: "K-Nearest Neighbors"
      },
      status: "Completed",
      category: "Machine Learning"
    },
    {
      id: 2,
      title: "E-commerce Sales Dashboard",
      description: "Designed a comprehensive Google Data Studio dashboard for online retail dataset analysis. Automated reports to display sales by region, product, and customer segments.",
      features: [
        "Interactive sales dashboard",
        "Regional sales analysis", 
        "Product performance tracking",
        "Customer segmentation",
        "Automated reporting system"
      ],
      technologies: ["Google Data Studio", "Data Visualization", "Business Intelligence", "Dashboard Design"],
      metrics: {
        revenueImpact: "35%",
        reportType: "Automated",
        dataSource: "Online Retail Dataset"
      },
      status: "Completed",
      category: "Data Visualization"
    }
  ],

  // Skills organized by category
  skills: {
    programming: [
      { name: "Python", level: 85, category: "Programming" },
      { name: "SQL", level: 80, category: "Programming" }
    ],
    dataVisualization: [
      { name: "Power BI", level: 75, category: "Visualization" },
      { name: "Tableau", level: 70, category: "Visualization" },
      { name: "Google Data Studio", level: 80, category: "Visualization" }
    ],
    analyticsTools: [
      { name: "Excel", level: 90, category: "Analytics" },
      { name: "Google Sheets", level: 85, category: "Analytics" },
      { name: "Pandas", level: 80, category: "Analytics" },
      { name: "NumPy", level: 75, category: "Analytics" }
    ],
    platforms: [
      { name: "Google Workspace", level: 85, category: "Platform" },
      { name: "Machine Learning", level: 70, category: "Platform" },
      { name: "Statistical Analysis", level: 75, category: "Platform" }
    ]
  },

  // Certifications
  certifications: [
    {
      id: 1,
      name: "AI, Machine learning, Computer Vision, Deep learning, NLP & Chat GPT with Python",
      issuer: "IIT Madras",
      year: "2025",
      category: "AI/ML"
    },
    {
      id: 2,
      name: "Introduction to Microsoft Excel",
      issuer: "Simplilearn",
      year: "2025",
      category: "Data Analytics"
    },
    {
      id: 3,
      name: "Data Analytics Job Simulation",
      issuer: "Deloitte Australia",
      year: "2025",
      category: "Professional Simulation"
    },
    {
      id: 4,
      name: "GenAI Powered Data Analytics Job Simulation",
      issuer: "Tata",
      year: "2025",
      category: "AI/Analytics"
    }
  ],

  // Contact form fields (for frontend functionality)
  contactForm: {
    fields: [
      { name: "name", label: "Full Name", type: "text", required: true },
      { name: "email", label: "Email Address", type: "email", required: true },
      { name: "subject", label: "Subject", type: "text", required: true },
      { name: "message", label: "Message", type: "textarea", required: true }
    ]
  },

  // Social media links
  socialMedia: {
    linkedin: "https://www.linkedin.com/in/saswoti-panda",
    email: "mailto:saswotipanda9@gmail.com",
    phone: "tel:+917205735662"
  },

  // Navigation items
  navigation: [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ]
};