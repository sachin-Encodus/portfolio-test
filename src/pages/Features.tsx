import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building,
  Database,
  BarChart3,
  Eye,
  Settings,
  TrendingUp,
} from "lucide-react";
import { useLocation } from "react-router-dom";

const Features = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle scrolling to specific sections based on hash
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Powerful Tools for Smarter Building Decisions
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
              From site scans to dashboards, every feature is designed to help
              you manage assets, reduce costs, and stay in control—whether
              you're overseeing one campus or a nationwide portfolio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive 3D Models Section */}
      <section
        id="interactive-3d-models"
        className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <Building className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Interactive 3D Models
              </h2>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-muted-foreground">
              See Every Building in Real-Time, Spatial Context
            </h3>
            <p className="text-lg mb-6">
              Navigate immersive 3D replicas of your sites with intuitive camera
              controls and data overlays. View rooftops, MEP systems,
              hardscaping, and equipment—all in stunning detail.
            </p>

            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4">What You Can Do:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Eye className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>
                    Fly through buildings to inspect rooftops, HVAC, and
                    mechanical rooms
                  </span>
                </li>
                <li className="flex items-start">
                  <Settings className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>
                    Overlay asset condition, warranty dates, and risk ratings
                  </span>
                </li>
                <li className="flex items-start">
                  <BarChart3 className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>
                    Measure, annotate, and export sections for vendors or
                    stakeholders
                  </span>
                </li>
                <li className="flex items-start">
                  <Database className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>
                    Toggle layers: paving, utilities, MEP systems, ADA zones,
                    landscaping, etc.
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-lg font-medium text-primary mb-6">
              No more photos buried in folders. Just real-world visibility,
              instantly.
            </p>
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

      {/* Asset Management Section */}
      <section
        id="asset-management"
        className="py-16 px-4 md:px-8 lg:px-16 bg-muted/50"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="bg-white rounded-lg overflow-hidden aspect-video shadow-lg">
              <img
                src="/Asset Intelligence Dashboard.png"
                alt="Asset Intelligence Dashboard"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <div className="flex items-center mb-6">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Database className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Asset Management
                </h2>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-muted-foreground">
                Centralized Oversight of Every Building System
              </h3>
              <p className="text-lg mb-6">
                Track and maintain your entire asset inventory—condition, age,
                service history, warranties, model and serial numbers—all mapped
                to your digital twin.
              </p>

              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4">What You Can Do:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Database className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>
                      Maintain a structured database of building assets by
                      category
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Building className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>
                      Assign assets to specific buildings, zones, or systems
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Settings className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>
                      Set maintenance reminders and warranty expiration alerts
                    </span>
                  </li>
                  <li className="flex items-start">
                    <BarChart3 className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>
                      Upload and store documents at the asset level (e.g.,
                      warranties, inspection reports)
                    </span>
                  </li>
                </ul>
              </div>

              <p className="text-lg font-medium text-primary mb-6">
                Turn scattered records into actionable insight—site by site or
                portfolio-wide.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Data Analytics Section */}
      <section
        id="data-analytics"
        className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Data Analytics</h2>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-muted-foreground">
              Actionable Intelligence to Drive Strategy
            </h3>
            <p className="text-lg mb-6">
              Transform raw asset data into smart, visual reporting. Identify
              trends, optimize spend, and plan capital allocation with
              confidence.
            </p>

            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4">What You Can Do:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <BarChart3 className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>
                    Compare condition and cost trends across buildings
                  </span>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>
                    Generate CapEx forecasts based on real asset lifecycle data
                  </span>
                </li>
                <li className="flex items-start">
                  <Eye className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>
                    Flag deferred maintenance risks before they become
                    emergencies
                  </span>
                </li>
                <li className="flex items-start">
                  <Database className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>
                    Export reports for leadership, lenders, or compliance teams
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-lg font-medium text-primary mb-6">
              Know where every dollar is going—and where it should be going
              next.
            </p>
          </div>

          <div className="bg-muted rounded-lg overflow-hidden aspect-video">
            <img
              src="/Capital Planing Reports.png"
              alt="Capital Planning Reports Dashboard"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Simple to Use Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Simple to Use. Easy to Deploy.
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              We do the heavy lifting—scanning your buildings, building your
              digital twins, and loading your assets. You just log in and take
              control.
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

export default Features;
