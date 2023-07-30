import cls from "./Experts.module.scss";
import star from "../../../shared/assets/Эксперты (1).svg";
import experts from "../../../shared/assets/Эксперты.svg";

export const Experts = () => {
  return (
    <section className={cls.Experts}>
      <div>
        <div className={cls.title}>
          <img src={star} alt="" />
          <h2>Эксперты</h2>
        </div>
        <div className={cls.content}>
          <p>
            Компетентные специалисты в различных отраслях — важное звено
            экосистемы фонда «301». Эксперты подключаются к проектам на разных
            стадиях: помогают проверять гипотезы и реализовывать идеи мудрецов.
            В наших проектах активное участие принимают эксперты в области
            науки, культуры, образования, истории, искусства и многих других.
          </p>
          <img src={experts} alt="" className={cls.experts} />
        </div>
        <button className={cls.buttonBe}>Стать экспертом </button>
      </div>
    </section>
  );
};
