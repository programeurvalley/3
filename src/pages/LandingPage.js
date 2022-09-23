import React from 'react'

import Hero from '../components/Hero';
import SignUp from '../components/SignUp';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';

export default function LandingPage() {
  return (
    <>
      <Hero />
      <div className="b-example-divider"></div>
      <Features />
      <div className="b-example-divider"></div>
      <Testimonials />
      <div className="b-example-divider"></div>
      <SignUp />
    </>
  );
}