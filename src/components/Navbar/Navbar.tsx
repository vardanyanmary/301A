import { links } from "../../constants/navbarMenuLinks";
import img301 from "../../shared/assets/301 logo black.svg";
import cls from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <section className={cls.Navbar}>
      <img src={img301} alt="301" className={cls.img301} />

      <div className={cls.navEng}>
        <nav className={cls.navigation}>
          {links.map((link) => (
            <a key={link.name} href={link.href}>
              {link.name}
            </a>
          ))}
        </nav>
        <span className={cls.eng}> ENG </span>
      </div>

      <button className={cls.signIn}>Sign in</button>
    </section>
  );
};
