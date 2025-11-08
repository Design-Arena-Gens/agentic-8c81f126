"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  lead?: string;
  actions?: ReactNode;
  alignment?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  lead,
  actions,
  alignment = "center"
}: SectionHeadingProps) {
  const alignClass = alignment === "center" ? "text-center mx-auto" : "text-left";
  const containerClass =
    alignment === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <motion.header
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex w-full flex-col gap-4 ${containerClass}`}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-sm tracking-[0.2em] text-white/70 uppercase">
        {eyebrow}
      </span>
      <div className={`max-w-3xl ${alignClass}`}>
        <h2 className="font-display text-3xl leading-tight text-white sm:text-4xl md:text-5xl">
          {title}
        </h2>
        {lead ? (
          <p className="mt-4 text-lg text-white/70 sm:text-xl sm:leading-relaxed">{lead}</p>
        ) : null}
      </div>
      {actions ? <div className="mt-4 flex items-center gap-4">{actions}</div> : null}
    </motion.header>
  );
}
