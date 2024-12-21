import { Building2, ShoppingBag, HeartPulse, Landmark, Home, Truck, Factory, UtensilsCrossed } from 'lucide-react';
import type { Industry } from '../types/industry';

export const industries: Industry[] = [
  {
    id: 'retail',
    name: 'Retail & eCommerce',
    icon: ShoppingBag,
    description: 'End-to-end solutions for online stores and retail management systems',
    services: ['Inventory Management', 'Payment Integration', 'Order Processing']
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: HeartPulse,
    description: 'HIPAA-compliant solutions for healthcare providers and institutions',
    services: ['Patient Records', 'Telemedicine', 'Medical Billing']
  },
  {
    id: 'finance',
    name: 'Finance',
    icon: Landmark,
    description: 'Secure financial software solutions for banks and institutions',
    services: ['Payment Processing', 'Risk Management', 'Fraud Detection']
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    icon: Home,
    description: 'Property management and real estate transaction platforms',
    services: ['Property Listings', 'Tenant Portal', 'Lease Management']
  },
  {
    id: 'logistics',
    name: 'Transport & Logistics',
    icon: Truck,
    description: 'Solutions for fleet management and supply chain optimization',
    services: ['Route Optimization', 'Fleet Tracking', 'Inventory Control']
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    icon: Factory,
    description: 'Smart manufacturing solutions and process automation',
    services: ['Production Planning', 'Quality Control', 'Resource Management']
  },
  {
    id: 'hospitality',
    name: 'Hospitality',
    icon: UtensilsCrossed,
    description: 'Management systems for hotels, restaurants, and tourism',
    services: ['Booking Systems', 'POS Solutions', 'Customer Management']
  },
  {
    id: 'education',
    name: 'Education',
    icon: Building2,
    description: 'Digital learning platforms and educational management systems',
    services: ['Learning Management', 'Student Portal', 'Assessment Tools']
  }
];