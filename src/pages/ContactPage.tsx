import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "धन्यवाद!",
      description: "आपका संदेश प्राप्त हुआ। हम जल्द ही आपसे संपर्क करेंगे।",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-8 h-8 text-primary" />,
      title: "पता",
      content: "राम नाम बैंक, श्रीराम मंदिर, अयोध्या रोड, फैजाबाद, उत्तर प्रदेश"
    },
    {
      icon: <Phone className="w-8 h-8 text-primary" />,
      title: "फोन",
      content: "+91-9045000118"
    },
    {
      icon: <Mail className="w-8 h-8 text-primary" />,
      title: "ईमेल",
      content: "info@ramnaambank.org"
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "समय",
      content: "सोमवार - शनिवार: 9:00 AM - 6:00 PM"
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
                संपर्क करें
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-xl text-muted-foreground font-hind leading-relaxed">
                हमसे जुड़ें और अपने प्रश्नों के उत्तर पाएं। हम आपकी सेवा के लिए सदैव तत्पर हैं।
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-primary/20 animate-fade-in hover:scale-105">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      {info.icon}
                    </div>
                    <CardTitle className="text-xl font-hind text-secondary">
                      {info.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground font-hind">
                      {info.content}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Form */}
            <div className="max-w-3xl mx-auto">
              <Card className="shadow-lg border-primary/30">
                <CardHeader className="bg-gradient-to-r from-primary to-accent text-white">
                  <CardTitle className="text-2xl font-hind text-center">
                    संदेश भेजें
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="font-hind text-base">
                        पूरा नाम *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-2 font-hind"
                        placeholder="अपना नाम दर्ज करें"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email" className="font-hind text-base">
                          ईमेल *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="mt-2"
                          placeholder="example@email.com"
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone" className="font-hind text-base">
                          फोन नंबर *
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="mt-2"
                          placeholder="+91 XXXXXXXXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="font-hind text-base">
                        संदेश *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="mt-2 font-hind"
                        placeholder="अपना संदेश यहाँ लिखें"
                        rows={6}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full gradient-devotional text-white hover:opacity-90 shadow-devotional font-hind text-lg"
                      size="lg"
                    >
                      संदेश भेजें
                    </Button>
                  </form>
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

export default ContactPage;
