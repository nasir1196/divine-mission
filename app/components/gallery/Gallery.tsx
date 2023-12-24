"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "../Container";
import axios from "axios";
import { useRouter } from "next/navigation";

const Gallery = () => {
  const router = useRouter();
  const initialData: any = [];
  const [gallery, setGallery] = useState(initialData);

  useEffect(() => {
    axios
      .get("/api/admin/getGallery")
      .then((res: any) => {
        setGallery(res.data.data);
      })
      .catch((err: any) => console.log(err.message));
  }, []);
  return (
    <Container>
      <motion.div
        initial={{ x: 0 }}
        transition={{ duration: 2 }}
        whileHover={{ scale: 1.3 }}
        className="text-center p-12"
      >
        <h1 className="text-center text-slate-950 font-bold text-xl md:text-2xl lg:text-3xl">
          Gallery Areas
        </h1>
      </motion.div>
      <div className="my-5 py-3">
        {!gallery?.galleryData && (
          <h1 className="text-center text-teal-700 font-semibold text-2xl ">
            Loading...
          </h1>
        )}
      </div>
      <motion.div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {gallery?.galleryData &&
          gallery?.galleryData?.map((data: any) => (
            <motion.div
              onClick={() => router.push(`gallery/${data._id}`)}
              key={data._id}
              className="col-span-1 cursor-pointer border-[1.2px] border-slate-200 bg-slate-50 rounded-sm p-2 text-center text-sm"
              initial={{ x: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.2 }}
            >
              <div className="aspect-video overflow-hidden relative w-full">
                <Image
                  src={`${data.picture}`}
                  alt={data.title}
                  fill
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-600">
                  {data.title}
                </h1>
              </div>
            </motion.div>
          ))}
      </motion.div>
    </Container>
  );
};

export default Gallery;
