import Landing from "./sections/landing/Landing";
import Section2 from "./sections/section2/Section2";
import Section3 from "./sections/section3/Section3";
import Section4 from "./sections/section4/Section4";

function App() {
  return (
    <>
      {/* TODO: Navbar */}
      <Landing />
      <Section2 />
      <Section3 />
      <Section4 />
      <div
        className="dummy white-bg"
        style={{
          zIndex: 30,
        }}
      />
    </>
  );
}

export default App;
