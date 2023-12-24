import React from 'react';
import { render, screen } from '@testing-library/react';
import AdvertisementPage from './component/containtView/AdvertisementPage.tsx'; 

describe('Landing Page', () => {
  test('renders welcome message', () => {
    render(<AdvertisementPage />);
    const welcomeElement = screen.getByText(/Building Brands in the/i);
    expect(welcomeElement).toBeInTheDocument();
  });

  test('renders call-to-action button', () => {
    render(<AdvertisementPage />);
    const ctaButton = screen.getByRole('button', { name: /Learn More/i });
    expect(ctaButton).toBeInTheDocument();
  });

});
