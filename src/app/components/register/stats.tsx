import Image from 'next/image';
import { motion } from 'framer-motion';

const StatsSection: React.FC = () => {

  const variants = {
    hidden: { opacity: 0, y: 50 },
    enter: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="text-gray-600 body-font"
      initial="hidden"
      animate="enter"
      variants={variants}
      transition={{ type: 'linear' }}
    >
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
          <div className="w-full sm:p-4 px-4 mb-6">
            <h1 className="title-font font-medium text-xl mb-2 text-gray-900">Registro de unidades</h1>
            <div className="leading-relaxed">Zona de registro y visualización de unidades.</div>
          </div>
          <motion.div whileHover={{ scale: 1.1 }} className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
            <p className="leading-relaxed">Buses</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-gray-900">1.8K</h2>
            <p className="leading-relaxed">Nuevos</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-gray-900">35</h2>
            <p className="leading-relaxed">Unidades</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-gray-900">4</h2>
            <p className="leading-relaxed">Locales</p>
          </motion.div>
        </div>
        <motion.div 
          whileHover={{ scale: 1.02 }} 
          className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0"
        >
          <Image
            src="/registro.jpg"
            alt="stats"
            width={400}
            height={300}
            className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 object-cover object-center w-full h-full"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default StatsSection;
