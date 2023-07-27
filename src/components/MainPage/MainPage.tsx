import cls from "./MainPage.module.scss";
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
    <section className={cls.MainPage}>
      {/* <Navbar /> */}
      <Home />
      {/* <Mission /> */}
      {/* <Important /> */}
      {/* <Hypotheses />   // sra buttonnery poqracneluc sarqel select */}
      {/* <Projects /> */}
      {/* <EcoSystem /> */}
      {/* <News /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </section>
  );
};
