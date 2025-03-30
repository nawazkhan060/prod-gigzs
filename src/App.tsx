import React, { useState, useRef } from 'react';
import { Mountain, ChevronDown, Users, Target, Zap, Timer, X } from 'lucide-react';
import { Toaster, toast } from 'react-hot-toast';
import { motion } from 'framer-motion';
import { supabase } from './lib/supabase';

interface FormData {
  name: string;
  email: string;
}

function Modal({ isOpen, onClose, title, onSubmit, buttonText }: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  onSubmit: (data: FormData) => Promise<void>;
  buttonText: string;
}) {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '' });
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await onSubmit(formData);
      setFormData({ name: '', email: '' });
      onClose();
    } catch (error) {
      console.error('Error:', error);
      toast.error('Something went wrong. Please try again.');
    }
    setIsLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-black/50 hover:text-black"
        >
          <X className="w-5 h-5" />
        </button>
        <h2 className="text-2xl font-bold mb-6 text-black">{title}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-black/70 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full px-3 py-2 border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black/70 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="w-full px-3 py-2 border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder="Enter your email"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Submitting...' : buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

function App() {
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const [showEarlyAccessModal, setShowEarlyAccessModal] = useState(false);
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleEarlyAccess = async (data: FormData) => {
    const { error } = await supabase
      .from('early_access')
      .insert([{ name: data.name, email: data.email }]);
    
    if (error) {
      if (error.code === '23505') {
        toast.error('This email is already registered for early access.');
      } else {
        throw error;
      }
    } else {
      toast.success('Successfully registered for early access!');
    }
  };

  const handleWaitlist = async (data: FormData) => {
    const { error } = await supabase
      .from('waitlist')
      .insert([{ name: data.name, email: data.email }]);
    
    if (error) {
      if (error.code === '23505') {
        toast.error('This email is already on the waitlist.');
      } else {
        throw error;
      }
    } else {
      toast.success('Successfully joined the waitlist!');
    }
  };

  return (
    <div className="bg-white">
      <Toaster position="top-center" />
      
      {/* Modals */}
      <Modal
        isOpen={showEarlyAccessModal}
        onClose={() => setShowEarlyAccessModal(false)}
        title="Get Early Access"
        onSubmit={handleEarlyAccess}
        buttonText="Request Early Access"
      />
      <Modal
        isOpen={showWaitlistModal}
        onClose={() => setShowWaitlistModal(false)}
        title="Join the Waitlist"
        onSubmit={handleWaitlist}
        buttonText="Join Waitlist"
      />

      {/* Hero Section */}
      <div className="min-h-screen relative">
        {/* Navigation */}
        <nav className="fixed w-full top-0 z-50 bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Mountain className="w-6 h-6 text-black" />
              <span className="text-xl font-medium tracking-wider text-black">GIGZs</span>
            </div>
            <div className="flex gap-6 sm:gap-10 text-sm">
              <button onClick={() => scrollToSection(aboutSectionRef)} className="text-black hover:text-primary transition-colors">About</button>
              <a href="#" className="text-black hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-7xl mx-auto items-center">
            {/* Left side - Content */}
            <div className="flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary mb-6 self-start"
              >
                <Timer className="w-4 h-4" />
                <span className="text-sm font-medium">Coming Soon</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 leading-tight text-black"
              >
                <span className="block">Redefining</span>
                <span className="block">Freelance</span>
                <span className="block">Excellence</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg sm:text-xl text-black/80 mb-8 sm:mb-10 leading-relaxed max-w-2xl"
              >
                A curated platform connecting exceptional talent with visionary projects. Launching soon.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6"
              >
                <button
                  onClick={() => setShowEarlyAccessModal(true)}
                  className="bg-primary w-full sm:w-auto px-8 py-3 text-white text-sm font-medium rounded-md hover:bg-primary-light transition-all duration-300 shadow-md transform hover:-translate-y-1"
                >
                  Early Access
                </button>
                <button 
                  onClick={() => scrollToSection(aboutSectionRef)}
                  className="text-black w-full sm:w-auto text-sm font-medium hover:text-primary transition-colors flex items-center justify-center gap-2 border border-black/20 px-8 py-3 rounded-md hover:border-primary"
                >
                  Learn More
                  <ChevronDown className="w-4 h-4" />
                </button>
              </motion.div>
            </div>

            {/* Right side - Animated Elements */}
            <div className="relative">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative w-full aspect-square"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full"
                />
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, -5, 5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 0.5,
                  }}
                  className="absolute inset-4 bg-gradient-to-tr from-primary/30 to-primary/10 rounded-full"
                />
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    x: [0, 10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="absolute inset-8 bg-white rounded-full shadow-lg flex items-center justify-center"
                >
                  <Mountain className="w-20 h-20 text-primary" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </main>

        {/* Navigation Dots */}
        <div className="hidden lg:flex fixed right-8 top-1/2 transform -translate-y-1/2 flex-col gap-3 z-20">
          {[...Array(2)].map((_, i) => (
            <motion.div 
              key={i}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              onClick={() => {
                if (i === 1) scrollToSection(aboutSectionRef);
              }}
              className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-black' : 'bg-black/20'} cursor-pointer hover:bg-primary transition-colors border border-black/20`}
            />
          ))}
        </div>
      </div>

      {/* About Section */}
      <div ref={aboutSectionRef} className="min-h-screen bg-gradient-to-b from-white to-black/5 py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16 sm:mb-24"
            >
              <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8 text-black">Why Choose GIGZ</h2>
              <p className="text-black/80 max-w-2xl mx-auto leading-relaxed text-lg">
                We're building a refined platform that prioritizes quality connections and seamless collaboration between talented professionals and forward-thinking clients.
              </p>
            </motion.div>

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
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center p-6 sm:p-8 border border-black/10 rounded-lg shadow-sm hover:border-black/30 transition-all duration-300 bg-white transform hover:-translate-y-1"
                >
                  <div className="mx-auto mb-6 inline-block p-4 bg-black/5 rounded-full">{feature.icon}</div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4 text-black">{feature.title}</h3>
                  <p className="text-black/70 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center p-8 sm:p-12 border border-black/10 rounded-lg shadow-sm bg-white"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary mb-6">
                <Timer className="w-4 h-4" />
                <span className="text-sm font-medium">Coming April 2025</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-black">Join the Evolution</h3>
              <p className="text-black/80 mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed text-lg">
                Be part of a platform that's setting new standards in professional freelancing.
              </p>
              <button
                onClick={() => setShowWaitlistModal(true)}
                className="w-full sm:w-auto bg-primary text-white px-8 sm:px-10 py-3 text-sm font-medium rounded-md hover:bg-primary-light transition-all duration-300 shadow-md transform hover:-translate-y-1"
              >
                Join Waitlist
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 sm:py-8 border-t border-black/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
            <span className="text-sm text-black">© 2024 GIGZ</span>
            <a href="#" className="text-sm text-black hover:text-primary transition-colors">About Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
