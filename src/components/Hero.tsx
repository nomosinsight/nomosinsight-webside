import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import Button from './common/Button';
import Container from './common/Container';
import { motion, AnimatePresence } from 'framer-motion';

const industries = [
  { name: 'Retail', description: 'Transforming retail experiences through digital innovation' },
  { name: 'Healthcare', description: 'Revolutionizing patient care with smart solutions' },
  { name: 'Finance', description: 'Empowering financial growth with secure technology' },
  { name: 'Education', description: 'Advancing learning through digital platforms' },
  { name: 'Manufacturing', description: 'Optimizing operations with Industry 4.0' }
];

export default function Hero() {
  const [currentIndustry, setCurrentIndustry] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndustry((prev) => (prev + 1) % industries.length);
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <div id="home" className="relative bg-gradient-to-br from-[#FFF8E1] via-white to-[#FFF8E1] pt-20">
      <Container>
        <div className="py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-[2rem] md:text-[3.5rem] font-bold leading-[1.2] text-gray-900 mb-8">
              Trusted Custom Software Development Partner in
              <span className="relative inline-block ml-2 text-[#FFD700]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentIndustry}
                    className="inline-block"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{
                      y: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 }
                    }}
                  >
                    {industries[currentIndustry].name}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>
            
            <motion.p
              key={currentIndustry}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"
            >
              {industries[currentIndustry].description}
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Focus</h3>
                <p className="text-gray-600">Rigorous testing and scalable design principles ensure top-tier solutions.</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer Centric</h3>
                <p className="text-gray-600">Tailored solutions and personalized experiences for every client.</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Insights Driven</h3>
                <p className="text-gray-600">Data-driven decisions and analytics power our solutions.</p>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <Button href="#contact" variant="cta">
                Let's Build Your Solution
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FFD700] mb-2">100%</div>
                <div className="text-gray-600">Customer Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FFD700] mb-2">5+</div>
                <div className="text-gray-600">Years Industry Expertise</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FFD700] mb-2">10+</div>
                <div className="text-gray-600">Technologies Mastered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FFD700] mb-2">20+</div>
                <div className="text-gray-600">Global Clients</div>
              </div>
            </div> */}
          </div>
        </div>
      </Container>
      
      {/* <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3">
        <div className="relative">
          <div className="text-[200px] font-bold text-[#4285f4] opacity-90">19</div>
          <div className="text-4xl text-[#4285f4] mt-4">YEARS OF</div>
          <div className="text-6xl text-[#4285f4] font-bold">EXCELLENCE</div>
        </div>
      </div> */}
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white"></div>
    </div>
  );
}