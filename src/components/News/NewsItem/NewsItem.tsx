import { FC } from 'react';
import cls from './NewsItem.module.scss';

type NewsItemProps = {
  title: string;
  description: string;
  date: string;
  imgSrc: string;
};

export const NewsItem: FC<NewsItemProps> = ({ title, description, date, imgSrc }) => {
  return (
    <section className={cls.newsItem}>
      <img src={imgSrc} alt="" />
      <div className={cls.newsItemTexts}>
        <h3>{title}</h3>
        <p>{description}</p>
        <span>{date}</span>
      </div>
    </section>
  );
};