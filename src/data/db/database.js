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
      techList: ['VS Code', 'React', 'Stripe', 'Firebase', 'Redux', 'SASS']
    },
    {
      id: 3,
      title: 'Grand Hotel',
      subtitle: 'A mock hotel website that displays some interactive CSS.',
      imageUrl: '/images/portfolio-image-2.jpg',
      largeImageUrl: ['/images/portfolio-image-2.jpg'],
      url: 'https://grand-hotel-app.azurewebsites.net/',
      techList: ['VS Code', 'React']
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
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.'
      },
      {
        id: 2,
        year: '2018 - 2020',
        position: 'Software Engineer',
        company: 'NASCENT Technology',
        details:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.'
      },
      {
        id: 3,
        year: '2018 - 2019',
        position: 'React Web Developer (Contract)',
        company: 'Marlo Holdings LLC',
        details:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.'
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: '2018',
        graduation: 'Web Developer Bootcamp',
        university: 'University of North Carolina Charlotte',
        details:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.'
      },
      {
        id: 2,
        year: '2012 - 2016',
        graduation: "Bachelor's in Information Technology",
        university: 'Furman University',
        details:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.'
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
