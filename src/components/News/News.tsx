import cls from "./News.module.scss";
import topLine from "../../shared/assets/Group 6008.svg";
import list from "../../shared/assets/Group 5947.svg";
import right from "../../shared/assets/Group 5998.svg";
import left from "../../shared/assets/Group 5998.svg";
import { newsData } from "../../constants/newsItemData";
import { NewsItem } from "./NewsItem/NewsItem";
import ArrowBtn from "../../shared/ui/ArrowBtn/ArrowBtn";
import { BREAKPOINTS } from "../../constants/breakpoints";
import SwiperComponent from "../../shared/ui/Swiper/Swiper";
import styleImg from "../../shared/assets/Vector (18).svg";

export const News = () => {
  return (
    <section className={cls.News}>
      <div className={cls.topLine}>
        <img src={topLine} alt="topLine" className={cls.topLine} />
      </div>

      <div className={cls.title}>
        <div className={cls.write}>
          <img src={list} alt="" />
          <span>Новости "301"</span>
        </div>
      </div>
      <img src={styleImg} alt="" className={cls.styleImg} />
      <div className={cls.newsDiv}>
        <div className={cls.newsItems}>
          <SwiperComponent
            data={newsData}
            component={NewsItem}
            breakPoints={BREAKPOINTS}
            nextSlide={<ArrowBtn img={right} />}
            prevSlide={<ArrowBtn img={left} />}
            nextClassName="nextCard"
            prevClassName="prevCard"
          />
        </div>

        <div className={cls.newsItems2}>
          {newsData.map((newsItem) => (
            <NewsItem
              description={newsItem.description}
              imgSrc={newsItem.imgSrc}
              date={newsItem.date}
              title={newsItem.title}
            />
          ))}
        </div>
        <button className={cls.newsButton}> Все новости </button>
      </div>
      <div className={cls.bottomPart}></div>
    </section>
  );
};
