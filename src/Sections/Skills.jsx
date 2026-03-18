import {skillData} from '../data';

const Skills = () => {
  return (
    <div id='skills' className='relative text-white bg-[linear-gradient(360deg,#060824,#110932)] px-[6vw] sm:px-[4vw] lg:px-[7vw] pt-25 pb-40'>
      <div className='clip-path-top-right h-12 absolute bottom-full w-full left-0 bg-[#110932]'></div>
      <h2 className="text-3xl text-center font-bold uppercase mb-1">Skills</h2>
      <span className='bg-red-600 w-20 h-1 block mx-auto mb-4'></span>
      <p className='text-gray-300 text-center mb-12'>A collection of my technical skills and expertise honed through various projects and experiences</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 px-5 sm:px-0 gap-y-6 sm:gap-y-0 sm:gap-x-6 lg:gap-x-12 w-full lg:w-11/12 m-auto'>
        {skillData.map(cat => {
          return (
            <div key={cat.title} className='border-2 border-gray-200 bg-[#17122a] rounded-lg p-5 shadow-[0_0_20px_rgb(39,28,80)]'>
              <h3 className='text-2xl font-bold text-center mb-4'>{cat.title}</h3>
              <ul className='grid grid-cols-2 lg:grid-cols-3 gap-2'>
                {cat.skills.map(e => {
                  return (
                    <li key={e.text} className='flex justify-center list-none border-2 border-gray-700 p-2 rounded-full text-[14px] transition-all hover:transform hover:scale-105 cursor-default'>
                      <img src={e.img} className='max-w-5 max-h-5 mr-2 object-contain' />
                      {e.text}
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Skills
