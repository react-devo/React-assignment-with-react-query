import React from 'react';
import axios, { AxiosError } from 'axios';
import { render, screen, waitFor } from '@testing-library/react';
import ProductsList from '../component/product/ProductsListing.tsx';


test('fetches and renders products', async () => {
    render(<ProductsList viewAll={true} />);

    const loadingElement = screen.getByText(/Products/i);
    expect(loadingElement).toBeInTheDocument();

    await waitFor(() => {
        const productTitle = screen.getByText(/iPhone 9/i);
        expect(productTitle).toBeInTheDocument();
    });
});