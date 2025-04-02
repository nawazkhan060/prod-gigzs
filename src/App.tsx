import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Users, Target, Zap, Timer, Sun, Moon, Instagram, Linkedin, Mail, Facebook } from 'lucide-react';
import { useTheme } from './ThemeContext';

const CalendarCard = ({ value, label, percentage }: { value: string, label: string, percentage: number }) => {
  const { theme } = useTheme();
  
  return (
    <div className="calendar-card">
      <div className="relative bg-white rounded-2xl p-8 lg:p-10 xl:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-full hover:shadow-[0_20px_40px_rgb(0,0,0,0.15)] transition-all duration-500 transform hover:-translate-y-1 flex flex-col items-center justify-center">
        <div className={`text-3xl sm:text-4xl xl:text-5xl font-bold text-center mb-3 sm:mb-4 ${theme === 'dark' ? 'text-gray-900' : ''}`}>{value}</div>
        <div className="text-sm sm:text-base text-gray-400 text-center tracking-wider uppercase">{label}</div>
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gray-100 rounded-b-2xl overflow-hidden">
          <div 
            className="h-full bg-primary rounded-full transition-all duration-1000 ease-in-out"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
};

function App() {
  const { theme, toggleTheme } = useTheme();
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const calculateTimeLeft = () => {
    const launchDate = new Date('2025-04-06T00:00:00');
    const now = new Date();
    const difference = launchDate.getTime() - now.getTime();

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };

  const calculatePercentages = (timeLeft: ReturnType<typeof calculateTimeLeft>) => {
    return {
      days: (timeLeft.days / 365) * 100,
      hours: (timeLeft.hours / 24) * 100,
      minutes: (timeLeft.minutes / 60) * 100,
      seconds: (timeLeft.seconds / 60) * 100
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [percentages, setPercentages] = useState(calculatePercentages(timeLeft));

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      setPercentages({
        days: (newTimeLeft.days / 365) * 100,
        hours: ((24 - newTimeLeft.hours) / 24) * 100,
        minutes: ((60 - newTimeLeft.minutes) / 60) * 100,
        seconds: ((60 - newTimeLeft.seconds) / 60) * 100
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-background-dark text-text-dark' : 'bg-background-light text-text-light'} transition-colors duration-300`}>
      {/* Hero Section */}
      <div className="min-h-screen relative">
        {/* Navigation */}
        <nav className={`fixed w-full top-0 z-50 ${theme === 'dark' ? 'bg-background-dark/95' : 'bg-background-light/95'} backdrop-blur-sm border-b border-current/10`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img 
                src="https://raw.githubusercontent.com/GIGZs-Marketplace/brand-images/74bc3710d12bdc9d6f909cb1950f77e4bf0fcd1b/gigzs-logo.svg" 
                alt="GIGZs Logo" 
                className="w-8 h-8" 
              />
              <span className="text-2xl font-medium tracking-wider" style={{ fontFamily: 'Impact' }}>
                GIG<span className="text-primary">Z</span>s
              </span>
            </div>
            <div className="flex items-center gap-6 sm:gap-10">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-current/10 transition-colors"
              >
                {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </button>
              <div className="flex gap-6 text-sm">
                <button onClick={() => scrollToSection(aboutSectionRef)} className="hover:text-primary transition-colors">About</button>
                <button onClick={() => scrollToSection(contactSectionRef)} className="hover:text-primary transition-colors">Contact</button>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-7xl mx-auto items-center">
            {/* Left side - Content */}
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-primary mb-6 self-start shadow-lg">
                <Timer className="w-4 h-4" />
                <span className="text-sm font-medium">Coming Soon</span>
              </div>
              <h1 className="font-onset text-4xl sm:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
                <span className="block">Redefining</span>
                <span className="block">Freelance</span>
                <span className="block">Excellence</span>
              </h1>
              <p className="text-lg sm:text-xl opacity-80 mb-8 sm:mb-10 leading-relaxed max-w-2xl">
                A curated platform connecting exceptional talent with visionary projects. Launching soon.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <button className="bg-primary w-full sm:w-auto px-8 py-3 text-white text-sm font-medium rounded-md hover:bg-primary-light transition-all duration-300 shadow-xl transform hover:-translate-y-1">
                  Early Access
                </button>
                <button 
                  onClick={() => scrollToSection(aboutSectionRef)}
                  className="w-full sm:w-auto text-sm font-medium hover:text-primary transition-colors flex items-center justify-center gap-2 border-2 border-current/20 px-8 py-3 rounded-md hover:border-primary"
                >
                  Learn More
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right side - Countdown */}
            <div className="relative">
              <div className="text-center mb-10">
                <h2 className="text-xl font-medium">Platform Launch In</h2>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 xl:gap-8 max-w-6xl mx-auto">
                {[
                  { value: timeLeft.days.toString().padStart(2, '0'), label: 'days', percentage: percentages.days },
                  { value: timeLeft.hours.toString().padStart(2, '0'), label: 'hours', percentage: percentages.hours },
                  { value: timeLeft.minutes.toString().padStart(2, '0'), label: 'minutes', percentage: percentages.minutes },
                  { value: timeLeft.seconds.toString().padStart(2, '0'), label: 'seconds', percentage: percentages.seconds }
                ].map((item, index) => (
                  <CalendarCard key={index} value={item.value} label={item.label} percentage={item.percentage} />
                ))}
              </div>
            </div>
          </div>
        </main>

        {/* Navigation Dots */}
        <div className="hidden lg:flex fixed right-8 top-1/2 transform -translate-y-1/2 flex-col gap-3 z-20">
          {[...Array(3)].map((_, i) => (
            <div 
              key={i}
              onClick={() => {
                if (i === 1) scrollToSection(aboutSectionRef);
                if (i === 2) scrollToSection(contactSectionRef);
              }}
              className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-current' : 'bg-current/20'} cursor-pointer hover:bg-primary transition-colors border border-current/20`}
            />
          ))}
        </div>
      </div>

      {/* About Section */}
      <div ref={aboutSectionRef} className="min-h-screen py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 sm:mb-24">
              <h2 className="font-onset text-3xl sm:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8">Why Choose GIGZs</h2>
              <p className="opacity-80 max-w-2xl mx-auto leading-relaxed text-lg">
                We're building a refined platform that prioritizes quality connections and seamless collaboration between talented professionals and forward-thinking clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 mb-16 sm:mb-24">
              {[
                {
                  icon: <Users className="w-8 h-8 text-primary" />,
                  title: "Verified Talent",
                  description: "Carefully curated network of professionals, each validated for their expertise."
                },
                {
                  icon: <Target className="w-8 h-8 text-primary" />,
                  title: "Precise Matching",
                  description: "Intelligent system that ensures the right talent connects with the right opportunities."
                },
                {
                  icon: <Zap className="w-8 h-8 text-primary" />,
                  title: "Effortless Process",
                  description: "Streamlined experience from project initiation through to completion."
                }
              ].map((feature, index) => (
                <div key={index} className={`text-center p-6 sm:p-8 border-2 border-current/10 rounded-lg shadow-xl hover:border-current/30 transition-all duration-300 ${theme === 'dark' ? 'bg-text-dark/5' : 'bg-text-light/5'} transform hover:-translate-y-1`}>
                  <div className="mx-auto mb-6 inline-block p-4 bg-current/5 rounded-full">{feature.icon}</div>
                  <h3 className="font-onset text-lg sm:text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="opacity-70 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className={`text-center p-8 sm:p-12 border-2 border-current/10 rounded-lg shadow-xl ${theme === 'dark' ? 'bg-text-dark/5' : 'bg-text-light/5'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-primary mb-6 shadow-lg">
                <Timer className="w-4 h-4" />
                <span className="text-sm font-medium">Coming April 2025</span>
              </div>
              <h3 className="font-onset text-2xl sm:text-3xl font-bold mb-6">Join the Evolution</h3>
              <p className="opacity-80 mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed text-lg">
                Be part of a platform that's setting new standards in professional freelancing.
              </p>
              <button className="w-full sm:w-auto bg-primary text-white px-8 sm:px-10 py-3 text-sm font-medium rounded-md hover:bg-primary-light transition-all duration-300 shadow-xl transform hover:-translate-y-1">
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div ref={contactSectionRef} className="py-20 sm:py-32 border-t border-current/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
              {/* Services */}
              <div>
                <h2 className="font-onset text-2xl font-bold mb-6">Services</h2>
                <div className="space-y-3">
                  <a href="#" className="block hover:text-primary transition-colors">3D Rendering</a>
                  <a href="#" className="block hover:text-primary transition-colors">Logo</a>
                  <a href="#" className="block hover:text-primary transition-colors">Illustration</a>
                  <a href="#" className="block hover:text-primary transition-colors">AI Services</a>
                  <a href="#" className="block hover:text-primary transition-colors">Copy Writing</a>
                  <a href="#" className="block hover:text-primary transition-colors">Video & Animation</a>
                  <a href="#" className="block hover:text-primary transition-colors">Music & Audio</a>
                </div>
              </div>

              {/* Social */}
              <div>
                <h2 className="font-onset text-2xl font-bold mb-6">Social</h2>
                <div className="space-y-3">
                  <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Instagram className="w-5 h-5" /> Instagram
                  </a>
                  <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Linkedin className="w-5 h-5" /> LinkedIn
                  </a>
                  <a href="mailto:contact@gigzs.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Mail className="w-5 h-5" /> Gmail
                  </a>
                  <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Facebook className="w-5 h-5" /> Facebook
                  </a>
                </div>
              </div>

              {/* Links */}
              <div>
                <h2 className="font-onset text-2xl font-bold mb-6">Links</h2>
                <div className="space-y-3">
                  <a href="#" className="block hover:text-primary transition-colors">Terms & Conditions</a>
                  <a href="#" className="block hover:text-primary transition-colors">Privacy Policy</a>
                  <a href="#" className="block hover:text-primary transition-colors">Contact Us</a>
                  <a href="#" className="block hover:text-primary transition-colors">About Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 sm:py-8 border-t border-current/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <img 
                src="https://raw.githubusercontent.com/GIGZs-Marketplace/brand-images/74bc3710d12bdc9d6f909cb1950f77e4bf0fcd1b/gigzs-logo.svg" 
                alt="GIGZs Logo" 
                className="w-6 h-6" 
              />
              <span>© 2025 TRONOCITY LABS</span>
            </div>
            <a href="#" className="hover:text-primary transition-colors">About Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;