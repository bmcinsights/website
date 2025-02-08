"use client";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { WobbleCard } from "@/components/ui/wobble-card";
import Image from "next/image";
import AOS from "aos";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

export default function ProfilePage() {
  const router = useRouter();
  const currentPath = usePathname();

  const [showWobbleCards, setShowWobbleCards] = useState(false);

  useEffect(() => {
    AOS.init();
    const timer = setTimeout(() => {
      setShowWobbleCards(true);
    }, 500); // 0.5 seconds delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col md:flex-col overflow-x-hidden">
      {/* Main Content */}
      <div className="flex-1 px-4 md:p-10 overflow-y-auto mt-2 md:mt-0 mb-2 md:mb-0">
        <HeroHighlight>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [20, -5, 0] }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-gray-100 max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
          >
            Your ultimate destination for everything happening at our school.
            <br />
            <Highlight className="text-black dark:text-white">
              THE BMC INSIGHTS
            </Highlight>
          </motion.h1>
        </HeroHighlight>
      </div>

      {/* Conditionally render WobbleCards after HeroHighlight animation */}
      {showWobbleCards && (
        <div className="max-w-full md:mb-6">
          <h1 className="text-3xl text-text md:ml-8 mx-4 font-bold mb-4 underline decoration-sky-300">
            Explore
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-svh md:mx-8 mb-4 mx-4 ">
            <WobbleCard
              containerClassName="col-span-1 lg:col-span-2 h-full bg-fuchsia-950 min-h-[350px] sm:min-h-[400px] lg:min-h-[300px]"
              className=""
            >
              <a href="/threads" className="relative block w-full h-full">
                <div className="max-w-xs" data-aos="fade-up">
                  <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    Threads
                  </h2>
                  <p className="mt-4 text-left text-base/6 text-neutral-200">
                    Our school's reddit. Post your own or read through posts
                    from other students.
                  </p>
                </div>

              </a>
            </WobbleCard>

            <WobbleCard containerClassName="col-span-1 min-h-[300px]">
              <a href="/blog" className="relative block w-full h-full">
                <div data-aos="fade-right">
                  <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    Blog
                  </h2>
                  <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                    Get up-to-date with the latest news or read through our
                    journalists' writings.
                  </p>
                </div>
              </a>
            </WobbleCard>

                        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-sky-900 min-h-[300px] lg:min-h-500px] xl:min-h-[250px]">
              <a href="/calendar" className="relative block w-full h-full">
                <div className="max-w-sm" data-aos="fade-down">
                  <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    Calendar
                  </h2>
                  <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                    Take a look at our school calendar.
                  </p>
                </div>
                
              </a>
            </WobbleCard>
          </div>
        </div>
        
      )}
    </div>
  );
}
