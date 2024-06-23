import React from 'react'

const Experience = (props) => {
  return (
    <div className='exp_comp mb-8 dark:text-darkgreyBg sm:max-w-[570px]'>
      <div className='comp_place flex flex-col sm:flex-row sm:justify-between leading-2'>
        <div className='company_name font-apercu dark:text-white'>
        <a href={props?.url} target='blank'>{props?.companyName}</a>
        </div>
        <div className='company_time font-apercumono text-xs'>
            {props?.startDate} - {props?.endDate}
        </div>
      </div>
      <div className='role'>
        {props?.role}
      </div>
    </div>
  )
}

export default Experience
