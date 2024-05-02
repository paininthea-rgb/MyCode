'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import WorkSliderBtns from '@/components/WorkSliderBtns';
import { motion } from 'framer-motion';

import { TbBrandNodejs } from 'react-icons/tb';
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import { IoLogoHtml5, IoLogoCss3 } from 'react-icons/io';
import { IoLogoJavascript } from 'react-icons/io5';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'project 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.',
    stack: [
      {
        name: 'Html 5',
      },
      {
        name: 'Css 3',
      },
      {
        name: 'Javascript',
      },
    ],
    image: '/assets/work/thumb1.png',
    live: '',
    github: '',
  },
  {
    num: '02',
    category: 'fullstack',
    title: 'project 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.',
    stack: [
      {
        name: 'Next.js',
      },
      {
        name: 'Tailwind.css',
      },
      {
        name: 'Node.js',
      },
    ],
    image: '/assets/work/thumb1.png',
    live: '',
    github: '',
  },
  {
    num: '03',
    category: 'frontend',
    title: 'project 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.',
    stack: [
      {
        name: 'Next.js',
      },
      {
        name: 'Tailwind.css',
      },
    ],
    image: '/assets/work/thumb1.png',
    live: '',
    github: '',
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;

    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='h-[50%] flex flex-col gap-[30px]'>
              {/* outline num */}
              <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                {project.num}
              </div>
              {/* project cat */}
              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
                {project.category} project
              </h2>
              {/* project desc */}
              <p className='text-white/60'>{project.description}</p>
              {/* stack */}
              <ul className='flex gap-4'>
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className='text-xl text-accent'>
                      {item.name}
                      {index !== project.stack.length - 1 && ','}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className='border border-white/20'></div>
              {/* btns */}
              <div className='flex items-center gap-4'>
                {/* tooltip btn */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* tooltip btn */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsGithub className='text-white text-3xl group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className='xl:h-[520px]'
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide className='w-full' key={index}>
                  <div className='h-[460px] relative group flex justify-center items-center'>
                    {/* overlay */}
                    <div className='absolute top-0 bottom-0 w-full h-full bg-black/30 z-10'></div>
                    <div className='relative w-full h-full'>
                      {/* <Image
                        src={project.image}
                        fill
                        className='object-cover'
                        alt=''
                      /> */}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:-bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none'
                btnStyles='bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all'
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;

// {/* btns */}
// <div className='absolute z-50 flex gap-4'>
// {/* tooltip btn */}
// <Link href={project.github}>
//   <TooltipProvider delayDuration={100}>
//     <Tooltip>
//       <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white scale-0 group-hover:scale-100 transition-all duration-500 flex justify-center items-center hover:rotate-45 hover:bg-accent  hover:text-white'>
//         <BsGithub className='text-primary text-3xl' />
//       </TooltipTrigger>
//       <TooltipContent>
//         <p>Github repo</p>
//       </TooltipContent>
//     </Tooltip>
//   </TooltipProvider>
// </Link>
// {/* tooltip btn */}
// <Link href={project.live}>
//   <TooltipProvider delayDuration={100}>
//     <Tooltip>
//       <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white scale-0 group-hover:scale-100 transition-all duration-500 flex justify-center items-center hover:rotate-45 hover:bg-accent hover:text-white'>
//         <BsArrowUpRight className='text-primary text-3xl' />
//       </TooltipTrigger>
//       <TooltipContent>
//         <p>Live project</p>
//       </TooltipContent>
//     </Tooltip>
//   </TooltipProvider>
// </Link>
// </div>

// INITIAL

//       <div className='container mx-auto'>
//   <h3 className='text-[26px] uppercase mb-2 xl:hidden'>
//     My latest projects
//   </h3>
//   <div className='flex flex-col xl:flex-row xl:gap-8'>
//     <div className='w-full xl:w-[35%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
//       <h3 className='hidden xl:flex uppercase text-6xl leading-tight font-extrabold'>
//         My latest projects
//       </h3>
//       <div className='bg-accent h-[50%] px-6 py-8 text-primary flex flex-col justify-center items-center'>
//         <div className='flex flex-col gap-4'>
//           <div className='bg-primary text-white px-4 py-1 max-w-max flex justify-center items-center '>
//             <p className='text-[15px] uppercase font-semibold tracking-[4px] text-center'>
//               {project.category} Project
//             </p>
//           </div>
//           <div>
//             <h3 className='h3 capitalize font-extrabold mb-2'>
//               {project.title}
//             </h3>
//             <p className='leading-snug'>{project.description}</p>
//           </div>
//           <div className='flex items-center gap-4'>
//             {project.stack.map((item, index) => {
//               return (
//                 <div className='flex text-4xl text-primary' key={index}>
//                   <TooltipProvider delayDuration={100}>
//                     <Tooltip>
//                       <TooltipTrigger>{item.icon}</TooltipTrigger>
//                       <TooltipContent>
//                         <p>{item.name}</p>
//                       </TooltipContent>
//                     </Tooltip>
//                   </TooltipProvider>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className='w-full xl:w-[65%]'>
//       <Swiper
//         spaceBetween={30}
//         slidesPerView={1}
//         className='xl:h-[520px]'
//         onSlideChange={handleSlideChange}
//       >
//         {projects.map((project, index) => (
//           <SwiperSlide className='w-full' key={index}>
//             <div className='h-[460px] relative group flex justify-center items-center'>
//               {/* overlay */}
//               {/* group-hover:backdrop-blur-sm */}
//               <div className='absolute top-0 bottom-0 w-full h-full bg-black/50 z-40 group-hover:bg-black/80  transition-all'></div>
//               <div className='relative w-full h-full'>
//                 <Image
//                   src={project.image}
//                   fill
//                   className='object-cover'
//                   alt=''
//                 />
//               </div>
//               {/* btns */}
//               <div className='absolute z-50 flex gap-4'>
//                 {/* tooltip btn */}
//                 <Link href={project.github}>
//                   <TooltipProvider delayDuration={100}>
//                     <Tooltip>
//                       <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white scale-0 group-hover:scale-100 transition-all duration-500 flex justify-center items-center hover:rotate-45 hover:bg-accent  hover:text-white'>
//                         <BsGithub className='text-primary text-3xl' />
//                       </TooltipTrigger>
//                       <TooltipContent>
//                         <p>Github repo</p>
//                       </TooltipContent>
//                     </Tooltip>
//                   </TooltipProvider>
//                 </Link>
//                 {/* tooltip btn */}
//                 <Link href={project.live}>
//                   <TooltipProvider delayDuration={100}>
//                     <Tooltip>
//                       <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white scale-0 group-hover:scale-100 transition-all duration-500 flex justify-center items-center hover:rotate-45 hover:bg-accent hover:text-white'>
//                         <BsArrowUpRight className='text-primary text-3xl' />
//                       </TooltipTrigger>
//                       <TooltipContent>
//                         <p>Live project</p>
//                       </TooltipContent>
//                     </Tooltip>
//                   </TooltipProvider>
//                 </Link>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//         <WorkSliderBtns
//           containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_20px)] xl:-bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none'
//           btnStyles='bg-accent text-primary text-xl w-[40px] h-[40px] flex justify-center items-center'
//         />
//       </Swiper>
//     </div>
//   </div>
// </div>
