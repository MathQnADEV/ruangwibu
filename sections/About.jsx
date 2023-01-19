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
      <TypingText title="| About What is Wibu?" textStyles="text-center" />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] fotn-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Japanofilia</span> atau
        <span className="font-extrabold text-white"> WIBU</span> adalah ungkapan
        yang ditujukan kepada seseorang terutama orang-orang Barat yang menyukai{' '}
        <span className="font-extrabold text-white">
          budaya populer dari Jepang.{' '}
        </span>
        Kata <span className="font-extrabold text-white">weeaboo</span> sendiri
        pertama kali digunakan dalam sebuah forum bernama 4chan untuk
        menggantikan kata wapanese yang sudah diblokir oleh forum tersebut
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
