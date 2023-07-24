import cls from "./Home.module.scss";
import topStyle from "../../shared/assets/Vector.svg";
import bottomStyle from "../../shared/assets/Vector (1).svg";
import firstImg from "../../shared/assets/Vector (2).svg";
import secondImg from "../../shared/assets/Vector (3).svg";
import romb from "../../shared/assets/Vector (4).svg";
import img301 from "../../shared/assets/sdfde 2.svg";
import fb from "../../shared/assets/Vector (5).svg";
import inst from "../../shared/assets/Vector (6).svg";
import lin from "../../shared/assets/Group 5751.svg";
import teleg from "../../shared/assets/Vector (7).svg";
import whats from "../../shared/assets/Vector (8).svg";

export const Home = () => {
  return (
    <section className={cls.Home}>
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
            <img src={fb} alt="" className={cls.iconItem}/>
            <img src={inst} alt="" className={cls.iconItem}/>
            <img src={lin} alt="" className={cls.iconItem}/>
            <img src={teleg} alt="" className={cls.iconItem}/>
            <img src={whats} alt="" className={cls.iconItem}/>
          </div>
        </div>
      </div>

      <img src={bottomStyle} alt="style" className={cls.styles} />
    </section>
  );
};
