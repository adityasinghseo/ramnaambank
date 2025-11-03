import Header from "@/components/Header";
import Donation from "@/components/Donation";
import Footer from "@/components/Footer";

const DonationPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Donation />
      </main>
      <Footer />
    </div>
  );
};

export default DonationPage;
