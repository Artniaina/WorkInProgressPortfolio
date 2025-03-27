import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface EducationItem {
  title: string;
  institution: string;
  period: string;
  description: string;
}

const education: EducationItem[] = [
  {
    title: "Master's Degree in Software Engineering",
    institution: "ESTI/ ESIEE-IT",
    period: "March 2025",
    description: "Currently pursuing",
  },
  {
    title: "Bachelor's Degree in Computer Science",
    institution: "ESTI",
    period: "2022-2025",
    description: "Bachelor in CS: Integration and development",
  },
  {
    title: "English Diploma",
    institution: "MPTC",
    period: "2021",
    description:
      'English Courses at: "Madagascar Professional Training Centre"',
  },
  {
    title: "Scientific Baccalaureate",
    institution: "Les Bambinos II",
    period: "2021",
    description: 'Scientific Baccalaureate at: "Les Bambinos II"',
  },
];

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: 0.2,
      },
    },
  };

  const contentVariants = (index: number) => ({
    hidden: { opacity: 0, x: index % 2 === 0 ? 50 : -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  });

  const parallaxVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "easeInOut",
      },
    },
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * custom,
        duration: 0.7,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="education"
      className="py-12 md:py-20 bg-cyber-dark relative overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-transparent opacity-30 pixelated"
        variants={parallaxVariants}
        initial="initial"
        animate="animate"
      />

      <div className="absolute inset-0 flex items-center justify-center opacity-5 z-0">
        <motion.div
          className="grid grid-cols-12 gap-8 w-full h-full"
          animate={{
            y: [0, -5, 0],
            transition: {
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
        >
          {Array(120)
            .fill(0)
            .map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-pink-500 pixelated"
                initial={{ opacity: 0.1, scale: 0 }}
                animate={{
                  opacity: Math.random() * 0.5 + 0.2,
                  scale: Math.random() * 0.6 + 0.4,
                  x: [0, Math.random() * 10 - 5, 0],
                  transition: {
                    delay: Math.random() * 2,
                    duration: Math.random() * 3 + 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                }}
              />
            ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10" ref={ref}>
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12 md:mb-20"
        >
          <motion.h2
            className="text-3xl  font-bold pixelated"
            whileInView={{
              textShadow: [
                "0 0 0px rgba(255, 105, 180, 0)",
                "0 0 10px rgba(255, 105, 180, 0.5)",
                "0 0 0px rgba(255, 105, 180, 0)",
              ],
              transition: {
                duration: 2.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              },
            }}
          >
            EDUCATION AND BACKGROUND
          </motion.h2>

          <motion.p
            className="text-gray-400 mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base pixelated"
            variants={fadeInUpVariants}
            custom={1}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            My academic journey
          </motion.p>
        </motion.div>

        <motion.div
          variants={timelineVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative max-w-4xl mx-auto"
        >
          <motion.div
            className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-500/70 via-purple-500/30 to-transparent pixelated"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={
              inView ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }
            }
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
          />

          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative mb-4  sm:mb-8 pl-12 sm:pl-0  ${
                index % 2 === 0 ? "sm:pr-[55%] w-[64rem] right-[5.2rem]" : "w-[50.5rem] left-[1.6rem] sm:pl-[55%]"
              }`}
            >
              <motion.div
                className={`absolute sm:left-1/2 w-[4rem] h-[4rem]  -ml-3 h-6 w-6 rounded-full bg-cyber-dark shadow-lg shadow-pink-400/50 border-2 border-white z-10 pixelated  ${
                index % 2 === 0 ? " left-[20rem]" : " left-[25rem] "
              }`}
                initial={{ scale: 0 }}
                animate={
                  inView
                    ? {
                        scale: 1,
                        transition: { delay: 0.2 + index * 0.2, duration: 0.5 },
                      }
                    : { scale: 0 }
                }
                whileHover={{
                  scale: 1.3,
                  boxShadow: "0 0 20px rgba(255, 105, 180, 0.8)",
                }}
              />

              <motion.div
                className={`absolute top-3 h-0.5 bg-pink-400/60 z-5 ${
                  index % 2 === 0
                    ? "left-12 sm:right-[45%] w-[20px] sm:w-[5%]"
                    : "left-12 sm:left-[45%] w-[20px] sm:w-[5%]"
                }`}
                initial={{ scaleX: 0 }}
                animate={
                  inView
                    ? {
                        scaleX: 1,
                        transition: { delay: 0.3 + index * 0.2, duration: 0.4 },
                      }
                    : { scaleX: 0 }
                }
                style={{
                  transformOrigin:
                    index % 2 === 0 ? "right center" : "left center",
                }}
              />

              {/* Start from here OKKKKK */}
                <motion.div
                  variants={contentVariants(index)}
                  className="p-6 w-[30rem] text-center sm:p-8 bg-cyber-purple/30 backdrop-blur-md rounded-xl relative overflow-hidden group pixelated shadow-lg shadow-pink-500/10  border-b-2 border-cyber-pink"
                  whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                  }}
                >
                  <h3 className="text-lg text-white mb-2 relative z-10 pixelated">
                  {edu.title}
                  </h3>
                  <div className="flex flex-col justify-between items-start sm:items-center mb-4 relative z-10">
                  <p className="text-sm text-white mb-2">{edu.institution}</p>
                  </div>
                  <p className="text-gray-300 text-base relative z-10">
                  {edu.description}
                  </p>
                </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
