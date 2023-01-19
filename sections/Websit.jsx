'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { InsightCard, TitleText, TypingText } from '../components';
import { insights } from '../constants';

const Websit = () => (
  <section className={`${styles.paddings} relative z-10 `}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="2xl:max-w-full w-full sm:w-full mx-auto flex flex-col"
    >
      <TypingText title="| Insight Ruang Wibu..." textStyles="text-center" />
      <TitleText title="Insight about Ruang Wibu and My Website" textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((insight, index) => (
          <InsightCard key={`insight-${index}`} {...insight} index={index + 1} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Websit;
