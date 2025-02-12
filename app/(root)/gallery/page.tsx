"use client";
import { motion } from "framer-motion";
import { FC } from 'react';
import Image from 'next/image';
import Title from "@/components/Layout/Title";

const GalleryPage: FC = () => {
  const galleryItems = [
    {
      src: "/assets/profile1.jpg",
      alt: "Gallery Image 1",
      caption: "Photo 1",
      className: "col-span-1 row-span-1"
    },
    {
      src: "/assets/profile2.jpg",
      alt: "Gallery Image 2",
      caption: "Photo 2",
      className: "col-span-2 row-span-2"
    },
    {
      src: "/assets/profile3.jpg",
      alt: "Gallery Image 3",
      caption: "Photo 3",
      className: "col-span-1 row-span-2"
    },
    {
      src: "/assets/profile4.jpg",
      alt: "Gallery Image 4",
      caption: "Photo 4",
      className: "col-span-1 row-span-1"
    },
    {
      src: "/assets/profile5.jpg",
      alt: "Gallery Image 5",
      caption: "Photo 5",
      className: "col-span-2 row-span-1"
    },
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen p-6"
    >
      <Title>Gallery</Title>
      
      <div className="grid grid-cols-4 gap-4 auto-rows-[200px]">
        {galleryItems.map((item, index) => (
          <div 
            key={index} 
            className={`${item.className} relative group rounded-2xl overflow-hidden animate-fade-in-up`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-white font-medium">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default GalleryPage;
