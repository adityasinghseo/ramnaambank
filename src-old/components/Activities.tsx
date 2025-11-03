import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { BookOpen, Users, Heart, Calendar } from "lucide-react";

const Activities = () => {
  const activities = [
    {
      icon: BookOpen,
      title: "राम नाम लेखन",
      description: "भगवान श्री राम के नाम का लेखन करें और आध्यात्मिक शांति प्राप्त करें",
      color: "from-primary to-accent",
    },
    {
      icon: Users,
      title: "सदस्य पंजीकरण",
      description: "हमारे परिवार का हिस्सा बनें और धार्मिक गतिविधियों में भाग लें",
      color: "from-secondary to-sacred-light",
    },
    {
      icon: Heart,
      title: "दान करें",
      description: "धार्मिक और सामाजिक कार्यों में योगदान दें",
      color: "from-accent to-golden",
    },
    {
      icon: Calendar,
      title: "आयोजन और कार्यक्रम",
      description: "भजन-कीर्तन, सत्संग और विशेष धार्मिक कार्यक्रमों में शामिल हों",
      color: "from-primary to-devotional-dark",
    },
  ];

  return (
    <section id="activities" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4 font-hind">
            हमारी गतिविधियाँ
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-hind">
            श्री राम की सेवा में विभिन्न धार्मिक और सामाजिक कार्यक्रम
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {activities.map((activity, index) => (
            <Card 
              key={index}
              className="group hover:shadow-devotional transition-smooth border-primary/20 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${activity.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth shadow-soft`}>
                  <activity.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3 font-hind">
                  {activity.title}
                </h3>
                <p className="text-muted-foreground font-hind">
                  {activity.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in-up">
          <Button 
            size="lg"
            className="gradient-devotional text-white hover:opacity-90 shadow-devotional font-hind text-lg"
            asChild
          >
            <a href="#membership">सदस्य बनने के लिए यहाँ क्लिक करें</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Activities;
