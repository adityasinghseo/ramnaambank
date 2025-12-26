import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Founder from "@/components/Founder";
import Activities from "@/components/Activities";
import Faq from "@/components/FAQ"
import Team from "@/components/Team"
import Social from "@/components/SocialInitiatives"
import Cta from "@/components/CallToAction"
import Events from "@/components/Events";
import News from "@/components/News";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="होम पेज"
        description="श्री राम नाम विश्व बैंक समिति - भक्ति, सेवा और समर्पण का एक अनूठा संगम। हमसे जुड़ें और राम नाम की महिमा का अनुभव करें।"
      />
      <Header />
      <main>
        <Hero />
        <About />
        <Founder />
        <Activities />
        <Faq />
        <Team />
        <Social />
        <Cta />
        <Events />
        <News />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
