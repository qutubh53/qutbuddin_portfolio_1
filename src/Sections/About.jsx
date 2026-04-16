import {aboutData} from '../data';
import Typewriter from 'typewriter-effect';
import myImg from '../assets/qutbuddin.jpeg'
import Tilt from 'react-parallax-tilt'
import whatsappLogo from '../assets/whatsapp.png'

const About = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center bg-[linear-gradient(360deg,#060824,#110932)] px-[6vw] lg:px-[7vw] py-35" id="about">
        <span className="bg-blur"></span>
        <div className="text-white w-full lg:w-1/2 order-2 lg:order-1 mt-15 lg:mt-0">
          <h1 className='text-3xl font-bold mb-5'>
            Hi, I am <span className='block text-[30px] sm:text-[45px] mb-1 lg:mb-0'>{aboutData.name}</span>
            <div className='text-xl'>I am a
              <span className="inline-block ml-3 text-red-600">
                <Typewriter 
                  options={{
                    strings: ['UI Developer', 'Frontend Developer'],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    delay: 50,
                    pauseFor: 1000
                  }}
                />
              </span>
            </div>
          </h1>
          <p className='text-gray-400 mb-10'>{aboutData.description}</p>
          <a href="https://drive.google.com/file/d/1jFq0WMhsybhOQ5cJAQVRYW3sPcwwDTW_/view?usp=drive_link" target='_blank' className='bg-[linear-gradient(0deg,#fff_50%,#e7000b_50%)] bg-size-[100%_200%] hover:bg-position-[0_100%] hover:text-black transition-all duration-300 px-6 py-2.5 uppercase rounded-3xl shadow-[0_0_20px_rgba(253,26,3,.9)] font-semibold'>{aboutData.button}</a>
        </div>
        <div className="flex justify-center w-full lg:w-1/2 order-1 lg:order-2">
          <Tilt className='w-80 h-80'>
            <img src={myImg} className='rounded-[50%] w-full h-full object-cover border border-red-600 shadow-[0_0_30px_rgba(253,26,3,.5)]' />
          </Tilt>
        </div>
      </div>
      <a href='https://wa.me/8435464302' target='_blank' className='fixed bottom-4 right-3 sm:bottom-6 sm:right-6 w-10 sm:w-14 lg:w-12 transition-all scale-100 hover:scale-110 z-10'>
        <img src={whatsappLogo} alt='Whatapp Chat' />
      </a>
    </>
  )
}

export default About