import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Building2,
  School,
  Hospital,
  Factory,
  BookOpen,
  Settings,
  Users,
} from "lucide-react";
import Hero from "@/components/Hero";

interface SegmentData {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  features: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
  ctaText: string;
  imageUrl: string;
}

const segmentData: Record<string, SegmentData> = {
  "school-leaders": {
    title: "Data Empowerment = Funding Empowerment",
    subtitle:
      "Irrefutable budgeting and planning for all assets across all schools",
    description:
      "Transform your district's facility management with comprehensive 3D visualization and analytics. Make strategic investments that ensure healthy, safe, and equitable learning environments for all students.",
    icon: <School className="h-8 w-8" />,
    features: [
      {
        title: "10-Year Strategic Planning",
        description:
          "Irrefutable budgeting and planning for all assets across all schools over the next ten years with data-driven insights.",
        icon: <Building2 className="h-6 w-6" />,
      },
      {
        title: "School-by-School Analytics",
        description:
          "Detailed analytics showing where current maintenance needs and future capital expenditures are necessary for each school.",
        icon: <BookOpen className="h-6 w-6" />,
      },
      {
        title: "Student Equity Dashboard",
        description:
          "Quantify where the District can make the most strategic investments into building equity and ensuring all students have access to quality facilities.",
        icon: <ArrowRight className="h-6 w-6" />,
      },
    ],
    ctaText: "Book a School Demo",
    imageUrl:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
  },
  "healthcare-leaders": {
    title: "Prevent Failures. Prove Compliance. Optimize Every Dollar.",
    subtitle:
      "Digital twins and intelligent asset data for hospitals, clinics, and healthcare networks—giving you full visibility into your facilities and compliance risks.",
    description:
      "Healthcare facilities run 24/7. Your building systems can't afford downtime. Old equipment, missing inspection logs, and invisible risks can compromise care and compliance. Our platform solves this.",
    icon: <Hospital className="h-8 w-8" />,
    features: [
      {
        title: "Proactive CapEx Planning",
        description:
          "Make strategic capital expenditure decisions based on real asset conditions and predictive analytics.",
        icon: <Hospital className="h-6 w-6" />,
      },
      {
        title: "Regulatory-Ready Compliance Tracking",
        description:
          "Automated compliance database with built-in Joint Commission and CMS audit readiness.",
        icon: <BookOpen className="h-6 w-6" />,
      },
      {
        title: "Visual Asset Intelligence Across Campuses",
        description:
          "Navigate every building in immersive 3D to assess real conditions and repair needs.",
        icon: <ArrowRight className="h-6 w-6" />,
      },
    ],
    ctaText: "Request a Demo",
    imageUrl:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
  },
  "facility-directors": {
    title: "Total Visibility Across Your Entire Property Portfolio",
    subtitle:
      "3D Digital Twins + Asset Intelligence Built for Facility Directors",
    description:
      "Track every roof, HVAC, parking lot, and repair priority across your locations—all in one centralized platform.",
    icon: <Factory className="h-8 w-8" />,
    features: [
      {
        title: "Portfolio-Wide Asset Visibility",
        description:
          "Get a live snapshot of HVAC, roofing, asphalt, paint, signage, landscaping, and more—at every site in your network. No more chasing PDFs, spreadsheets, or vendor reports. See it all, mapped in 3D.",
        icon: <Factory className="h-6 w-6" />,
      },
      {
        title: "Smarter Maintenance & CapEx Planning",
        description:
          "Track asset condition, replacement cost, warranties, and service history. Forecast future spending based on real-time data, not gut feel. Plan the next five years with confidence—on one platform.",
        icon: <ArrowRight className="h-6 w-6" />,
      },
      {
        title: "Geospatial Risk Management",
        description:
          "See which buildings are overdue for roof replacements, ADA striping, or HVAC replacement—then prioritize with built-in cost/risk filters. Visualize deferred maintenance across your entire footprint.",
        icon: <Building2 className="h-6 w-6" />,
      },
      {
        title: "Centralized Documentation for Every Location",
        description:
          "Store warranties, inspection records, punch lists, and vendor closeouts—all tied to specific assets in your 3D models. Bring consistency and order to your maintenance ecosystem.",
        icon: <BookOpen className="h-6 w-6" />,
      },
    ],
    ctaText: "Request a Demo",
    imageUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  "commercial-property-owners": {
    title: "CapEx Clarity At Portfolio Scale",
    subtitle:
      "Get 3D visibility into every building system across your real estate portfolio—and the data to back every financial decision.",
    description:
      "From HVAC to roofing, landscaping to compliance—Portfolio Elevation brings physical assets into focus for smarter planning, faster risk mitigation, and stronger returns.",
    icon: <Building2 className="h-8 w-8" />,
    features: [
      {
        title: "3D Models of Your Entire Portfolio",
        description:
          "We capture and build immersive digital twins of your buildings using high-fidelity imaging—visualizing every roof, unit, and repair priority in geospatial context. See what's happening on every property, without setting foot onsite.",
        icon: <Building2 className="h-6 w-6" />,
      },
      {
        title: "CapEx Planning with Defensible Data",
        description:
          "Track current asset condition, age, replacement cost, and lifecycle forecasts—all in one dashboard. Defend your budgets. Prioritize capital intelligently. Present clear ROI.",
        icon: <ArrowRight className="h-6 w-6" />,
      },
      {
        title: "Deferred Maintenance + Risk Visibility",
        description:
          "Surface critical issues across your portfolio: failing HVAC, old roofs, ADA noncompliance, and more—ranked by cost, age, and risk profile. Identify ticking time bombs before they trigger NOI loss or reputation risk.",
        icon: <Factory className="h-6 w-6" />,
      },
      {
        title: "Asset-Level Documentation & Reporting",
        description:
          "Every asset links to its own compliance records, warranties, service logs, and replacement planning—exportable for lenders, partners, and boards. Make investor reporting, lending packages, and portfolio reviews painless.",
        icon: <BookOpen className="h-6 w-6" />,
      },
    ],
    ctaText: "Request a Demo",
    imageUrl:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
  },
};

const SegmentPage = () => {
  const { role } = useParams<{ role: string }>();
  const segmentKey = role || "school-leaders";
  const segment = segmentData[segmentKey] || segmentData["school-leaders"];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero
        title={segment.title}
        subtitle={segment.subtitle}
        description={segment.description}
        ctaText={segment.ctaText}
        icon={segment.icon}
        useCustomCommercialTitle={segmentKey === "commercial-property-owners"}
      />

      {/* User Role Selection - School Leaders Specific */}
      {segmentKey === "school-leaders" && (
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Choose Your Role
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Select your role to see tailored solutions and benefits specific
                to your responsibilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="cursor-pointer"
              >
                <Link to="/facilities-operations" className="block h-full">
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-brand-green/50 group">
                    <CardContent className="p-8 text-center">
                      <div className="mb-6 p-4 rounded-full bg-brand-green/10 w-fit mx-auto text-brand-darkblue group-hover:bg-brand-green/20 transition-colors">
                        <Settings className="h-12 w-12" />
                      </div>
                      <h3 className="text-2xl font-semibold mb-4 group-hover:text-brand-darkblue transition-colors">
                        Facilities, Maintenance & Operations
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Streamline maintenance workflows, track asset
                        conditions, and optimize operational efficiency across
                        all school facilities.
                      </p>
                      <div className="space-y-2 text-sm text-left">
                        <div className="flex items-center text-muted-foreground">
                          <div className="w-2 h-2 bg-brand-green rounded-full mr-3"></div>
                          <span>Predictive maintenance scheduling</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <div className="w-2 h-2 bg-brand-green rounded-full mr-3"></div>
                          <span>Asset lifecycle management</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <div className="w-2 h-2 bg-brand-green rounded-full mr-3"></div>
                          <span>Work order optimization</span>
                        </div>
                      </div>
                      <div className="mt-6 inline-flex items-center justify-center px-4 py-2 bg-brand-green hover:bg-brand-lightgreen text-brand-darkblue font-semibold rounded-md group-hover:shadow-lg transition-all">
                        View Solutions
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -5 }}
                className="cursor-pointer"
              >
                <Link to="/school-board-leadership" className="block h-full">
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-brand-green/50 group">
                    <CardContent className="p-8 text-center">
                      <div className="mb-6 p-4 rounded-full bg-brand-green/10 w-fit mx-auto text-brand-darkblue group-hover:bg-brand-green/20 transition-colors">
                        <Users className="h-12 w-12" />
                      </div>
                      <h3 className="text-2xl font-semibold mb-4 group-hover:text-brand-darkblue transition-colors">
                        School Board & Cabinet Members
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Make data-driven decisions with comprehensive facility
                        analytics, budget planning, and equity assessments.
                      </p>
                      <div className="space-y-2 text-sm text-left">
                        <div className="flex items-center text-muted-foreground">
                          <div className="w-2 h-2 bg-brand-green rounded-full mr-3"></div>
                          <span>10-year capital planning</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <div className="w-2 h-2 bg-brand-green rounded-full mr-3"></div>
                          <span>Student equity dashboard</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <div className="w-2 h-2 bg-brand-green rounded-full mr-3"></div>
                          <span>Budget justification tools</span>
                        </div>
                      </div>
                      <div className="mt-6 inline-flex items-center justify-center px-4 py-2 bg-brand-green hover:bg-brand-lightgreen text-brand-darkblue font-semibold rounded-md group-hover:shadow-lg transition-all">
                        View Solutions
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* 3D Viewer/Screenshot Area */}
      <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="rounded-xl overflow-hidden shadow-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-video w-full bg-muted"
          >
            <img
              src={segment.imageUrl}
              alt={`${segment.title} visualization`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <Button
                variant="outline"
                className="bg-background/80 hover:bg-background"
              >
                Explore 3D View
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Modern Owner's Problem - Commercial Property Owners Specific */}
      {segmentKey === "commercial-property-owners" && (
        <section className="py-20 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The Modern Owner's Problem
              </h2>
            </div>

            <div className="max-w-4xl mx-auto text-center">
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                You own or manage millions of dollars in real estate—but your
                asset data is trapped in spreadsheets, static PDFs, or worse,
                contractor memory.
              </p>
              <p className="text-xl text-brand-darkblue font-semibold leading-relaxed">
                Without visibility into physical conditions, you're budgeting
                blind—and that leads to surprise failures, undercapitalized
                assets, and unplanned write-downs.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* The Facility Director's Daily Battle - Facility Directors Specific */}
      {segmentKey === "facility-directors" && (
        <section className="py-20 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The Facility Director's Daily Battle
              </h2>
            </div>

            <div className="max-w-4xl mx-auto text-center">
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                You're responsible for hundreds—or thousands—of assets spread
                across dozens of buildings.
              </p>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Budgets are tight. Vendor work is inconsistent. And executive
                leadership wants real-time answers.
              </p>
              <p className="text-xl text-brand-darkblue font-semibold leading-relaxed">
                Portfolio Elevation gives you a control center for every site—so
                you can make better decisions, reduce downtime, and defend every
                dollar you spend.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Feature Highlights */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            {segmentKey === "healthcare-leaders"
              ? "The High Stakes of Healthcare Facilities"
              : segmentKey === "facility-directors"
                ? "Key Benefits for Multi-Site Operators"
                : segmentKey === "commercial-property-owners"
                  ? "A Portfolio-Wide Source of Truth"
                  : `Key Benefits for ${segment.title.split(" ").slice(-2).join(" ")}`}
          </h2>

          <div
            className={`grid gap-8 ${segmentKey === "facility-directors" || segmentKey === "commercial-property-owners" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}`}
          >
            {segment.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="mb-4 p-2 rounded-full bg-brand-green/10 w-fit text-brand-darkblue">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get Section - Healthcare Specific */}
      {segmentKey === "healthcare-leaders" && (
        <section className="py-20 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What You Get
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="h-full">
                  <CardContent className="p-8">
                    <div className="mb-4 p-3 rounded-full bg-brand-green/10 w-fit text-brand-darkblue">
                      <Building2 className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">
                      Critical Infrastructure, Visualized
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Navigate every building in immersive 3D. Zoom into
                      mechanical rooms, med gas closets, or rooftops to assess
                      real conditions and repair needs.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-8">
                    <div className="mb-4 p-3 rounded-full bg-brand-green/10 w-fit text-brand-darkblue">
                      <Hospital className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">
                      Asset Lifecycle Management
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Track equipment age, model, serial number, estimated
                      replacement cost, and current condition—all in one place.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="h-full">
                  <CardContent className="p-8">
                    <div className="mb-4 p-3 rounded-full bg-brand-green/10 w-fit text-brand-darkblue">
                      <BookOpen className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">
                      Automated Compliance Database
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                      Upload and cache compliance documents for:
                    </p>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-muted-foreground">
                      <div>• Fire dampers</div>
                      <div>• Air balancing</div>
                      <div>• Med gas testing</div>
                      <div>• Generator logs</div>
                      <div className="col-span-2">
                        • Life safety inspections
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm mt-4 italic">
                      All tied to their real-world asset in your building model.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="h-full">
                  <CardContent className="p-8">
                    <div className="mb-4 p-3 rounded-full bg-brand-green/10 w-fit text-brand-darkblue">
                      <Factory className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">
                      Risk Management for Critical Repairs
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Flag at-risk systems (like OR AHUs or sterile storage
                      exhaust) before they fail. Prioritize what matters
                      most—patient safety and uninterrupted care.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Emergency and Accreditation Ready - Healthcare Specific */}
      {segmentKey === "healthcare-leaders" && (
        <section className="py-20 px-4 md:px-8 lg:px-16 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Emergency and Accreditation Ready
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                When disaster strikes or auditors arrive, you're ready.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="mb-4 p-4 rounded-full bg-brand-green/10 w-fit mx-auto text-brand-darkblue">
                  <Building2 className="h-10 w-10" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Searchable 3D Maps
                </h3>
                <p className="text-muted-foreground">
                  Locate shutoffs, access points, and equipment instantly
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center"
              >
                <div className="mb-4 p-4 rounded-full bg-brand-green/10 w-fit mx-auto text-brand-darkblue">
                  <BookOpen className="h-10 w-10" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Immediate Access</h3>
                <p className="text-muted-foreground">
                  Past inspections and due dates at your fingertips
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center"
              >
                <div className="mb-4 p-4 rounded-full bg-brand-green/10 w-fit mx-auto text-brand-darkblue">
                  <Hospital className="h-10 w-10" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Audit Readiness</h3>
                <p className="text-muted-foreground">
                  Built-in Joint Commission and CMS compliance
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-brand-green/20 text-center"
            >
              <div className="text-4xl text-brand-green mb-4">&quot;</div>
              <p className="text-xl text-muted-foreground italic mb-4">
                It's like giving your facilities team a control room for your
                physical environment.
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Built for Investors and Institutional Owners - Commercial Property Owners Specific */}
      {segmentKey === "commercial-property-owners" && (
        <section className="py-20 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Built for Investors and Institutional Owners
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Whether you own:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center p-6 bg-muted/30 rounded-lg"
              >
                <Building2 className="h-12 w-12 mx-auto mb-3 text-brand-darkblue" />
                <h3 className="font-semibold text-sm">
                  Commercial office campuses
                </h3>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center p-6 bg-muted/30 rounded-lg"
              >
                <Factory className="h-12 w-12 mx-auto mb-3 text-brand-darkblue" />
                <h3 className="font-semibold text-sm">
                  National NNN-leased retail properties
                </h3>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center p-6 bg-muted/30 rounded-lg"
              >
                <School className="h-12 w-12 mx-auto mb-3 text-brand-darkblue" />
                <h3 className="font-semibold text-sm">
                  Mixed-use developments
                </h3>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center p-6 bg-muted/30 rounded-lg"
              >
                <Hospital className="h-12 w-12 mx-auto mb-3 text-brand-darkblue" />
                <h3 className="font-semibold text-sm">
                  Industrial logistics centers
                </h3>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-center p-6 bg-muted/30 rounded-lg"
              >
                <Building2 className="h-12 w-12 mx-auto mb-3 text-brand-darkblue" />
                <h3 className="font-semibold text-sm">
                  Healthcare REIT portfolios
                </h3>
              </motion.div>
            </div>

            <div className="text-center mb-8">
              <p className="text-lg text-muted-foreground mb-8">
                Portfolio Elevation turns physical assets into financially
                visible, digitally managed infrastructure.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-brand-green/20 text-center"
            >
              <div className="text-4xl text-brand-green mb-4">&quot;</div>
              <p className="text-xl text-muted-foreground italic mb-4">
                We now evaluate deals and budget future CapEx with real,
                site-specific insight. It's made us sharper operators.
              </p>
              <div className="text-sm text-muted-foreground">
                — Managing Director, Real Estate Investment Group
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Built for Commercial Portfolios - Facility Directors Specific */}
      {segmentKey === "facility-directors" && (
        <section className="py-20 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Built for Commercial Portfolios
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Whether you manage:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center p-6 bg-muted/30 rounded-lg"
              >
                <Building2 className="h-12 w-12 mx-auto mb-3 text-brand-darkblue" />
                <h3 className="font-semibold text-sm">Corporate campuses</h3>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center p-6 bg-muted/30 rounded-lg"
              >
                <Factory className="h-12 w-12 mx-auto mb-3 text-brand-darkblue" />
                <h3 className="font-semibold text-sm">
                  National franchise networks
                </h3>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center p-6 bg-muted/30 rounded-lg"
              >
                <School className="h-12 w-12 mx-auto mb-3 text-brand-darkblue" />
                <h3 className="font-semibold text-sm">
                  Retail and restaurant chains
                </h3>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center p-6 bg-muted/30 rounded-lg"
              >
                <Hospital className="h-12 w-12 mx-auto mb-3 text-brand-darkblue" />
                <h3 className="font-semibold text-sm">
                  Real estate investment portfolios
                </h3>
              </motion.div>
            </div>

            <div className="text-center mb-8">
              <p className="text-lg text-muted-foreground mb-8">
                Portfolio Elevation helps you scale your asset oversight without
                scaling your team.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-brand-green/20 text-center"
            >
              <div className="text-4xl text-brand-green mb-4">&quot;</div>
              <p className="text-xl text-muted-foreground italic mb-4">
                We cut CapEx surprises in half in Year 1.
              </p>
              <div className="text-sm text-muted-foreground">
                — Director of Facilities, National Retail Operator
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* From Capture to CapEx in Four Steps - Commercial Property Owners Specific */}
      {segmentKey === "commercial-property-owners" && (
        <section className="py-20 px-4 md:px-8 lg:px-16 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                From Capture to CapEx in Four Steps
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our process is turnkey:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="mb-4 p-4 rounded-full bg-brand-green/10 w-fit mx-auto text-brand-darkblue">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Site Scan</h3>
                <p className="text-muted-foreground">
                  We map your buildings using drones and ground-level imagery
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center"
              >
                <div className="mb-4 p-4 rounded-full bg-brand-green/10 w-fit mx-auto text-brand-darkblue">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Digital Twin Creation
                </h3>
                <p className="text-muted-foreground">
                  We build photorealistic 3D models of each location
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center"
              >
                <div className="mb-4 p-4 rounded-full bg-brand-green/10 w-fit mx-auto text-brand-darkblue">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Asset Data Integration
                </h3>
                <p className="text-muted-foreground">
                  We layer in asset age, cost, condition, and warranties
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center"
              >
                <div className="mb-4 p-4 rounded-full bg-brand-green/10 w-fit mx-auto text-brand-darkblue">
                  <span className="text-2xl font-bold">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  CapEx & Risk Dashboard
                </h3>
                <p className="text-muted-foreground">
                  You manage all of it portfolio-wide in your portal
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-brand-green/20 text-center"
            >
              <p className="text-xl text-brand-darkblue font-semibold leading-relaxed">
                No internal lift. No re-inventing workflows. Just better
                insights.
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Recoverable as a CAM Expense - Commercial Property Owners Specific */}
      {segmentKey === "commercial-property-owners" && (
        <section className="py-20 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Recoverable as a CAM Expense
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Portfolio Elevation qualifies as a CAM-eligible technology
                investment, meaning its cost can often be recovered through
                Common Area Maintenance charges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="mb-4 p-4 rounded-full bg-brand-green/10 w-fit mx-auto text-brand-darkblue">
                  <Building2 className="h-10 w-10" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  No Hit to Your NOI
                </h3>
                <p className="text-muted-foreground">
                  Recoverable through standard lease terms
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center"
              >
                <div className="mb-4 p-4 rounded-full bg-brand-green/10 w-fit mx-auto text-brand-darkblue">
                  <Factory className="h-10 w-10" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Improves Shared Asset Visibility
                </h3>
                <p className="text-muted-foreground">
                  Such as roofing, HVAC, paving, and ADA compliance
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center"
              >
                <div className="mb-4 p-4 rounded-full bg-brand-green/10 w-fit mx-auto text-brand-darkblue">
                  <ArrowRight className="h-10 w-10" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Boosts Tenant Satisfaction
                </h3>
                <p className="text-muted-foreground">
                  By accelerating response times and minimizing downtime
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center"
              >
                <div className="mb-4 p-4 rounded-full bg-brand-green/10 w-fit mx-auto text-brand-darkblue">
                  <BookOpen className="h-10 w-10" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Strengthens Lease Defensibility
                </h3>
                <p className="text-muted-foreground">
                  Through transparent documentation of condition and repair
                  prioritization
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-brand-green/20 text-center"
            >
              <p className="text-xl text-brand-darkblue font-semibold leading-relaxed">
                Our team helps you align implementation with your lease
                structures and accounting preferences—making this an upgrade
                that pays for itself.
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* From Drone to Dashboard - Facility Directors Specific */}
      {segmentKey === "facility-directors" && (
        <section className="py-20 px-4 md:px-8 lg:px-16 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                From Drone to Dashboard
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our process is turnkey:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="mb-4 p-4 rounded-full bg-brand-green/10 w-fit mx-auto text-brand-darkblue">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Scan Your Sites</h3>
                <p className="text-muted-foreground">
                  We scan your sites using enterprise-grade drones and imaging
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center"
              >
                <div className="mb-4 p-4 rounded-full bg-brand-green/10 w-fit mx-auto text-brand-darkblue">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Generate 3D Twins
                </h3>
                <p className="text-muted-foreground">
                  We generate immersive 3D digital twins of your properties
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center"
              >
                <div className="mb-4 p-4 rounded-full bg-brand-green/10 w-fit mx-auto text-brand-darkblue">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Enrich with Data</h3>
                <p className="text-muted-foreground">
                  We enrich each model with asset data, conditions, and costs
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center"
              >
                <div className="mb-4 p-4 rounded-full bg-brand-green/10 w-fit mx-auto text-brand-darkblue">
                  <span className="text-2xl font-bold">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Manage Everything
                </h3>
                <p className="text-muted-foreground">
                  You log in and manage your entire portfolio from one dashboard
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-brand-green/20 text-center"
            >
              <p className="text-xl text-brand-darkblue font-semibold leading-relaxed">
                No new headcount. No messy rollout. Just clarity, fast.
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Trusted by Healthcare Leaders - Healthcare Specific */}
      {segmentKey === "healthcare-leaders" && (
        <section className="py-20 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Trusted by Healthcare Facility Leaders
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center p-6 bg-muted/30 rounded-lg"
              >
                <Hospital className="h-12 w-12 mx-auto mb-3 text-brand-darkblue" />
                <h3 className="font-semibold text-sm">Community Hospitals</h3>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center p-6 bg-muted/30 rounded-lg"
              >
                <Building2 className="h-12 w-12 mx-auto mb-3 text-brand-darkblue" />
                <h3 className="font-semibold text-sm">Surgical Centers</h3>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center p-6 bg-muted/30 rounded-lg"
              >
                <Factory className="h-12 w-12 mx-auto mb-3 text-brand-darkblue" />
                <h3 className="font-semibold text-sm">
                  Regional Healthcare Networks
                </h3>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center p-6 bg-muted/30 rounded-lg"
              >
                <School className="h-12 w-12 mx-auto mb-3 text-brand-darkblue" />
                <h3 className="font-semibold text-sm">
                  Long-Term Care Facilities
                </h3>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-brand-green/20 text-center"
            >
              <div className="text-4xl text-brand-green mb-4">&quot;</div>
              <p className="text-xl text-muted-foreground italic mb-4">
                Now I can justify our capital requests with evidence—not just
                assumptions.
              </p>
              <div className="text-sm text-muted-foreground">
                — VP of Facilities, Regional Medical Center
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Book a Demo Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-brand-green/5 to-brand-green/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-brand-green/20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {segmentKey === "school-leaders"
                ? "Ready to Empower Your District with Data?"
                : segmentKey === "healthcare-leaders"
                  ? "Ready to take control of your facilities?"
                  : segmentKey === "facility-directors"
                    ? "Ready to Elevate Your Portfolio?"
                    : segmentKey === "commercial-property-owners"
                      ? "Let's Elevate Your Portfolio"
                      : "Ready to Maximize Your Property Value?"}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {segmentKey === "school-leaders"
                ? "Schedule a personalized demo to see how our platform can transform your facility management and ensure equitable learning environments for all students."
                : segmentKey === "healthcare-leaders"
                  ? "Make smarter decisions about repairs, replacements, and compliance—before it costs you."
                  : segmentKey === "facility-directors"
                    ? "Make faster, smarter, more confident decisions for every building you manage."
                    : segmentKey === "commercial-property-owners"
                      ? "Optimize CapEx. Minimize Risk. Modernize Asset Management. And do it all CAM-recoverable."
                      : "Schedule a personalized demo to see how our platform can enhance tenant satisfaction, reduce operational costs, and increase your property value."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-8 py-6 h-auto bg-brand-green hover:bg-brand-lightgreen text-brand-darkblue font-semibold"
              >
                {segmentKey === "healthcare-leaders"
                  ? "Book a Demo"
                  : segment.ctaText}{" "}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 h-auto"
              >
                {segmentKey === "healthcare-leaders"
                  ? "Download the Healthcare Solution Brief"
                  : segmentKey === "facility-directors"
                    ? "Download the Commercial Solution Brief"
                    : segmentKey === "commercial-property-owners"
                      ? "Download the Investment Case Brief"
                      : "Download Our Approach"}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SegmentPage;