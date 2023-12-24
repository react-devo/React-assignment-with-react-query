// ErrorPage.tsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ErrorMessage = styled.p`
  font-size: 24px;
  margin-bottom: 20px;
`;

const BackButton = styled(Link)`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorPage: React.FC<{ error?: string }> = ({ error }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <ErrorMessage>{error || 'Something went wrong!'}</ErrorMessage>
      <BackButton to="/">Go Back</BackButton>
    </Container>
  );
};

export default ErrorPage;
