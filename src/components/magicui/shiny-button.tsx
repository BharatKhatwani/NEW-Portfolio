'use client';

import { cn } from '@/lib/utils';
import { motion, useMotionValue, useTransform, animate, HTMLMotionProps } from 'framer-motion';
import React, { useEffect } from 'react';

interface ShinyButtonProps extends HTMLMotionProps<'button'> {
  children: React.ReactNode;
  className?: string;
}

export const ShinyButton = React.forwardRef<HTMLButtonElement, ShinyButtonProps>(
  ({ children, className, ...props }, ref) => {
    const x = useMotionValue(100);
    const cssX = useTransform(x, (val) => `${val}%`);

    useEffect(() => {
      const controls = animate(x, -100, {
        duration: 3,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'linear',
      });
      return () => controls.stop();
    }, [x]);

    return (
      <motion.button
        ref={ref}
        className={cn(
          "relative cursor-pointer rounded-lg px-6 py-2 font-medium border border-gray-300 dark:border-white/20 backdrop-blur-xl transition-shadow duration-300 ease-in-out hover:shadow dark:bg-[radial-gradient(circle_at_50%_0%,var(--primary)/10%_0%,transparent_60%)] dark:hover:shadow-[0_0_20px_var(--primary)/10%]",
          className
        )}
        style={{
          '--x': cssX as unknown as string,
        } as React.CSSProperties}
        {...props}
      >
        <span
          className="relative block size-full text-sm uppercase tracking-wide text-black/80 dark:text-white/90"
          style={{
            maskImage:
              "linear-gradient(-75deg,var(--primary) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),var(--primary) calc(var(--x) + 100%))",
            WebkitMaskImage:
              "linear-gradient(-75deg,var(--primary) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),var(--primary) calc(var(--x) + 100%))",
          }}
        >
          {children}
        </span>

        <span
          className="absolute inset-0 z-10 block rounded-[inherit] p-px"
          style={{
            mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box exclude, linear-gradient(rgb(0,0,0), rgb(0,0,0))",
            WebkitMask:
              "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box exclude, linear-gradient(rgb(0,0,0), rgb(0,0,0))",
            backgroundImage:
              "linear-gradient(-75deg,var(--primary)/10% calc(var(--x)+20%), var(--primary)/50% calc(var(--x)+25%), var(--primary)/10% calc(var(--x)+100%))",
          }}
        />
      </motion.button>
    );
  }
);

ShinyButton.displayName = 'ShinyButton';
