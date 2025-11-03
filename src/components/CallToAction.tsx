import { Building2, Users2, HandHeart, Mail } from "lucide-react";
import kalash from "@/assets/kalash.png";

const highlights = [
  { icon: Building2, title: "राम नाम लेखनकर्ता", count: "5,500,000" },
  { icon: Users2, title: "रजिस्टर्ड सदस्य", count: "250,000" },
  { icon: HandHeart, title: "संस्था के स्वयंसेवी", count: "4,500" },
];

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#fff8ef] to-[#fff4e6] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-6 bg-white rounded-2xl shadow-md p-8 mb-16 text-center animate-fade-in-up">
          {highlights.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-center">
                <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-primary to-accent rounded-full shadow-sm">
                  <item.icon className="text-white w-7 h-7" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-secondary font-hind">
                {item.title}
              </h3>
              <p className="text-base text-muted-foreground font-hind">
                {item.count}
              </p>
            </div>
          ))}
        </div>

        {/* Message Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in-up">
          <h4 className="text-2xl md:text-3xl font-bold text-primary mb-3 font-hind">
            ॐ लेखन सामग्री प्राप्त करें ॐ
          </h4>
          <p className="text-lg md:text-xl text-foreground/90 font-hind leading-relaxed">
            यदि आप राम नाम लिखने हेतु राम नाम सामग्री प्राप्त करना चाहते हैं या अपने प्रियजनों की याद में
            उनके जन्मदिन या किसी विशेष उत्सव पर राम नाम कॉपियां प्रिंट कराकर उन्हें बंटवाना चाहते हैं
            तो आप संस्था के ऑफिशियल और व्हाट्सएप नंबर पर संपर्क करें।
          </p>
        </div>

        {/* CTA Row */}
        <div className="relative bg-gradient-to-r from-[#ff9933] via-[#ffb84d] to-[#ffd480] rounded-3xl shadow-lg p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 animate-fade-in-up max-w-5xl mx-auto">
          {/* Kalash Image */}
          <div className="flex-shrink-0">
            <img
              src={kalash}
              alt="Kalash"
              className="w-24 md:w-32 drop-shadow-lg animate-fade-in-up"
            />
          </div>

          {/* Center Text */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-white/90 text-lg font-hind mb-1">व्हाट्सएप पर संपर्क करें</p>
            <a
              href="https://wa.me/919045000108"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl md:text-4xl font-bold text-white drop-shadow font-hind"
            >
              +91-9045000108
            </a>
          </div>

          {/* Newsletter Box */}
          <div className="flex flex-col items-center md:items-end gap-3 w-full md:w-auto">
            <p className="text-white/90 text-lg font-semibold font-hind">Our Newsletter</p>
            <div className="flex bg-white/20 rounded-full overflow-hidden backdrop-blur-md shadow-inner w-full max-w-xs md:max-w-sm">
              <input
                type="email"
                placeholder="Enter email address"
                className="flex-1 px-5 py-3 text-white placeholder-white/80 bg-transparent font-hind focus:outline-none"
              />
              <button className="bg-white text-primary px-5 py-3 hover:bg-white/90 transition-all">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
