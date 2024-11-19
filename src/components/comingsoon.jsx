import React from "react";
import { motion } from 'framer-motion';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import '../css/comingsoon.css';
import {BackgroundLines} from "./ui/background-lines";
// import {ShootingStars} from "./ui/shooting-stars";
// import {StarsBackground} from "./ui/stars-background";
const Coming = () => {
  const text = "Coming\u00A0Soon";
  const text2 = "Blitzschlag'25";

  const getRandomPosition = () => ({
    x: Math.floor(Math.random() * 200 - 100), 
    y: Math.floor(Math.random() * 200 - 100), 
  });

  return (
    <>
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 h-screen bg-black">
        <div className="main-content">
          {/* Blitzschlag'25 Text with Background */}
          <div className="text-background blitzschlag-text text-white">
            {text2.split('').map((char, index) => (
              <motion.span
                key={index}
                initial={{ x: 0, y: 0, opacity: 1 }}
                whileHover={{ ...getRandomPosition(), opacity: 0.5 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
                style={{ display: 'inline-block' }}
              >
                {char}
              </motion.span>
            ))}
          </div>

          {/* Coming Soon Text */}
          <div className="text-background coming-soon-text">
            {text.split('').map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 2,
                  delay: index * 0.3,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </div>

          {/* Countdown Timer */}
          <div className="timer-container">
            <FlipClockCountdown 
              to={new Date("2025-02-01T23:59:59")}
              className='flip-clock'
              labels={["Days", "Hours", "Minutes", "Seconds"]}
              duration={0.5}
            />
          </div>
        </div>
      </BackgroundLines>
      {/* <ShootingStars/>
      <StarsBackground/> */}
    </>
  );
};

export default Coming;
