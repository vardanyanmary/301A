import cls from "./Important.module.scss";
import topLine from "../../shared/assets/Group 6008.svg";
import eye from "../../shared/assets/Group 5761.svg";
import { textArray } from "../../constants/importantTextData";
import firstImg from "../../shared/assets/6.svg";
import secondImg from "../../shared/assets/8.svg";

export const Important = () => {
  return (
    <section className={cls.Important}>
      <div className={cls.topLine}>
        <img src={topLine} alt="topLine" className={cls.topLine} />
      </div>

      <div className={cls.imagesDiv}>
        <img src={firstImg} alt="" className={cls.firstImg} />
        <img src={secondImg} alt="" className={cls.secondImg} />
        <img src={firstImg} alt="" className={cls.firstImg} />
      </div>

      <div className={cls.importantContent}>
        <div className={cls.title}>
          <img src={eye} alt="" />
          <h2>ПОЧЕМУ ЭТО ВАЖНО?</h2>
        </div>
        <div className={cls.importantP}>
          {textArray.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className={cls.bottomPart}></div>
      </div>
    </section>
  );
};
