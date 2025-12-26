import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Donation from "@/components/Donation";
import Footer from "@/components/Footer";

const DonationPage = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="दान करें"
        description="दान करें - समाज सेवा और धर्म के कार्य में अपना योगदान दें। श्री राम नाम विश्व बैंक समिति।"
      />
      <Header />
      <main>
        <Donation />
      </main>
      <Footer />
    </div>
  );
};

export default DonationPage;
