"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

import SectionHeader from "../ui/SectionHeader";
import ServiceIconItem from "../ui/ServiceIconItem";
import ServiceItem from "../ui/ServiceItem";
import { ServicesApps, ServicesData } from "@/data/Services";
import { slideInFromLeft } from "@/lib/motion";

export const Services = () => {
  const totalCount = ServicesApps.length;
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section className="px-4 lg:px-8 xl:px-16 py-20" id="services">
      <SectionHeader
        title="What I Offer"
        subtitle="My Expertise in Development and Design"
        Icon={<ShoppingCartIcon className="h-6 w-6 text-white" />}
      />

      <div className="container mx-auto flex flex-col items-center lg:flex-row mt-10">

        {/* Services List */}
        <div className="max-w-[25rem] lg:w-1/2">
          <ul className="max-w-[22rem] space-y-4">
            {ServicesData.map((service) => (
              <ServiceItem
                key={service.id}
                id={service.id}
                name={service.name}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </ul>
        </div>


        {/* Circle Section */}
        <div className="lg:ml-auto xl:w-[38rem] lg:w-1/2 mt-10 lg:mt-0">

          <motion.p
            className="
              mb-6 Welcome-text text-center md:text-left 
              md:mb-10 lg:mb-14 italic font-semibold 
              lg:w-[22rem] lg:mx-auto
            "
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slideInFromLeft(0.5)}
          >
            Discover my array of provided services, crafted with precision and
            passion. My portfolio showcases my expertise in solving diverse
            technological challenges, from sleek web designs to solid backend
            systems.
          </motion.p>


          <div
            className="
              relative left-1/2 -translate-x-1/2 
              w-[22rem] md:w-[26rem] 
              aspect-square
            "
          >

            {/* Outer Ring */}
            <div
              className="
              absolute inset-0 rounded-full 
              border border-[#252134]
              bg-gradient-to-b 
              from-[#03001466] to-[#03001400]
              "
            />


            {/* Middle Ring */}
            <div
              className="
              absolute inset-[3.25rem]
              rounded-full 
              border border-[#252134]
              "
            />


            {/* Inner Ring */}
            <div
              className="
              absolute inset-[7rem]
              rounded-full 
              border border-[#252134]
              bg-[#03001466]
              shadow-[0_0_40px_rgba(112,66,248,0.20)]
              "
            />


            {/* Center Logo */}
            <div
              className="
              absolute top-1/2 left-1/2
              -translate-x-1/2 -translate-y-1/2
              w-[6rem] h-[6rem]
              rounded-full
              border border-[#252134]
              bg-[#03001480]
              flex items-center justify-center
              "
            >
              <Image
                src="/logo.png"
                width={44}
                height={44}
                alt="Center icon"
                draggable={false}
              />
            </div>


            {/* Icons */}
            <ul className="absolute inset-0 list-none">
              {ServicesApps.map((app, index) => (
                <ServiceIconItem
                  key={app.id}
                  id={app.id}
                  title={app.title}
                  icon={app.icon}
                  size={app.size}
                  color={app.color}
                  index={index}
                  totalCount={totalCount}
                />
              ))}
            </ul>


            {/* Curves */}
            <div className="hidden absolute top-1/2 right-full w-[32.625rem] -mt-7 xl:block">
              <Image
                src="/curve-1.svg"
                width={522}
                height={182}
                alt="Curve 1"
              />
            </div>


            <div className="hidden absolute top-1/2 left-full w-[10.125rem] -mt-17 xl:block">
              <Image
                src="/curve-2.svg"
                width={162}
                height={76}
                alt="Curve 2"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};