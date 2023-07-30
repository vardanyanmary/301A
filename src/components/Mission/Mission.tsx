import cls from "./Mission.module.scss";
import mission from "../../shared/assets/Group 5758.svg";
import firstImg from "../../shared/assets/6.svg";
import secondImg from "../../shared/assets/7.svg";

export const Mission = () => {
  return (
    <>
      <section className={cls.Mission}>
        <div className={cls.imagesDiv}>
          <img src={firstImg} alt="" className={cls.firstImg} />
          <img src={secondImg} alt="" className={cls.secondImg} />
          <img src={firstImg} alt="" className={cls.firstImg} />
        </div>

        <div>
          <div className={cls.contextImgText}>
            <div className={cls.contentText}>
              <div className={cls.missionImg}>
                <img src={mission} alt="mission" />
                <h2>НАША МИССИЯ</h2>
              </div>
              <h3>
                Наша миссия — обеспечить онтологическую безопасность Армении.
              </h3>
            </div>
            <p>
              Мы запускаем научные проекты, реализовываем культурные инициативы,
              строим образовательную среду, формируем экспертное сообщество   —
              это актуализирует систему привычных ценностей и позволяет менять
              сценарий будущего. Мы верим, что именно такой подход сможет
              укрепить место армян как носителей уникального культурного кода в
              современном мире. Мы выстраиваем те границы Армении, которые
              никому не под силу нарушить. Мы создаем будущее, в котором
              армянская цивилизация уникальна и ценна для мира. 
            </p>
            <button className={cls.buttonMore}>Узнать больше</button>
          </div>
        </div>
      </section>
    </>
  );
};
