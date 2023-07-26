import { contactData } from "../../constants/contactData";
import { ourEcoSystem2Titles } from "../../constants/ecoSystem2Titles";
import { ourEcoSystemTitles } from "../../constants/ecoSystemTitles";
import { socialIconsLight } from "../../constants/socialData";
import img301 from "../../shared/assets/AA 4 (1) (1).png";
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
          {contactData.map((item, index) => (
            <div key={index}>
              <img src={item.icon} alt="" />
              <span>{item.text}</span>
            </div>
          ))}
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
        <img src={img301} alt="" className={cls.img301} />
      </div>
      <div className={cls.footerBottomPart}></div>
    </section>
  );
};
