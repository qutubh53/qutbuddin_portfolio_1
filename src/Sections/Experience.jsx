import {workExperience} from '../data';

const Experience = () => {
  return (
    <div id='experience' className='relative text-white bg-linear-to-t from-[#060824] to-[#110932] px-[6vw] sm:px-[4vw] lg:px-[7vw] pt-25 pb-40'>
      <div className='clip-path-top-left h-14 absolute bottom-full w-full left-0 bg-[#110932]'></div>
      <h2 className='text-3xl text-center font-bold uppercase mb-1'>Experience</h2>
      <span className='bg-red-600 w-20 h-1 block mx-auto mb-4'></span>
      <p className='text-gray-300 text-center mb-12'>A collection of my work experience and the roles I have taken in various organizations</p>

      <div className='relative'>
        <div className='absolute border-l-2 border-gray-200 h-full left-1 sm:left-1/2 sm:-translate-x-1/2'></div>
        <ul className='flex flex-col gap-10 max-w-3xl mx-auto ps-10 sm:ps-0'>
          {
            workExperience.map((exp, i)=>{
              return(
                <li key={i} className={`max-w-full sm:max-w-80 lg:max-w-85 relative ${i % 2 === 0 ? 'self-end' : ''}`}>
                  <img src={exp.compLogo} className={`logo absolute w-11 h-11 rounded-full border-2 border-red-600 top-1/2 -translate-y-1/2 ${i % 2 === 0 ? '-left-14 lg:-left-17' : '-left-14 sm:left-auto sm:-right-14 lg:-right-17'}`} />
                  <div className='border-2 border-gray-200 bg-[#17122a] rounded-lg p-5 shadow-[0_0_20px_rgb(39,28,80)] transition-all hover:scale-105 hover:shadow-[0_0_20px_rgb(39,100,150)]'>
                    <div className='flex gap-4 mb-3'>
                      <img src={exp.compLogo} className='w-13 h-13 rounded-md' />
                      <div>
                        <h4 className='font-bold'>{exp.designation}</h4>
                        <div className='text-[10px]'>{exp.compName}</div>
                        <div className='text-[10px] text-gray-500 mt-1'>{exp.startDate} - {exp.endDate}</div>
                      </div>
                    </div>
                    <ul className='pl-4'>
                      {exp.description.map((desc, i)=>{
                        return(
                          <li key={i} className='text-xs text-gray-500 leading-4.5 list-disc mb-1.5'>{desc}</li>
                        )
                      })}
                    </ul>
                    <div className='text-xs mt-5 mb-2'>Skills:</div>
                    <ul className='flex flex-wrap gap-1'>
                      {exp.skillsName.map((name, i)=>{
                        return(
                          <li key={i} className='border bg-[#d352fd]/30 text-[#1e021d] font-semibold text-xs px-2.5 py-1 rounded-2xl'>{name}</li>
                        )
                      })}
                    </ul>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Experience