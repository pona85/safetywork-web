// components/Stagger.tsx
"use client";
import { motion } from "framer-motion";
import { motionTokens as t } from "@/lib/motionTokens";

export const Stagger = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ amount: 0.2, once: true }}
    variants={{ hidden: {}, show: { transition: { staggerChildren: t.stagger } } }}
  >
    {children}
  </motion.div>
);

export const Item = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 16 },
      show: { opacity: 1, y: 0, transition: { duration:  t.itemDuration, ease: t.ease } },
    }}
  >
    {children}
  </motion.div>
);
