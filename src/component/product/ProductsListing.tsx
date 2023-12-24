import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {  useAllProduct } from '../../services/products.service.tsx';
import { Spinner, SpinnerContainer } from '../Spinner.tsx';
import { BackButton } from './SingleProductView.tsx';


// Styled components for the layout
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
 

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap:20px;
  margin: 35px;

`;

const BlogCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 16px;
`;

const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
`;
const Heading = styled.h1`
  font-size: 18px;
  margin-bottom: 8px;
  align-self: self-start;
`;
const ViewTitle = styled.p`
  font-size: 18px;
  margin-left: 28px;
  align-self: baseline;
`;
const BAckContainer = styled.div`
 display: flex;
 flex-direction: row;
 align-self: center;
 /* gap: 20px; */
`;

const StyledNavLink = styled(Link)`
  cursor: pointer;
`;

const StyledButton = styled.button`
  background-color: #6153CD;
  color: #fff;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: #2980b9;
  }
`;

interface ProductListProps {
  viewAll: boolean;
}

const ProductsList: React.FC<ProductListProps> = ({ viewAll }) => {
  const navigate = useNavigate();
  const { data, error, isLoading } = useAllProduct();

  if (isLoading) {
    return <SpinnerContainer>
      <Spinner />
    </SpinnerContainer>;
  }

  if (error || !data) {
    return <div>Error: {error?.message || 'Failed to fetch product data'}</div>;
  }

  const handleGoBack = () => {
    navigate(-1)
  };

  return (
    <MainContainer>
      <Heading>{viewAll ? <BAckContainer><BackButton onClick={handleGoBack}>Back</BackButton> <ViewTitle>View all Products</ViewTitle> </BAckContainer> : "Our Products"}</Heading>
      <Container>

        {(!viewAll ? data?.slice(0, 3) : data).map((product: any) => (
          <BlogCard key={product.id}>
            <Image src={product.thumbnail} alt={product.title} />
            <Content>
              <StyledNavLink to={`/single-product-view/${product.id}`}> <Title>{product.title}</Title> </StyledNavLink>
              <p>{product.description}</p>
            </Content>

          </BlogCard>
        ))}
      </Container>
      {!viewAll && <StyledButton onClick={() => navigate('/view-all-products')}>View all Product</StyledButton>}
    </MainContainer>
  );
};

export default ProductsList;
