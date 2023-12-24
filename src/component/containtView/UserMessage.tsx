import React from 'react';
import styled from 'styled-components';

// Define types for the props
interface QuoteComponentProps {
  imageUrl: string;
  quote: string;
  author: string;
}

// Styled components for the layout
const Container = styled.div`
  display: flex;
  flex-direction: column;;
  gap: 40px;
  margin: 20px;
  padding: 20px;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 8px;
`;

const QuoteText = styled.p`
  max-width: 100%;
  font-size: 18px;
  line-height: 1.6;
  
  @media (min-width: 768px) {
    max-width: 60%;
  }
`;
const QuoteAuthor = styled.p`
  max-width: 100%;
  font-size: 18px;
  line-height: 1.6;
  height: 220px;
  
  @media (min-width: 768px) {
    max-width: 60%;
  }
`;

const QuoteComponent: React.FC<QuoteComponentProps> = ({ imageUrl, quote ,author}) => {
  return (
    <Container>
      <Image src={imageUrl} alt="Quote" />
      <TextContainer>
      <QuoteText>{quote}</QuoteText>
      <QuoteAuthor>{author}</QuoteAuthor>
      </TextContainer>
    </Container>
  );
};

export default QuoteComponent;
