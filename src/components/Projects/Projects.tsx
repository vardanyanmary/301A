import cls from "./Projects.module.scss";
import projectsIcon from "../../shared/assets/Group 5963.svg";
import topLine from "../../shared/assets/Group 6008.svg";
import SwiperComponent from "../../shared/ui/Swiper/Swiper";
import { projectsItemData } from "../../constants/projectsItemData";
import { ProjectsItem } from "./ProjectsItem/ProjectsItem";
import { BREAKPOINTS } from "../../constants/breakpoints";
import ArrowBtn from "../../shared/ui/ArrowBtn/ArrowBtn";
import right from "../../shared/assets/Group 5998.svg";
import left from "../../shared/assets/Group 5998.svg";

export const Projects = () => {
  return (
    <section className={cls.Projects} id="projects">
      <div className={cls.topLine}>
        <img src={topLine} alt="topLine" className={cls.topLine} />
      </div>
      <div className={cls.projectsContent}>
        <div className={cls.title}>
          <img src={projectsIcon} alt="" />
          <h2>НАШИ ПРОЕКТЫ</h2>
        </div>
        <p>
          За несколько лет работы фонда «301. Земля мудрости» мы запустили ряд
          важных проектов по направлениям образования, культуры, науки и
          инноваций и целостного развития территории. 
        </p>
      </div>
      <div className={cls.projectItems}>
        <SwiperComponent
          data={projectsItemData}
          component={ProjectsItem}
          breakPoints={BREAKPOINTS}
          nextSlide={<ArrowBtn img={right} />}
          prevSlide={<ArrowBtn img={left} />}
          nextClassName="nextCard"
          prevClassName="prevCard"
        />
      </div>
      <button className={cls.projectButton}>Другие проекты</button>
    </section>
  );
}; 