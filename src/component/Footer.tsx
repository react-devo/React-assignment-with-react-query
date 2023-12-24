// Footer.tsx

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.div`
margin-top: 2rem;
  background-color: #000;
  color: #fff;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 40px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const ColumnTitle = styled.p`
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  margin-bottom: 10px;
`;

const SocialIcon = styled.a`
  margin-right: 10px;
  color: #fff;
  text-decoration: none;
  font-size: 20px;
`;

const CompanyLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 5px;

`;



const ResourceLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 5px;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Column>
        <ColumnTitle>Digital agency</ColumnTitle>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus felis non lacinia.
        </Paragraph>
        <SocialIcon href="#">
          <i className="fab fa-facebook"></i>
        </SocialIcon>
        <SocialIcon href="#">
          <i className="fab fa-twitter"></i>
        </SocialIcon>
        <SocialIcon href="#">
          <i className="fab fa-linkedin"></i>
        </SocialIcon>
      </Column>

      <Column>
        <ColumnTitle>Company</ColumnTitle>
        <CompanyLink to="/#">About Us</CompanyLink>
        <CompanyLink to="/#">Services</CompanyLink>
        <CompanyLink to="/#">Contact</CompanyLink>
      </Column>

      <Column>
        <ColumnTitle>Help</ColumnTitle>
        <CompanyLink to="/#">FAQ</CompanyLink>
        <CompanyLink to="/#">Support</CompanyLink>
        <CompanyLink to="/#">Contact Us</CompanyLink>
      </Column>

      <Column>
        <ColumnTitle>Resources</ColumnTitle>
        <ResourceLink to="/#">Blog</ResourceLink>
        <ResourceLink to="/#">Whitepapers</ResourceLink>
        <ResourceLink to="/#">Videos</ResourceLink>
      </Column>
    </FooterContainer>
  );
};

export default Footer;
