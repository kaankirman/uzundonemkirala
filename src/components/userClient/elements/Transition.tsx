"use client";

import { motion } from "framer-motion";

export default function Transition({
  duration,
  children,
}: {
  duration: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="flex"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: duration }}
    >
      {children}
    </motion.div>
  );
}
