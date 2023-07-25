import cls from "./Hypotheses.module.scss";
import HypothesesIcon from "../../shared/assets/Group 5866.svg";
import topLine from "../../shared/assets/Group 6008.svg";

export const Hypotheses = () => {
  return (
    <section className={cls.Hypotheses}>
      <div className={cls.topLine}>
        <img src={topLine} alt="topLine" className={cls.topLine} />
      </div>

      <div className={cls.hypothesesContent}>
        <div className={cls.title}>
          <img src={HypothesesIcon} alt="" />
          <h2>ГИПОТЕЗЫ БУДУЩЕГО</h2>
        </div>
        <p>
          Мы разработали четыре основные гипотезы, согласно которым Армения
          может развиваться и позиционировать себя на карте планеты. 
        </p>
      </div>

      <div className={cls.hypothesesBgImg}>
        <div className={cls.hypothesesDescription}>
          <div className={cls.buttonsDiv}>
            <button>страна мудрости</button>
            <button>страна остроумия</button>
            <button>страна креономики и сенсаномики</button>
            <button>«Красная книга» древнейших культур</button>
            <button>сетевое государство</button>
          </div>
          <div className={cls.pDiv}>
            <p>
              Мы считаем, что мудрость лежит в основе существования армянского
              народа. Мудрость всегда была ключевой ценностью Армении, которая
              помогла армянам сохранить идентичность, культуру, независимость и
              пронести их через века. 
            </p>
            <p>
              Возвращение к этому подходу — одна из основных задач нашего фонда.
              Армения должна стать домом для мудрецов, который невозможно
              разрушить. Мы ищем путь к такой Армении: размышляем о том, что мы,
              как люди страны мудрости, можем предложить миру; что есть у нас,
              чего нет больше ни у кого. 
            </p>
            <p>
              Мы считаем, что Армения может стать территорией мудрости — местом,
              где объединяются умы и рождаются смыслы. 
            </p>
            <p>
              Мы верим, что развитие науки, образования и культуры помогут в
              создании онтологической безопасности Армении и армянского народа.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
