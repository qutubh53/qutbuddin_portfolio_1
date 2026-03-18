import {navLinks, iconLinks} from '../data'
import { useEffect, useState } from "react";
import { LuAlignCenter } from "react-icons/lu";

export const Navbar = ({navMenu, isActive, setIsActive}) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(()=>{
    window.onscroll = () => {
      if(window.pageYOffset > 60){
        setIsScroll(true);
      }
      else {
        setIsScroll(false);
      }
    }
    // window.scrollTo(0,0)
  },[]);

  return (
    <>
      <div className={`fixed top-0 flex justify-between items-center text-white py-6 px-[4vw] md:px-[4vw] lg:px-[7vw] w-full ${isScroll ? 'backdrop-blur bg-[#110932]/50 z-9 shadow-lg' : ''}`}>
        <div className="text-xl cursor-pointer select-none" onClick={()=>{
          setIsActive('about');
          window.scroll(0, 0);
        }}>
          <span className="text-red-600 text-2xl align-middle ">&lt;</span>
          Qutbuddin
          <span className="text-red-600 text-lg align-middle"> / </span>
          Millwala
          <span className="text-red-600 text-2xl align-middle">&gt;</span>
        </div>

        
        <ul className="lg:flex space-x-5 hidden">
          {navLinks.map((nav,i)=>{
            return (
              <li key={i} className={`hover:text-red-600 transition duration-300 ${nav === isActive ? 'text-red-600' : ''}`}>
                <button
                  className='cursor-pointer'
                  onClick={()=> {
                    navMenu(nav);
                    setIsActive(nav);
                  }}
                >{nav.toUpperCase()}</button>
              </li>
            )
          })}
        </ul>

        <div className='flex gap-4'>
          <div className="flex space-x-4">
            {iconLinks.map((icon,i)=>{
                return (
                  <a key={i} href={icon.url} target="_blank" className="cursor-pointer hover:text-red-600 transition duration-300 text-xl">{<icon.icons />}</a>
                )
              })
            }
          </div>
          <button onClick={()=>{setIsNavOpen(true)}} className='lg:hidden'><LuAlignCenter className='text-2xl' /></button>
        </div>      
      </div>

      <div className={`fixed w-full h-full z-10 top-0 left-0 ${isNavOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        <div 
          className={`bg-black/70 fixed w-full h-full top-0 left-0 transition-all ${isNavOpen ? 'opacity-100 block' : 'opacity-0 hidden'}`}
          onClick={()=>{setIsNavOpen(false)}}
        ></div>
        <div className={`fixed text-white w-75 h-full top-0 bg-[#060824] shadow-lg px-6 py-10 transition-all -left-80 ${isNavOpen ? 'left-0' : ''}`}>
          <button className='bg-red-600 w-8 h-8 rounded-full text-white text-xl font-light absolute -right-4' onClick={()=>{setIsNavOpen(false)}}>&times;</button>
          <div className="text-xl cursor-pointer select-none" onClick={()=>{
            setIsActive('about');
            setIsNavOpen(false)
            window.scroll(0, 0);
          }}>
            <span className="text-red-600 text-2xl align-middle ">&lt;</span>
            Qutbuddin
            <span className="text-red-600 text-lg align-middle"> / </span>
            Millwala
            <span className="text-red-600 text-2xl align-middle">&gt;</span>
          </div>
          <ul className="flex flex-col gap-7 space-x-5 mt-12">
            {navLinks.map((nav,i)=>{
              return (
                <li key={i} className={`hover:text-red-600 transition duration-300 ${nav === isActive ? 'text-red-600 font-semibold' : ''}`}>
                  <button
                    className='cursor-pointer'
                    onClick={()=> {
                      navMenu(nav);
                      setIsActive(nav);
                      setIsNavOpen(false)
                    }}
                  >{nav.toUpperCase()}</button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}
