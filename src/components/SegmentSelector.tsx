import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface SegmentOption {
  id: string;
  title: string;
  description: string;
  icon: string;
  path: string;
}

interface SegmentSelectorProps {
  options?: SegmentOption[];
  title?: string;
  subtitle?: string;
}

const SegmentSelector = ({
  options = [
    {
      id: "school-leaders",
      title: "School Leaders",
      description:
        "Manage educational facilities and optimize space utilization",
      icon: "🏫",
      path: "/segment/school-leaders",
    },
    {
      id: "healthcare-leaders",
      title: "Healthcare Leaders",
      description: "Streamline hospital and clinic facility management",
      icon: "🏥",
      path: "/segment/healthcare-leaders",
    },
    {
      id: "facility-directors",
      title: "Facility Directors",
      description:
        "Comprehensive tools for building maintenance and operations",
      icon: "🏢",
      path: "/segment/facility-directors",
    },
    {
      id: "commercial-property-owners",
      title: "Commercial Property Owners",
      description: "Maximize property value and tenant satisfaction",
      icon: "🏙️",
      path: "/segment/commercial-property-owners",
    },
  ],
  title = "Choose Your Industry",
  subtitle = "Select your role to see tailored solutions for your specific needs",
}: SegmentSelectorProps) => {
  return (
    <div className="w-full py-12 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-2">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {options.map((option) => (
            <motion.div
              key={option.id}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link to={option.path} className="block h-full">
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-2 hover:border-brand-green/30">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="text-4xl mb-4">{option.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">
                      {option.title}
                    </h3>
                    <p className="text-gray-600 mb-4 flex-grow">
                      {option.description}
                    </p>
                    <Button
                      variant="ghost"
                      className="justify-start p-0 hover:bg-transparent group"
                    >
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SegmentSelector;
