import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Founder from "@/components/Founder";
import Activities from "@/components/Activities";
import MembershipForm from "@/components/MembershipForm";
import Donation from "@/components/Donation";
import Events from "@/components/Events";
import News from "@/components/News";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Founder />
        <Activities />
        <MembershipForm />
        <Donation />
        <Events />
        <News />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
