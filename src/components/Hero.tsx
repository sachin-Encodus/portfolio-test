import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  icon?: React.ReactNode;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
  segment?: string;
  onCtaClick?: () => void;
  useRotatingTitle?: boolean;
  useCustomCommercialTitle?: boolean;
}

const RotatingText = () => {
  const words = [
    "Digital Twins",
    "Maintenance Plans",
    "CapEx Budgeting",
    "Asset Lifecycles",
    "Compliance Database",
    "Emergency Logistics",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="relative h-12 sm:h-20 md:h-24 lg:h-28 inline-block w-auto min-w-fit sm:flex-shrink-0">
      <div className="relative flex flex-col justify-center h-full">
        {/* Current word - fully visible */}
        <motion.div
          key={`current-${currentIndex}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="text-left text-white font-bold whitespace-nowrap text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
        >
          {words[currentIndex]}
        </motion.div>
      </div>
    </div>
  );
};

const Hero = ({
  title = "Visualize Your Building Assets in 3D",
  subtitle = "Powerful visualization tools for facility management and planning",
  description,
  icon,
  ctaText = "Book a Demo",
  ctaLink = "/contact",
  backgroundImage = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
  segment = "default",
  onCtaClick,
  useRotatingTitle = false,
  useCustomCommercialTitle = false,
}: HeroProps) => {
  const handleCtaClick = () => {
    if (onCtaClick) {
      onCtaClick();
    }
  };

  return (
    <div className="relative w-full h-[600px] bg-background overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="/u8894339478_httpss.mj.runzkiLvzSu1Dc_Ok_I_am_needing_to_creat_4000822a-35aa-438a-b4e7-4436c199fdbe_1.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {segment && segment !== "default" && (
            <div className="mb-4">
              <span className="inline-block bg-brand-green text-brand-darkblue px-3 py-1 text-sm font-medium rounded-full">
                {segment}
              </span>
            </div>
          )}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-left">
            {useRotatingTitle ? (
              <div className="text-left w-full">
                {/* Mobile layout - single line with horizontal scroll */}
                <div className="flex flex-row items-center gap-2 w-full whitespace-nowrap overflow-x-auto sm:hidden">
                  <span className="text-xl font-bold whitespace-nowrap">
                    Turnkey
                  </span>
                  <div className="w-auto flex-shrink-0">
                    <RotatingText />
                  </div>
                </div>
                {/* Desktop layout - flexible wrapping */}
                <div className="hidden sm:flex sm:flex-col sm:gap-1 md:flex-row md:items-center md:gap-4 w-full">
                  <span className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
                    Turnkey
                  </span>
                  <div className="w-auto">
                    <RotatingText />
                  </div>
                </div>
                <div className="text-left text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
                  Done For You.
                </div>
              </div>
            ) : useCustomCommercialTitle ? (
              <div className="text-left">
                <div>CapEx Clarity</div>
                <div>At Portfolio Scale</div>
              </div>
            ) : (
              <div className="text-left">
                {title ===
                  "Prevent Failures. Prove Compliance. Optimize Every Dollar." ? (
                  <div>
                    <div className="whitespace-nowrap">
                      Prevent Failures. Prove Compliance.
                    </div>
                    <div>Optimize Every Dollar.</div>
                  </div>
                ) : (
                  title
                )}
              </div>
            )}
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8">{subtitle}</p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={handleCtaClick}
              asChild={!!ctaLink}
              className="font-medium text-base bg-brand-green hover:bg-brand-lightgreen text-brand-darkblue"
            >
              {ctaLink ? <a href={ctaLink}>{ctaText}</a> : ctaText}
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="bg-background/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 font-medium text-base"
            >
              <a href="/case-studies">View Our Approach</a>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </div>
  );
};

export default Hero;