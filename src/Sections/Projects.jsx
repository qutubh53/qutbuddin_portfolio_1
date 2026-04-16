import { useEffect, useState } from 'react';
import {projectData} from '../data'

const Projects = () => {
  const [openPopup, setOpenPopup] = useState(null);
  const [projCat, setProjCat] = useState();
  const [projFiltered, setProjFiltered] = useState(projectData);
  const [singleCat, setSingleCat] = useState('All');

  const handlePopup = (proj) => {
    setOpenPopup(proj)
  }

  const filterProj = (tab) => {
    const catFilterTab = projectData.filter((catTab)=> {
      return (
        tab === "All" || catTab.category === tab
      )
    })
    setSingleCat(tab);
    setProjFiltered(catFilterTab);
  }

  useEffect(()=>{
    const projCategory = projectData.map((data)=> data.category )
    const catFilter = ["All", ...new Set(projCategory)]
    setProjCat(catFilter)
  },[])

  return (
    <div id="projects" className='relative text-white bg-linear-to-t from-[#060824] to-[#110932] pt-25 pb-40 px-8 lg:px-0'>
      <div className='max-w-4xl mx-auto'>
        <div className='clip-path-top-right h-14 absolute bottom-full w-full left-0 bg-[#110932]'></div>
        <h2 className='text-3xl text-center font-bold uppercase mb-1'>Projects</h2>
        <span className='bg-red-600 w-20 h-1 block mx-auto mb-4'></span>
        <p className='text-gray-300 text-center mb-12'>A showcase of the projects I have worked on, highlighting my skills and experience in various technologies</p>
        <ul className='flex justify-center mb-8 gap-3'>{projCat?.map((tab,i)=>{
          return (
            <li key={i} className={`border border-gray-200 px-4 py-1 capitalize rounded-2xl cursor-pointer hover:text-red-600 hover:border-red-600 ${singleCat === tab ? 'text-red-600 border-red-600': ''}`} onClick={()=>{filterProj(tab)}}>{tab}</li>
          )
        })}</ul>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-0 sm:px-10 lg:px-0">
          {projFiltered?.map((proj, index)=>{
            return (
              <div key={index}>
                <div className='border-2 border-gray-200 bg-[#17122a] rounded-lg p-3 pb-5 shadow-[0_0_20px_rgb(39,28,80)] cursor-pointer transition-all hover:scale-105 hover:shadow-[0_0_20px_rgb(39,100,150)]' onClick={()=>{handlePopup(proj)}} >
                  <img src={proj.image} alt={proj.heading} className='h-30 object-cover rounded-md mb-4' />
                  <h3 className='capitalize font-bold mb-2'>{proj.heading}</h3>
                  <p className='text-xs text-gray-300 mb-4 line-clamp-3'>{proj.description}</p>
                  <ul className='flex flex-wrap gap-1'>
                    {proj.skillsName.map((skill,sindex)=>{
                      return(
                        <li key={sindex} className='border bg-[#d352fd]/30 text-gray-300 border-[#d352fd]/5 font-semibold text-[11px] px-2.5 py-0.5 rounded-2xl'>{skill}</li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
        
        <div className={`fixed transition-all ${openPopup !== null ? 'w-full h-full left-0 top-0 z-10 scale-100 opacity-100': 'scale-90 opacity-0'}`}>
          <div className='bg-black/85 fixed w-full h-full left-0 top-0' onClick={()=>{setOpenPopup(null)}}></div>
          <div className='bg-[#110932] w-11/12 sm:w-2xl fixed top-1/2 left-1/2 -translate-1/2 z-10 p-5'>
            <span className='cursor-pointer absolute right-0 top-0 bg-red-600 w-5 h-5 text-xl flex items-center justify-center' onClick={()=>{setOpenPopup(null)}}>&times;</span>
            <img src={openPopup?.image} alt={openPopup?.heading} className='h-30 sm:h-60 object-cover rounded-md mb-4 w-full object-top' />
            <h3 className='text-xl capitalize font-bold mb-2'>{openPopup?.heading}</h3>
            <div className='max-h-75 overflow-auto'>
              <p className='text-xs text-gray-300 mb-3'>{openPopup?.description}</p>
              {openPopup?.contribution && <p className='text-xs text-gray-300 mb-3'>{openPopup?.contribution}</p>}
              {openPopup?.keyFeatures && 
              <ul className='mb-4'>
                {openPopup?.keyFeatures?.map((feat, findex)=>{
                  return <li key={findex} className='text-xs text-gray-300 mb-0.5 list-inside list-disc'>{feat}</li>
                })}
              </ul>}
            </div>
            <ul className='flex flex-wrap gap-1 mb-4'>
              {openPopup?.skillsName?.map((skill,sindex)=>{
                return(
                  <li key={sindex} className='border bg-[#d352fd]/30 text-gray-300 border-[#d352fd]/5 font-semibold text-[10px] px-1.5 py-0.5 rounded-2xl'>{skill}</li>
                )
              })}
            </ul>
            <div className='flex justify-center gap-4 text-center'>
              {openPopup?.gitLink && <a href={openPopup?.gitLink} target='_blank' className='bg-white/18 px-4 py-1.5 rounded-md w-1/2 hover:bg-red-600'>View Code</a>}
              <a href={openPopup?.webLink} target='_blank' className='bg-red-600 px-4 py-1.5 rounded-md w-1/2 hover:bg-red-500'>View Live</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects