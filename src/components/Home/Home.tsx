import cls from "./Home.module.scss";
import topStyle from "../../shared/assets/Vector.svg";
import bottomStyle from "../../shared/assets/Vector (1).svg";
import firstImg from "../../shared/assets/Vector (2).svg";
import secondImg from "../../shared/assets/Vector (3).svg";
import romb from "../../shared/assets/Vector (4).svg";
import img301 from "../../shared/assets/sdfde 2.svg";
import { socialIcons } from "../../constants/socialData";

export const Home = () => {
  return (
    <section className={cls.Home}>
      <div id="home">
        <img src={topStyle} alt="style" className={cls.styles} />

        <div className={cls.imagesDiv}>
          <img src={firstImg} alt="" className={cls.firstImg} />
          <img src={secondImg} alt="" className={cls.secondImg} />
          <img src={firstImg} alt="" className={cls.firstImg} />
        </div>
        <img src={romb} alt="" className={cls.romb} />

        <div className={cls.contentImgTexts}>
          <div className={cls.content}>
            <h2>ЗЕМЛЯ МУДРОСТИ</h2>
            <p>
              Изменение сценария будущего Армении путем создания онтологической
              безопасности.
            </p>
            <p>
              В центре нашего внимания Армения — земля многовековой культуры и
              мудрости, которой есть что предложить миру.
            </p>
            <div className={cls.buttonDiv}>
              <button className={cls.be}>Стань одним из 301</button>
              <button className={cls.all}>Весь проект</button>
            </div>
          </div>

          <img src={img301} alt="301" className={cls.img301} />

          <div className={cls.socialMedia}>
            <span className={cls.followUs}> Follow Us </span>
            <div className={cls.line}></div>
            <div className={cls.icons}>
              {socialIcons.map((icon, index) => (
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

        <img src={bottomStyle} alt="style" className={cls.styles} />
      </div>
    </section>
  );
};
