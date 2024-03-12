import Mock from '../mock';

const database = {
  information: {
    name: 'Thomas Brown',
    aboutContent:
      "I'm a software engineer specializing in building and desigining exceptional digital experiences. Currently, I'm working at Microsoft as a Support Engineer for Azure App Services, gaining experience in the Azure cloud.",
    age: 29,
    phone: '',
    nationality: 'American',
    language: 'English, Spanish',
    email: '',
    freelanceStatus: 'Available',
    socialLinks: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      pinterest: '',
      behance: '',
      linkedin: '',
      dribbble: '',
      github: 'https://github.com'
    },
    brandImage: '/images/brand-image.jpg',
    aboutImage: '/images/about-image.jpg',
    aboutImageLg: '/images/about-image-lg.jpg',
    cvfile: '/files/Thomas_Brown_SoftwareEngineer.pdf'
  },
  services: [
    {
      title: 'Software Solutions',
      icon: 'code',
      details:
        'As a software engineer, I specialize in delivering pristine software solutions tailored to your needs, encompassing automated systems, intuitive management portals, and beyond. My expertise lies in crafting efficient and user-centric software that streamlines processes and enhances productivity across your operations.'
    },
    {
      title: 'Web Development',
      icon: 'code',
      details:
        "I specialize in cutting-edge web development, leveraging modern technologies like JavaScript, React, TypeScript, and Node.js to create dynamic and responsive web applications. With a keen focus on user experience and scalability, I harness these tools to build robust and innovative solutions that meet the evolving demands of today's digital landscape."
    },
    {
      title: 'Mobile Application',
      icon: 'mobile',
      details:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.'
    }
  ],
  reviews: [
    {
      id: 1,
      content:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.',
      author: {
        name: 'Burdette Turner',
        designation: 'Web Developer, Abc Company'
      }
    },
    {
      id: 2,
      content:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.',
      author: {
        name: 'Susan Yost',
        designation: 'Client'
      }
    },
    {
      id: 3,
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      author: {
        name: 'Irving Feeney',
        designation: 'Fiverr Client'
      }
    }
  ],
  skills: [
    {
      title: 'Azure',
      value: 99
    },
    {
      title: 'C# / .NET 8',
      value: 95
    },
    {
      title: 'ReactJS',
      value: 94
    },
    {
      title: 'Entity Framework',
      value: 92
    },
    {
      title: 'NodeJS',
      value: 90
    },
    {
      title: 'TypeScript',
      value: 85
    }
  ],
  projects: [
    {
      id: 1,
      title: 'Financing App',
      subtitle:
        'A personal finance app that helps you budget and track finance needs. This app is currently in demo mode.',
      imageUrl: '/images/portfolio-image-1.jpg',
      largeImageUrl: ['/images/portfolio-image-1.jpg'],
      url: 'https://financing-app.azurewebsites.net/login',
      techList: [
        'VS Code',
        'React',
        'Redux',
        'C#',
        '.NET 6',
        'MS Entity Framework',
        'Material UI'
      ]
    },
    {
      id: 2,
      title: 'Crown Clothing',
      subtitle:
        'A ecommerce clothing website. This is in demo mode but has the capability to complete transactions.',
      imageUrl: '/images/portfolio-image-3.jpg',
      largeImageUrl: ['/images/portfolio-image-3.jpg'],
      url: 'https://crown-clothing.azurewebsites.net/',
      techList: ['VS Code', 'ReactJS', 'Stripe', 'Firebase', 'Redux', 'SASS']
    },
    {
      id: 3,
      title: 'Grand Hotel',
      subtitle: 'A mock hotel website that displays some interactive CSS.',
      imageUrl: '/images/portfolio-image-2.jpg',
      largeImageUrl: ['/images/portfolio-image-2.jpg'],
      url: 'https://grand-hotel-app.azurewebsites.net/',
      techList: ['VS Code', 'ReactJS', 'CSS3']
    },
    {
      id: 4,
      title: 'Nature Tours',
      subtitle:
        'A mock nature / outdoors website that displays some interactive CSS and very slick design.',
      imageUrl: '/images/portfolio-image-4.jpg',
      largeImageUrl: ['/images/portfolio-image-4.jpg'],
      url: 'https://grand-hotel-app.azurewebsites.net/',
      techList: ['VS Code', 'ReactJS', 'SASS']
    }
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: '2020 - Present',
        position: 'Microsoft Azure Support Engineer',
        company: 'Microsoft',
        details:
          'Worked with Microsoft customers to fix performance issues on their App Services. Advising customers on how to optimize performance and increase availability for their apps in the cloud. Document technical work and research to help my colleagues, improve product and improve the support experience. Maintain a proactive approach to customer happiness, identifying customer satisfaction concerns and managing customer expectations.',
        techList: [
          'Azure App Services',
          'Azure Cloud Troubleshooting',
          'C#',
          '.NET Core',
          'IIS 7'
        ]
      },
      {
        id: 2,
        year: '2018 - 2020',
        position: 'Software Engineer',
        company: 'NASCENT Technology',
        details:
          'Designed, developed and delivered software to Intermodal port companies while working in an Agile environment. I helped scale the Port of Virginia project to include the In Yard gating processes which increased revenue for their company by a large margin. Designed and delivered the Ingate/Outgate system for the Port of San Juan Puerto Rico. Helped design and deliver the Ingate/Outgate system for the South Carolina Ports Authority. Supported customers on maintaining their software and reacted to problems relating to mission critical processes and mitigating them. Worked with the customers to flesh out requirements, communicated the development progress and supported live testing. On-site support for customers deployments into UAT and Production environments. Created windows applications, API services, web applications and integrated them with hardware devices.',
        techList: [
          'ReactJS',
          'React Hooks',
          'TypeScript',
          'Asp.Net',
          'Vb.Net',
          'C#',
          'MS Sql'
        ]
      },
      {
        id: 3,
        year: '2018 - 2019',
        position: 'React Web Developer (Contract)',
        company: 'Marlo Holdings LLC',
        details:
          'Designed and managed websites using the React and Next.js framework. Focused on SEO (Search Engine Optimization) and made high ranking sites on Google',
        techList: ['ReactJS', 'HTML', 'CSS', 'JavaScript', 'NextJS']
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: '2018',
        graduation: 'Web Developer Bootcamp',
        university: 'University of North Carolina Charlotte',
        details:
          'Studied modern full stack web development using React, MongoDB, Express, NodeJS and more.'
      },
      {
        id: 2,
        year: '2012 - 2016',
        graduation: "Bachelor's in Information Technology",
        university: 'Furman University',
        details:
          'Studied Data Structures, Design Patterns, Algorithms and history of Computer Science'
      }
    ],
    certificationExperience: [
      {
        id: 1,
        graduation: 'AI-900 Azure AI Fundamentals',
        university: 'Microsoft Certified'
      },
      {
        id: 2,
        graduation: 'AZ-900 Azure Fundamentals',
        university: 'Microsoft Certified'
      },
      {
        id: 3,
        graduation: 'Azure App Service Performance & Availability',
        university: 'Microsoft Certified'
      }
    ]
  },
  blogs: [
    // {
    //   id: 1,
    //   title: 'Markdown & Html supported blog.',
    //   featuredImage: '/images/blog-image-1.jpg',
    //   filesource: '../../blog/markdown-html-supported-blog.md',
    //   createDay: "20",
    //   createMonth: 'February',
    //   createYear: "2020"
    // }
  ],
  contactInfo: {
    phoneNumbers: ['+1 (864) 324-7107'],
    emailAddress: ['thobrown@microsoft.com', 'thomas.brown1125@gmail.com']
  }
};

Mock.onGet('/api/information').reply((config) => {
  const response = database.information;
  return [200, response];
});

Mock.onGet('/api/services').reply((config) => {
  const response = database.services;
  return [200, response];
});

Mock.onGet('/api/reviews').reply((config) => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet('/api/skills').reply((config) => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet('/api/projects').reply((config) => {
  const response = database.projects;
  return [200, response];
});

Mock.onGet('/api/experience').reply((config) => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet('/api/blog').reply((config) => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet('/api/contactinfo').reply((config) => {
  const response = database.contactInfo;
  return [200, response];
});
