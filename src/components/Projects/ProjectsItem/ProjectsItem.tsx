import { FC } from "react";
import cls from "./ProjectsItem.module.scss";
import flag from "../../../shared/assets/Group 5942.svg";

type ProjectsItemProps = {
  title: string;
  description: string;
  name: string;
  flagIcon: number;
  imgSrc: string;
};

export const ProjectsItem: FC<ProjectsItemProps> = ({
  imgSrc,
  description,
  flagIcon,
  name,
  title,
}) => {
  return (
    <div className={cls.ProjectItem}>
      <img src={imgSrc} alt="" className={cls.mainPhoto} />
      <div className={cls.content}>
        <span>{title}</span>
        <span>{description}</span>
        <div className={cls.icon}>
          <span>{name}</span>
          <span className={cls.flag}>
            <img src={flag} alt="Red Flag" /> 
            {flagIcon}
          </span>
        </div>
      </div>
    </div>
  );
};
