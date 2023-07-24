import cls from "./MainPage.module.scss";
import { Navbar } from "../Navbar/Navbar";
import { Home } from "../Home/Home";
import { Mission } from "../Mission/Mission";

export const MainPage = () => {
  return (
    <section className={cls.MainPage}>
      <Navbar />
      <Home />
      <Mission />
    </section>
  );
};
