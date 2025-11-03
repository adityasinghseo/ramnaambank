import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Moon, Sun, Sparkles } from "lucide-react";

const JyotishPage = () => {
  const services = [
    {
      icon: <Star className="w-12 h-12 text-primary" />,
      title: "जन्म कुंडली विश्लेषण",
      description: "विस्तृत जन्म कुंडली का अध्ययन और फलादेश"
    },
    {
      icon: <Moon className="w-12 h-12 text-primary" />,
      title: "राशिफल परामर्श",
      description: "दैनिक, साप्ताहिक और मासिक राशिफल"
    },
    {
      icon: <Sun className="w-12 h-12 text-primary" />,
      title: "ग्रह दोष निवारण",
      description: "ग्रहों के दोष को दूर करने के उपाय"
    },
    {
      icon: <Sparkles className="w-12 h-12 text-primary" />,
      title: "शुभ मुहूर्त",
      description: "विवाह, गृहप्रवेश और अन्य कार्यों के लिए शुभ समय"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-indigo-100 via-purple-50 to-cream">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6 font-hind">
                ज्योतिष फलादेश
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-xl text-muted-foreground font-hind leading-relaxed">
                प्राचीन वैदिक ज्योतिष के आधार पर सटीक फलादेश और समाधान। 
                अनुभवी ज्योतिषाचार्यों द्वारा मार्गदर्शन।
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12 font-hind">
              हमारी सेवाएं
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-primary/20 animate-fade-in hover:scale-105">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl font-hind text-center text-secondary">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-muted-foreground font-hind">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 bg-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card className="shadow-lg border-primary/30">
                <CardHeader className="bg-gradient-to-r from-primary to-accent text-white">
                  <CardTitle className="text-2xl font-hind text-center">
                    परामर्श के लिए आवश्यक जानकारी
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-4 font-hind text-lg">
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <p className="text-muted-foreground">जन्म तिथि, समय और स्थान</p>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <p className="text-muted-foreground">पूरा नाम और माता-पिता का नाम</p>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <p className="text-muted-foreground">विशेष समस्या या प्रश्न</p>
                    </div>
                    <div className="mt-8 p-6 bg-primary/10 rounded-lg">
                      <h3 className="font-bold text-secondary mb-3 text-xl">संपर्क करें:</h3>
                      <p className="text-muted-foreground mb-2">📞 फोन: +91-9045000118</p>
                      <p className="text-muted-foreground mb-2">✉️ ईमेल: info@ramnaambank.org</p>
                      <p className="text-muted-foreground">📍 राम नाम बैंक, श्रीराम मंदिर, अयोध्या रोड, फैजाबाद</p>
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

export default JyotishPage;
