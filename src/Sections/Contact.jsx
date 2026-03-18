import { useRef } from 'react'
import rocket from '../assets/rocket.png'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify';

const Contact = () => {
  const form = useRef();
  const formSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_yy38jvh', 'template_nz611ix', form.current, {publicKey: 'FupNn6A7QcX4MQEM0'})
    .then((res)=>{
      form.current.reset();
      toast.success('Thanks! Your message has been sent successfully.')
    },
    (err)=>{
      console.log(err, 'Error');
      toast.error('Failed to send your message. Please try again.')
    })
  }  

  return (
    <div id="contact" className='relative text-white bg-linear-to-t from-[#060824] to-[#110932] pt-25 pb-25 px-[6vw] sm:px-0'>
      <div className='max-w-6xl mx-auto'>
        <div className='clip-path-top-left h-14 absolute bottom-full w-full left-0 bg-[#110932]'></div>
        <h2 className='text-3xl text-center font-bold uppercase mb-1'>Contact</h2>
        <span className='bg-red-600 w-20 h-1 block mx-auto mb-4'></span>
        <p className='text-gray-300 text-center mb-12'>I'd love to hear from you—reach out for any opportunities or questions!</p>
        <div className="max-w-md bg-[#17122a] rounded-lg p-5 pb-5 shadow-[0_0_20px_#0000004f] m-auto">
          <h3 className='text-xl font-semibold flex gap-2 items-center justify-center mb-5'>Connect With Me <img src={rocket} alt='Rocket' className='w-6' /></h3>
          <form ref={form} onSubmit={formSubmit}>
            <div>
              <input type='text' name='user_name' className='w-full bg-white/4 border border-transparent rounded-md px-3 py-3 outline-0 focus:border-red-600 mb-3' placeholder='Your Name' required />
            </div>
            <div>
              <input type='email' name='user_email' className='w-full bg-white/4 border border-transparent rounded-md px-3 py-3 outline-0 focus:border-red-600 mb-3' placeholder='Your Email' required />
            </div>
            <div>
              <input type='text' name='user_subject' className='w-full bg-white/4 border border-transparent rounded-md px-3 py-3 outline-0 focus:border-red-600 mb-3' placeholder='Subject' required />
            </div>
            <div>
              <textarea name='user_message' placeholder='Message' className='w-full bg-white/4 border border-transparent rounded-md px-3 py-3 outline-0 focus:border-red-600 mb-3 resize-none' required rows={4}></textarea>
            </div>
            <div>
              <button type='submit' className='bg-red-600 w-full px-4 py-3 rounded-md uppercase font-semibold cursor-pointer hover:bg-red-500'>Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact