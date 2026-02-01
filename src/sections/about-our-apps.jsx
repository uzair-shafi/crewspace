import SectionTitle from "../components/section-title";
import { motion } from "framer-motion";

export default function AboutOurApps() {
  const sectionData = [
    {
      title: "A professional and comfy environment",
      description: "Built with speed — minimal load times and optimized.",
      image:
        "https://raw.githubusercontent.com/icons8/flat-color-icons/master/svg/home.svg",
      className:
        "py-10 border-b border-slate-700 md:py-0 md:border-r md:border-b-0 md:px-10",
    },
    {
      title: "Fast internet that doesn’t quit",
      description: "Modern, pixel-perfect UI components ready for any project.",
      image:
        "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/flashEmoji.png",
      className:
        "py-10 border-b border-slate-700 md:py-0 lg:border-r md:border-b-0 md:px-10",
    },
    {
      title: "A space that feels inspiring, not improvised",
      description:
        "Simple setup with support for React, Next.js and Tailwind css.",
      image:
        "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/puzzelEmoji.png",
      className:
        "py-10 border-b border-slate-700 md:py-0 md:border-b-0 md:px-10",
    },
  ];
  return (
    <section className="flex flex-col  items-center" id="about">
      <SectionTitle
        title="Working in Faisalabad shouldn’t feel this hard"
        description=" Let’s be honest.
 Home is distracting. Cafes are noisy. Rented houses calling themselves “coworking” don’t cut it. You deserve:
"
      />
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 md:px-0 mt-18">
        {sectionData.map((data, index) => (
          <motion.div
            key={data.title}
            className={data.className}
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: `${index * 0.15}`,
              type: "spring",
              stiffness: 320,
              damping: 70,
              mass: 1,
            }}
          >
            <div className="size-10 p-2 bg-indigo-600/20 border border-indigo-600/30 rounded">
              <img src={data.image} alt="" />
            </div>
            <div className="mt-5 space-y-2">
              <h3 className="text-base font-medium text-slate-200">
                {data.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
