import {navLinks, iconLinks} from '../data'

const Footer = ({navMenu, setIsActive}) => {
  return (
    <div className='relative text-white bg-[#060824] px-[6vw] pb-8 flex flex-col items-center'>
      <div className="text-xl cursor-pointer select-none mb-5"
        onClick={()=>{
          setIsActive('about');
          window.scroll(0, 0);
        }}
      >
        <span className="text-red-600 text-2xl align-middle ">&lt;</span>
        Qutbuddin
        <span className="text-red-600 text-lg align-middle"> / </span>
        Millwala
        <span className="text-red-600 text-2xl align-middle">&gt;</span>
      </div>

      <ul className="flex flex-wrap justify-center space-x-5 gap-y-2 mb-8 sm:mb-5">
        {navLinks.map((nav,i)=>{
          return (
            <li key={i} className="hover:text-red-600 transition duration-300">
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

      <div className="flex space-x-4">
        {iconLinks.map((icon,i)=>{
            return (
              <a key={i} href={icon.url} target="_blank" className={`cursor-pointer hover:text-red-600 transition duration-300 text-xl ${icon.class}`}>{<icon.icons />}</a>
            )
          })
        }
      </div>
    </div>
  )
}

export default Footer