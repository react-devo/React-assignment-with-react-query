// components/ServiceCard.tsx
import React from 'react';
import styled from 'styled-components';

// Define the props interface
interface ServiceCardProps {
  logo: string;
  heading: string;
  paragraph: string;
}

// Define styled components
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-top: 0px;
`;
export const ServiceContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* margin-left: 20px; */
  gap: 10px;
`;
const CardContainer = styled.div`
  gap: 10px;
  width: 200px;
  padding: 20px;
  margin: 25px;
`;

const Logo = styled.img`
  width: 50px; 
  margin-bottom: 10px;
`;

const Heading = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  font-size: 14px;
  color: #555;
`;

// Define the component
const ServiceCard: React.FC<ServiceCardProps> = ({ logo, heading, paragraph }) => {
  return (
      <CardContainer>
        <Logo src={logo} alt="Service Logo" />
        <Heading>{heading}</Heading>
        <Paragraph>{paragraph}</Paragraph>
      </CardContainer>
  );
};

export default ServiceCard;
