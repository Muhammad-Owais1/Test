import React from "react";
import Navbar from "./components/navbar.jsx";
import SectionOne from "./components/sectionOne.jsx";
import SectionTwo from "./components/sectionTwo.jsx";
import SectionThree from "./components/sectionThree.jsx";
import SectionFour from "./components/sectionFour.jsx";
import SectionFive from "./components/sectionFive.jsx";
import SectionSix from "./components/sectionSix.jsx";
import SectionSeven from "./components/sectionSeven.jsx";
import SectionEight from "./components/sectionEight.jsx";
import SectionNine from "./components/sectionNine.jsx";
import SectionTen from "./components/sectionTen.jsx";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <SectionNine />
      <SectionTen />
    </div>
  );
}

export default App;
