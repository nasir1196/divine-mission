"use client";
import { motion } from "framer-motion";
import tree from "../../../public/source/banner/tree.jpg";

import Image from "next/image";

const Banner = () => {
  return (
    <div>
      <motion.div className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-8">
        <motion.div className="mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly">
          <motion.div className="mb-8 md:mb-0 text-center">
            <motion.h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Gausol Azam Divine Mission
            </motion.h1>
            <motion.p className="text-lg md:text-xl text-white mb-2">
              Humanitarian & Divine Service
            </motion.p>
            <motion.p className="text-xl md:text-2xl text-yellow-400 font-bold">
              Dr. Shah Md. Shafi-Ul-Mojnabin (Mukta)
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ x: 0, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.4 }}
            className="w-5/6 relative aspect-video lg:w-2/6"
          >
            <Image
              src={tree}
              alt="Banner Image"
              fill
              className="object-contain"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Banner;
