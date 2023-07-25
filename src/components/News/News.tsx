import cls from "./News.module.scss";
import list from "../../shared/assets/Group 5947.svg";

export const News = () => {
  return (
    <section className={cls.news}>
      <div className={cls.title}>
        <img src={list} alt="" />
        <span>Новости "301"</span>
      </div>
      <div className={cls.newsDiv}>
        <div className={cls.newsItem}>
          <img src="" alt="" />
          <h3>"301" запускает проект "Библиотека армянской культуры"</h3>
          <p>
            Культурное наследие армянского народа обширно и многогранно. Однако
            по сей день нет единого ресурса, который дал бы возможность желающим
            ознакомиться с ним.
          </p>
          <span>23.03.2023</span>
        </div>
        <div className={cls.newsItem}>
          <img src="" alt="" />
          <h3>Дети из Арцаха отметили новогодние праздники в фонде "301"</h3>
          <p>
            26 декабря фонд "301" принял у себя в гостях детей из Арцаха,
            которые не могут вернуться в свои дома по причине блокады Лачинского
            коридора.
          </p>
          <span>23.03.2023</span>
        </div>
        <div className={cls.newsItem}>
          <img src="" alt="" />
          <h3>Дни открытых дверей музыкальной школы</h3>
          <p>
            3-его и 4-го января всех приглашаем участвовать на днях открытых
            дверей музыкальной школы с альтернативной методикой обучения :
            проект мудреца 301-Камиля Чалаева — «Дикой Школы»
          </p>
          <span>23.03.2023</span>
        </div>
        <button className={cls.newsButton}> Все новости </button>
      </div>
    </section>
  );
};
