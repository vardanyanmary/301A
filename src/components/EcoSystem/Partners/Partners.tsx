import cls from "./Partners.module.scss";
import hands from "../../../shared/assets/Партнеры (1).svg";
import partnerImg from "../../../shared/assets/Партнеры.svg";
import { partnerData } from "../../../constants/partnersData";

export const Partners = () => {
  return (
    <section>
      <div className={cls.Donors}>
        <div>
          <div className={cls.title}>
            <img src={hands} alt="" />
            <h2>Партнеры</h2>
          </div>
          <div className={cls.content}>
            <img src={partnerImg} alt="" className={cls.partnersImg} />
            <div className={cls.contentImgTexts}>
              <p>
                Нашими партнерами являются различные организации, а также
                отдельные личности, которые разделяют наши идеи. Наши партнеры
                поддерживают проекты фонда и оказывают содействие и в их
                реализации, предоставляя нам различные ресурсы. 
              </p>
              <div className={cls.buttonsDiv}>
                <button className={cls.buttonConnect}>Стать партнером</button>
                <button className={cls.buttonMore}>Все партнеры</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cls.partners}>
        {partnerData.map((partner, index) => (
          <div className={cls.partnersIcons} key={index}>
            <img src={partner.src} alt={partner.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};
