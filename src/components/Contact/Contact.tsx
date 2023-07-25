import cls from "./Contact.module.scss";
import topLine from "../../shared/assets/Group 6008.svg";
import write from "../../shared/assets/Напишите нам.svg";

export const Contact = () => {
  return (
    <section className={cls.Contact} id="contact">
      <div className={cls.topLine}>
        <img src={topLine} alt="topLine" className={cls.topLine} />
      </div>
      <div className={cls.title}>
        <div className={cls.write}>
          <img src={write} alt="" />
          <span>Напишите нам</span>
        </div>
      </div>

      <div className={cls.contactPart}>
        <div className={cls.nameMailPart}>
          <div className={cls.nameMail}>
            <span>Имя</span>
            <input type="text" placeholder="Ваша имя" className={cls.input} />
          </div>
          <div className={cls.nameMail}>
            <span>Эл. почта</span>
            <input type="text" placeholder="Ваша почта" className={cls.input} />
          </div>
        </div>
        <div className={cls.send}>
          <div className={cls.massage}>
            <span>Сообщение</span>
            <textarea placeholder="Написать" className={cls.textarea} />
          </div>
          <button>Send</button>
        </div>
      </div>
    </section>
  );
};
