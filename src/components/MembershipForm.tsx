import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

const MembershipForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    interest: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "धन्यवाद!",
      description: "आपका पंजीकरण सफलतापूर्वक प्राप्त हुआ। हम जल्द ही आपसे संपर्क करेंगे।",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      interest: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="join" id="membership" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4 font-hind">
            राम नाम लेखन / सदस्य पंजीकरण
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-hind">
            हमारे परिवार का हिस्सा बनें और राम नाम की महिमा में शामिल हों
          </p>
        </div>

        <div className="max-w-2xl mx-auto animate-fade-in-up">
          <Card className="shadow-soft border-primary/20">
            <CardHeader className="bg-gradient-to-r from-primary to-accent text-white rounded-t-xl">
              <CardTitle className="text-2xl font-hind text-center">पंजीकरण फॉर्म</CardTitle>
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
                    className="mt-2 font-poppins"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="font-hind text-base">
                    फ़ोन नंबर *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="mt-2 font-poppins"
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>

                <div>
                  <Label htmlFor="address" className="font-hind text-base">
                    पता
                  </Label>
                  <Textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="mt-2 font-hind"
                    placeholder="अपना पता दर्ज करें"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="interest" className="font-hind text-base">
                    आध्यात्मिक रुचि
                  </Label>
                  <Textarea
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="mt-2 font-hind"
                    placeholder="राम नाम लेखन, भजन-कीर्तन, सत्संग आदि"
                    rows={3}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full gradient-devotional text-white hover:opacity-90 shadow-devotional font-hind text-lg"
                  size="lg"
                >
                  पंजीकरण करें
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MembershipForm;
