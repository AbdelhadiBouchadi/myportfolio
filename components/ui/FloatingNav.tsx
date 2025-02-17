'use client';
import React, { useState } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';
import { cn } from '@/utils/cn';
import { useActiveSectionContext } from '@/context/active-section-context';
import Link from 'next/link';

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === 'number') {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          'flex max-w-fit  fixed top-10 inset-x-0 mx-auto border rounded-full  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-5 py-3  items-center justify-center space-x-4 border-white/[0.2] bg-black-100',
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              'relative text-neutral-50 items-center flex space-x-1 px-2 py-1 hover:text-neutral-300 w-full font-medium transition-all duration-300',
              {
                'text-gray-950 hover:text-muted-foreground':
                  activeSection === navItem.name,
              }
            )}
            onClick={() => {
              setActiveSection(navItem.name);
              setTimeOfLastClick(Date.now());
            }}
          >
            <span className="text-sm text-center !cursor-pointer">
              {navItem.name}
            </span>
            {activeSection === navItem.name && (
              <motion.span
                className="rounded-full absolute -inset-x-1 -z-10 bg-purple flex items-center justify-center w-full h-full shadow-2xl"
                layoutId="activeSection"
                transition={{
                  type: 'spring',
                  stiffness: 380,
                  damping: 30,
                }}
              ></motion.span>
            )}
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
