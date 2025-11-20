import React, { useState } from 'react';
import { peopleguide, whitechef } from '../../assets/assets';

// Default data
const defaultServices = [
  {
    id: 1,
    title: 'Service 01',
    description: 'Welcome to QuizCoffeeStudio, where your creative ideas come to life! My team and I offer comprehensive video editing services, including shooting.',
    icon: 'chef',
  },
  {
    id: 2,
    title: 'Service 02',
    description: 'Welcome to QuizCoffeeStudio, where your creative ideas come to life! My team and I offer comprehensive video editing services, including shooting.',
    icon: whitechef,
  },
  {
    id: 3,
    title: 'Service 03',
    description: 'Welcome to QuizCoffeeStudio, where your creative ideas come to life! My team and I offer comprehensive video editing services, including shooting.',
    icon: 'chef',
  },
];

const whyChooseData = [
  {
    id: 1,
    title: 'Expert Instructors',
    description: 'Welcome to QuizCoffeeStudio, where your creative ideas come to life!',
    icon: 'instructor',
  },
  {
    id: 2,
    title: 'Expert Instructors',
    description: 'Welcome to QuizCoffeeStudio, where your creative ideas come to life!',
    icon: 'instructor',
  },
  {
    id: 3,
    title: 'Expert Instructors',
    description: 'Welcome to QuizCoffeeStudio, where your creative ideas come to life!',
    icon: 'instructor',
  },
  {
    id: 4,
    title: 'Expert Instructors',
    description: 'Welcome to QuizCoffeeStudio, where your creative ideas come to life!',
    icon: 'instructor',
  },
];

const testimonials = [
  {
    id: 1,
    name: 'Sanjay',
    avatar: '👤',
    text: 'Welcome to QuizCoffeeStudio, where your creative ideas come to life! My tea and I offer comprehensive video editing services, including shooting, and I also co video courses designed to help you bec ome a better video editor.',
  },
  {
    id: 2,
    name: 'Sanjay',
    avatar: '👤',
    text: 'Welcome to QuizCoffeeStudio, where your creative ideas come to life! My tea and I offer comprehensive video editing services, including shooting, and I also co video courses designed to help you bec ome a better video editor. Welcome to QuizCoffeeStudio, where your creative ideas come to life! My tea and I offer comprehensive video editing services, including shooting, and I also co video courses designed to help you bec ome a better video editor.',
  },
  {
    id: 3,
    name: 'Sanjay',
    avatar: '👤',
    text: 'Welcome to QuizCoffeeStudio, where your creative ideas come to life! My tea and I offer comprehensive video editing services, including shooting, and I also co video courses designed to help you bec ome a better video editor.',
  },
];

// SVG Icons
const ChefHatIcon = () => (
  <img src={whitechef} alt="" />
);

const InstructorIcon = () => (
  <img src={peopleguide} alt="" />
);

// Main Services Component
export const Services = () => {
  const [services] = useState(defaultServices);

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Services Section */}
      <ServicesSection services={services} />
      
      {/* Why Choose Me Section */}
      <WhyChooseSection data={whyChooseData} />
      
      {/* Testimonials Section */}
      <TestimonialsSection testimonials={testimonials} />
    </div>
  );
};

// Services Cards Section
export const ServicesSection = ({ services }) => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-[#2B2B2B] mb-6">Services</h1>
          <p className="text-sm text-[#2B2B2B] max-w-2xl mx-auto leading-relaxed">
            Welcome to QuizCoffeeStudio, where your creative ideas come to life! My team and I offer comprehensive video editing services, including shooting, and I also provide courses designed to help you become a better video editor.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group rounded-3xl border-2 border-orange-200 p-8 transition-all bg-white hover:bg-gradient-to-b hover:from-orange-100 hover:to-orange-200"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <ChefHatIcon  />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#2B2B2B] text-center mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-[#2B2B2B] text-center mb-8 leading-relaxed">
                {service.description}
              </p>

              {/* Button */}
              <div className="flex justify-center">
                <button className="px-8 py-2 bg-gradient-to-r from-orange-400 to-orange-500 text-white text-sm font-semibold rounded-lg group-hover:bg-white group-hover:text-orange-500 group-hover:from-white group-hover:to-white transition-colors shadow-sm">
                  Contact now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Why Choose Me Section
const WhyChooseSection = ({ data }) => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white/40">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-gray-700 mb-6">Why Choose Me?</h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Welcome to QuizCoffeeStudio, where your creative ideas come to life! My team and I offer comprehensive video editing services, including shooting, and I also provide courses designed to help you become a better video editor.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl border-2 border-orange-200 p-6 hover:shadow-lg transition-all"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <InstructorIcon />
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-gray-900 text-center mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-gray-600 text-center leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Testimonials Section
const TestimonialsSection = ({ testimonials }) => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-gray-700 mb-6">Voice of my Clients</h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Welcome to QuizCoffeeStudio, where your creative ideas come to life! My team and I offer comprehensive video editing services, including shooting, and I also provide courses designed to help you become a better video editor.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-3xl border-2 border-orange-200 p-8 hover:shadow-lg transition-all"
            >
              {/* Avatar and Name */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <span className="font-bold text-gray-900 text-lg">{testimonial.name}</span>
              </div>

              {/* Testimonial Text */}
              <p className="text-xs text-gray-600 leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;