import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const Project = (props) => {
  return (
    <div className='proj mb-11 dark:text-darkgreyBg'>
      <div className='proj_info flex flex-col leading-2'>
        <div className='project_name font-apercu mb-4 '>
        <a href={props?.url} target='blank' className="inline-flex transition-m group items-center dark:text-white">{props?.projectName}  <span>
                <FaArrowRight
                  className="text-lg ml-2 ease-in-out duration-500 group-hover:ml-4 text-violetBg"
                />
              </span></a>
        </div>
        <div className='proj_descp text-[15px] text-greyBg'>
            {props?.description}
        </div>
      </div>
      <div className='proj_skills mt-5 flex flex-wrap gap-2'>
        {props?.skills?.map((skill, index) => (
          <span key={index} className='skill_tag font-apercu text-[12px] mr-2 border border-violetBg p-1 rounded-sm text-violetBg'>
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Project;
