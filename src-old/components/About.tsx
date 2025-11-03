import { Card } from "./ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4 font-hind">
            श्री राम नाम विश्व बैंक का परिचय
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="animate-fade-in-up">
            <Card className="p-8 shadow-soft border-primary/20">
              <div className="space-y-6">
                <p className="text-lg text-foreground leading-relaxed font-hind">
                  श्री राम नाम विश्व बैंक (रजि.) एक पंजीकृत धार्मिक एवं सामाजिक संस्था है जो भगवान श्री राम के नाम के प्रचार-प्रसार और समाज कल्याण के लिए समर्पित है। 
                  हमारा मुख्य उद्देश्य राम नाम के माध्यम से आध्यात्मिक जागृति लाना और मानवता की सेवा करना है।
                </p>
                <p className="text-lg text-foreground leading-relaxed font-hind">
                  संस्था की स्थापना परम पूज्य स्वामी रामबाबा जी महाराज के मार्गदर्शन में की गई है। हम राम नाम लेखन, सामूहिक जप, भजन-कीर्तन, धार्मिक प्रवचन, सामाजिक सेवा, और विभिन्न धार्मिक आयोजनों के माध्यम से समाज में सकारात्मक परिवर्तन का संदेश फैला रहे हैं।
                </p>
                <div className="pt-4">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <p className="text-foreground font-medium font-hind">राम नाम लेखन और जाप</p>
                  </div>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <p className="text-foreground font-medium font-hind">आध्यात्मिक सत्संग और प्रवचन</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <p className="text-foreground font-medium font-hind">सामाजिक सेवा कार्यक्रम</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="animate-fade-in-up">
            <div className="bg-gradient-to-br from-primary to-accent p-8 rounded-2xl shadow-devotional text-white">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4 font-hind">ॐ</div>
                <h3 className="text-2xl font-bold mb-2 font-hind">हमारा विजन</h3>
              </div>
              <p className="text-white/90 text-lg leading-relaxed font-hind">
                विश्व में राम नाम के माध्यम से शांति, प्रेम और सद्भावना का प्रसार करना तथा प्रत्येक व्यक्ति को आध्यात्मिक मार्ग पर आगे बढ़ने के लिए प्रेरित करना।
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
