import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";

function Card({ project }) {
    const {img,name,description,coreFeatures,technologyUsed,projectLinks}= project
  return (
    <div className="w-[600px] h-[520px] relative border-2 bg-purple-100 border-purple-400">
      <a href="#">
        <img
          className="rounded-t-lg h-full w-full"
          src={img}
          alt={name}
        />
      </a>
      <div className="p-5 absolute bg-white z-10 bottom-3 w-full space-y-6">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <ol>
            {coreFeatures.map((feature)=><li key={feature}>{feature}</li>)}
        </ol>
        <div className="flex gap-3 font-semibold">{technologyUsed.map(tech=><p>{tech}</p>)}</div>
        <div className="flex items-center gap-3">
          <a href="">
            <FaExternalLinkAlt />
          </a>
          <a href="">
            <LuGithub />
          </a>

          <a className="hover:" href="">
            <LuGithub />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
