import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>

      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#9FFF24]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#9FFF24]'>Miguel</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Full Stack Web Developer<br className='sm:block hidden' />

          </p>
          <br />
          <div className="flex-auto flex space-x-4">
            <a target="_blank" href="https://drive.google.com/file/d/15GUnWottdqB9ryPfdHPWTQnyPTjZLRrg/view?usp=sharing"> <button className="h-10 px-7 font-semibold rounded-md bg-[#9FFF24] text-[#080d01]"> CURRICULUM VITAE</button></a>
          </div>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}

            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
