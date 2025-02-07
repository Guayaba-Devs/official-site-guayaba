import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export const InfoSection = () => {
  return (
    <motion.div
      className="space-y-8 mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-4xl lg:text-6xl lg:text-center  xl:text-start font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-[hsl(var(--primary)/0.7)] mb-6"
        variants={itemVariants}
      >
        Guayaba Devs
      </motion.h1>

      <motion.p
        className="text-xl lg:text-2xl lg:text-center xl:text-start text-foreground mb-8 leading-relaxed"
        variants={itemVariants}
      >
        Creando de desarrolladores
        <span className="text-primary font-semibold"> fructíferos</span>
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-center xl:justify-start"
        variants={itemVariants}
      >
        <motion.a
          href="https://github.com/Guayaba-Devs"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-primary-foreground hover:bg-[hsl(var(--primary)/0.9)] px-8 py-4 rounded-full text-lg font-semibold text-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Únete a la comunidad
        </motion.a>
        <motion.a
          href="https://www.instagram.com/guayaba_devs_official/"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-secondary text-secondary-foreground hover:bg-[hsl(var(--secondary)/0.1)] px-8 py-4 rounded-full text-lg font-semibold text-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Próximos eventos
        </motion.a>
      </motion.div>

      <motion.div
        className="flex justify-center lg:justify-center xl:justify-start gap-6 mt-12"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
        {[
          { value: "20+", label: "Desarrolladores" },
          { value: "10+", label: "Proyectos" },
          { value: "24/7", label: "Colaboración" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            className="text-center"
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
          >
            <div className="text-3xl font-bold text-primary">{stat.value}</div>
            <div className="text-muted-foreground">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
