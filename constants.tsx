
import React from 'react';
import { ComparisonMetric, SupplyGapData, JourneyStage } from './types';
import { LayoutDashboard, TrendingUp, Users, Rocket, FileCheck, Landmark } from 'lucide-react';

export const COMPARISON_DATA: ComparisonMetric[] = [
  { name: 'Population', usa: 340, india: 1400, gap: '4x' },
  { name: 'Listed Companies', usa: 6200, india: 7000, gap: '9x fewer' },
  { name: 'Market Cap / Capita ($)', usa: 75000, india: 3500, gap: '21x' },
  { name: 'Annual IPOs', usa: 1200, india: 200, gap: '6x' },
  { name: 'Retail Participation (%)', usa: 60, india: 5, gap: '12x' }
];

export const SUPPLY_GAP_DATA: SupplyGapData[] = [
  { year: '2023', mfInflow: 290000, ipoRaised: 49000 },
  { year: '2024', mfInflow: 400000, ipoRaised: 120000 },
  { year: '2025', mfInflow: 250000, ipoRaised: 80000 }
];

export const JOURNEY_STAGES: JourneyStage[] = [
  { label: 'Month 6', shops: 1, revenue: '₹12.7L/mo', milestone: 'AI Inventory Boost (27%)', valuation: '₹5 Cr' },
  { label: 'Year 2', shops: 10, revenue: '₹1 Cr/mo', milestone: 'Franchise Network Start', valuation: '₹50 Cr' },
  { label: 'Year 3', shops: 30, revenue: '₹3 Cr/mo', milestone: 'Series A Funding', valuation: '₹250 Cr' },
  { label: 'Year 5', shops: 100, revenue: '₹10 Cr/mo', milestone: 'IPO Preparation', valuation: '₹1,000 Cr' },
  { label: 'Year 7', shops: 500, revenue: '₹50 Cr/mo', milestone: 'Public Listing (Unicorn)', valuation: '₹3,000 Cr+' }
];

export const FEATURES = [
  {
    title: 'AI Inventory Control',
    description: 'Stop losses and stockouts. Boost sales by 27% through predictive demand modeling.',
    icon: <LayoutDashboard className="w-6 h-6 text-blue-600" />,
  },
  {
    title: 'Franchise Dashboard',
    description: 'Scale from 1 shop to 10 in 12 months with centralized management and standard ops.',
    icon: <Users className="w-6 h-6 text-indigo-600" />,
  },
  {
    title: 'Investor Readiness',
    description: 'Automated financial hygiene and governance reports that venture capitalists love.',
    icon: <FileCheck className="w-6 h-6 text-purple-600" />,
  },
  {
    title: 'IPO Automation',
    description: 'Proprietary engine that streamlines the path to NSE/BSE listing in under 7 years.',
    icon: <Landmark className="w-6 h-6 text-emerald-600" />,
  }
];
