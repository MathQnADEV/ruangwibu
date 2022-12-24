'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Who I Am" textStyles="text-center" />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">hello</span>, my name is
        <span className="font-extrabold text-white"> Shaquille Rashaun</span>,
        and I am a{' '}
        <span className="font-extrabold text-white">
          freelance Fullstack Developer
        </span>
        in Makassar. I'm more of an expert in{' '}
        <span className="font-extrabold text-white"> Backend Developer</span>
        . I don't have work experience yet but hopefully this field work
        practice will add to my experience. I hope my career as a Fullstack
        Developer or Backend Developercan be more proficient.
        <span className="font-extrabold text-white">
          {' '}And enjoy the Wibuverse of Madness
        </span>
      </motion.p>
      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[80px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
