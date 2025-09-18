import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Hero from "./Hero";
import SegmentSelector from "./SegmentSelector";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero
        useRotatingTitle={true}
        subtitle="Powerful visualization and management tools for facility directors, property owners, and institutional leaders."
        ctaText="Book a Demo"
        ctaLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
      />

      {/* Value Proposition */}
      <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transform How You Manage Building Assets
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our 3D visualization platform helps you make better decisions,
            reduce costs, and improve facility management across your entire
            property portfolio.
          </p>
        </motion.div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <a
              href="/features#interactive-3d-models"
              className="block h-full group"
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer group-hover:border-primary/50">
                <CardContent className="pt-6 flex flex-col h-full">
                  <div className="mb-4 bg-primary/10 p-3 w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M2 22V8a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v14H2Z" />
                      <path d="M6 22V13H8V22" />
                      <path d="M16 22V13H18V22" />
                      <path d="M10 22V13H14V22" />
                      <path d="M2 8H22" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    Interactive 3D Models
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    Navigate through detailed 3D models of your buildings with
                    intuitive controls and real-time data overlays.
                  </p>
                  <Button variant="outline" size="sm" className="mt-auto">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a href="/features#asset-management" className="block h-full group">
              <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer group-hover:border-primary/50">
                <CardContent className="pt-6 flex flex-col h-full">
                  <div className="mb-4 bg-primary/10 p-3 w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    Asset Management
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    Track, manage, and maintain all your building assets in one
                    centralized platform with detailed reporting.
                  </p>
                  <Button variant="outline" size="sm" className="mt-auto">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <a href="/features#data-analytics" className="block h-full group">
              <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer group-hover:border-primary/50">
                <CardContent className="pt-6 flex flex-col h-full">
                  <div className="mb-4 bg-primary/10 p-3 w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M3 3v18h18" />
                      <path d="m19 9-5 5-4-4-3 3" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    Data Analytics
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    Gain actionable insights with powerful analytics tools that
                    help optimize space utilization and reduce costs.
                  </p>
                  <Button variant="outline" size="sm" className="mt-auto">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </a>
          </motion.div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button size="lg" className="px-8" asChild>
            <a href="/solutions">Learn More About Our Solutions</a>
          </Button>
        </div>
      </section>

      {/* Segment Selector Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Solutions For Your Industry
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover how our platform addresses the unique challenges of your
              specific industry.
            </p>
          </motion.div>

          <SegmentSelector />
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              See how leading organizations are using our platform to transform
              their facility management processes.
            </p>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">
                Implementing a 3D Digital Twin Pilot in a School District
              </h3>
              <p className="text-muted-foreground mb-4">
                Bringing clarity to complexity in K–12 facility management. See
                how a forward-thinking school district used our 3D Digital Twin
                platform to secure $2.3M in additional funding.
              </p>
              <Button variant="outline" className="mt-2">
                Read Case Study
              </Button>
            </div>
          </div>
          <div className="bg-muted rounded-lg overflow-hidden aspect-video">
            <img
              src="/3D Digital Twin Viewer Interface.png"
              alt="3D Digital Twin Viewer Interface"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Building Management?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Schedule a personalized demo today and see how our platform can
              work for your specific needs.
            </p>
            <Button size="lg" variant="secondary" className="px-8">
              Book Your Demo
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
