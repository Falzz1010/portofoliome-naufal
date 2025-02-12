"use client";
import Title from "@/components/Layout/Title";
import React, { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "react-feather";
import CertificateModal from "@/components/CertificateModal";
import { motion } from "framer-motion";

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  link: string;
  size: string;
  description: string;
}

export default function CertificatesPage() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const certificates: Certificate[] = [
    {
      id: "dicoding-1",
      title: "Pemprograman Web",
      issuer: "Dicoding",
      date: "2024",
      image: "/assets/sertifikat/1.png",
      link: "#",
      size: "large",
      description: "Comprehensive certification covering HTML, CSS, JavaScript fundamentals and modern web development practices.",
    },
    {
      id: "dicoding-2",
      title: "Front-End Web Development",
      issuer: "Dicoding",
      date: "2024",
      image: "/assets/sertifikat/2.png",
      link: "#",
      size: "large",
      description: "Advanced front-end development including responsive design, progressive web apps, and modern frameworks.",
    },
    {
      id: "dicoding-3",
      title: "Back-End Development",
      issuer: "Dicoding",
      date: "2024",
      image: "/assets/sertifikat/3.png",
      link: "#",
      size: "small",
      description: "Server-side development with Node.js, Express, and database integration.",
    },
    {
      id: "dicoding-4",
      title: "React Development",
      issuer: "Dicoding",
      date: "2024",
      image: "/assets/sertifikat/4.png",
      link: "#",
      size: "large",
      description: "Building modern web applications with React, including state management and component architecture.",
    },
    {
      id: "dicoding-5",
      title: "Cloud Computing",
      issuer: "Dicoding",
      date: "2024",
      image: "/assets/sertifikat/5.png",
      link: "#",
      size: "small",
      description: "Cloud computing fundamentals and deployment strategies.",
    },
    {
      id: "dicoding-6",
      title: "DevOps Practices",
      issuer: "Dicoding",
      date: "2024",
      image: "/assets/sertifikat/6.png",
      link: "#",
      size: "small",
      description: "DevOps principles, CI/CD pipelines, and automation practices.",
    },
    {
      id: "dicoding-7",
      title: "Mobile Development",
      issuer: "Dicoding",
      date: "2024",
      image: "/assets/sertifikat/7.png",
      link: "#",
      size: "large",
      description: "Mobile app development fundamentals and best practices.",
    },
    {
      id: "hackerrank-1",
      title: "Problem Solving",
      issuer: "HackerRank",
      date: "2024",
      image: "/assets/sertifikat/8.png",
      link: "#",
      size: "small",
      description: "Advanced problem-solving skills and algorithmic thinking.",
    },
    {
      id: "hackerrank-2",
      title: "JavaScript (Basic)",
      issuer: "HackerRank",
      date: "2024",
      image: "/assets/sertifikat/9.png",
      link: "#",
      size: "small",
      description: "Core JavaScript concepts and programming fundamentals.",
    },
    {
      id: "hackerrank-3",
      title: "JavaScript (Intermediate)",
      issuer: "HackerRank",
      date: "2024",
      image: "/assets/sertifikat/10.png",
      link: "#",
      size: "large",
      description: "Advanced JavaScript concepts including async programming and ES6+ features.",
    },
    {
      id: "hackerrank-4",
      title: "React (Basic)",
      issuer: "HackerRank",
      date: "2024",
      image: "/assets/sertifikat/11.png",
      link: "#",
      size: "small",
      description: "Fundamental React concepts and component development.",
    },
    {
      id: "hackerrank-5",
      title: "SQL (Basic)",
      issuer: "HackerRank",
      date: "2024",
      image: "/assets/sertifikat/12.png",
      link: "#",
      size: "large",
      description: "Basic SQL queries and database management skills.",
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="animate-fadeIn overflow-auto h-full pb-8 px-4 md:px-0
        scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-800
        -webkit-overflow-scrolling: touch"
      style={{
        scrollBehavior: 'smooth'
      }}
    >
      <Title>Certificates</Title>
      
      <motion.div className="grid grid-cols-3 gap-4 auto-rows-[200px] overflow-hidden">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ 
              scale: 1.02,
              y: -5,
              transition: { 
                type: "spring", 
                stiffness: 400, 
                damping: 25 
              }
            }}
            onClick={() => {
              setSelectedCert(cert);
              setIsModalOpen(true);
            }}
            className={`group relative rounded-3xl overflow-hidden cursor-pointer
              border border-zinc-800/50 hover:border-emerald-500/50
              transition-all duration-500 ease-out
              backdrop-blur-xl bg-zinc-900/40
              ${
                // Custom grid spans based on index for bento layout
                index === 0 ? 'col-span-2 row-span-2' :  // First item large
                index === 1 ? 'col-span-1 row-span-2' :  // Tall item
                index === 3 ? 'col-span-2' :             // Wide item
                index === 8 ? 'col-span-2' :             // Wide item
                ''
              }
              hover:shadow-2xl hover:shadow-emerald-500/10`}
          >
            {/* Background Image with Overlay */}
            <motion.div 
              className="absolute inset-0 z-0 overflow-hidden"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover opacity-20 group-hover:opacity-40 
                    transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/80 to-transparent" />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div 
              className="relative z-10 p-8 h-full flex flex-col justify-between overflow-hidden"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.5 }}
            >
              <div className="overflow-hidden">
                <motion.h3 
                  className="text-xl font-medium text-zinc-100 group-hover:text-emerald-400 
                    transition-colors duration-500 flex items-center gap-2 overflow-hidden whitespace-nowrap"
                  whileHover={{ x: 5 }}
                >
                  <span className="overflow-hidden text-ellipsis">{cert.title}</span>
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ExternalLink size={18} />
                  </motion.span>
                </motion.h3>
                <p className="text-sm text-zinc-400 mt-3 font-light tracking-wide overflow-hidden text-ellipsis whitespace-nowrap">
                  {cert.issuer} • {cert.date}
                </p>
                <p className="text-sm text-zinc-500 mt-4 font-light line-clamp-2 
                  group-hover:text-zinc-400 transition-colors duration-500 overflow-hidden">
                  {cert.description}
                </p>
              </div>

              {/* Modern Hover Effect */}
              <motion.div 
                className="absolute bottom-0 left-0 w-full overflow-hidden"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-emerald-500/70 to-transparent" />
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <CertificateModal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        certificate={selectedCert}
      />
    </motion.section>
  );
}