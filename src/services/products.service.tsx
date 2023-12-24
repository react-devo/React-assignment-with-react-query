import React from 'react';
import { useQuery,UseQueryResult } from 'react-query';
import axios, { AxiosError } from 'axios';

export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
  }
  

interface ApiResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
  }

  
  // Define the login function
 export const login = async ({ username, password }: { username: string; password: string }) => {
    try {
      const response = await axios.post('https://dummyjson.com/auth/login', {
        username,
        password,
      });
  
      return response.data;
    } catch (error) {
      throw (error as AxiosError).response?.data || 'An error occurred';
    }
  };
  

  // Fetch function for a all product
  export const fetchProducts = async (): Promise<ApiResponse[]> => {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      return response.data.products;
    } catch (error) {
      console.error('Failed to fetch products', error);
      return []; 
    }
  };
  
  // React Query hook for fetching a all product
 export const useAllProduct = (): UseQueryResult<Product[], Error> => {
    return useQuery('products', () => fetchProducts(),{
      staleTime: 60000,
    });
  };
  

// Fetch function for a single product
const fetchProduct = async (productId: number): Promise<Product> => {
  const response = await axios.get(`https://dummyjson.com/products/${productId}`);
  return response.data;
};

// React Query hook for fetching a single product
const useProduct = (productId: number) => {
  return useQuery<Product, Error>(['product', productId], () => fetchProduct(productId),{
    staleTime: 60000, 
  });
};

export default useProduct;
