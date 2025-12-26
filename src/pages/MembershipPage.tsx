import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MembershipForm from "@/components/MembershipForm";

const MembershipPage = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="सदस्यता पंजीकरण"
        description="सदस्यता फॉर्म - श्री राम नाम विश्व बैंक समिति से जुड़ने के लिए पंजीकरण करें। हमारे परिवार का हिस्सा बनें।"
      />
      <Header />
      <main>
        <MembershipForm />
      </main>
      <Footer />
    </div>
  );
};

export default MembershipPage;
