import "./App.scss";
import Header from "./components/Header";
import Section from "./components/Section";
import SmallSection from "./components/SmallSection";
import CreamSection from "./components/CreamSection";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import { Data } from "./components/Data";

function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <SmallSection />
      <CreamSection />
      <Carousel slides={Data} />
      <Footer />
    </div>
  );
}

export default App;
