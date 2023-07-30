import cls from "./Ambassadors.module.scss";
import flags from "../../../shared/assets/Group 5854.svg";
import ambassadors from "../../../shared/assets/Group 6018.svg";

export const Ambassadors = () => {
  return (
    <section className={cls.Ambassadors}>
      <div>
        <div className={cls.title}>
          <img src={flags} alt="" />
          <h2>Амбассадоры</h2>
        </div>
        <div className={cls.content}>
          <p>
            Амбассадоры фонда являются официальными представителями нашего фонда
            в различных странах мира. Основная миссия наших амбассадоров —
            представлять интересы фонда в местах их проживания, доносить миссию
            и ценности фонда «301», искать и находить поддержку среди тех, кто
            разделяет наши взгляды.
          </p>
          <img src={ambassadors} alt="" className={cls.ambassadors} />
        </div>
        <button className={cls.buttonBe}>Стать амбассадором </button>
      </div>
    </section>
  );
};
