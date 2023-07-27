import cls from "./CompainFriends.module.scss";
import friendIcon from "../../../shared/assets/Друзья фонда (1).svg";
import friends from "../../../shared/assets/Друзья фонда.svg";

export const CompainFriends = () => {
  return (
    <section className={cls.Friends}>
      <div>
        <div className={cls.title}>
          <img src={friendIcon} alt="" />
          <h2>Друзья фонда</h2>
        </div>
        <p>
          Друзьями фонда являются все, кто помогает: ресурсами, временем,
          поддержкой, идеями, и остается рядом. 
        </p>
        <p>Чужих не бывает.</p>
        <button className={cls.buttonBe}> Стать другом фонда </button>
      </div>
      <img src={friends} alt="" className={cls.friends}/>
    </section>
  );
};
