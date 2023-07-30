import cls from "./EcoSystem.module.scss";
import topLine from "../../shared/assets/Group 6008.svg";
import ecoIcon from "../../shared/assets/Group 5785.svg";
import { Sages } from "./Sages/Sages";
import { Donors } from "./Donors/Donors";
import { Ambassadors } from "./Ambassadors/Ambassadors";
import { Experts } from "./Experts/Experts";
import { Partners } from "./Partners/Partners";
import { CompainFriends } from "./CompainFriends/CompainFriends";
import { Volunteers } from "./Volunteers/Volunteers";

export const EcoSystem = () => {
  return (
    <section className={cls.EcoSystem}>
      <div className={cls.topLine}>
        <img src={topLine} alt="topLine" className={cls.topLine} />
      </div>
      <div className={cls.ecosystemContent}>
        <div className={cls.title}>
          <img src={ecoIcon} alt="" />
          <h2>ЭКОСИСТЕМА Клуб «301»</h2>
        </div>
        <p>
          Мы видим два основный пути развития: с одной стороны — мудрое
          использовании потенциала, знаний и накопленного
          культурно-исторического опыта армянского народа; с другой —
          привлечение нестандартно мыслящих людей, как из Армении, так и из
          других стран, способных по-новому взглянуть на сложившуюся картину
          мира. 
        </p>
        <p>
          Поэтому мы интегрируем в свою экосистему всех, кто готов вместе с нами
          строить благополучное будущее Армении.
        </p>
      </div>

      <div className={cls.ecoDiv}></div>
      <Sages />
      <div className={cls.ecoDiv}></div>
      <Donors />
      <div className={cls.ecoDiv}></div>
      <Ambassadors />
      <div className={cls.ecoDiv}></div>
      <Volunteers />
      <div className={cls.ecoDiv}></div>
      <Experts />
      <div className={cls.ecoDiv}></div>
      <Partners/>
      <div className={cls.ecoDiv}></div>
      <CompainFriends />
      <div className={cls.ecoDiv}></div>
    </section>
  );
};
