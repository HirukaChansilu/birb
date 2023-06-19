import Landing from "./sections/landing/Landing";
import Section2 from "./sections/section2/Section2";
import Section3 from "./sections/section3/Section3";
import Section4 from "./sections/section4/Section4";
import Section5 from "./sections/section5/Section5";
import Section6 from "./sections/section6/Section6";
import Section7 from "./sections/section7/Section7";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      {/* TODO: Navbar */}
      <Landing />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <div className="footer-cropper">
        <Section7 />
        <Footer />
      </div>
    </>
  );
}

export default App;
