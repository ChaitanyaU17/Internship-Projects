import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const HeroSection = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80') center/cover;
  color: white;
  padding: 8rem 2rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.5) 100%);
    z-index: 1;
  }
  
  @media (max-width: 768px) {
    padding: 6rem 1.5rem;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  position: relative;
  z-index: 2;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const HeroText = styled.div`
  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    line-height: 1.2;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
  
  p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    opacity: 0.9;
    text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
    
    @media (max-width: 768px) {
      font-size: 1.125rem;
    }
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const PrimaryButton = styled(Link)`
  display: inline-block;
  padding: 0.875rem 2rem;
  background-color: var(--primary-color);
  color: white;
  border-radius: 4px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    background-color: var(--secondary-color);
  }
`;

const SecondaryButton = styled(Link)`
  display: inline-block;
  padding: 0.875rem 2rem;
  background-color: transparent;
  color: white;
  border: 2px solid white;
  border-radius: 4px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: white;
    color: var(--primary-color);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const AboutSection = styled.section`
  padding: 6rem 2rem;
  background-color: #f8f9fa;
  
  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutImage = styled.div`
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 992px) {
    order: 1;
  }
`;

const AboutText = styled.div`
  @media (max-width: 992px) {
    order: 2;
    text-align: center;
  }
  
  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: var(--dark-color);
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  
  p {
    font-size: 1.125rem;
    color: var(--gray-color);
    margin-bottom: 1.5rem;
    line-height: 1.7;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin-bottom: 2rem;
    
    li {
      position: relative;
      padding-left: 1.5rem;
      margin-bottom: 0.75rem;
      font-size: 1.125rem;
      color: var(--dark-color);
      
      &:before {
        content: '✓';
        position: absolute;
        left: 0;
        color: var(--primary-color);
        font-weight: bold;
      }
    }
  }
`;

const CTASection = styled.section`
  background-color: var(--primary-color);
  color: white;
  padding: 5rem 2rem;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  
  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  
  p {
    font-size: 1.125rem;
    margin-bottom: 2rem;
    opacity: 0.9;
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
  padding: 1rem 2.5rem;
  background-color: white;
  color: var(--primary-color);
  border-radius: 4px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const AnimatedText = styled(motion.span)`
  display: block;
  font-weight: 700;
  background: linear-gradient(90deg, #ffffff,rgb(84, 119, 146),rgb(33, 52, 72), #ffffff);
  background-size: 300% 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient 10s ease infinite;
  
  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const Home = () => {
  const words = ["Employees", "Teams", "Performance", "Success"];
  const [currentWord, setCurrentWord] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);
  
  return (
    <HomeContainer>
      <Header />

      <HeroSection>
        <HeroContent>
          <HeroText>
            <h1>
              Empowering&nbsp;
              <AnimatedText
                key={currentWord}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                {words[currentWord]}
              </AnimatedText>
            </h1>
            <p>
              Transform the way you manage your organization with our intuitive and powerful platform built for modern teams.
            </p>
            <HeroButtons>
              <PrimaryButton to="/dashboard">Get Started</PrimaryButton>
              <SecondaryButton to="/contact">Learn More</SecondaryButton>
            </HeroButtons>
          </HeroText>

          {/* Uncomment this if you want an image on the right side of the hero
          <HeroImage
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img src="https://your-image-link.com/hero-image.png" alt="Hero Visual" />
          </HeroImage> 
          */}
        </HeroContent>
      </HeroSection>

      <AboutSection>
        <AboutContent>
          <AboutImage>
            <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df" alt="About Us" />
          </AboutImage>
          <AboutText>
            <h2>About Our Platform</h2>
            <p>
              We help organizations optimize workflows and boost employee satisfaction through streamlined tools and insights.
            </p>
            <ul>
              <li>Track performance metrics</li>
              <li>Encourage collaboration</li>
              <li>Boost employee engagement</li>
              <li>Make data-driven decisions</li>
            </ul>
          </AboutText>
        </AboutContent>
      </AboutSection>

      <CTASection>
        <CTAContent>
          <h2>Start Building a Better Workplace Today</h2>
          <p>Join thousands of companies already using our platform to power their people operations.</p>
          <CTAButton to="/signup">Create Account</CTAButton>
        </CTAContent>
      </CTASection>

      <Footer />
    </HomeContainer>
  );
};

export default Home;
