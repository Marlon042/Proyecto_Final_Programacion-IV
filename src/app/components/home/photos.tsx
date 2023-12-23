import Image from 'next/image';
import { motion } from "framer-motion";

const pageTransition = {
  hidden: {
    opacity: 0,
    y: "-10vh"
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8
    }
  }
};

export default function Photo() {
  return (
    <motion.section className="text-gray-600 body-font" variants={pageTransition} initial="hidden" animate="visible">
      <div className="container px-5  mx-auto flex flex-wrap">
        <motion.div whileHover={{ scale: 1.02 }} className="flex w-full mb-20 flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Nuestras Empresa</h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Somos una empresa consolidada desde 1998 en Costa Rica, nuestras unidades tienen altos estándares de seguridad, pasan por un proceso de revisión minucioso continuamente, además contamos con una flotilla moderna que prioriza la comodidad y seguridad de nuestros usuarios </p>
        </motion.div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <motion.div whileHover={{ scale: 1.02 }} className="md:p-2 p-1 w-1/2">
              <Image alt="gallery" className="w-full object-cover h-full object-center block" src="/bus5.jpg" width={500} height={300} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} className="md:p-2 p-1 w-1/2">
              <Image alt="gallery" className="w-full object-cover h-full object-center block" src="/bus6.jpg" width={501} height={301} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} className="md:p-2 p-1 w-full">
              <Image alt="gallery" className="w-full h-full object-cover object-center block" src="/men.jpg" width={600} height={360} />
            </motion.div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <motion.div whileHover={{ scale: 1.02 }} className="md:p-2 p-1 w-full">
              <Image alt="gallery" className="w-full h-full object-cover object-center block" src="/men2.jpg" width={601} height={361} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} className="md:p-2 p-1 w-1/2">
              <Image alt="gallery" className="w-full object-cover h-full object-center block" src="/bus2.jpg" width={502} height={302} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} className="md:p-2 p-1 w-1/2">
              <Image alt="gallery" className="w-full object-cover h-full object-center block" src="/bus.jpg" width={503} height={303} />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
