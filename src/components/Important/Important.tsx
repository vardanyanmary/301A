import cls from "./Important.module.scss";
import topLine from "../../shared/assets/Group 6008.svg";
import eye from "../../shared/assets/Group 5761.svg";
import { textArray } from "../../constants/importantTextData";

export const Important = () => {
  return (
    <section className={cls.Important}>
      <div className={cls.topLine}>
        <img src={topLine} alt="topLine" className={cls.topLine} />
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
      </div>
    </section>
  );
};