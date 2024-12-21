import { BlogPost, BlogFilters } from '../types/blog';

// Simulated blog data - In a real app, this would come from an API
const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Implementing RAG-based LLM Solutions for Enterprise',
    slug: 'implementing-rag-llm-solutions',
    excerpt: 'Discover how Nomos Insights implements Retrieval-Augmented Generation (RAG) with Large Language Models to enhance enterprise applications and improve decision-making processes.',
    content: `# Implementing RAG-based LLM Solutions for Enterprise

Large Language Models (LLMs) have revolutionized how businesses handle information and automation. At Nomos Insights, we've developed a sophisticated approach to implementing RAG-based solutions that combine the power of LLMs with enterprise-specific knowledge bases.

## Understanding RAG Architecture

RAG (Retrieval-Augmented Generation) is a hybrid architecture that combines:
- Information retrieval from existing knowledge bases
- Dynamic content generation using LLMs
- Context-aware response synthesis

## Benefits for Enterprise

Our implementation provides several key advantages:
1. Improved accuracy through domain-specific knowledge
2. Reduced hallucination in AI responses
3. Better compliance with enterprise policies
4. Enhanced security and data privacy

## Real-world Applications

We've successfully deployed RAG solutions across various use cases:
- Customer support automation
- Internal knowledge management
- Technical documentation
- Policy compliance checking

Contact us to learn how we can implement RAG-based solutions for your enterprise.`,
    author: {
      id: '1',
      name: 'Raj Patel',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      role: 'AI Solutions Architect'
    },
    publishedAt: '2024-03-15T10:00:00Z',
    readingTime: '8 min read',
    category: {
      id: '1',
      name: 'Artificial Intelligence',
      slug: 'ai'
    },
    tags: ['AI', 'LLM', 'Enterprise', 'RAG'],
    coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=630&fit=crop'
  },
  {
    id: '2',
    title: 'Cloud Migration Success Story: Healthcare Provider',
    slug: 'healthcare-cloud-migration',
    excerpt: 'Learn how Nomos Insights helped a major healthcare provider modernize their infrastructure through a seamless cloud migration to AWS.',
    content: `# Cloud Migration Success Story: Healthcare Provider

## The Challenge

Our client, a leading healthcare provider in Gujarat, needed to modernize their infrastructure while ensuring HIPAA compliance and zero downtime. They were running legacy systems that were becoming increasingly difficult to maintain and scale.

## Our Solution

We developed a comprehensive cloud migration strategy that included:

### Phase 1: Assessment and Planning
- Infrastructure audit
- Compliance requirements mapping
- Risk assessment
- Migration roadmap development

### Phase 2: Implementation
- Gradual migration using the strangler pattern
- Custom security implementations
- Automated deployment pipelines
- Real-time monitoring setup

### Phase 3: Optimization
- Performance tuning
- Cost optimization
- Staff training
- Documentation

## Results

The migration resulted in:
- 40% reduction in operational costs
- 99.99% uptime
- Improved security posture
- Better scalability

Contact us to learn how we can help with your cloud migration journey.`,
    author: {
      id: '2',
      name: 'Priya Shah',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      role: 'Cloud Solutions Architect'
    },
    publishedAt: '2024-03-10T10:00:00Z',
    readingTime: '6 min read',
    category: {
      id: '3',
      name: 'Cloud Computing',
      slug: 'cloud'
    },
    tags: ['AWS', 'Healthcare', 'Cloud Migration', 'DevOps'],
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=630&fit=crop'
  },
  {
    id: '3',
    title: 'Building Scalable E-commerce with React and FastAPI',
    slug: 'scalable-ecommerce-react-fastapi',
    excerpt: 'Explore our modern e-commerce architecture using React for the frontend and FastAPI for a high-performance backend.',
    content: `# Building Scalable E-commerce with React and FastAPI

## Modern E-commerce Architecture

At Nomos Insights, we've developed a powerful e-commerce architecture that combines React's frontend capabilities with FastAPI's high-performance backend. Here's how we build scalable solutions:

### Frontend Architecture
- React with TypeScript
- Redux Toolkit for state management
- Tailwind CSS for styling
- PWA support
- Optimized performance

### Backend Implementation
- FastAPI for high-performance APIs
- PostgreSQL for reliable data storage
- Redis for caching
- Elasticsearch for search
- RabbitMQ for order processing

## Performance Optimizations

Our implementation focuses on:
1. Code splitting
2. Lazy loading
3. Image optimization
4. API response caching
5. Database query optimization

## Results
- 300ms average page load time
- 99.9% uptime
- 100K+ concurrent users support

Contact us to discuss your e-commerce project.`,
    author: {
      id: '3',
      name: 'Amit Patel',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      role: 'Senior Full Stack Developer'
    },
    publishedAt: '2024-03-05T10:00:00Z',
    readingTime: '7 min read',
    category: {
      id: '2',
      name: 'Web Development',
      slug: 'web-dev'
    },
    tags: ['React', 'FastAPI', 'E-commerce', 'Performance'],
    coverImage: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200&h=630&fit=crop'
  }
];

export const getBlogPosts = async (filters?: BlogFilters): Promise<BlogPost[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  let filteredPosts = [...BLOG_POSTS];

  if (filters) {
    if (filters.category) {
      filteredPosts = filteredPosts.filter(post => post.category.slug === filters.category);
    }
    if (filters.tag) {
      filteredPosts = filteredPosts.filter(post => post.tags.includes(filters.tag!));
    }
    if (filters.author) {
      filteredPosts = filteredPosts.filter(post => post.author.id === filters.author);
    }
  }

  return filteredPosts;
};

export const getBlogPost = async (slug: string): Promise<BlogPost | null> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return BLOG_POSTS.find(post => post.slug === slug) || null;
};