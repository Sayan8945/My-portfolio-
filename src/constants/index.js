export const navLinks = [
  { id: 1, name: 'Home',    href: '#home'    },
  { id: 2, name: 'About',   href: '#about'   },
  { id: 3, name: 'Work',    href: '#work'    },
  { id: 4, name: 'Contact', href: '#contact' },
];

// ─── Skills ──────────────────────────────────────────────────────────────────

export const mySkills = [
  {
    id: 1,
    title: 'Frontend',
    accent: '#22D3EE',
    skills: [
      { name: 'React.js',      icon: '/assets/logos/react.svg'       },
      { name: 'Next.js',       icon: '/assets/logos/nextjs.svg'      },
      { name: 'TypeScript',    icon: '/assets/logos/typescript.png'  },
      { name: 'JavaScript',    icon: '/assets/logos/javascript.png'  },
      { name: 'Tailwind CSS',  icon: '/assets/logos/tailwindcss.png' },
      { name: 'Framer Motion', icon: '/assets/logos/framer.png'      },
      { name: 'Bootstrap',     icon: '/assets/logos/bootstrap.png'   },
      { name: 'HTML5',         icon: '/assets/logos/html5.svg'       },
      { name: 'CSS3',          icon: '/assets/logos/css3.svg'        },
    ],
  },
  {
    id: 2,
    title: 'Backend & Database',
    accent: '#A78BFA',
    skills: [
      { name: 'Node.js',    icon: '/assets/logos/nodejs.svg'    },
      { name: 'Express.js', icon: '/assets/logos/express.png'   },
      { name: 'Firebase',   icon: '/assets/logos/firebase.svg'  },
      { name: 'MongoDB',    icon: '/assets/logos/mongodb.png'   },
      { name: 'MySQL / SQL',icon: '/assets/logos/mysql.svg'     },
      { name: 'REST APIs'                                        },
      { name: 'JWT Auth'                                         },
      { name: 'MVC Architecture'                                 },
    ],
  },
  {
    id: 3,
    title: 'Languages & CS Core',
    accent: '#34D399',
    skills: [
      { name: 'Java',       icon: '/assets/logos/java.svg'       },
      { name: 'C',          icon: '/assets/logos/c.svg'          },
      { name: 'JavaScript', icon: '/assets/logos/javascript.png' },
      { name: 'TypeScript', icon: '/assets/logos/typescript.png' },
      { name: 'Arduino',    icon: '/assets/logos/arduino.svg'    },
      { name: 'DSA',        icon: '/assets/logos/leetcode.svg'   },
      { name: 'OOP'                                               },
      { name: 'Problem Solving'                                   },
    ],
  },
  {
    id: 4,
    title: 'DevOps & Tools',
    accent: '#EC4899',
    skills: [
      { name: 'Git',     icon: '/assets/logos/git.svg'     },
      { name: 'GitHub',  icon: '/assets/logos/github.svg'  },
      { name: 'Docker',  icon: '/assets/logos/docker.svg'  },
      { name: 'Vercel',  icon: '/assets/logos/vercel.svg'  },
      { name: 'Netlify', icon: '/assets/logos/netlify.svg' },
      { name: 'Render',  icon: '/assets/logos/render.svg'  },
      { name: 'AWS',     icon: '/assets/logos/aws.png'     },
      { name: 'Figma',   icon: '/assets/logos/figma.svg'   },
      { name: 'Notion',  icon: '/assets/logos/notion.svg'  },
    ],
  },
];

// ─── Projects ────────────────────────────────────────────────────────────────

