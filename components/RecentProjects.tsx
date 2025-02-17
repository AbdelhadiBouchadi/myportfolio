'use client';

import { projects } from '@/data';
import React from 'react';
import { PinContainer } from './ui/Pin';
import { FaLocationArrow } from 'react-icons/fa6';
import Link from 'next/link';
import { useSectionInView } from '@/lib/hooks';

const RecentProjects = () => {
  const { ref } = useSectionInView('Projects', 0.2);

  return (
    <div className="py-20 w-full" id="projects" ref={ref}>
      <h1 className="heading">
        A small selection of{' '}
        <span className="text-purple capitalize">my recent projects</span>
      </h1>
      <div className="flex flex-wrap justify-between items-center  p-4 gap-y-4 2xl:gap-y-16 mt-10 w-full">
        {projects.map((item) => (
          <Link
            href={item.link}
            target="_blank"
            className="lg:min-h-[32.5rem] flex items-center justify-center sm:h-[41rem] h-[32rem]  sm:w-[470px] 2xl:w-[630px] w-[80vw] group"
            key={item.id}
          >
            <PinContainer title={item.path} href="https://twitter.com/">
              <div className="relative flex items-center justify-center sm:w-[470px] 2xl:w-[630px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: '#13162D' }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0 rounded-xl object-fill h-full top-8 left-1/2 -translate-x-1/2 w-[28.25rem]  shadow-2xl shadow-muted-foreground  rotate-6 group-even:-rotate-6 transition-all duration-300 group-hover:-rotate-0 group-even:group-hover:rotate-0 group-even:right-[initial]"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: '#BEC1DD',
                  margin: '1vh 0',
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full black-gradient lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
