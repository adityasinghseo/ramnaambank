import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const faqs = [
  { question: "राम नाम लेखन क्यों करते हैं ?", answer: "राम नाम लेखन एक साधना है जो हमारे मन, वाणी और कर्म को शुद्ध करता है। यह आत्मिक शांति, सकारात्मक ऊर्जा और ईश्वरीय कृपा प्राप्त करने का सरल मार्ग है। ‘राम में ही आराम है और राम में ही विश्राम है।’" },
  { question: "राम नाम से क्या लाभ है ?", answer: "राम नाम से मन को शांति, आत्मबल और सच्ची भक्ति प्राप्त होती है। इसके जप से कष्ट दूर होते हैं, पाप नष्ट होते हैं, और जीवन में दिव्यता का संचार होता है।" },
  { question: "आखिर लिखे हुए राम नाम का क्या होता है ? लेखन पुस्तिका कहां जमा करें ?", answer: "लिखा हुआ राम नाम संस्था श्री राम नाम विश्व बैंक समिति (रजि.) में सुरक्षित रखा जाता है। इन्हें हरिद्वार स्थित मुख्यालय में संग्रहालय के रूप में रखा जाता है ताकि ये नाम सदैव पूज्य रहें।" },
  { question: "श्री राम नाम विश्व बैंक समिति के पास अब तक कितना राम नाम जमा है ?", answer: "संस्था पिछले 37 वर्षों से लाखों करोड़ों की संख्या में हस्तलिखित राम नाम संकलित कर चुकी है। यह विश्व की सबसे बड़ी राम नाम सेवा संस्था है।" },
  { question: "इतनी बड़ी संख्या में राम नाम कहां से आता है ?", answer: "भारत और विदेशों से भक्त अपनी पुस्तिकाएं संस्था को भेजते हैं। देशभर में 275 से अधिक शाखाओं के माध्यम से राम नाम एकत्र किया जाता है।" },
  { question: "राम नाम बैंक कहां है ?", answer: "संस्था का मुख्यालय हरिद्वार (उत्तराखंड) में स्थित है — श्री राम नाम विश्व बैंक समिति आश्रम, बिल्केश्वर बाईपास रोड, निकट वेदाग्रीन बैंकट हाल, ललतारौ पुल, हरिद्वार 249401।" },
  { question: "श्री राम नाम बैंक से कैसे जुड़ें और कॉन्टेक्ट नंबर क्या है ?", answer: "आप संस्था की वेबसाइट www.ramnaam.in पर जाकर या नंबर 9045000108 / 8868888601 / 9410110900 पर संपर्क करके सदस्य या स्वयंसेवक बन सकते हैं।" },
  { question: "लिखे हुए राम नाम का क्या होता है ?", answer: "संस्था द्वारा लिखा हुआ राम नाम संग्रहालय में सुरक्षित रखा जाता है और कई मंदिरों में विधिवत प्रतिष्ठित किया जाता है। हाल ही में 51 लाख करोड़ से अधिक राम नाम श्री राम मंदिर अयोध्या में अर्पित किए गए।" },
  { question: "भारत में श्री राम नाम संग्रहालय कहां और कैसा होगा ?", answer: "हरिद्वार में विश्व का सबसे बड़ा और भव्य श्री राम नाम संग्रहालय निर्माणाधीन है, जहां करोड़ों हस्तलिखित राम नाम दर्शनों के लिए सुरक्षित रखे जाएंगे।" },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4 font-hind">
            प्रायः पूछे जाने वाले प्रश्न (FAQ)
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto font-hind leading-relaxed">
            आपके मन में उठने वाले सर्वाधिक प्रश्नों के उत्तर यहाँ प्राप्त कर सकते हैं।
            आज के व्यस्त जीवन में भक्ति और राम नाम ही मन की शांति का सबसे सुंदर माध्यम है।
          </p>
        </div>

        {/* FAQ Accordions */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="overflow-hidden border border-primary/20 shadow-sm hover:shadow-md transition-all duration-300 bg-white/90 backdrop-blur-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left font-hind text-lg text-secondary font-medium"
              >
                {faq.question}
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-primary" : "text-muted-foreground"
                  }`}
                />
              </button>
              {openIndex === index && (
                <CardContent className="px-5 pb-5 text-foreground/90 font-hind text-base leading-relaxed animate-fade-in-up">
                  {faq.answer}
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12 animate-fade-in-up">
          <p className="text-lg text-muted-foreground font-hind">
            अधिक जानकारी के लिए संपर्क करें:{" "}
            <span className="text-primary font-semibold">
              9045000108 / 8868888601 / 9410110900
            </span>
          </p>
          <p className="text-muted-foreground font-hind">
            Website: <a href="https://www.ramnaam.in" className="text-primary hover:underline">www.ramnaam.in</a> | Email: raamnaambank@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
