import html from './assets/html.png'
import css from './assets/css.png'
import sass from './assets/sass.png'
import js from './assets/js.png'
import react from './assets/reactjs.png'
import tailwind from './assets/tailwind.png'
import bootstrap from './assets/bootstrap.png'
import git from './assets/git.png'
import github from './assets/github.png'
import vsCode from './assets/vs_code.png'
import netlify from './assets/netlify.png'
import figma from './assets/figma.png'
import photoshop from './assets/photoshop.png'
import witMatesLogo from './assets/witmates.jpg'
import systangoLogo from './assets/systango.jpg'
import webidomLogo from './assets/webidom.jpg'
import questroyalFine from './assets/questroyal_fine_art.jpg'
import goWabi from './assets/gowabi.jpg'
import onTrack from './assets/ontrack.jpg'
import ecommerce_1 from './assets/zentro_ecommerce_site.jpg'
import todoApp from './assets/todo_app.png'
import countTimerGame from './assets/count_timer_app.png'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export const navLinks = ['about', 'skills', 'experience', 'projects', 'contact']

export const iconLinks = [
  {icons: FaLinkedin, url: 'https://www.linkedin.com/in/qutbuddin-millwala/'},
  {icons: FaGithub, url: 'https://github.com/qutubh53'}
]

export const aboutData = {
  name: 'Qutbuddin Millwala',
  description: 'I am a Frontend Developer with 4.6 years of experience in HTML and CSS, and 5-6 months of hands-on experience in React.js. I focus on building responsive, component-based user interfaces and clean, scalable frontend applications. I have strong UI design skills and follow modern frontend development practices. I am seeking a challenging role as a React Frontend Developer where I can contribute to real-world projects while continuously improving my technical skills.',
  button: 'Download cv'
}

export const skillData = [
  {
    title: 'Frontend',
    skills: [
      { img: html, text: 'HTML' },
      { img: css, text: 'CSS' },
      { img: sass, text: 'SASS/SCSS' },
      { img: js, text: 'JavaScript' },
      { img: react, text: 'React JS' },
      { img: tailwind, text: 'Tailwind CSS' },
      { img: bootstrap, text: 'Bootstrap' }
    ]
  },
  {
    title: 'Tools',
    skills: [
      { img: git, text: 'Git' },
      { img: github, text: 'GitHub' },
      { img: vsCode, text: 'VS Code' },
      { img: netlify, text: 'Netlify' },
      { img: figma, text: 'Figma' },
      { img: photoshop, text: 'Photoshop' }
    ]
  }
]

export const workExperience = [
  {
    compLogo: witMatesLogo,
    compName: 'Witmates Technologies Pvt. Ltd.',
    designation: 'Front End Developer',
    startDate: 'Aug 2023',
    endDate: 'March 2025',
    description: [
      'Worked on long term Event based Angular project and developed Responsive web applications by using HTML/CSS and Bootstrap 5, improving user engagement',
      'Deployed the code on GitHub and create PR for Code Reviews.',
      'Collaborated with front-end and back-end teams, enhancing project success rates.',
      'Participated in Code Reviews and followed agile methodologies, improving code quality and development efficiency.',
      "Built web applications in React JS, It's developed responsive UIs and reusable components."
    ],
    skillsName: ['HTML', 'CSS', 'JavaScript', 'Bootstrap 5', 'Git/Github', 'Figma', 'Sketch UI']
  },  
  {
    compLogo: systangoLogo,
    compName: 'Systango Technologies Pvt. Ltd.',
    designation: 'Front End Developer',
    startDate: 'June 2020',
    endDate: 'July 2023',
    description: [
      'Worked on Multiple real-world React-JS and Angular projects.',
      'Developed Responsive and Static web applications by using HTML/CSS/JS and Bootstrap 4/5, improving user engagement',
      'Deployed the code on GitHub and create PR for Code Reviews.',
      'Collaborated with front-end and back-end teams, enhancing project success rates.',
      'Participated in Code Reviews and followed agile methodologies, improving code quality and development efficiency.'
    ],
    skillsName: ['HTML', 'CSS', 'JavaScript', 'Bootstrap 4/5', 'Git/Github', 'Wordpress', 'Figma']
  },
  {
    compLogo: webidomLogo,
    compName: 'Webidom IT Solution',
    designation: 'UI Developer Intern',
    startDate: 'July 2019',
    endDate: 'Dec 2019',
    description: [
      'Designed user friendly mock-up templates by using Photoshop.',
      'Developed Responsive and static web application by using HTML/CSS/JS and Bootstrap 4, improving user engagement.',
      'Participated in Code Reviews, for improving code quality and development efficiency.'
    ],
    skillsName: ['HTML', 'CSS', 'JavaScript', 'Bootstrap 4', 'Photoshop']
  },
]

