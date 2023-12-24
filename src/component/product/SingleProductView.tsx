import React from 'react';
import styled from 'styled-components';
import {  useNavigate } from 'react-router-dom';
import { Product } from '../../services/products.service';

interface SingleProductViewProps {
  product: Product;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  margin-bottom: 10px;
`;

const Price = styled.p`
  font-weight: bold;
  margin-bottom: 10px;
`;

const Rating = styled.div`
  margin-bottom: 10px;
`;

const Stock = styled.p`
  margin-bottom: 10px;
`;

const ImageContainer = styled.div`
  max-width: 100%;
  margin-bottom: 20px;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
`;

export const BackButton = styled.button<{ viewAll?: boolean }>`
 align-self: self-start;
  padding: 10px;
  margin-top: ${(props) => (props.viewAll ? "0px" : "15px")}; 
  background-color: #6153CD;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #2980b9;
  }
`;

const SingleProductView: React.FC<SingleProductViewProps> = ({ product }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1)
  };

  return (
    <Container>
      <BackButton onClick={handleGoBack}>Back</BackButton>
      <Title>{product.title}</Title>
      <Description>{product.description}</Description>
      <Price>Price: ${product.price}</Price>
      <Rating>Rating: {product.rating}</Rating>
      <Stock>Stock: {product.stock}</Stock>

      <ImageContainer>
        <ProductImage src={product.thumbnail} alt={product.title} />
      </ImageContainer>

      {/* You can add more styled components for other product details */}
    </Container>
  );
};

export default SingleProductView;
