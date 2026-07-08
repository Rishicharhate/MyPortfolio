"use client";

import { motion } from "framer-motion";

interface ServiceIconItemProps {
  id: number;
  title: string;
  icon: any;
  size: number;
  color: string;
  index: number;
  totalCount: number;
}

const ServiceIconItem = ({
  title,
  icon: Icon,
  color,
  index,
  totalCount,
}: ServiceIconItemProps) => {

  const angle = (360 / totalCount) * index - 90;

  // Outer circle radius
  const radius = 207;

  const x = Math.cos((angle * Math.PI) / 180) * radius;
  const y = Math.sin((angle * Math.PI) / 180) * radius;


  return (
    <motion.li
  className="absolute top-1/2 left-1/2"
  style={{
    transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
  }}
>
  <motion.div
    whileHover={{
      scale: 1.5,
    }}
    transition={{
      type: "spring",
      stiffness: 300,
      damping: 20,
    }}
    className="
      w-16 h-16
      rounded-full
      flex items-center justify-center
      bg-[#030014]
      border border-[#252134]
      shadow-[0_0_20px_rgba(112,66,248,0.25)]
    "
  >
    <Icon
      className="w-8 h-8"
      style={{ color }}
    />
  </motion.div>
</motion.li>
  );
};

export default ServiceIconItem;