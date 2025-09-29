import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nykaa Seller Commission Calculator - Calculate Your Profit | Free Tool',
  description:
    'Free Nykaa seller commission calculator to calculate your profit margins. Determine Nykaa seller commissions (15-30%), shipping charges, and net earnings instantly.',
  keywords: [
    'nykaa seller profit',
    'nykaa seller commission calculator',
    'nykaa seller commissions',
    'nykaa commission rates',
    'nykaa seller earnings',
    'nykaa profit calculator',
    'nykaa marketplace calculator',
  ],
  openGraph: {
    title: 'Nykaa Seller Commission Calculator - Calculate Your Profit',
    description:
      'Calculate Nykaa seller commissions and profit margins with our free calculator tool. Optimize your pricing strategy for maximum profit.',
    type: 'website',
    siteName: 'Technovita Solutions',
    url: '/nykaa-seller-calculator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nykaa Seller Commission Calculator',
    description: 'Calculate your Nykaa seller profit and commissions instantly with our free tool',
  },
  alternates: { canonical: '/nykaa-seller-calculator' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

