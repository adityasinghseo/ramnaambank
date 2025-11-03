import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import g1 from "@/assets/g1.webp";
import g2 from "@/assets/g2.webp";
import g3 from "@/assets/g3.webp";
import g4 from "@/assets/g4.webp";
import g5 from "@/assets/g5.webp";
import g6 from "@/assets/g6.webp";
import g7 from "@/assets/g7.webp";
import g8 from "@/assets/g8.webp";
import g9 from "@/assets/g9.webp";

const GalleryPage = () => {
  const galleryImages = [
    { src: g1, title: "राम नाम लेखन कार्यक्रम" },
    { src: g2, title: "सामूहिक भजन संध्या" },
    { src: g3, title: "दान वितरण कार्यक्रम" },
    { src: g4, title: "राम मंदिर दर्शन" },
    { src: g5, title: "आध्यात्मिक सत्संग" },
    { src: g6, title: "युवा संगठन बैठक" },
    { src: g7, title: "रुद्राक्ष दान समारोह" },
    { src: g8, title: "राम कथा आयोजन" },
    { src: g9, title: "वार्षिक महोत्सव" }
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
                फोटो गैलरी
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-xl text-muted-foreground font-hind leading-relaxed">
                राम नाम बैंक के विभिन्न कार्यक्रमों और गतिविधियों की झलकियां
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <Card 
                  key={index} 
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in hover:scale-105 cursor-pointer group"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-white font-hind text-lg font-semibold">
                          {image.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-cream">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6 font-hind">
              हमारे कार्यक्रमों में शामिल हों
            </h2>
            <p className="text-xl text-muted-foreground font-hind max-w-2xl mx-auto">
              राम नाम बैंक के आगामी कार्यक्रमों में भाग लेने और अपनी तस्वीरें साझा करने के लिए हमसे संपर्क करें
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;
