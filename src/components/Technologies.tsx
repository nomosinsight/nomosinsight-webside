import { useState, useEffect } from 'react';
import Container from './common/Container';
import SectionTitle from './common/SectionTitle';
import TechnologyTabs from './technologies/TechnologyTabs';
import type { TechCategory } from '../types/technology';

const techCategories: TechCategory[] = [
  {
    id: 'frontend',
    label: 'Front End',
    technologies: [
      {
        name: 'Angular',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
      },
      {
        name: 'React',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
      },
      {
        name: 'Vue',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg',
      },
      {
        name: 'Next.js',
        logo: 'https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png',
      },
      {
        name: 'Nuxt.js',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Nuxt_logo.svg',
      },
    ],
  },
  {
    id: 'backend',
    label: 'Back End',
    technologies: [
      {
        name: 'Spring',
        logo: 'https://spring.io/img/spring.svg',
      },
      {
        name: 'Django',
        logo: 'https://static.djangoproject.com/img/logos/django-logo-negative.svg',
      },
      {
        name: 'FastAPI',
        logo: 'https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png',
      },
    ],
  },
  {
    id: 'mobile',
    label: 'Mobile',
    technologies: [
      {
        name: 'React Native',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
      },
      {
        name: 'Flutter',
        logo: 'https://storage.googleapis.com/cms-storage-bucket/0dbfcc7a59cd1cf16282.png',
      },
    ],
  },
  {
    id: 'cms',
    label: 'CMS',
    technologies: [
      {
        name: 'WordPress',
        logo: 'https://s.w.org/style/images/about/WordPress-logotype-standard.png',
      },
      {
        name: 'Strapi',
        logo: 'https://strapi.io/assets/strapi-logo-light.svg',
      },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    technologies: [
      {
        name: 'PostgreSQL',
        logo: 'https://www.postgresql.org/media/img/about/press/elephant.png',
      },
      {
        name: 'MongoDB',
        logo: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg',
      },
    ],
  },
  {
    id: 'devops',
    label: 'DevOps and Cloud',
    technologies: [
      {
        name: 'AWS',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
      },
      {
        name: 'Google Cloud',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg',
      },
      {
        name: 'Jenkins',
        logo: 'https://www.jenkins.io/images/logos/jenkins/jenkins.svg',
      },
    ],
  },
  {
    id: 'project',
    label: 'Project Management',
    technologies: [
      {
        name: 'Jira',
        logo: 'https://wac-cdn.atlassian.com/assets/img/favicons/atlassian/favicon.png',
      },
      {
        name: 'Trello',
        logo: 'https://www.trello.com/favicon.ico',
      },
    ],
  },
];

export default function Technologies() {
  const [activeTab, setActiveTab] = useState('frontend');

  return (
    <section id="technologies">
      <Container>
        <div className="flex flex-col items-center">
          <SectionTitle
            title="Technologies & Platforms We Work With"
            subtitle="We leverage cutting-edge technologies to build robust and scalable solutions"
          />

          <TechnologyTabs
            categories={techCategories}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />

          {/* Technology Grid */}
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 px-4 md:px-0 animate-fade">
              {techCategories
                .find((cat) => cat.id === activeTab)
                ?.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center p-4 md:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 md:w-16 md:h-16 mb-3 md:mb-4 flex items-center justify-center">
                      <img
                        src={tech.logo}
                        alt={tech.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <h3 className="text-sm md:text-base font-medium text-gray-900 text-center">
                      {tech.name}
                    </h3>
                  </div>
                ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-16">
            <a
              href="#contact"
              className="flex justify-center gap-4"
              className="inline-flex items-center px-8 py-3 text-base font-medium rounded-full text-white bg-[#4285f4] hover:bg-[#3367d6] transition-colors"
            >
              Schedule a Developer Interview
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
