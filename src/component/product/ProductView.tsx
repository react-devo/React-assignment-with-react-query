import React from 'react';
import { useParams } from 'react-router-dom';
import SingleProductView from './SingleProductView.tsx';
import useProduct from '../../services/products.service.tsx';
import { Spinner, SpinnerContainer } from '../Spinner.tsx';


const SingleProductPage: React.FC = () => {
    const { productId } = useParams<{ productId: string }>();
    const parsedProductId = parseInt(productId, 10);
    const { data, error, isLoading } = useProduct(parsedProductId);

    if (isLoading) {
        return <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>;
    }

    if (error || !data) {
        return <div>Error: {error?.message || 'Failed to fetch product data'}</div>;
    }

    const  Product = data;

    return (
        <div>
            <SingleProductView product={data} />
        </div>
    );
};

export default SingleProductPage;
