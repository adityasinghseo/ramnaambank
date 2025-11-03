import { Button } from "./ui/button";
import heroImage from "@/assets/hero-ram.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-hind">
            श्री राम नाम विश्व बैंक समिति
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4 font-hind">
            एक धार्मिक व सामाजिक संस्था
          </p>
          <p className="text-lg md:text-xl text-white/80 mb-8 font-poppins">
            राम काज – शुभ कार्यों, सेवा प्रेरणा!
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="gradient-devotional text-white hover:opacity-90 shadow-devotional font-hind text-lg"
              asChild
            >
              <a href="#about">और जानें</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 border-white text-white hover:bg-white hover:text-secondary backdrop-blur-sm font-hind text-lg"
              asChild
            >
              <a href="#membership">सदस्य बनें</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Om Symbol */}
      <div className="absolute bottom-8 right-8 text-white/10 text-8xl font-hind select-none">
        ॐ
      </div>
    </section>
  );
};

export default Hero;
