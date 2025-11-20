import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import apiService from '../../services/api';
import { SocialBadge } from '../Jobs/Jobs';
import { chefimage, facebookblack, instablack, linkedinblack, whitechef, youtubeblack } from '../../assets/assets';
import Services, { ServicesSection } from '../Services/Services';

const Home = () => {
  const [featuredImages, setFeaturedImages] = useState([]);
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    // Fetch featured images for home page
    const fetchFeaturedImages = async () => {
      try {
        const data = await apiService.getGalleryImages();
        // Get first 3 images as featured
        setFeaturedImages(data.slice(0, 3) || []);
      } catch (error) {
        console.error('Error fetching featured images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedImages();
  }, []);

  return (
    <div className="min-h-screen">
     {/* Hero Section */}
     <section className="bg-gradient-to-b from-orange-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#2B2B2B]">
            Welcome to<br />My Spice & Soul Journey
          </h1>
          <p className="text-[#2B2B2B] max-w-3xl mx-auto mb-6 leading-relaxed">
            Dive into a world where flavor meets modern creation, crafted with the heart by Gocool. Whether you're looking to elevate your next celebration, professional kitchen guidance, or career growth in the culinary world, you're in the right place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact"
              className=" text-[#2B2B2B] px-8 py-3 rounded-full font-semibold hover:bg-orange-600 border-orange-600 border-2 transition-colors"
            >
              Contact now
            </Link>
            <Link
              to="/services"
              className="text-white btn-gradient px-8 py-3 rounded-full font-semibold hover:bg-orange-300 transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
          
          {/* Statistics */}
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-6 max-w-5xl mx-auto">
            <div className="flex flex-row items-center justify-center sm:justify-start gap-3 sm:gap-4">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B2B2B]">16</div>
              <div className="text-[#2B2B2B] text-xs sm:text-sm leading-tight">
                Years<br />Experience
              </div>
            </div>
            <div className="flex flex-row items-center justify-center sm:justify-start gap-3 sm:gap-4">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B2B2B]">05</div>
              <div className="text-[#2B2B2B] text-xs sm:text-sm leading-tight">
                Online<br />Courses
              </div>
            </div>
            <div className="flex flex-row items-center justify-center sm:justify-start gap-3 sm:gap-4">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B2B2B]">500+</div>
              <div className="text-[#2B2B2B] text-xs sm:text-sm leading-tight">
                Youtube<br />Videos
              </div>
            </div>
            <div className="flex flex-row items-center justify-center sm:justify-start gap-3 sm:gap-4">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B2B2B]">2500+</div>
              <div className="text-[#2B2B2B] text-xs sm:text-md leading-tight">
                Food<br />Varieties
              </div>
            </div>
          </div>
        </div>
     
      </section>

      <div className="flex flex-col p-4 md:flex-row items-start justify-center gap-8 lg:gap-12">
  <div className="w-full md:w-96 flex-shrink-0">
    {loading ? (
      <div className="w-full bg-gray-200 flex items-center justify-center rounded-xl" style={{ aspectRatio: "4/5" }}>
        <p className="text-gray-600">Loading...</p>
      </div>
    ) : featuredImages.length > 0 ? (
      <img
        src={chefimage}
        alt="Chef Gocool"
        className="w-full rounded-xl shadow-none"
        style={{ aspectRatio: "4/5" }}
      />
    ) : (
      <div className="w-full bg-orange-100 flex items-center justify-center rounded-xl" style={{ aspectRatio: "4/5" }}>
        <span className="text-6xl">👨‍🍳</span>
      </div>
    )}
  </div>

  <div className="w-full md:w-1/2">
    <h1 className="text-4xl md:text-5xl font-bold text-[#2B2B2B] mb-6">
      About Gocool
    </h1>

    <p className="text-[#2B2B2B] text-base leading-relaxed mb-10">
      Classically trained Chef and Culinary Professional with 16+ years of dedicated service experience. Proven leader skilled in building high-performing teams, committed to exceptional customer service, am supervising operations, delivering culinary excellence, and dedicated to food safety and quality food service. Has the ability to drive sales, reduce costs, and increase profits. Monitored food quality consiste Inspired and supported team members in decision-making in charg of catering for various events. Improved food and labor cost within 3 months by restructuring recipe and labor processes re-developed t entire menu in 2019.
    </p>

    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 mb-6">
      <p className="text-[#2B2B2B] text-sm mb-4">
        Few celebrities & content creators I have worked with
      </p>
      <div className="flex -space-x-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-orange-200 border-2 border-white flex items-center justify-center">
          👤
        </div>
        <div className="w-12 h-12 rounded-full bg-orange-300 border-2 border-white flex items-center justify-center">
          👤
        </div>
        <div className="w-12 h-12 rounded-full bg-orange-400 border-2 border-white flex items-center justify-center">
          👤
        </div>
        <div className="w-12 h-12 rounded-full bg-orange-500 border-2 border-white flex items-center justify-center">
          👤
        </div>
        <div className="w-12 h-12 rounded-full bg-orange-600 border-2 border-white flex items-center justify-center">
          👤
        </div>
      </div>
      <Link
        to="/about"
        className="text-[#2B2B2B] font-semibold hover:text-orange-600 transition-colors inline-flex items-center text-sm"
      >
        View More ↘
      </Link>
    </div>
  </div>
</div>
<ServicesSection services={defaultServices}/>
<div className="mt-10 flex flex-col md:flex-row bg-[#FFBB7D] py-5 justify-center items-center gap-8">
          <SocialBadge label="Instagram">
            <img src={instablack} alt="" />
          </SocialBadge>

          <SocialBadge label="Facebook">
           <img src={facebookblack} alt="" />
          </SocialBadge>

          <SocialBadge label="Youtube">
           <img src={youtubeblack} alt="" />
          </SocialBadge>

          <SocialBadge label="Linkedin">
           <img src={linkedinblack} alt="" />
          </SocialBadge>
        </div>
     
    </div>
  );
};

export default Home;

