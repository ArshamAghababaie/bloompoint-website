import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Solutions from "./components/Solutions";
import ProblemNeed from "./components/ProblemNeed";
import BPEcosystem from "./components/BPEcosystem";
import Workflow from "./components/Workflow";
import BookACall from "./components/BookACall";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <ProblemNeed />
      <Solutions />
      <BPEcosystem />
      {/* <Workflow /> */}
      <BookACall />
      <Footer />
    </div>
  );
}
