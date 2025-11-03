import { Facebook, Youtube, Instagram, MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const quickLinks = [
    { label: "होम", href: "/" },
    { label: "हमारे बारे में", href: "#about" },
    { label: "गतिविधियाँ", href: "#activities" },
    { label: "संपर्क करें", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: MessageCircle, href: "#", label: "WhatsApp" },
  ];

  return (
    <footer id="contact" className="bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and About */}
          <div className="md:col-span-2">
            <img src={logo} alt="Logo" className="h-20 mb-4 brightness-0 invert" />
            <p className="text-white/80 mb-4 font-hind leading-relaxed">
              श्री राम नाम विश्व बैंक समिति एक धार्मिक व सामाजिक संस्था है जो राम नाम के प्रचार-प्रसार और समाज सेवा के लिए समर्पित है।
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-smooth"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-hind">त्वरित लिंक</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-primary transition-smooth font-hind"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-hind">संपर्क जानकारी</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-white/80 font-hind">
                  राम नाम बैंक, श्रीराम मंदिर<br />
                  अयोध्या रोड, फैजाबाद<br />
                  उत्तर प्रदेश
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+91-9045000118" className="text-white/80 hover:text-primary transition-smooth font-poppins">
                  +91-9045000118
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:info@ramnaambank.org" className="text-white/80 hover:text-primary transition-smooth font-poppins">
                  info@ramnaambank.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* App Download Buttons */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4 font-hind">हमारा मोबाइल ऐप डाउनलोड करें</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#" className="inline-block bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg transition-smooth">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">📱</div>
                  <div className="text-left">
                    <div className="text-xs text-white/70 font-poppins">Download on</div>
                    <div className="text-sm font-bold font-poppins">Google Play</div>
                  </div>
                </div>
              </a>
              <a href="#" className="inline-block bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg transition-smooth">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">🍎</div>
                  <div className="text-left">
                    <div className="text-xs text-white/70 font-poppins">Download on</div>
                    <div className="text-sm font-bold font-poppins">App Store</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/60 font-hind">
            © 2025 श्री राम नाम विश्व बैंक समिति। सर्वाधिकार सुरक्षित।
          </p>
          <p className="text-white/60 mt-2 font-hind text-sm">
            जय श्री राम 🙏
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
