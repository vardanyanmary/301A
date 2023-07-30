import { Navbar } from "../Navbar/Navbar";
import { Home } from "../Home/Home";
import { Mission } from "../Mission/Mission";
import { Important } from "../Important/Important";
import { Hypotheses } from "../Hypotheses/Hypotheses";
import { Projects } from "../Projects/Projects";
import { EcoSystem } from "../EcoSystem/EcoSystem";
import { News } from "../News/News";
import { Contact } from "../Contact/Contact";
import { Footer } from "../Footer/Footer";

export const MainPage = () => {
  return (
    <section>
      <Navbar />
      {/* <Home /> */}
      <Mission />
      <Important />
      <Hypotheses />
      <Projects />
      <EcoSystem />
      <News />
      <Contact />
      <Footer />
    </section>
  );
};