export const projectData = [
  {
    image: ecommerce_1,
    category: 'react Js',
    heading: 'Ecommerce Application',
    description: 'A modern e-commerce web application where users can browse products, view product details, filter items by category, and manage their shopping cart.',
    contribution: 'Developed the application using React and JavaScript, implementing product listing, category filtering, and cart functionality. Built responsive UI components using HTML5, CSS3, ensuring a smooth user experience across devices.',
    keyFeatures: ['Product listing with category-based filtering', 'Dynamic product details page using React Router', 'Shopping cart management with Context API and LocalStorage persistence'],
    skillsName: ['HTML5/CSS3', 'Javascript', 'React JS', 'Tailwind CSS', 'API', 'Context API'],
    webLink: 'https://ecommerce1-qm.netlify.app/',
    gitLink: 'https://github.com/qutubh53/Ecommerce_1'
  },
  {
    image: todoApp,
    category: 'react Js',
    heading: 'To-Do List App',
    description: 'A simple task management web app that allows users to add, track, and manage daily tasks in an organized to-do list interface.',
    contribution: 'Developed the interactive task management interface using HTML5, CSS3, JavaScript and React js enabling users to add, edit, complete, and delete tasks dynamically.',
    skillsName: ['HTML5', 'CSS3', 'Javascript', 'React JS'],
    webLink: 'https://todo-app-qutub.netlify.app/',
    gitLink: 'https://github.com/qutubh53/todo-app'
  },
  {
    image: countTimerGame,
    category: 'react Js',
    heading: 'Count Timer Game',
    description: 'A browser-based timer game where users test their timing accuracy by stopping the counter as close as possible to the target time.',
    contribution: 'Developed the interactive game logic using HTML5, CSS3, JavaScript and React js, allowing users to start and stop the timer while tracking timing accuracy.',
    skillsName: ['HTML5', 'CSS3', 'Javascript', 'React JS'],
    webLink: 'https://count-timer-game.netlify.app/',
    gitLink: 'https://github.com/qutubh53/counter-timer-app'
  },
  {
    image: questroyalFine,
    category: 'client',
    heading: 'Questroyal Fine Art',
    description: 'A fine art gallery website showcasing curated collections of American paintings, artists, and exhibitions',
    contribution: 'Developed responsive UI layouts and components using HTML5, CSS3, and Bootstrap 4. Focused on maintaining design consistency and optimizing pages for multiple screen sizes.',
    skillsName: ['HTML5', 'CSS3', 'JQuery', 'Bootstrap 4', 'Mobile Responsive'],
    webLink: 'https://www.questroyalfineart.com/'
  },
  {
    image: goWabi,
    category: 'client',
    heading: 'GoWabi beauty and wellness',
    description: 'An online marketplace for booking beauty, spa, salon, and wellness services with real-time availability and promotional offers.',
    contribution: 'Developed responsive UI layouts and front-end sections using HTML5, CSS3, and Bootstrap 4. Ensured clean structure and optimized page responsiveness across multiple devices',
    skillsName: ['HTML5', 'CSS3', 'Javascript', 'Bootstrap 4', 'Mobile Responsive'],
    webLink: 'https://www.gowabi.com/en'
  },
  {
    image: onTrack,
    category: 'client',
    heading: 'OnTrack Tech Group',
    description: 'A platform designed to manage large-scale events and operations with tools for scheduling, incident tracking, and workflow coordination.',
    contribution: 'Built responsive front-end layouts and UI components using HTML5, CSS3, and Bootstrap 5. Focused on maintaining consistent design and improving cross-device compatibility.',
    skillsName: ['HTML5', 'CSS3', 'Javascript', 'Bootstrap 5', 'Mobile Responsive'],
    webLink: 'https://www.ontrack.co/'
  }
]
