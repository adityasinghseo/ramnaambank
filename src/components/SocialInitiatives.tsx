import g1 from "@/assets/g1.webp";
import g2 from "@/assets/g2.webp";
import g3 from "@/assets/g3.webp";
import g4 from "@/assets/g4.webp";
import g5 from "@/assets/g5.webp";
import g6 from "@/assets/g6.webp";
import g7 from "@/assets/g7.webp";
import g8 from "@/assets/g8.webp";
import g9 from "@/assets/g9.webp";

const initiatives = [
  {
    title: "श्री राम नाम लेखन सामग्री",
    desc: "यदि आप राम नाम लिखने हेतु राम नाम सामग्री प्राप्त करना चाहते है या अपने प्रियजनों की याद में उनके जन्मदिन या किसी विशेष उत्सव पर राम नाम कॉपियां प्रिंट कराकर उन्हें बंटवाना चाहते है तो आप संस्था के ऑफिशियल और वाट्सअप नंबर 9045000108 पर संपर्क करें।",
    image: g1,
  },
  {
    title: "श्री राम अन्नक्षेत्र",
    desc: "संस्था की ओर से अक्सर पूर्णमासी/अमावस्या और स्नान पर्व आदि विशेष पर्वो पर भण्डारा किया जाता है। जिसमें हजारों लोग भोजन पाकर तृप्त होते है। अपना आशीर्वाद देते है। संत महात्माओं का आशीर्वाद आपके लिए वरदान साबित होगा।",
    image: g2,
  },
  {
    title: "श्री राम नाम संग्रहालय",
    desc: "पूरे भारत वर्ष में एकमात्र भव्य और दिव्य श्री राम नाम संग्रहालय का निर्माण हरिद्वार में हो रहा है। जोकि सनातन की विशेष पहचान होगा। हमारी आने वाली पीढ़ी के लिए संस्कारवान होगा।",
    image: g3,
  },
  {
    title: "शिक्षा के क्षेत्र में",
    desc: "संस्था द्वारा पढ़ने लिखने वाले गरीब बच्चों को पढ़ने के लिए कॉपी किताबें एवं पाठ्य सामग्री उपलब्ध करवाई जाती है। ताकि पढ़ने लिखने वाले गरीब बच्चे पैसे के अभाव में अशिक्षित न रह जाएं।",
    image: g4,
  },
  {
    title: "गंगा घाट मंदिर निर्माण",
    desc: "श्री राम नाम विश्व बैंक समिति का एक घाट हरिद्वार के ऋषिकुल स्थित गंगातट पर स्थित है। जिसमें मंदिर निर्माण, टीन शेड और पार्क निर्माण आदि कार्य चल रहे हैं।",
    image: g5,
  },
  {
    title: "पर्यावरण के क्षेत्र में",
    desc: "पृथ्वी को ग्लोबल वार्मिंग से बचाने की श्रृंखला में संस्था समय-समय पर वृक्षारोपण अभियान चलाती है जिसमें पूरे देश में लाखों पौधे लगाए जाते हैं।",
    image: g6,
  },
  {
    title: "स्वास्थ के क्षेत्र में",
    desc: "संस्था समय-समय पर जरूरतमंदों के लिए चिकित्सा / स्वास्थ शिविर एवं रक्तदान शिविर का आयोजन करती है तथा आवश्यक सामग्री / दवाईयां आदि वितरित करती है।",
    image: g7,
  },
  {
    title: "गौशाला के क्षेत्र में",
    desc: "संस्था निराश्रित एवं जरूरतमंद पशुओं के लिए रहने एवं चारे की व्यवस्था करती है। गौ सेवा क्षेत्र में संस्था विगत 5 वर्षों से निरंतर कार्यरत है।",
    image: g8,
  },
  {
    title: "वृद्धाश्रम के क्षेत्र में",
    desc: "संस्था हरिद्वार में एक ऐसा वृद्धाश्रम तैयार करने जा रही है जोकि गंगा किनारे सभी सुविधाओं से युक्त होगा ताकि किसी भी वृद्ध व्यक्ति को कष्टों का सामना ना करना पड़े।",
    image: g9,
  },
];

const SocialInitiatives = () => {
  return (
    <section id="initiatives" className="py-20 bg-gradient-to-b from-cream to-[#fff7ef]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4 font-hind">
            जनहित कार्य और सहयोग
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto font-hind leading-relaxed">
            श्री राम नाम विश्व बैंक समिति समाज और धर्म की सेवा के लिए अनेक क्षेत्रों में सक्रिय है।
            आप भी इन दिव्य कार्यों में सहयोग देकर पुण्य के भागी बन सकते हैं।
          </p>
        </div>

        {/* Grid 3x3 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {initiatives.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-devotional hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-primary mb-3 font-hind">
                  {item.title}
                </h3>
                <p className="text-foreground/80 font-hind text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up">
          <a
            href="https://wa.me/919045000108"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-primary to-accent text-white font-hind text-lg px-8 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-500"
          >
            दान या सहयोग के लिए संपर्क करें
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialInitiatives;
