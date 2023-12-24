// components/LogoGrid.tsx
import React from 'react';
import styled from 'styled-components';
import allLogo from '../../assets/image/allLogo.png';

// Define styled components

const MainContainer = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Logo = styled.img`
  
`;

const Paragraph = styled.p`
  text-align: center;
  font-size: 16px;
  color: #333;
  margin-bottom: 20px;
`;

// Define the component
interface LogoGridProps {
    paragraph: string;
}

const CompanyLogoGrid: React.FC<LogoGridProps> = ({ paragraph }) => {
   

    return (
        <MainContainer>
             <Paragraph>{paragraph}</Paragraph>
            <Container>
            <Logo src={allLogo} alt={`Logo`} />   
            </Container>
        </MainContainer>
    );
};

export default CompanyLogoGrid;
