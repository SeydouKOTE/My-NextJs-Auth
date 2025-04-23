'use client';
// import { CallToAction } from '@/sections/CallToAction';
// import { Functionalities } from '@/sections/Functionalities';
import { Hero } from '@/sections/Hero';
import { LogoTicker } from '@/sections/LogoTicker';
import { Pricing } from '@/sections/Pricing';
import { ProductShowcase } from '@/sections/ProductShowcase';
import { Testimonials } from '@/sections/Testimonials';
import StatsSection from '@/sections/Stats';
import { Functionalities } from '@/sections/Functionalities';
import { CallToAction } from '@/sections/CallToAction';
import Calendly from '@/sections/Calendly';
import  ContactBar  from '@/sections/ContactSection';

export default function Home() {
  return (
    <>
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <StatsSection />
      
      <Functionalities />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Calendly/>
      <ContactBar/>
    </>
  );
}