export const myProjects = [
  {
    title: 'MediBloom — Mental Health Platform',
    desc: 'Mental health platform featuring AI-powered chatbots for emotional support, mood tracking, and real-time self-assessment tools, committed to privacy-first mental wellness.',
    subdesc:
      'Built with React, Node.js, Express, and MongoDB, integrating advanced AI models to deliver responsive user experiences and scalable solutions.',
    href: 'https://mental-health-site-mocha.vercel.app/',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/logos/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      { id: 1, name: 'React.js',    path: '/assets/logos/react.svg'   },
      { id: 2, name: 'Node.js',     path: '/assets/logos/nodejs.svg'  },
      { id: 3, name: 'MongoDB',     path: '/assets/logos/mongodb.png' },
      { id: 4, name: 'Python',      path: '/assets/logos/python.svg'  },
      { id: 5, name: 'AI / OpenAI', path: '/assets/logos/openai.svg'  },
    ],
  },
  
  {
    title: 'Package Tracker & Mover Site',
    desc: 'A full-stack logistics and package tracking platform with real-time shipment status tracking, mover service booking, admin dashboards, and JWT authentication.',
    subdesc:
      'Built with Next.js (App Router) on the frontend and Node.js/Express backend. MongoDB for persistence. Deployed on Vercel with REST API backend on Render.',
    href: 'https://trackers-and-packers-frontend-gamma.vercel.app/',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/logos/logo3.jpg',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background: 'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(208,213,221,0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      { id: 1, name: 'Next.js',     path: '/assets/logos/nextjs.svg'      },
      { id: 2, name: 'Node.js',     path: '/assets/logos/nodejs.svg'      },
      { id: 3, name: 'MongoDB',     path: '/assets/logos/mongodb.png'     },
      { id: 4, name: 'TypeScript',  path: '/assets/logos/typescript.png'  },
      { id: 5, name: 'Vercel',      path: '/assets/logos/vercel.svg'      },
    ],
  },
  {
    title: 'Stayan — Tourism & Accommodation Platform',
    desc: 'A full-stack tourism platform inspired by Airbnb for discovering and booking unique accommodations and experiences worldwide. Connect with local hosts and unlock unforgettable travel adventures.',
    subdesc:
      'Built with the MERN stack (MongoDB, Express, React, Node.js) featuring real-time search, host dashboards, and full booking management.',
    href: 'https://stayan-private-limited.onrender.com/',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/logos/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      { id: 1, name: 'React.js',    path: '/assets/logos/react.svg'       },
      { id: 2, name: 'Node.js',     path: '/assets/logos/nodejs.svg'      },
      { id: 3, name: 'Express.js',  path: '/assets/logos/express.png'     },
      { id: 4, name: 'MongoDB',     path: '/assets/logos/mongodb.png'     },
      { id: 5, name: 'Tailwind CSS',path: '/assets/logos/tailwindcss.png' },
    ],
  },
  
  {
    title: 'Package Tracker Management System',
    desc: 'A role-based student marksheet management system with JWT authentication, delivering intuitive dashboards for students, teachers, and admins to manage and view marks.',
    subdesc:
      'Built with React, Node.js, Express, and MongoDB — clean MVC architecture with secure authentication and separate role views.',
    href: 'https://student-management-frontend-taupe.vercel.app/',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/logos/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      { id: 1, name: 'React.js',    path: '/assets/logos/react.svg'       },
      { id: 2, name: 'Node.js',     path: '/assets/logos/nodejs.svg'      },
      { id: 3, name: 'Express.js',  path: '/assets/logos/express.png'     },
      { id: 4, name: 'MongoDB',     path: '/assets/logos/mongodb.png'     },
      { id: 5, name: 'JWT Auth',    path: '/assets/logos/jwt.svg'         },
    ],
  },
];

// ─── Responsive sizing for Hero ──────────────────────────────────────────────

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale:      isSmall ? 0.5  : isMobile ? 0.62 : 0.78,
    deskPosition:   isMobile ? [0, -3, 0] : [0, -3.3, 0],
    cubePosition:   isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition:   isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

// ─── Work Experience ─────────────────────────────────────────────────────────

export const workExperiences = [
  {
    id: 1,
    name: 'Elevate Labs',
    pos: 'MERN Stack Intern',
    duration: '2024',
    title:
      'MERN Internship demonstrating exceptional skills and dedication in contributing to real-world projects and tasks — building full-stack features with MongoDB, Express, React, and Node.js.',
    icon: '/assets/logos/react.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Prodigy Infotech',
    pos: 'Frontend & Backend Intern',
    duration: '1 Month, 2024',
    title:
      '1-month remote internship focused on front-end and back-end development, delivering production features and strengthening full-stack skills in a professional environment.',
    icon: '/assets/logos/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: '3D Printing Lab',
    pos: 'FDM 3D Printing Intern',
    duration: '2024',
    title:
      'Hands-on internship focused on FDM 3D printing operations: CAD model preparation, slicing with Cura/PrusaSlicer, printer calibration, and post-processing of printed parts.',
    icon: '/assets/logos/notion.svg',
    animation: 'salute',
  },
];
