import { useEffect, useState } from "react";
import { links } from "../../constants/navbarMenuLinks";
import img301 from "../../shared/assets/301 logo black.svg";
import cls from "./Navbar.module.scss";

export const Navbar = () => {
  const [showSideMenu, setShowSideMenu] = useState(false);

  const handleResize = () => {
    setShowSideMenu(false);
  };

  useEffect(() => {
    window.onresize = handleResize;

    return () => {
      window.onresize = null;
    };
  }, []);

  const handleToggleSideMenu = () => {
    setShowSideMenu((prev) => !prev);
  };

  return (
    <section className={cls.Navbar}>
      <img src={img301} alt="301" className={cls.img301} />

      <div className={`${cls.navEng} ${showSideMenu ? cls.show : ""}`}>
        <nav className={`${cls.navigation} ${showSideMenu ? cls.hide : ""}`}>
          {links.map((link) => (
            <a key={link.name} href={link.href}>
              {link.name}
            </a>
          ))}
        </nav>

        <div className={`${cls.sideMenu} ${showSideMenu ? cls.show : ""}`}>
          {links.map((link) => (
            <a key={link.name} href={link.href}>
              {link.name}
            </a>
          ))}
        </div>
      </div>

      <span className={cls.eng}> ENG </span>

      <button className={cls.signIn}>Sign in</button>

      <button className={cls.menuToggle} onClick={handleToggleSideMenu}>
        {showSideMenu ? "Close Menu" : "Open Menu"}
      </button>
    </section>
  );
};
