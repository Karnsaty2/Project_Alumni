import React from 'react';
import { Link } from 'react-router-dom';
import HeroImage from '../assets/hero-image.png';

function HeroSection() {
  return (
    <section className="flex items-center justify-center text-center h-screen bg-white overflow-hidden relative">
      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 px-6 max-w-5xl mx-auto animate-fade-in">
        <div className="w-full md:w-1/2">
          <img src={HeroImage} alt="Alumni Interaction Illustration" className="w-full h-auto opacity-0 animate-slide-in-up delay-500" />
        </div>
        <div className="w-full md:w-1/2 text-gray-800 opacity-0 animate-slide-in-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Empower Your Alumni Network</h1>
          <p className="text-lg text-gray-600 mb-6">Foster Connections, Drive Engagement. A dynamic platform that enables alumni and students to stay connected.</p>
          <Link to="/register">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition duration-200 transform hover:scale-105">Get Started</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
