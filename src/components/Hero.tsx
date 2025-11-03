import { Button } from "./ui/button";
import heroVideo from "@/assets/videos/ayodhya.mp4";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          src={heroVideo}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="max-w-2xl animate-fade-in-up text-left md:pt-10">
          {/* Jai Shri Ram Badge */}
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary font-semibold">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> जय श्री राम
          </span>

          {/* Main Title */}
          <h1 className="font-hind text-4xl md:text-6xl font-extrabold text-white mt-4 leading-tight drop-shadow-lg">
            दान करें – पुण्य कमाएँ, सेवा बढ़ाएँ।
          </h1>

          {/* Description */}
          <p className="text-white/90 mt-4 text-lg md:text-xl leading-relaxed font-hind max-w-xl">
            प्रिय भक्तगण,<br />
            श्री राम नाम विश्व बैंक समिति द्वारा संचालित सेवाओं में — राम नाम लेखन अभियान,
            संत महात्माओं व ज़रूरतमंदों को भोजन/भंडारा सेवा, और विश्व का सबसे बड़ा
            श्री राम नाम संग्रहालय निर्माण — में आप अपना योगदान देकर पुण्य प्राप्त कर सकते हैं।
            <br />
            <br />
            आपके द्वारा दिया गया प्रत्येक दान, <strong>धारा 80G</strong> के अंतर्गत आयकर में छूट योग्य है।
          </p>

          {/* CTA Button */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="/donation">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 font-hind px-8 text-lg"
              >
                दान करें 🙏
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Floating Decorative ॐ */}
      <div className="absolute bottom-8 right-8 text-white/10 text-8xl md:text-9xl font-hind select-none animate-slow-float">
        ॐ
      </div>
    </section>
  );
};

export default Hero;
