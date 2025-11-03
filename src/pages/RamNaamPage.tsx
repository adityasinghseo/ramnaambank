import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Coins, BookHeart, Users, Award } from "lucide-react";

const RamNaamPage = () => {
  const benefits = [
    {
      icon: <Coins className="w-12 h-12 text-primary" />,
      title: "आध्यात्मिक संपत्ति",
      description: "राम नाम जमा करें और आध्यात्मिक धन अर्जित करें"
    },
    {
      icon: <BookHeart className="w-12 h-12 text-primary" />,
      title: "मन की शांति",
      description: "नियमित राम नाम लेखन से मन को शांति मिलती है"
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "सामूहिक शक्ति",
      description: "हजारों भक्तों के साथ मिलकर राम नाम की महिमा बढ़ाएं"
    },
    {
      icon: <Award className="w-12 h-12 text-primary" />,
      title: "पुण्य लाभ",
      description: "प्रत्येक राम नाम लेखन से अपार पुण्य की प्राप्ति"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-cream">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6 font-hind">
                राम नाम जमा करें
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-xl text-muted-foreground font-hind leading-relaxed">
                राम नाम बैंक में अपना आध्यात्मिक खाता खोलें और राम नाम की अमूल्य धरोहर जमा करें। 
                प्रत्येक राम नाम आपके जीवन में शांति, समृद्धि और आनंद लाता है।
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12 font-hind">
              राम नाम जमा करने के लाभ
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-primary/20 animate-fade-in">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-xl font-hind text-center text-secondary">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-muted-foreground font-hind">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How to Deposit Section */}
        <section className="py-16 bg-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12 font-hind">
                राम नाम कैसे जमा करें
              </h2>
              <Card className="shadow-lg border-primary/30">
                <CardContent className="p-8">
                  <div className="space-y-6 font-hind text-lg">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                        1
                      </div>
                      <p className="text-muted-foreground">
                        एक साफ कॉपी या पुस्तिका में "श्री राम" या "राम राम" लिखना शुरू करें
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                        2
                      </div>
                      <p className="text-muted-foreground">
                        प्रतिदिन कम से कम 108 बार राम नाम का लेखन करें
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                        3
                      </div>
                      <p className="text-muted-foreground">
                        अपने लिखे हुए राम नाम की गिनती रखें
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                        4
                      </div>
                      <p className="text-muted-foreground">
                        अपनी पुस्तिका राम नाम बैंक में जमा करें या ऑनलाइन रिकॉर्ड करें
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RamNaamPage;
