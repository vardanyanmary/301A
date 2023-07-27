import cls from "./Sages.module.scss";
import brain from "../../../shared/assets/Group 5850.svg";
import sagesImg from "../../../shared/assets/Group 6016.svg";

export const Sages = () => {
  return (
    <section className={cls.Sages}>
      <div>
        <div className={cls.title}>
          <img src={brain} alt="" />
          <h2>Мудрецы</h2>
        </div>
        <p>
          В рамках проекта на постоянное жительство в Армению переедет 301
          мудрец. Это люди больше чем просто профессионалы в своей области, это
          мудрецы — мыслители и деятели, люди большого ума с нестандартным
          мышлением и неожиданными взглядами. В Армении будут созданы все
          условия для реализации их идей, что должно привести к осуществлению
          ряда прорывных проектов.На сегодняшний день ядро Фонда составляют
          четыре мудреца, приехавших в Армению из разных стан мира и решивших
          связать свою жизнь с армянской землей.
        </p>
        <button className={cls.buttonMore}>Узнать больше</button>
      </div>
      <img src={sagesImg} alt="" className={cls.sages}/>
    </section>
  );
};
