
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      className="relative min-h-screen pt-24 pb-16 flex items-center justify-center overflow-hidden bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://www.visittrinity.ie/wp-content/uploads/2024/02/Trinity_Campanile-Sunset_Low-Res-1.jpg?w=1517')",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-islamic-black/75"></div>
      <div className="absolute inset-0 islamic-pattern opacity-20"></div>
      
      {/* Geometric Decorations */}
      <div className="absolute top-20 right-20 w-32 h-32 border-2 border-islamic-gold/30 rotate-45 hidden lg:block"></div>
      <div className="absolute bottom-32 left-20 w-24 h-24 bg-islamic-gold/20 rounded-full hidden lg:block"></div>
      <div className="absolute top-1/2 left-10 w-16 h-16 border border-islamic-gold/20 transform -translate-y-1/2 hidden lg:block"></div>
      
      <div className="container mx-auto px-4 text-center z-10">
        <div className={`space-y-8 fade-in ${isVisible ? 'visible' : ''}`}>
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 rounded-full overflow-hidden shadow-2xl hover-scale ring-4 ring-islamic-gold/30">
              <img 
                src="/lovable-uploads/fcc3c128-e50e-4ffd-a653-e60b95aca2b1.png" 
                alt="TCD MSA Logo" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight">
              Trinity College Dublin
              <span className="block text-islamic-gold">Muslim Students' Association</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
              "And whoever relies upon Allah - then He is sufficient for him. 
              Indeed, Allah will accomplish His purpose."
            </p>
            <p className="text-lg text-islamic-gold font-medium">— Quran 65:3</p>
          </div>

          {/* Mission Statement */}
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Building bridges of faith, knowledge, and community. Join us in creating 
              a supportive environment where Muslim students can thrive academically, 
              spiritually, and socially.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              asChild
              size="lg"
              className="gradient-gold text-islamic-black px-8 py-3 text-lg font-medium shadow-lg hover-scale hover:shadow-xl border-0"
            >
              <a href="https://trinitysocietieshub.com/products/muslim-students-association?_pos=1&_sid=fcc8178eb&_ss=r">
                Join Our Community
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="lg"
              className="text-islamic-gold hover:bg-islamic-gold/20 hover:text-islamic-gold px-8 py-3 text-lg font-medium hover-scale"
            >
              Support Our Cause
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
