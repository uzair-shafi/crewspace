import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/section-title";

export default function OurLatestCreation() {
  const [isHovered, setIsHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [className, setClassName] = useState("");

  const sectionData = [
    {
      title: "Commercial Workspaces",
      description: " Designed specifically for work — not converted houses",
      image: "/assets/1.jpg",
      align: "object-center",
    },
    {
      title: "New Era",
      description: "We’re setting a new standard for how Faisalabad works.",
      image: "/assets/2.jpg",
      align: "object-right",
    },
    {
      title: "Vibes on The House",
      description: " Proper space. Professional vibe. Reasonable pricing",
      image: "/assets/3.jpg",
      align: "object-center",
    },
  ];

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sectionData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered, sectionData.length]);

  return (
    <section
      className="flex flex-col md:mb-14 mb-[700px] items-center"
      id="creations"
    >
      <SectionTitle
        title="That’s exactly why Crew Space exists"
        description="This isn’t just another workspace.
 It’s the first proper coworking experience in Faisalabad.
"
      />

      <div
        className="flex items-center gap-4 h-100 w-full max-w-6xl mt-18 mx-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {sectionData.map((data, index) => (
          <motion.div
            key={data.title}
            className={`relative group flex-grow h-[400px] rounded-xl overflow-hidden ${isHovered && className ? "hover:w-full w-56" : index === activeIndex ? "w-full" : "w-56"} ${className} ${!className ? "pointer-events-none" : ""}`}
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            onAnimationComplete={() =>
              setClassName("transition-all duration-500")
            }
            transition={{
              delay: `${index * 0.15}`,
              type: "spring",
              stiffness: 320,
              damping: 70,
              mass: 1,
            }}
          >
            <img
              className={`h-full w-full object-cover ${data.align}`}
              src={data.image}
              alt={data.title}
            />
            <div
              className={`absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/70 transition-all duration-300 ${isHovered && className ? "opacity-0 group-hover:opacity-100" : index === activeIndex ? "opacity-100" : "opacity-0"}`}
            >
              <h1 className="text-3xl font-semibold">{data.title}</h1>
              <p className="text-sm mt-2">{data.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
