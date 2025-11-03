import { Button } from "./ui/button";
import heroImage from "@/assets/hero-ram.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[78vh] flex items-center justify-center overflow-hidden">
      {/* Background Video (falls back to image) */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          src={import.meta.env.VITE_HERO_VIDEO_URL || "/videos/ayodhya.mp4"}
          autoPlay
          muted
          loop
          playsInline
          poster={heroImage}
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-3xl mx-auto animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary font-semibold">
            <span className="w-2 h-2 rounded-full bg-primary pulse-soft" /> जय श्री राम
          </span>
          <h1 className="font-hind text-4xl md:text-6xl font-extrabold text-white mt-4 glow-text leading-tight">
            श्री राम नाम विश्व बैंक समिति (रजि.)
          </h1>
          <p className="text-white/90 mt-4 text-lg md:text-xl">
            राम कहो – शुभ कहो, सेवा बढ़ाओ। भक्ति, सेवा और संस्कार — समाज के उत्थान के लिए समर्पित।
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="#join"><Button size="lg" className="bg-secondary hover:bg-primary soft-shadow">सदस्य बनें</Button></a>
            <a href="#activities"><Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">कार्यों को देखें</Button></a>
          </div>
        </div>
      </div>

      {/* Decorative Om */}
      <div className="absolute bottom-8 right-8 text-white/15 text-7xl md:text-8xl font-hind select-none float-slow">
        ॐ
      </div>
    </section>
  );
};

export default Hero;
