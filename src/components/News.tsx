import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const News = () => {
  return (
    <section id="news" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4 font-hind">
            समाचार और अपडेट
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-soft border-primary/20 animate-fade-in-up">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-1">
                  <div className="inline-block bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 font-hind">
                    नवीनतम
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-4 font-hind">
                    विशाल राम नाम लेखन अभियान का आयोजन
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed font-hind">
                    आगामी राम नवमी के अवसर पर एक विशाल राम नाम लेखन अभियान का आयोजन किया जा रहा है। 
                    इस कार्यक्रम में हजारों भक्त राम नाम का लेखन करेंगे और भक्ति भाव में डूब जाएंगे।
                  </p>
                  <Button 
                    variant="link" 
                    className="text-primary hover:text-primary/80 p-0 font-hind text-base"
                  >
                    और पढ़ें <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="w-full md:w-48 h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                  <span className="text-6xl font-hind">ॐ</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default News;
