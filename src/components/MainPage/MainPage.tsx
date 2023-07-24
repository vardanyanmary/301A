import cls from "./MainPage.module.scss";
import { Navbar } from "../Navbar/Navbar";
import { Home } from "../Home/Home";

export const MainPage = () => {
  return (
    <section className={cls.MainPage}>
        <Navbar/>
        <Home />
    </section>
  );
};
