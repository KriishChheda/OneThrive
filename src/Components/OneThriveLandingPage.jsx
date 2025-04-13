import React, { useState, useEffect, useRef } from 'react';
import { Instagram, Linkedin, Menu, X, ChevronRight, ChevronLeft } from 'lucide-react';

function OneThriveLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const serviceSliderRef = useRef(null);

  const services = [
    {
      id: 1,
      title: "Team Building Activities",
      description: "Strengthen team bonds through engaging, collaborative activities designed to improve communication and trust.",
      image: "./services1.png",
      activities: ["Indoor Games", "Outdoor Activities", "Virtual Team Building", "Custom Experiences"]
    },
    {
      id: 2,
      title: "Sports & Wellness",
      description: "Promote employee health and fitness with customized sports events and wellness programs.",
      image: "./Services2.png",
      activities: ["Sports Tournaments", "Fitness Challenges", "Yoga Sessions", "Wellness Workshops"]
    },
    {
      id: 3,
      title: "Offsites",
      description: "Create memorable team experiences with expertly planned retreats that combine work and leisure.",
      image: "./Services3.png",
      activities: ["Trekking Expeditions", "Rage Rooms", "Theme Parks", "Wellness Retreats"]
    },
    {
      id: 4,
      title: "Creative Workshops",
      description: "Inspire innovation and creativity through specialized workshops tailored to your team's needs.",
      image: "./services4.png",
      activities: ["Art Workshops", "Design Thinking", "Innovation Labs", "Creative Problem Solving"]
    },
    {
      id: 5,
      title: "CSR Activities",
      description: "Make a positive impact while building team spirit through meaningful corporate social responsibility initiatives.",
      image: "./services5.png",
      activities: ["Community Service", "Environmental Projects", "Education Initiatives", "Social Impact"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [services.length]);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  useEffect(() => {
    if (serviceSliderRef.current) {
      const scrollAmount = currentSlide * serviceSliderRef.current.clientWidth;
      serviceSliderRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }, [currentSlide]);

  const testimonials = [
    {
      id: 1,
      text: "OneThrive transformed our team dynamics with their innovative team building activities. Highly recommended!",
      author: "Sarah Johnson",
      company: "Tech Innovations Inc."
    },
    {
      id: 2,
      text: "The offsite retreat organized by OneThrive was exactly what our team needed. Professional, fun, and impactful!",
      author: "Michael Chen",
      company: "Global Solutions Group"
    },
    {
      id: 3,
      text: "Their creative workshops sparked new ideas across our entire organization. OneThrive delivers excellence!",
      author: "Priya Sharma",
      company: "Future Brands"
    }
  ];

  return (
    <div className="font-sans min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <div className="flex items-center">
                <div className="w-12 h-12 flex items-center justify-center mr-2">
                  <img src="./logo.png" classname="rounded-full " />
                </div>
                <span className="text-xl font-bold text-gray-900">One<span className="text-green-500">Thrive</span></span>
              </div>
            </div>
            
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-green-500 px-3 py-2 font-medium">Home</a>
              <a href="#services" className="text-gray-700 hover:text-green-500 px-3 py-2 font-medium">Services</a>
              <a href="#about" className="text-gray-700 hover:text-green-500 px-3 py-2 font-medium">About Us</a>
              <a href="#testimonials" className="text-gray-700 hover:text-green-500 px-3 py-2 font-medium">Testimonials</a>
              <a href="#contact" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md font-medium">Contact Us</a>
            </div>
            
          
            <div className="flex md:hidden items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-green-500 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block text-gray-700 hover:text-green-500 px-3 py-2 font-medium">Home</a>
              <a href="#services" className="block text-gray-700 hover:text-green-500 px-3 py-2 font-medium">Services</a>
              <a href="#about" className="block text-gray-700 hover:text-green-500 px-3 py-2 font-medium">About Us</a>
              <a href="#testimonials" className="block text-gray-700 hover:text-green-500 px-3 py-2 font-medium">Testimonials</a>
              <a href="#contact" className="block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md font-medium w-full text-center">Contact Us</a>
            </div>
          </div>
        )}
      </nav>
      
      <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-24 px-4 bg-gradient-to-br from-white to-green-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Elevate Your <span className="text-green-500">Workspace Culture</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6">
              Transforming employee engagement through innovative team experiences that drive growth, connection, and well-being.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#contact" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-medium text-center">
                Get Started
              </a>
              <a href="#services" className="border border-green-500 text-green-500 hover:bg-green-50 px-6 py-3 rounded-md font-medium text-center">
                Explore Services
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="./image1.png" 
              alt="Team Building Activities" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>
      
      <section id="services" className="py-16 px-4 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-green-400 mb-4">OUR SERVICES</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Comprehensive engagement solutions designed to enhance workplace culture and team dynamics.
            </p>
          </div>
          
          <div className="relative">
            <div 
              ref={serviceSliderRef}
              className="overflow-x-hidden"
            >
              <div className="inline-flex transition-transform duration-500 ease-in-out">
                {services.map((service) => (
                  <div 
                    key={service.id} 
                    className="w-full inline-block p-4"
                    style={{ minWidth: '100%', transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    <div className="bg-gray-900 rounded-lg overflow-hidden h-full">
                      <div className="relative">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-64 object-cover brightness-75"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex flex-wrap gap-2 mt-4">
                          {service.activities && service.activities.map((activity, idx) => (
                            <span key={idx} className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm uppercase">
                              {activity}
                            </span>
                          ))}
                        </div>
                        <p className="text-gray-300 mt-4">{service.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              onClick={handlePrevSlide}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-green-500 rounded-full p-2 shadow-md text-white hover:bg-green-600"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={handleNextSlide}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-green-500 rounded-full p-2 shadow-md text-white hover:bg-green-600"
            >
              <ChevronRight size={24} />
            </button>
            
            <div className="flex justify-center mt-6 space-x-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentSlide === index ? 'bg-green-500' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section id="about" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src="./WhyChooseUs.png" 
                alt="About OneThrive" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About OneThrive</h2>
              <p className="text-lg text-gray-600 mb-6">
                We are dedicated to transforming workplace culture through innovative engagement strategies that connect teams, foster creativity, and promote well-being.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                With years of experience designing and delivering impactful experiences, we help organizations of all sizes create environments where employees can truly thrive.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/company/onethrive/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="https://www.instagram.com/onethrive.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-800"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="testimonials" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from organizations that have transformed their workplace culture with OneThrive.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-gray-50 rounded-lg p-6 shadow">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-500 font-bold">{testimonial.author.charAt(0)}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{testimonial.author}</h3>
                    <p className="text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section id="contact" className="py-16 px-4 bg-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to transform your workplace culture? Contact us today to discover how OneThrive can help.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-gray-700 font-medium mb-2">Company</label>
                <input 
                  type="text" 
                  id="company" 
                  name="company" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Your company"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-md transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      
      <footer className="bg-black text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mr-2">
                 <img src="./logo.png" alt="" className="rounded-full" />
                </div>
                <span className="text-xl font-bold">One<span className="text-green-500">Thrive</span></span>
              </div>
              <p className="text-gray-400 mb-4">
                Transforming workplace culture through innovative engagement solutions.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/company/onethrive/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://www.instagram.com/onethrive.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white">Testimonials</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-400 hover:text-white">Team Building Activities</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white">Sports & Wellness</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white">Offsite Retreats</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white">Creative Workshops</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white">CSR Activities</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} OneThrive. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default OneThriveLandingPage;