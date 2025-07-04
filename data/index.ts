export const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Testimonials', link: '#testimonials' },
  { name: 'Contact', link: '#contact' },
];

export const gridItems = [
  {
    id: 1,
    title: 'I prioritize client collaboration, fostering open communication ',
    description: '',
    className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
    imgClassName: 'w-full h-full',
    titleClassName: 'justify-end',
    img: '/b1.svg',
    spareImg: '',
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '',
    spareImg: '',
  },
  {
    id: 3,
    title: 'My tech stack',
    description: 'I constantly try to improve',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-center',
    img: '',
    spareImg: '',
  },
  {
    id: 4,
    title: 'Tech enthusiast with a passion for development.',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '/grid.svg',
    spareImg: '/b4.svg',
  },

  {
    id: 5,
    title: 'Currently building a Next.js SaaS Web Application',
    description: 'The Inside Scoop',
    className: 'md:col-span-3 md:row-span-2',
    imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    img: '/b5.svg',
    spareImg: '/grid.svg',
  },
  {
    id: 6,
    title: 'Do you want to start a project together?',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
    img: '',
    spareImg: '',
  },
];

export const projects = [
  {
    id: 7,
    title: 'Hospital Management System',
    des: 'A fullstack hospital management system, to manage patients data , doctors and appointments. Nexj.js for both front-end and back-end , mongoDB with Prisma ORM and next-auth 5. ',
    img: '/eyecare.png',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/next.svg', '/dock.svg'],
    link: 'https://ophtachusm-submain.vercel.app/',
    path: 'OphtaCHUSM',
  },
  {
    id: 9,
    title: 'MeetAI - an AI Powered Meeting Plateform',
    des: ' An AI-powered meeting plateform that transcribes, summarizes, and allows meetings in real-time with an AI agent. Built with Next.js 15, tRPC, DrizzleORM, and OpenAI API',
    img: '/meetai.png',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/next.svg', '/dock.svg'],
    link: 'https://meetai-omega.vercel.app/',
    path: 'MeetAI',
  },
  {
    id: 1,
    title: 'FlowShop - Complete E-com Platform',
    des: 'A luxury-focused website with a strong emphasis on interactivity and visual flow using Next.js 15 and GSAP along with prismic.io',
    img: '/cote-royale.png',
    iconLists: ['/next.svg', '/re.svg', '/tail.svg', '/ts.svg', '/git.svg'],
    link: 'https://cote-royale-ecru.vercel.app/',
    path: 'Côte Royale',
  },
  {
    id: 8,
    title: 'Côte Royale - Luxury Brand Website',
    des: 'A complete e commerce platform using Next js 15, ReactQuery, Tailwindcss, Typescript, and wix API',
    img: '/flowshop.png',
    iconLists: ['/next.svg', '/re.svg', '/tail.svg', '/ts.svg', '/git.svg'],
    link: 'https://flowshop-nine.vercel.app/',
    path: 'Flow Shop',
  },

  {
    id: 2,
    title: 'CaseCobra - Custom iPhone Cases',
    des: 'A custom iPhone cases builder E-commerce shop with some fancy features',
    img: '/casecobra.png',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/fm.svg'],
    link: 'https://casecobra-phonecase.vercel.app/',
    path: 'Casecobra',
  },
  {
    id: 3,
    title: 'CarePulse - A Healthcare Management System',
    des: 'A user and admin friendly patient management system that includes patients medical records and much more features. ',
    img: '/carepulse.png',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/stream.svg', '/c.svg'],
    link: 'https://carepulse-two-lime.vercel.app/',
    path: 'Carepulse',
  },
  {
    id: 4,
    title: 'AI Image SaaS - Canva Application',
    des: 'A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.',
    img: '/p3.svg',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/c.svg'],
    link: 'https://imaginify-two-rust.vercel.app/',
    path: 'Imaginify',
  },
  {
    id: 5,
    title: 'Animated 3D Portfolio Website',
    des: 'An animated portfolio website prototype, combining Framer Motion animations and Three.js 3D effects..',
    img: '/3d_thumbnail.png',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/fm.svg'],
    link: 'https://abdelhadev.netlify.app/',
    path: '3D Portfolio',
  },
];

export const testimonials = [
  {
    quote:
      'Abdelhadi developed a complete Hospital Management System tailored for my ophthalmology practice. His ability to understand complex workflows and transform them into a smooth, intuitive experience was beyond impressive. His support and dedication throughout the process made everything feel effortless. Truly grateful to have had him on board.',
    name: 'Dr. Anas Dalouhamouch',
    title: 'Ophthalmologist, CHU Souss Massa',
    img: '/testimonials/chu.png',
  },
  {
    quote:
      "Working with Abdelhadi on our music festival's website was an incredible journey. He built the platform and the back office from scratch, allowing us to manage everything ourselves with ease. More than a developer, he's been a reliable friend, and I'm genuinely thankful for his talent and commitment.",
    name: 'Mohammed Bijddiguen',
    title: 'Manager, Dérive Casablancaise',
    img: '/testimonials/derive.webp',
  },
  {
    quote:
      'My dental portfolio website is exactly how I envisioned it, thanks to Abdelhadi. He was meticulous, fast, and super receptive to every little detail I cared about. I’m proud of what we built together, and amazed by his capability of understanding exactly my needs. I highly recommend him to anyone looking for a talented developer.',
    name: 'Dr. Marouane Bouchadi',
    title: 'Dentist, Agadir',
    img: '/testimonials/marouane.jpg',
  },
];

export const companies = [
  {
    id: 1,
    name: 'cloudinary',
    img: '/cloud.svg',
    nameImg: '/cloudName.svg',
  },
  {
    id: 2,
    name: 'appwrite',
    img: '/app.svg',
    nameImg: '/appName.svg',
  },
  {
    id: 3,
    name: 'HOSTINGER',
    img: '/host.svg',
    nameImg: '/hostName.svg',
  },
  {
    id: 4,
    name: 'stream',
    img: '/s.svg',
    nameImg: '/streamName.svg',
  },
  {
    id: 5,
    name: 'docker.',
    img: '/dock.svg',
    nameImg: '/dockerName.svg',
  },
];

export const workExperience = [
  {
    id: 1,
    title: 'Frontend Engineer Intern',
    desc: 'Assisted in the development of a web-based platform using React.js, enhancing interactivity.',
    className: 'md:col-span-2',
    thumbnail: '/exp1.svg',
  },
  {
    id: 2,
    title: 'Mobile App Dev ',
    desc: 'Designed and developed mobile app for both iOS & Android platforms using React Native.',
    className: 'md:col-span-2',
    thumbnail: '/exp2.svg',
  },
  {
    id: 3,
    title: 'Freelance Web Dev Project',
    desc: 'Led the dev of many fullstack web applications for clients, from initial concept to deployment on internet.',
    className: 'md:col-span-2', // change to md:col-span-2
    thumbnail: '/exp3.svg',
  },
  {
    id: 4,
    title: 'Lead Frontend Developer',
    desc: 'Developed and maintained user-facing features using modern frontend technologies.',
    className: 'md:col-span-2',
    thumbnail: '/exp4.svg',
  },
];

export const socialMedia = [
  {
    id: 1,
    img: '/git.svg',
    link: 'https://github.com/AbdelhadiBouchadi?tab=repositories',
  },
  {
    id: 2,
    img: '/wha.svg',
    link: 'https://wa.me/+905526417998',
  },
  {
    id: 3,
    img: '/insta.svg',
    link: 'https://www.instagram.com/abdelhadi0812/',
  },
];
