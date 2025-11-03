import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MembershipForm from "@/components/MembershipForm";

const MembershipPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <MembershipForm />
      </main>
      <Footer />
    </div>
  );
};

export default MembershipPage;
