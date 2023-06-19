import { createContext, useMemo, useState } from "react";

import Navbar from "./components/navbar/Navbar";
import Landing from "./sections/landing/Landing";
import Section2 from "./sections/section2/Section2";
import Section3 from "./sections/section3/Section3";
import Section4 from "./sections/section4/Section4";
import Section5 from "./sections/section5/Section5";
import Section6 from "./sections/section6/Section6";
import Section7 from "./sections/section7/Section7";
import Footer from "./components/footer/Footer";

const NavbarContext = createContext(null);

function App() {
  const [theme, changeTheme] = useState("dark");
  const value = useMemo(() => ({ theme, changeTheme }), [theme]);

  return (
    <NavbarContext.Provider value={value}>
      <Navbar />
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
    </NavbarContext.Provider>
  );
}

export default App;
export { NavbarContext };
