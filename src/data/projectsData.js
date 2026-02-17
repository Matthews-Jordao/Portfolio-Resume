export const projectsData = [
  {
    id: 1,
    slug: 'atendi-ai',
    title: 'Atendi AI',
    description: 'Advanced AI voice receptionist system that intelligently handles incoming calls, manages messages, and automates appointment booking with natural language processing.',
    shortDescription: 'AI voice receptionist for calls & bookings',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&h=300&fit=crop&auto=format',
    tags: ['JavaScript', 'Node.js', 'React', 'CSS3'],
    featured: true,
    challenge: 'Businesses struggle with managing high volumes of calls, messages, and appointment scheduling, often leading to missed opportunities and poor customer experience during off-hours.',
    solution: 'Developed an intelligent AI voice receptionist using advanced natural language processing and speech recognition. The system seamlessly integrates with existing business workflows to handle customer interactions 24/7.',
    results: [
      'Reduced missed calls by 95%',
      'Automated 80% of appointment bookings',
      'Improved customer response time to under 30 seconds',
      'Increased appointment conversion rate by 40%'
    ],
    technologies: {
      frontend: ['React', 'JavaScript', 'CSS3', 'Vite'],
      backend: ['Node.js', 'Express.js', 'WebRTC', 'Speech API'],
      tools: ['Git', 'Twilio', 'Google Cloud']
    },
    liveLink: 'https://atendi-ai.com',
    githubLink: 'https://github.com/matthewsj/atendi-ai',
    timeline: 'September 2024 - Present',
    features: [
      'Natural language call handling',
      'Smart message management',
      'Automated appointment scheduling',
      'Multi-language support',
      'CRM integration',
      'Real-time analytics dashboard',
      '24/7 availability'
    ]
  },
  {
    id: 2,
    slug: 'task-management-app',
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates, team workspaces, and advanced filtering.',
    shortDescription: 'Team productivity and collaboration tool',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop&auto=format',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    featured: true,
    challenge: 'Create a real-time collaboration tool where multiple team members can work together seamlessly with instant updates and conflict resolution.',
    solution: 'Used Firebase for real-time database and authentication, built a responsive React interface with Tailwind CSS, and implemented optimistic UI updates for smooth user experience.',
    results: [
      '50+ companies using the platform',
      'Real-time sync across 5+ devices',
      'User satisfaction: 4.8/5 stars',
      'Reduced project management time by 30%'
    ],
    technologies: {
      frontend: ['React', 'Tailwind CSS', 'React Query'],
      backend: ['Firebase', 'Firestore'],
      tools: ['Vercel', 'GitHub']
    },
    liveLink: 'https://example.com/tasks',
    githubLink: 'https://github.com/example/task-app',
    timeline: 'June 2024 - August 2024',
    features: [
      'Real-time task updates',
      'Team workspaces',
      'Advanced filtering and sorting',
      'Comments and attachments',
      'Due date reminders',
      'Dark/Light theme',
      'Mobile responsive'
    ]
  },
  {
    id: 3,
    slug: 'weather-dashboard',
    title: 'Weather Dashboard',
    description: 'Interactive weather dashboard with location-based forecasts, detailed analytics, and custom alerts.',
    shortDescription: 'Real-time weather information and forecasts',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop&auto=format',
    tags: ['React', 'API Integration', 'Chart.js'],
    featured: true,
    challenge: 'Deliver accurate, up-to-date weather information with beautiful visualizations and useful forecast data without overwhelming users with information.',
    solution: 'Integrated OpenWeather API for real-time data, used Chart.js for visualizations, and implemented smart caching to reduce API calls while maintaining accuracy.',
    results: [
      '100,000+ monthly active users',
      'Average session duration: 8 minutes',
      'Weather accuracy: 95%',
      'Mobile app downloads: 50,000+'
    ],
    technologies: {
      frontend: ['React', 'Chart.js', 'Mapbox'],
      api: ['OpenWeather API', 'Geolocation API'],
      tools: ['Vite', 'Vercel']
    },
    liveLink: 'https://example.com/weather',
    githubLink: 'https://github.com/example/weather-dashboard',
    timeline: 'April 2024 - June 2024',
    features: [
      'Current weather conditions',
      '7-day forecast',
      'Hourly breakdown',
      'Weather alerts',
      'Multiple location support',
      'Historical data',
      'Weather maps'
    ]
  },
  {
    id: 4,
    slug: 'social-media-analytics',
    title: 'Social Media Analytics',
    description: 'Analytics dashboard for social media performance tracking with real-time data visualization.',
    shortDescription: 'Track social media metrics and insights',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&auto=format',
    tags: ['React', 'Express.js', 'PostgreSQL', 'D3.js'],
    featured: false,
    challenge: 'Aggregate data from multiple social media platforms and present complex analytics in an intuitive, actionable dashboard.',
    solution: 'Built a backend service that connects to multiple social media APIs, stores data in PostgreSQL, and visualizes it with D3.js for deep insights.',
    results: [
      '200+ businesses tracked',
      'Data processing: 1M+ data points/day',
      'Dashboard response time: <500ms',
      'ROI improvement: 25% average'
    ],
    technologies: {
      frontend: ['React', 'D3.js', 'Recharts'],
      backend: ['Express.js', 'PostgreSQL', 'Node.js'],
      api: ['Twitter API', 'Instagram API', 'Facebook API']
    },
    liveLink: 'https://example.com/analytics',
    githubLink: 'https://github.com/example/social-analytics',
    timeline: 'February 2024 - April 2024',
    features: [
      'Multi-platform integration',
      'Real-time analytics',
      'Custom dashboards',
      'Report generation',
      'Competitor analysis',
      'Trend detection'
    ]
  },
  {
    id: 5,
    slug: 'content-management-system',
    title: 'Content Management System',
    description: 'Headless CMS with custom content modeling, version control, and multi-user collaboration features.',
    shortDescription: 'Flexible content management platform',
    image: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?w=500&h=300&fit=crop&auto=format',
    tags: ['Node.js', 'GraphQL', 'MongoDB'],
    featured: false,
    challenge: 'Build a flexible CMS that allows users to define custom content models, manage versions, and collaborate without being restricted to predefined schemas.',
    solution: 'Created a GraphQL API with dynamic schema generation, implemented MongoDB for flexible storage, and added version control with conflict resolution.',
    results: [
      '30+ content types created',
      '5 million+ content items managed',
      'API queries: 1M+/month',
      'Team collaboration: 10+ simultaneous users'
    ],
    technologies: {
      backend: ['Node.js', 'GraphQL', 'MongoDB', 'Express.js'],
      tools: ['Git', 'Docker', 'AWS Lambda']
    },
    liveLink: 'https://example.com/cms',
    githubLink: 'https://github.com/example/cms',
    timeline: 'December 2023 - February 2024',
    features: [
      'Custom content modeling',
      'Version control',
      'Revision history',
      'User roles and permissions',
      'GraphQL API',
      'Content preview',
      'Scheduled publishing'
    ]
  },
  {
    id: 6,
    slug: 'portfolio-generator',
    title: 'Portfolio Generator',
    description: 'Automated portfolio generator that creates stunning developer portfolios from GitHub profiles.',
    shortDescription: 'Generate portfolios from GitHub data',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop&auto=format',
    tags: ['React', 'GitHub API', 'Vite'],
    featured: false,
    challenge: 'Automate portfolio creation by analyzing GitHub profiles, extracting project data, and generating beautiful, professional portfolios.',
    solution: 'Integrated GitHub API for data extraction, created template system with multiple designs, and automated the portfolio generation and deployment process.',
    results: [
      '5,000+ portfolios generated',
      'Generation time: <30 seconds',
      'Template variety: 8 designs',
      'User satisfaction: 4.7/5 stars'
    ],
    technologies: {
      frontend: ['React', 'Vite', 'Tailwind CSS'],
      api: ['GitHub API', 'Vercel API'],
      tools: ['Vercel', 'GitHub Pages']
    },
    liveLink: 'https://example.com/portfolio-gen',
    githubLink: 'https://github.com/example/portfolio-gen',
    timeline: 'October 2023 - December 2023',
    features: [
      'GitHub profile scanning',
      'Automatic project detection',
      'Multiple templates',
      'Customization options',
      'One-click deployment',
      'SEO optimization',
      'Analytics tracking'
    ]
  }
]
