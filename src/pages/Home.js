import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import AboutSection from '../components/AboutSection';
import Timeline from '../components/Timeline';
import CTA from '../components/CTA';
import ProductVideo from '../components/ProductVideo';
import WhyChooseUs from '../components/WhyChooseUs';
import FAQFormSection from '../components/FAQFormSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Features/>
      <AboutSection/>
      <Timeline/>
      <CTA/>
      <ProductVideo/>
      <WhyChooseUs/>
      <FAQFormSection/>
      <Footer/>
    </>
  );
};

export default Home;
