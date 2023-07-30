import cls from "./Donors.module.scss";
import portfolio from "../../../shared/assets/Group 5807.svg";
import donorImg from "../../../shared/assets/Group 6017.svg";

export const Donors = () => {
  return (
    <section className={cls.Donors}>
      <div>
        <div className={cls.title}>
          <img src={portfolio} alt="" />
          <h2>Клуб «301»</h2>
        </div>
        <div className={cls.content}>
          <img src={donorImg} alt="" className={cls.donors} />
          <div>
            <p>
              Фонд «301. Земля мудрости» — некоммерческая организация и
              осуществляет свою деятельность с помощью взносов участников клуба
              «301». Размер взноса составляет 301$ в месяц. Участником клуба
              может стать каждый, кто разделяет нашу миссию и ценности вне
              зависимости от географических границ.
            </p>
            <div className={cls.buttonsDiv}>
              <button className={cls.buttonConnect}>Become one of 301</button>
              <button className={cls.buttonMore}>Узнать больше</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
