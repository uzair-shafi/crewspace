import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { useState } from "react";

export default function Subscr() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbyjhp0fBypB2D4jDAX4iDpNMn0L-UC9VMx8ybEqCFrlJh4MPfdL-TvUImlEkdiyzLpE9w/exec";

  const handleSubmit = async () => {
    if (!email) return;

    setLoading(true);

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // IMPORTANT for Google Apps Script
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      setSuccess(true);
      const img = new Image();
      img.src = "/assets/fox.png";
      img.onload = () => {
        setImageLoaded(true);
        setShowPopup(true);
      };
      setEmail("");
    } catch (err) {
      console.error("Submission failed", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col items-center">
      <motion.div
        className="relative max-w-6xl py-20 md:py-26 mt-18 md:w-full md:h-fit h-[720px] overflow-hidden mx-2 md:mx-auto border border-indigo-900 flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-[#401B98]/5 to-[#180027]/10 rounded-3xl p-4 md:p-10 text-white relative"
        initial={{ y: 150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
      >
        <div className="absolute pointer-events-none top-10 -z-1 left-20 size-64 bg-gradient-to-br from-[#536DFF] to-[#4F39F6]/60 blur-[180px]"></div>
        <div className="absolute pointer-events-none bottom-10 -z-1 right-20 size-64 bg-gradient-to-br from-[#536DFF] to-[#4F39F6]/60 blur-[180px]"></div>
        <div className="flex flex-col items-center md:items-start max-md:text-center">
          <p className="group flex items-center gap-2 rounded-full text-sm p-1 pr-3 text-indigo-300 bg-indigo-200/15">
            <span className="bg-indigo-600 text-white md:text-sm text-[12px] px-3.5 py-1 rounded-full">
              Launching very soon
            </span>
            <p className="flex items-center flex items-center gap-2 rounded-full md:text-sm text-[12px] p-1 pr-3 font-semibold gap-1">
              <span> Limited early spots. </span>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-right-icon lucide-chevron-right group-hover:translate-x-0.5 transition duration-300"
              >
                <path d="m9 18 6-6-6-6" />
              </svg> */}
            </p>
          </p>
          <h1 className="text-3xl font-medium max-w-xl mt-5 bg-gradient-to-r from-white to-[#b6abff] text-transparent bg-clip-text">
            Want a proper workspace? Get early-crew pricing & launch updates.
          </h1>
          <p className="text-base text-slate-400 max-w-md mt-4">
            If you’ve been waiting for a workspace that actually feels right —
            this is it.
          </p>
          <motion.div
            className="flex  items-center justify-center mt-10 border border-slate-700 focus-within:outline focus-within:outline-indigo-600 text-sm rounded-full h-14 max-w-lg "
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 320,
              damping: 70,
              mass: 1,
            }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent outline-none rounded-full px-4 h-full flex-1 placeholder:text-slate-400 w-full"
              placeholder="Enter your email address"
            />
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="bg-indigo-600 text-white rounded-full h-11 md:w-[180px] w-[100px] mr-1 md:px-10 px-3 flex items-center justify-center hover:bg-indigo-700 active:scale-95 transition disabled:opacity-60"
            >
              {loading ? (
                <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
              ) : (
                "Join Crew"
              )}
            </button>
          </motion.div>
        </div>
        <div className="hidden md:block md:-mr-16 max-md:mt-10 absolute -right-7">
          <motion.img
            className="max-w-xs md:max-w-sm"
            src="/assets/cube2.png" // remove /public prefix
            alt="cube"
            animate={{
              y: [0, -18, 0], // float up and down
              rotate: [0, 10, -10, 0], // tiny rotation for subtle effect
            }}
            transition={{
              duration: 4, // slow, subtle movement
              repeat: Infinity, // keep looping
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        </div>
        <div className="block md:hidden mt-10 flex justify-center w-full">
          <motion.img
            className="max-w-xs"
            src="/assets/cube2.png"
            alt="cube"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
      {showPopup && imageLoaded && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="relative max-w-lg w-full rounded-3xl bg-slate-200/10 border border-white/10 backdrop-blur-xl p-6 text-center text-white shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-4 text-white/60 hover:text-white text-xl"
            >
              ×
            </button>

            {/* Top image */}
            <img
              src="/assets/fox.png"
              alt="welcome"
              className="w-40 mx-auto mb-4"
            />

            {/* Title */}
            <h2 className="text-3xl font-semibold">
              Welcome to the Early Crew
            </h2>

            {/* Description */}
            <p className="text-md text-slate-200 mt-3 leading-relaxed">
              We’ll keep you posted as we launch — no spam, no noise, just the
              good stuff
            </p>

            {/* Instagram */}
            <div className="mt-5 text-sm text-white flex gap-2 justify-center">
              <Instagram className="size-5 text-pink-500" />
              <span className="font-medium">the_crew_space</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
