import { ourEcoSystem2Titles } from "../../constants/ecoSystem2Titles";
import { ourEcoSystemTitles } from "../../constants/ecoSystemTitles";
import { socialIconsLight } from "../../constants/socialData";
import location from "../../shared/assets/ELEMENTS.svg";
import phone from "../../shared/assets/Group.svg";
import letter from "../../shared/assets/Vector (17).svg";
import cls from "./Footer.module.scss";

export const Footer = () => {
  return (
    <section className={cls.Footer}>
      <div className={cls.footerDiv}>
        <div className={cls.ourEcoSystem}>
          {ourEcoSystemTitles.map((title, index) =>
            index === 0 ? (
              <h3 key={index}>{title}</h3>
            ) : (
              <span key={index}>{title}</span>
            )
          )}
        </div>
        <div className={cls.ourEcoSystem2}>
          {ourEcoSystem2Titles.map((title, index) =>
            index === 0 ? (
              <h3 key={index}>{title}</h3>
            ) : (
              <span key={index}>{title}</span>
            )
          )}
        </div>
        <div className={cls.infoAbout}>
          <div>
            <img src={location} alt="" />
            <span>Ереван, ул. Московяна 24</span>
          </div>
          <div>
            <img src={phone} alt="" />
            <span>+374 567890</span>
          </div>
          <div>
            <img src={letter} alt="" />
            <span>301@loftpineapple.com</span>
          </div>
        </div>
        <div className={cls.socialMedia}>
          <span className={cls.followUs}> Follow Us </span>
          <div className={cls.line}></div>
          <div className={cls.icons}>
            {socialIconsLight.map((icon, index) => (
              <img
                src={icon.src}
                alt={icon.alt}
                className={cls.iconItem}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
