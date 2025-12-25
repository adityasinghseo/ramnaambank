import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import rampic from "@/assets/rampic.png";
import rambaba from "@/assets/rambaba.png";
import teamone from "@/assets/teamone.png";
import teamtwo from "@/assets/teamtwo.png";
import { Phone, Mail, MapPin, Facebook, Youtube, Instagram } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-cream text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6 font-hind">
              श्री राम नाम विश्व बैंक समिति
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground font-hind leading-relaxed max-w-3xl mx-auto">
              “काम से राम की ओर…” — यही इस संस्था का मूल मंत्र है।
              श्री राम नाम विश्व बैंक समिति (रजि.) 37 वर्षों से धर्म, भक्ति और आत्मशुद्धि का संदेश प्रसारित कर रही है।
            </p>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-16 bg-[#fffaf0]">
          <div className="container mx-auto px-4 text-center">
            <div className="relative flex justify-center">
              <div className="absolute inset-0 flex justify-center">
                <div className="w-[420px] h-[420px] md:w-[500px] md:h-[500px] bg-gradient-to-b from-yellow-200/30 to-transparent rounded-full blur-3xl"></div>
              </div>
              <img
                src={rampic}
                alt="Shri Ram Naam"
                className="relative z-10 w-[320px] md:w-[420px] drop-shadow-2xl"
              />
            </div>

            <div className="max-w-5xl mx-auto mt-12">
              <Card className="shadow-soft border-primary/20 bg-white/80 backdrop-blur-sm animate-fade-in-up">
                <CardContent className="p-8 md:p-10 space-y-6 text-lg leading-relaxed text-muted-foreground font-hind">
                  <p>
                    श्री राम नाम विश्व बैंक समिति एक अनूठा आध्यात्मिक संस्थान है, जहाँ किसी मुद्रा का नहीं,
                    बल्कि भगवान के नामों का संकलन और संग्रह किया जाता है। यहाँ भक्तजन श्रीराम, शिव, कृष्ण,
                    राधा आदि के पावन नामों को लेखन के माध्यम से अर्पित करते हैं। यह संस्था पिछले 37 वर्षों
                    से सतत रूप से कार्य कर रही है और अब तक लाखों करोड़ बार भगवान के नाम का लेखन संकलित
                    किया जा चुका है।
                  </p>

                  <h3 className="text-2xl text-secondary font-bold">हमारा उद्देश्य</h3>
                  <p>
                    हमारा मुख्य ध्येय है — <strong>“काम से राम की ओर।”</strong>
                    हम सांसारिक जीवन में व्यस्त जनों को भगवान के नाम से जोड़ते हुए उन्हें धर्म, भक्ति और
                    आत्मशुद्धि की ओर ले जाने के लिए प्रेरित करते हैं।
                  </p>

                  <h3 className="text-2xl text-secondary font-bold">हमारी शुरुआत</h3>
                  <p>
                    संस्था की स्थापना अगस्त 1988 में <strong>श्री सीताराम बाबा</strong> के दिव्य मार्गदर्शन में हुई।
                    बाबा स्वयं प्रतिदिन प्रभातकाल में राम नाम का जाप किया करते थे। उन्होंने अपने परम शिष्य
                    और बजरंगबली के अनन्य उपासक <strong>पंडित कुलदीप तिवारी (रामबाबा)</strong> को इस महान कार्य के लिए चुना
                    और राम नाम की शक्ति से परिचित कराया।
                  </p>

                  <h3 className="text-2xl text-secondary font-bold">आज का स्वरूप</h3>
                  <p>
                    आज श्री राम नाम विश्व बैंक समिति एक सशक्त और समर्पित संगठन के रूप में विकसित हो चुका है,
                    जो सनातन धर्म के प्रचार, राम नाम लेखन, सामूहिक जाप और धार्मिक जागरूकता के कार्यों में
                    अग्रणी भूमिका निभा रहा है।
                  </p>

                  <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-md italic">
                    💠 <strong>राम नाम ही समाधान है।</strong>
                    आइए, इस आध्यात्मिक अभियान का हिस्सा बनें और अपने जीवन को राममय बनाएं।
                  </div>

                  <p>📜 हमसे जुड़ें, राम नाम लिखें, और पुण्य अर्जित करें।</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-20 bg-gradient-to-br from-accent/10 via-[#fffaf0] to-primary/10">
          <div className="container mx-auto px-4 max-w-5xl">
            <Card className="shadow-soft border-primary/20 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-10 flex flex-col md:flex-row items-center gap-10 font-hind text-muted-foreground">
                <div className="flex justify-center md:w-1/3">
                  <img
                    src={rambaba}
                    alt="Swami Ram Baba Ji"
                    className="w-60 h-60 md:w-72 md:h-72 object-cover rounded-full border-4 border-primary/30 shadow-xl"
                  />
                </div>

                <div className="md:w-2/3 space-y-4">
                  <h2 className="text-3xl font-bold text-secondary">
                    परम श्रद्धेय स्वामी रामबाबा जी महाराज
                  </h2>
                  <p className="text-lg leading-relaxed">
                    आचार्य श्री रामबाबा जी श्री राम नाम विश्व बैंक समिति के संस्थापक थे।
                    जिन्होंने जीवनकाल में लाखों लोगों को प्रेरणा देकर श्री राम नाम से जोड़ा।
                    संस्था के लगभग 37 वर्षों के कार्यकाल में अब तक असंख्य मात्रा में राम नाम लिखा जा चुका है —
                    जो अपने आप में एक आध्यात्मिक रिकॉर्ड है।
                    इस महान कार्य का श्रेय पूर्ण रूप से आचार्य श्री रामबाबा जी को जाता है।
                  </p>
                  <p className="text-lg leading-relaxed">
                    आज भले ही वह हमारे बीच नहीं हैं, परंतु उनके द्वारा प्रारंभ किया गया यह दिव्य कार्य
                    नित्य निरंतर चल रहा है और लाखों भक्तों को राम नाम के पथ पर अग्रसर कर रहा है।
                  </p>
                  <p className="text-lg font-semibold text-primary">
                    श्री राम नाम विश्व बैंक समिति | जय श्रीराम 🙏
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* National President Section - Visiting Card Style */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 flex flex-col md:flex-row hover:shadow-2xl transition-shadow duration-300">

              {/* Image Section - Left Panel */}
              <div className="md:w-2/5 relative h-[500px] md:h-auto bg-gradient-to-b from-orange-100 to-orange-50">
                {/* Full Image Display - Object Top to avoid head crop */}
                <img
                  src={teamone}
                  alt="Acharya Shri Sumit Tiwari Ji"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold">आचार्य श्री सुमित तिवारी जी</h3>
                    <p className="text-orange-300 font-medium">राष्ट्रीय अध्यक्ष</p>
                  </div>
                </div>
              </div>

              {/* Content Section - Right Panel */}
              <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">

                {/* Header (Desktop) */}
                <div className="hidden md:block mb-8 border-b pb-4">
                  <h2 className="text-4xl font-bold text-gray-800 font-hind mb-2">
                    आचार्य श्री सुमित तिवारी जी
                  </h2>
                  <div className="inline-block px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full font-bold uppercase tracking-wider text-sm shadow-sm">
                    राष्ट्रीय अध्यक्ष
                  </div>
                </div>

                {/* Bio */}
                <p className="text-gray-600 text-lg leading-relaxed mb-8 font-hind text-justify">
                  आचार्य श्री पंडित सुमित तिवारी जी संस्था श्री राम नाम विश्व बैंक समिति के वर्तमान में राष्ट्रीय अध्यक्ष है। वह पेशे से कंप्यूटर सॉफ्टवेयर इंजीनियर है। धार्मिक पृष्ठभूमि होने के कारण उन्होंने अपने जीवन का अधिकांश समय इस राम नाम सेवा में लगा दिया। उनका संकल्प है कि राम नाम को जन-जन तक पहुँचाया जाए।
                </p>

                {/* Contact Details - Visiting Card Layout */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 space-y-4 shadow-inner">
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-orange-500 shadow-sm group-hover:bg-orange-500 group-hover:text-white transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-semibold tracking-wider">Mobile</p>
                      <p className="text-gray-800 font-medium font-hind">+91-9045000108</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-orange-500 shadow-sm group-hover:bg-orange-500 group-hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-semibold tracking-wider">Email</p>
                      <p className="text-gray-800 font-medium font-hind">sumit@ramnaam.in</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-orange-500 shadow-sm shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-semibold tracking-wider">Address</p>
                      <p className="text-gray-800 font-medium font-hind leading-snug">
                        8 गोविंदपुरी, रानीपुर मोड, वुडलैंड शोरूम के ऊपर, हरिद्वार, उत्तराखंड 249401
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Footer */}
                <div className="mt-8 flex gap-4">
                  <a href="https://www.facebook.com/people/Shriramnaambank/61556191174978/" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-[#1877F2] hover:text-white transition-all">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="https://www.youtube.com/@raamnaambank" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-[#FF0000] hover:text-white transition-all">
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a href="https://www.instagram.com/ramnaambank/" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-[#E4405F] hover:text-white transition-all">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* National General Secretary Section - Visiting Card Style */}
        <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 flex flex-col md:flex-row-reverse hover:shadow-2xl transition-shadow duration-300">

              {/* Image Section - Right Panel */}
              <div className="md:w-2/5 relative h-[500px] md:h-auto bg-gradient-to-b from-gray-100 to-gray-200">
                {/* Full Image Display */}
                <img
                  src={teamtwo}
                  alt="Shri Vikas Garg Ji"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold">श्री विकास गर्ग जी</h3>
                    <p className="text-red-300 font-medium">राष्ट्रीय महासचिव</p>
                  </div>
                </div>
              </div>

              {/* Content Section - Left Panel */}
              <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">

                {/* Header (Desktop) */}
                <div className="hidden md:block mb-8 border-b pb-4">
                  <h2 className="text-4xl font-bold text-gray-800 font-hind mb-2">
                    श्री विकास गर्ग जी
                  </h2>
                  <div className="inline-block px-4 py-1.5 bg-red-50 text-red-600 rounded-full font-bold uppercase tracking-wider text-sm shadow-sm">
                    राष्ट्रीय महासचिव
                  </div>
                </div>

                {/* Bio */}
                <p className="text-gray-600 text-lg leading-relaxed mb-8 font-hind text-justify">
                  श्री विकास गर्ग जी श्री राम नाम विश्व बैंक समिति के राष्ट्रीय महासचिव हैं। वह पेशे से एक उद्योगपति है। राम नाम के प्रभाव और उसके लेखन को जन-जन तक पहुंचाने कि लिए वह प्रतिबद्ध हैं। उनका संकल्प है कि जब तक श्री राम नाम का संग्रहालय का निर्माण कार्य पूरा नहीं हो जाता तब तक विश्राम नहीं किया जाएगा।
                </p>

                {/* Contact Details - Visiting Card Layout */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 space-y-4 shadow-inner">
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-red-500 shadow-sm group-hover:bg-red-500 group-hover:text-white transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-semibold tracking-wider">Mobile</p>
                      <p className="text-gray-800 font-medium font-hind">+91-8868888601</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-red-500 shadow-sm group-hover:bg-red-500 group-hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-semibold tracking-wider">Email</p>
                      <p className="text-gray-800 font-medium font-hind">vikas@raamnaam.in</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-red-500 shadow-sm shrink-0 group-hover:bg-red-500 group-hover:text-white transition-colors">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-semibold tracking-wider">Address</p>
                      <p className="text-gray-800 font-medium font-hind leading-snug">
                        24 Fifth st., New York, US
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Footer */}
                <div className="mt-8 flex gap-4">
                  <a href="https://www.facebook.com/people/Shriramnaambank/61556191174978/" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-[#1877F2] hover:text-white transition-all">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="https://www.youtube.com/@raamnaambank" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-[#FF0000] hover:text-white transition-all">
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a href="https://www.instagram.com/ramnaambank/" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-[#E4405F] hover:text-white transition-all">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
