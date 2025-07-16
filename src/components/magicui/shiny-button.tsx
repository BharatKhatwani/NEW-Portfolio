"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

export const ShinyButton = React.forwardRef<
  HTMLButtonElement,
  React.HTMLProps<HTMLButtonElement>
>(({ children, className, ...props }, ref) => {
  return (
    <motion.button
      ref={ref}
      className={cn(
        "relative px-6 py-2 rounded-lg border border-white text-white font-semibold overflow-hidden",
        "bg-black hover:bg-neutral-900 transition-all duration-300",
        className
      )}
      whileTap={{ scale: 0.96 }}
      {...props}
    >
      {/* Button text */}
      <span className="relative z-10">{children}</span>

      {/* Shiny overlay animation */}
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
        style={{ zIndex: 1 }}
      />
    </motion.button>
  );
});

ShinyButton.displayName = "ShinyButton";
