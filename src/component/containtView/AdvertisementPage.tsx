import React from 'react';
import styled from 'styled-components';
import mainImage from '../../assets/image/main.png';

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 20px;
  margin-bottom: 2rem;
  width: 90%;

  @media (min-width: 768px) {
    flex-direction: row;
    height: auto;
  }
`;

const LeftPart = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
`;

const Heading = styled.h2`
  font-family: 'Plus Jakarta Sans';
  font-size: 36px;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: left;
  width: 100%;
  max-width: 486px; /* Limit width for larger screens */
`;

export const SecondLine = styled.span`
  color: #6153CD;
`;

const Paragraph = styled.p`
  margin-bottom: 10px;
  width: 100%;
  max-width: 503px; /* Limit width for larger screens */
  color: #47536B;
`;

export const LearnMoreButton = styled.button`
  height: 48px;
  padding: 15px;
  border-radius: 8px;
  border: none;
  background: #6153CD;
  color: white;
  cursor: pointer;

  @media (min-width: 768px) {
    max-width: 120px;
  }
`;

const RightPart = styled.div`
  flex: 1;
  background-color: #ddd;
  border-radius: 50px;
  width: 100%;
  height: 361px;
  border-radius: 50px;

  img {
    border-radius: 50px;
    border: none;
    width: 100%;
    height: 100%;
  }
`;

const AdvertisementPage: React.FC = () => {
  return (
    <Container>
      <LeftPart>
        <div>
          <Heading>
            Building Brands in the <SecondLine>Digital Age</SecondLine>
          </Heading>
          <Paragraph>
            Your partner in navigating the ever-evolving landscape of digital marketing. From conceptualization to execution, we craft tailored solutions that drive results and elevate your brand to new heights.
          </Paragraph>
        </div>
        <LearnMoreButton>Learn More</LearnMoreButton>
      </LeftPart>
      <RightPart>
        <img src={mainImage} alt="Image" />
      </RightPart>
    </Container>
  );
};

export default AdvertisementPage;
