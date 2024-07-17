import Mock from '../mock';

const database = {
  information: {
    name: 'Thomas Brown',
    aboutContent:
      "I'm a Software Engineer specializing in building and desigining exceptional digital experiences. Currently, I'm working at Microsoft as a Support Engineer for Azure App Services, gaining experience in the Azure cloud.",
    age: 29,
    phone: '',
    nationality: 'American',
    language: 'English, Spanish',
    email: '',
    freelanceStatus: 'Available',
    socialLinks: {
      facebook: 'https://www.facebook.com/thomasbrown1125/',
      twitter: 'https://twitter.com/ThomasB36901880',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/thomas-brown-a8005413b/',
      dribbble: '',
      github: 'https://github.com/thomasbrown25?tab=repositories'
    },
    brandImage: '/images/brand-image.JPG',
    aboutImage: '/images/about-image.jpg',
    aboutImageLg: '/images/about-image.jpg',
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
        'A personal finance app that helps you budget and track finance needs. This app is currently in demo mode. This site is hosted on Azure Static Web Apps, repo in Azure Devops and GitHub.',
      imageUrl: '/images/portfolio-image-1.jpg',
      largeImageUrl: ['/images/portfolio-image-1.jpg'],
      githubUrl: 'https://github.com/thomasbrown25/financing-app',
      url: 'https://financing-app.com',
      techList: ['VS Code', 'React', 'NodeJS 18', 'Redux', 'Material UI']
    },
    {
      id: 2,
      title: 'Financing API',
      subtitle:
        'A backend API that is used to communicate to 3rd party Plaid API and to an Azure SQL database. This API application provides the data for the Financing App. This API is hosted on Azure App Services, repo in Azure Devops and GitHub.',
      imageUrl: '/images/portfolio-image-10.jpg',
      largeImageUrl: ['/images/portfolio-image-10.jpg'],
      githubUrl: 'https://github.com/thomasbrown25/financing-app',
      url: 'https://financing-app.com',
      techList: ['VS Code', 'C#', '.NET 8', 'MS Entity Framework']
    },
    {
      id: 3,
      title: 'Crown Clothing',
      subtitle:
        'A ecommerce clothing website. This is in demo mode but has the capability to complete transactions. Hosted on Azure App Services, repo is in Github.',
      imageUrl: '/images/portfolio-image-3.jpg',
      largeImageUrl: ['/images/portfolio-image-3.jpg'],
      githubUrl: 'https://github.com/thomasbrown25/ClothingShop',
      url: 'https://crown-clothing.azurewebsites.net/',
      techList: [
        'VS Code',
        'ReactJS',
        'NodeJS 18',
        'Stripe',
        'Firebase',
        'Redux',
        'SASS'
      ]
    },
    {
      id: 4,
      title: 'Grand Hotel',
      subtitle:
        'A mock hotel website that displays some interactive CSS. Hosted on Azure App Services, repo is in Github.',
      imageUrl: '/images/portfolio-image-2.jpg',
      largeImageUrl: ['/images/portfolio-image-2.jpg'],
      githubUrl: 'https://github.com/thomasbrown25/grand-hotel',
      url: 'https://grand-hotel-app.azurewebsites.net/',
      techList: ['VS Code', 'ReactJS', 'NodeJS 18', 'CSS3']
    },
    {
      id: 5,
      title: 'Nature Tours',
      subtitle:
        'A mock nature / outdoors website that displays some interactive CSS and very slick design. Hosted on Azure App Services, repo is in Github.',
      imageUrl: '/images/portfolio-image-4.jpg',
      largeImageUrl: ['/images/portfolio-image-4.jpg'],
      githubUrl: 'https://github.com/thomasbrown25/nature-tours',
      url: 'https://nature-tours.azurewebsites.net/',
      techList: ['VS Code', 'ReactJS', 'NodeJS 18', 'SASS']
    },
    {
      id: 6,
      title: 'Apple Ecommerce',
      subtitle:
        'A mock apple ecommerce website that displays some interactive CSS and very slick design. Hosted on Azure App Services, repo is in Github.',
      imageUrl: '/images/portfolio-image-5.jpg',
      largeImageUrl: ['/images/portfolio-image-5.jpg'],
      githubUrl: 'https://github.com/thomasbrown25/apple-ecommerce',
      url: 'https://apple-ecommerce.azurewebsites.net/',
      techList: ['VS Code', 'ReactJS', 'NodeJS 18', 'SASS']
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
          'Worked with Microsoft customers to fix performance issues and troubleshoot their .Net applications and Function Apps in Azure App Services. Advising customers on how to optimize performance and increase availability for their apps in the cloud. Document technical work and research to help my colleagues, improve product and improve the support experience.',
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
          'Designed and implemented an automated gate system for intermodal port companies. Developed Windows Forms Applications, REST API Services and ASP.Net web apps using a combination of C#, VB.Net, React/Redux/Hooks. Provided on-site support for customers’ deployments into UAT and Production. Integrated the software with hardware devices such as RFID readers, barcode scanners, ticket printers and OCR portals which read the numbers on the containers. Worked with big intermoal companies such as South Carolina Port Authority, TraPac Port of Los Angeles, Port of San Juan, NIT Port of Virginia and others.',
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
        position: 'Web Developer',
        company: 'Marlo Holdings LLC',
        details:
          'Designed and managed websites using the React and Next.js framework. Focused on SEO (Search Engine Optimization) and made high ranking sites on Google',
        techList: ['ReactJS', 'HTML', 'CSS', 'JavaScript', 'NextJS']
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: '2012 - 2016',
        graduation: "Bachelor's in Information Technology",
        university: 'Furman University',
        details:
          'Studied Data Structures, Design Patterns, Algorithms and history of Computer Science'
      },
      {
        id: 2,
        year: '2018',
        graduation: 'Web Developer Bootcamp',
        university: 'University of North Carolina Charlotte',
        details:
          'Studied modern full stack web development using React, MongoDB, Express, NodeJS and more.'
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
