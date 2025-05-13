import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [email, setEmail] = useState('');
  const [footerEmail, setFooterEmail] = useState('');
  const [showTerms, setShowTerms] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('You will be notified when we launch!');
      setEmail('');
    }
  };
  const handleFooterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (footerEmail) {
      toast.success('You have joined our newsletter!');
      setFooterEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Toaster position="top-center" />
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <motion.div 
            className="flex items-center justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="https://raw.githubusercontent.com/GIGZs-Marketplace/brand-images/1684edf3da61c756551e28a9bdfb157c9243bfa2/gigzs-logo.svg" 
              alt="Logo" 
              className="w-8 h-8 sm:w-10 sm:h-10" 
            />
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
        <div className="max-w-7xl w-full py-16 sm:py-20">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-primary/10 to-primary-light/10 rounded-full text-primary mb-8 sm:mb-12 lg:mb-16 mt-8 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-xs sm:text-sm font-medium">
                Coming Soon
              </span>
            </motion.div>

            <h1 className="font-onset text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 lg:mb-10 leading-tight text-gray-900">
              <motion.span 
                className="block bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Redefining
              </motion.span>
              <motion.span 
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Freelance
              </motion.span>
              <motion.span 
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Excellence
              </motion.span>
            </h1>

            <motion.p 
              className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-12 lg:mb-16 leading-relaxed max-w-2xl mx-auto px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              A curated platform connecting exceptional talent with visionary projects.
            </motion.p>

            <motion.form 
              onSubmit={handleSubmit}
              className="max-w-md mx-auto relative px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-full border border-gray-200 focus:border-primary outline-none text-gray-800 shadow-sm text-base"
                  required
                />
                <button
                  type="submit"
                  className="px-6 sm:px-8 py-3 sm:py-4 text-white font-medium rounded-full bg-primary hover:bg-primary-light transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-base w-full sm:w-auto"
                >
                  Join Waitlist
                </button>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </main>

      {/* About Us Section (Side by Side, Minimal, Custom Image) */}
      <section className="py-28 rounded-3xl relative overflow-hidden" style={{ background: '#00704a' }}>
        {/* Gradient overlay for visual interest */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0.04) 100%)' }} />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12 relative z-10">
            {/* Left: Questions and Answers */}
            <div className="flex-1 flex flex-col gap-10">
              <div className="my-4">
                <h2 className="font-onset text-2xl sm:text-4xl font-extrabold mb-4 text-white">Why we are different?</h2>
                <p className="font-onset text-base sm:text-xl text-white max-w-xl">
                  We focus on quality, transparency, and a curated experience for both clients and freelancers. Our platform is designed to foster trust, innovation, and long-term partnerships, setting us apart from generic freelance marketplaces.
                </p>
              </div>
              <div className="my-4">
                <h2 className="font-onset text-2xl sm:text-4xl font-extrabold mb-4 text-white">What is gigzs?</h2>
                <p className="font-onset text-base sm:text-xl text-white max-w-xl">
                  Gigzs is a next-generation freelance platform connecting exceptional talent with visionary projects. We empower professionals and businesses to collaborate seamlessly and achieve outstanding results.
                </p>
              </div>
            </div>
            {/* Right: Image */}
            <div className="flex-1 flex justify-center items-center">
              <img src="/10.jpg" alt="About Us" className="w-80 h-80 object-cover rounded-3xl shadow-2xl border-4 border-white/20" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Our Services Section (now above Featured Portfolio) */}
      <section className="py-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="font-onset text-4xl sm:text-5xl font-extrabold text-center mb-6 text-primary">Our Services</h2>
            <p className="text-center text-lg text-gray-700 max-w-2xl mx-auto mb-10">Explore our diverse range of services, each powered by top freelance talent. Hover over a category to discover some of the outstanding portfolios and expertise available on Gigzs.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {/* Service Card: Technical */}
              <div className="group bg-[#f7f7f7] rounded-2xl shadow-lg p-8 flex flex-col items-center transition-all duration-300 hover:bg-primary/10 relative overflow-hidden min-h-[300px]">
                <div className="flex flex-col items-center transition-all duration-300 group-hover:opacity-0 group-hover:pointer-events-none">
                  <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=200&q=80" alt="Technical" className="w-20 h-20 object-cover rounded-full mb-2" />
                  <h3 className="font-onset text-2xl font-bold text-primary mb-1">Technical</h3>
                  <p className="text-base text-gray-700 text-center">Web, Mobile, Backend, Cloud, and more</p>
                </div>
                {/* Portfolios on hover */}
                <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 bg-gradient-to-br from-primary/90 to-[#f7f7f7]/90 rounded-2xl p-6">
                  <h4 className="font-onset text-lg font-bold text-white mb-4">Top Freelancers</h4>
                  <div className="flex flex-col gap-4 w-full">
                    <div className="flex items-center gap-3">
                      <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Dev1" className="w-12 h-12 rounded-full border-2 border-white shadow" />
                      <div>
                        <div className="font-bold text-base text-white">Amit Kumar</div>
                        <div className="text-xs text-white/80">Full Stack Developer</div>
                        <div className="text-xs text-white italic mt-1">“Built scalable apps for 10+ startups.”</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Dev2" className="w-12 h-12 rounded-full border-2 border-white shadow" />
                      <div>
                        <div className="font-bold text-base text-white">Priya Singh</div>
                        <div className="text-xs text-white/80">Cloud Architect</div>
                        <div className="text-xs text-white italic mt-1">“AWS Certified, 5+ years experience.”</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Service Card: Graphic Design */}
              <div className="group bg-[#f7f7f7] rounded-2xl shadow-lg p-8 flex flex-col items-center transition-all duration-300 hover:bg-primary/10 relative overflow-hidden min-h-[300px]">
                <div className="flex flex-col items-center transition-all duration-300 group-hover:opacity-0 group-hover:pointer-events-none">
                  <img src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=200&q=80" alt="Graphic Design" className="w-20 h-20 object-cover rounded-full mb-2" />
                  <h3 className="font-onset text-2xl font-bold text-primary mb-1">Graphic Design</h3>
                  <p className="text-base text-gray-700 text-center">Branding, Illustration, Social Media, etc.</p>
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 bg-gradient-to-br from-primary/90 to-[#f7f7f7]/90 rounded-2xl p-6">
                  <h4 className="font-onset text-lg font-bold text-white mb-4">Top Freelancers</h4>
                  <div className="flex flex-col gap-4 w-full">
                    <div className="flex items-center gap-3">
                      <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Designer1" className="w-12 h-12 rounded-full border-2 border-white shadow" />
                      <div>
                        <div className="font-bold text-base text-white">Rahul Mehra</div>
                        <div className="text-xs text-white/80">Brand Designer</div>
                        <div className="text-xs text-white italic mt-1">“Created 50+ brand identities.”</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Designer2" className="w-12 h-12 rounded-full border-2 border-white shadow" />
                      <div>
                        <div className="font-bold text-base text-white">Sneha Patel</div>
                        <div className="text-xs text-white/80">Illustrator</div>
                        <div className="text-xs text-white italic mt-1">“Published in 10+ magazines.”</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Service Card: Video Editing */}
              <div className="group bg-[#f7f7f7] rounded-2xl shadow-lg p-8 flex flex-col items-center transition-all duration-300 hover:bg-primary/10 relative overflow-hidden min-h-[300px]">
                <div className="flex flex-col items-center transition-all duration-300 group-hover:opacity-0 group-hover:pointer-events-none">
                  <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=200&q=80" alt="Video Editing" className="w-20 h-20 object-cover rounded-full mb-2" />
                  <h3 className="font-onset text-2xl font-bold text-primary mb-1">Video Editing</h3>
                  <p className="text-base text-gray-700 text-center">YouTube, Ads, Reels, Animation, etc.</p>
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 bg-gradient-to-br from-primary/90 to-[#f7f7f7]/90 rounded-2xl p-6">
                  <h4 className="font-onset text-lg font-bold text-white mb-4">Top Freelancers</h4>
                  <div className="flex flex-col gap-4 w-full">
                    <div className="flex items-center gap-3">
                      <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="Editor1" className="w-12 h-12 rounded-full border-2 border-white shadow" />
                      <div>
                        <div className="font-bold text-base text-white">Vikas Sharma</div>
                        <div className="text-xs text-white/80">Video Editor</div>
                        <div className="text-xs text-white italic mt-1">“Edited 200+ videos for brands.”</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="https://randomuser.me/api/portraits/women/77.jpg" alt="Editor2" className="w-12 h-12 rounded-full border-2 border-white shadow" />
                      <div>
                        <div className="font-bold text-base text-white">Aarti Joshi</div>
                        <div className="text-xs text-white/80">Motion Designer</div>
                        <div className="text-xs text-white italic mt-1">“Expert in After Effects & Premiere.”</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Service Card: UI/UX */}
              <div className="group bg-[#f7f7f7] rounded-2xl shadow-lg p-8 flex flex-col items-center transition-all duration-300 hover:bg-primary/10 relative overflow-hidden min-h-[300px]">
                <div className="flex flex-col items-center transition-all duration-300 group-hover:opacity-0 group-hover:pointer-events-none">
                  <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=200&q=80" alt="UI/UX" className="w-20 h-20 object-cover rounded-full mb-2" />
                  <h3 className="font-onset text-2xl font-bold text-primary mb-1">UI/UX</h3>
                  <p className="text-base text-gray-700 text-center">Web, App, Product, Prototyping, etc.</p>
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 bg-gradient-to-br from-primary/90 to-[#f7f7f7]/90 rounded-2xl p-6">
                  <h4 className="font-onset text-lg font-bold text-white mb-4">Top Freelancers</h4>
                  <div className="flex flex-col gap-4 w-full">
                    <div className="flex items-center gap-3">
                      <img src="https://randomuser.me/api/portraits/men/88.jpg" alt="UI1" className="w-12 h-12 rounded-full border-2 border-white shadow" />
                      <div>
                        <div className="font-bold text-base text-white">Rohan Verma</div>
                        <div className="text-xs text-white/80">UI/UX Designer</div>
                        <div className="text-xs text-white italic mt-1">“Designed 30+ apps & websites.”</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="https://randomuser.me/api/portraits/women/99.jpg" alt="UI2" className="w-12 h-12 rounded-full border-2 border-white shadow" />
                      <div>
                        <div className="font-bold text-base text-white">Megha Kapoor</div>
                        <div className="text-xs text-white/80">Product Designer</div>
                        <div className="text-xs text-white italic mt-1">“Specialist in Figma & XD.”</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Featured Portfolio Section (now below Our Services) */}
      <section className="py-16 bg-primary">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="font-onset text-4xl sm:text-5xl font-extrabold text-white mb-6">Featured Portfolio</h2>
            <div className="bg-primary rounded-2xl shadow-lg p-8 flex flex-col items-center border-4 border-white/20">
              <img src="/f1.png" alt="Abhijit Ganguli" className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-white shadow-xl" />
              <h3 className="font-onset text-2xl font-bold text-white mb-2">Abhijit Ganguli</h3>
              <p className="text-base text-white mb-4">Graphic and UI/UX designer with 3 years of experience in brand identity, 3D modeling, and visual design. Passionate about creating cohesive, impactful digital experiences.</p>
              <a href="https://www.behance.net/avijitganguly1" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-white text-primary rounded-full font-bold shadow hover:bg-primary-light hover:text-white transition">View Portfolio</a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer Section */}
      <footer className="border-t border-gray-100 bg-[#f7f7f7] mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          {/* Newsletter/Waitlist */}
          <div>
            <h3 className="text-lg font-bold mb-2 text-primary">Join our Newsletter</h3>
            <form onSubmit={handleFooterSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={footerEmail}
                onChange={e => setFooterEmail(e.target.value)}
                className="px-4 py-3 rounded-full border border-gray-200 focus:border-primary outline-none text-gray-800 shadow-sm text-base bg-white"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 text-white font-medium rounded-full bg-primary hover:bg-primary-light transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-base"
              >
                Subscribe
              </button>
            </form>
          </div>
          {/* Links */}
          <div>
            <h3 className="text-lg font-bold mb-2 text-primary">Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => setShowTerms(true)} className="text-gray-700 hover:text-primary transition-colors focus:outline-none">Terms and Conditions</button>
              </li>
              <li>
                <button onClick={() => setShowContact(true)} className="text-gray-700 hover:text-primary transition-colors focus:outline-none">Contact Us</button>
              </li>
            </ul>
          </div>
          {/* Location */}
          <div>
            <h3 className="text-lg font-bold mb-2 text-primary">Location</h3>
            <p className="text-gray-700 text-base leading-relaxed">House no 108 Pachkedhi Gandli Pachkhedi Kuhi,<br/>Nagpur, Maharashtra, PIN: 441210</p>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-2 text-primary">Contact</h3>
            <p className="text-gray-700 text-base mb-1 leading-relaxed">+91 7038725831</p>
            <a href="mailto:info@gigzs.com" className="text-primary underline">info@gigzs.com</a>
          </div>
        </div>
        <div className="w-full text-center py-6 bg-[#f7f7f7] border-t border-gray-200">
          <p className="text-sm sm:text-base text-gray-600 tracking-wide">© 2025 TRONOCITY LABS. All rights reserved.</p>
        </div>
      </footer>

      {/* Terms and Conditions Modal */}
      <AnimatePresence>
        {showTerms && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowTerms(false)}
          >
            <motion.div
              className="bg-white rounded-xl shadow-2xl max-w-2xl w-full p-8 relative overflow-y-auto max-h-[80vh]"
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              transition={{ duration: 0.3 }}
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-primary text-2xl font-bold focus:outline-none"
                onClick={() => setShowTerms(false)}
                aria-label="Close"
              >
                ×
              </button>
              <h2 className="text-2xl font-bold mb-4 text-primary">Terms and Conditions</h2>
              <div className="text-gray-700 space-y-4 text-base sm:text-lg max-h-[60vh] overflow-y-auto pr-2">
                <p>By using our website and availing the Services, you agree that you have read and accepted these Terms (including the Privacy Policy). We reserve the right to modify these Terms at any time and without assigning any reason. It is your responsibility to periodically review these Terms to stay informed of updates.</p>
                <p>The use of this website or availing of our Services is subject to the following terms of use:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To access and use the Services, you agree to provide true, accurate and complete information to us during and after registration, and you shall be responsible for all acts done through the use of your registered account.</li>
                  <li>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials offered on this website or through the Services, for any specific purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</li>
                  <li>Your use of our Services and the website is solely at your own risk and discretion. You are required to independently assess and ensure that the Services meet your requirements.</li>
                  <li>The contents of the Website and the Services are proprietary to Us and you will not have any authority to claim any intellectual property rights, title, or interest in its contents.</li>
                  <li>You acknowledge that unauthorized use of the Website or the Services may lead to action against you as per these Terms or applicable laws.</li>
                  <li>You agree to pay us the charges associated with availing the Services.</li>
                  <li>You agree not to use the website and/ or Services for any purpose that is unlawful, illegal or forbidden by these Terms, or Indian or local laws that might apply to you.</li>
                  <li>You agree and acknowledge that website and the Services may contain links to other third party websites. On accessing these links, you will be governed by the terms of use, privacy policy and such other policies of such third party websites.</li>
                  <li>You understand that upon initiating a transaction for availing the Services you are entering into a legally binding and enforceable contract with the us for the Services.</li>
                  <li>You shall be entitled to claim a refund of the payment made by you in case we are not able to provide the Service. The timelines for such return and refund will be according to the specific Service you have availed or within the time period provided in our policies (as applicable). In case you do not raise a refund claim within the stipulated time, than this would make you ineligible for a refund.</li>
                  <li>Notwithstanding anything contained in these Terms, the parties shall not be liable for any failure to perform an obligation under these Terms if performance is prevented or delayed by a force majeure event.</li>
                  <li>These Terms and any dispute or claim relating to it, or its enforceability, shall be governed by and construed in accordance with the laws of India.</li>
                  <li>All disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in Nagpur, Maharashtra</li>
                  <li>All concerns or communications relating to these Terms must be communicated to us using the contact information provided on this website.</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Us Modal */}
      <AnimatePresence>
        {showContact && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowContact(false)}
          >
            <motion.div
              className="bg-white rounded-xl shadow-2xl max-w-2xl w-full p-8 relative overflow-y-auto max-h-[80vh]"
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              transition={{ duration: 0.3 }}
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-primary text-2xl font-bold focus:outline-none"
                onClick={() => setShowContact(false)}
                aria-label="Close"
              >
                ×
              </button>
              <h2 className="text-2xl font-bold mb-4 text-primary">Contact Us</h2>
              <div className="text-gray-700 space-y-4 text-base sm:text-lg max-h-[60vh] overflow-y-auto pr-2">
                <p><span className="font-semibold">Merchant Legal entity name:</span> TRONOCITY LABS PRIVATE LIMITED</p>
                <p><span className="font-semibold">Registered Address:</span> House no 108 Pachkedhi Gandli Pachkhedi Kuhi, Nagpur, Maharashtra, PIN: 441210</p>
                <p><span className="font-semibold">Operational Address:</span> House no 108 Pachkedhi Gandli Pachkhedi Kuhi, Nagpur, Maharashtra, PIN: 441210</p>
                <p><span className="font-semibold">Telephone No:</span> +91 7038725831</p>
                <p><span className="font-semibold">E-Mail ID:</span> <a href="mailto:info@gigzs.com" className="text-primary underline">info@gigzs.com</a></p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;