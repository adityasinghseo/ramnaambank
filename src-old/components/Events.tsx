import { Card, CardContent } from "./ui/card";
import { Calendar, MapPin } from "lucide-react";

const Events = () => {
  const events = [
    {
      title: "राम नाम संकीर्तन",
      date: "हर शनिवार",
      location: "मुख्य मंदिर परिसर",
      description: "भक्तिमय वातावरण में राम नाम का सामूहिक जाप और भजन-कीर्तन",
    },
    {
      title: "सत्संग प्रवचन",
      date: "प्रत्येक रविवार",
      location: "सत्संग भवन",
      description: "आध्यात्मिक ज्ञान और राम भक्ति पर विशेष प्रवचन",
    },
    {
      title: "राम नवमी उत्सव",
      date: "चैत्र मास",
      location: "मुख्य परिसर",
      description: "भगवान राम के जन्मोत्सव का भव्य आयोजन",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4 font-hind">
            आगामी कार्यक्रम
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-hind">
            हमारे धार्मिक और सामाजिक कार्यक्रमों में शामिल हों
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <Card 
              key={index}
              className="group hover:shadow-devotional transition-smooth border-primary/20 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-2 font-hind">
                    {event.title}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="font-hind">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="font-hind">{event.location}</span>
                  </div>
                  <p className="text-foreground pt-2 font-hind">
                    {event.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
