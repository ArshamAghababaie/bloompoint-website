"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Solutions from "./components/Solutions";
import ProblemNeed from "./components/ProblemNeed";
import BPEcosystem from "./components/BPEcosystem";
import Workflow from "./components/Workflow";
import BookAMeeting from "./components/BookAMeeting";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";

export default function Page() {
  const [selectedProblems, setSelectedProblems] = useState<string[]>([]);
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([]);
  const [otherProblem, setOtherProblem] = useState("");
  const [otherNeed, setOtherNeed] = useState("");

  return (
    <div className="overflow-x-clip">
      <Navbar />
      <Hero />
      <ProblemNeed
        selectedProblems={selectedProblems}
        setSelectedProblems={setSelectedProblems}
        selectedNeeds={selectedNeeds}
        setSelectedNeeds={setSelectedNeeds}
        otherProblem={otherProblem}
        setOtherProblem={setOtherProblem}
        otherNeed={otherNeed}
        setOtherNeed={setOtherNeed}
      />
      <Solutions />
      <BPEcosystem />
      <Workflow />
      <FAQ />
      <BookAMeeting
        selectedProblems={selectedProblems}
        selectedNeeds={selectedNeeds}
        otherProblem={otherProblem}
        otherNeed={otherNeed}
      />
      <Footer />
    </div>
  );
}
