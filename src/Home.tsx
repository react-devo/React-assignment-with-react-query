
import React from 'react'
import styled from 'styled-components';
import CompanyLogoGrid from "./component/containtView/CompanyLogo.tsx";
import AdvertisementPage, { LearnMoreButton } from "./component/containtView/AdvertisementPage.tsx";
import digitalIcon from './assets/image/digitalIcon.png'
import graphicIcon from './assets/image/graphic.png'
import appIcon from './assets/image/appIcon.png'
import webIcon from './assets/image/WebIcon.png'
import userImage from './assets/image/UserImage.png'
import ServiceCard, { MainContainer, ServiceContainer } from "./component/serviceComponents/ServiceCard.tsx";
import QuoteComponent from "./component/containtView/UserMessage.tsx";
import ProductsListingList from "./component/product/ProductsListing.tsx";

const Heading = styled.h1``
const Paragraph = styled.p``

const serviceData = [
    {
        logo: digitalIcon,
        heading: 'Digital Marketing',
        paragraph: 'ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus',
    },
    {
        logo: appIcon,
        heading: 'App Development',
        paragraph: 'ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus.',
    },
    {
        logo: webIcon,
        heading: 'Web Development',
        paragraph: 'ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus',
    },
    {
        logo: graphicIcon,
        heading: 'Grapic Designing',
        paragraph: 'ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus',
    },
    // Add more services as needed
];

function Home() {
    const quote = '“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be.”';
    return (
        <>
            <AdvertisementPage />
            <CompanyLogoGrid paragraph={'Powering next-gen companies'} />
            <MainContainer>
                <Heading>Explore Our Services</Heading>
                <Paragraph>We are self-service data analytics software that lets you create visually.</Paragraph>
                <ServiceContainer>
                    {serviceData.map((service, index) => {
                        return (
                            <ServiceCard key={index} {...service} />
                        )
                    })}
                </ServiceContainer>
                <LearnMoreButton>Learn More</LearnMoreButton>
            </MainContainer>
            <QuoteComponent imageUrl={userImage} quote={quote} author={'David Calathan - Director of Design Operations, New York'} />
            <ProductsListingList viewAll={false} />
        </>
    );
}

export default Home;