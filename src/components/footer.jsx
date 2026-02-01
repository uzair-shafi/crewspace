import { motion } from "framer-motion";
import { Instagram, Phone } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      className="px-6 md:px-16 lg:px-24 xl:px-32 w-full text-sm text-slate-400 mt-40"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="py-4 border-t mt-6 border-slate-700 md:flex hidden items-center justify-between gap-4">
        {/* Left - WhatsApp */}
        <div className="flex items-center gap-2">
          <Phone className="size-4 text-green-500" />
          <span>0348 3191426</span>
        </div>

        {/* Center - Copyright */}
        <p className="text-center">
          Copyright 2026 © • Crew Space • All Rights Reserved.
        </p>

        {/* Right - Instagram */}
        <div className="flex items-center gap-2">
          <Instagram className="size-5 text-pink-500" />
          <span>the_crew_space</span>
        </div>
      </div>
      <div className="md:hidden py-4 border-t mt-6 border-slate-700 flex flex-col items-center justify-between gap-4">
        {/* Center - Copyright */}
        <p className="text-center mb-[10px]">
          Copyright 2026 © • Crew Space • All Rights Reserved.
        </p>

        <div className="flex items-center gap-2">
          <Phone className="size-4 text-green-500" />
          <span>0348 3191426</span>
        </div>
        {/* Right - Instagram */}
        <div className="flex items-center gap-2">
          <Instagram className="size-5 text-pink-500" />
          <span>the_crew_space</span>
        </div>
      </div>
    </motion.footer>
  );
}
