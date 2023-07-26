import cls from "./Volunteers.module.scss";
import checkList from "../../../shared/assets/Group 5856.svg";
import volunteers from "../../../shared/assets/Волонтеры.svg";

export const Volunteers = () => {
  return (
    <section className={cls.Volunteers}>
      <img src={volunteers} alt="" />
      <div>
        <div className={cls.title}>
          <img src={checkList} alt="" />
          <h2>Волонтеры</h2>
        </div>
        <p>
          Важной частью нашего фонда являются волонтеры, которые по своей личной
          инициативе помогают нам в проектах.  Наши волонтеры — неравнодушные
          люди, которые верят, что им по силам сделать мир лучше. Волонтером
          «301» может стать каждый, кто разделяет миссию и ценности фонда.
        </p>
        <div className={cls.buttonsDiv}>
          <button className={cls.buttonConnect}>Стать волонтером</button>
        </div>
      </div>
    </section>
  );
};
