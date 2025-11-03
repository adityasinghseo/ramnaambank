import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Heart, Phone } from "lucide-react";

const Donation = () => {
  return (
    <section id="donation" className="py-20 bg-gradient-to-br from-primary via-accent to-golden text-white relative overflow-hidden">
      {/* Decorative Om */}
      <div className="absolute top-10 right-10 text-white/10 text-9xl font-hind select-none">
        ॐ
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in-up">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
              <Heart className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-hind">
              सेवा में योगदान दें
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-xl text-white/90 mb-4 font-hind">
              धर्म और समाज सेवा के कार्यों में अपना योगदान दें
            </p>
          </div>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-devotional animate-fade-in-up">
            <CardContent className="p-8">
              <div className="space-y-6">
                <p className="text-lg text-white/90 leading-relaxed font-hind">
                  आपका दान हमें राम नाम के प्रचार-प्रसार, धार्मिक कार्यक्रमों के आयोजन, और समाज सेवा के कार्यों को जारी रखने में मदद करता है। प्रत्येक योगदान एक पुण्य कार्य है जो समाज के कल्याण में सहायक है।
                </p>

                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
                  <h3 className="text-2xl font-bold mb-4 font-hind">दान संपर्क</h3>
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Phone className="h-6 w-6" />
                    <span className="text-2xl font-bold font-poppins">+91-9045000118</span>
                  </div>
                  <p className="text-white/80 font-hind">बैंक विवरण और अन्य जानकारी के लिए संपर्क करें</p>
                </div>

                <div className="flex flex-wrap gap-4 justify-center pt-4">
                  <Button 
                    size="lg" 
                    className="bg-white text-primary hover:bg-white/90 font-hind text-lg shadow-lg"
                  >
                    अभी दान करें
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-hind text-lg"
                  >
                    रूद्राक्ष दान करें
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Donation;
