import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Calculator,
  TrendingUp,
  BarChart3,
  FileText,
  Users,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const Solutions = () => {
  const features = [
    {
      icon: Building2,
      title: "3D Digital Twin Access from Anywhere",
      description:
        "View your entire building and site portfolio in photorealistic 3D from your desktop. No more disruptive walkthroughs or guesswork.",
      benefits: [
        "Explore rooftops, mechanical systems, and site conditions remotely",
        "Collaborate with your team and vendors using annotated 3D visuals",
        "Resolve maintenance tasks and RFIs without stepping on site",
      ],
      result:
        "Fewer miscommunications, faster response times, and better-informed decisions.",
    },
    {
      icon: Calculator,
      title: "Automated Capital Planning & Risk Forecasting",
      description:
        "Automatically calculate the remaining lifespan and replacement cost for all major building systems and assets.",
      benefits: [
        "Generate multi-year capital plans with one click",
        "Identify high-risk areas before failure occurs",
        "Eliminate missed assets and surprise expenses",
      ],
      result:
        "Always be prepared when leadership asks, 'Why didn't we catch this sooner?'",
    },
    {
      icon: TrendingUp,
      title: "Empower Budget Conversations with C-Suite",
      description:
        "With clear, defensible data, your department can speak the language of finance.",
      benefits: [
        "Show leadership exactly what needs funding—and what the risk is if deferred",
        "Turn subjective requests into objective needs",
        "Shift the pressure of decision-making back to the budget holders",
      ],
      result: "Data-backed advocacy that helps secure funding.",
    },
    {
      icon: BarChart3,
      title: "Portfolio-Wide Insights with Site-Level Detail",
      description: "Zoom in on a single site or analyze trends across dozens.",
      benefits: [
        "Compare asset health across your entire portfolio",
        "Prioritize projects by urgency, cost, or risk exposure",
        "Ensure no site gets left behind",
      ],
      result: "Confidence in both micro and macro facility planning.",
    },
    {
      icon: FileText,
      title: "Store & Retrieve Critical Documents with Ease",
      description: "Every asset can hold its own digital file cabinet.",
      benefits: [
        "Attach service records, warranties, and inspection reports",
        "Keep everything tied to the exact physical location on the model",
        "Find the info you need in seconds, not hours",
      ],
      result:
        "Institutional knowledge preserved and accessible, even as teams change.",
    },
    {
      icon: Users,
      title: "Improve Vendor and Maintenance Accountability",
      description:
        "Give contractors and in-house teams a clear picture of the task before they arrive.",
      benefits: [
        "Annotate service requests directly on the 3D model",
        "Verify completed work remotely",
        "Maintain a digital service log with before-and-after visuals",
      ],
      result: "Higher accountability and reduced missteps.",
    },
    {
      icon: Shield,
      title: "Pre-Loss Documentation & Compliance Readiness",
      description: "Be prepared before disaster strikes.",
      benefits: [
        "Document all conditions before damage or loss",
        "Generate visual reports for insurance and compliance audits",
        "Meet documentation standards for grants and bond measures",
      ],
      result: "Faster recovery and better risk posture.",
    },
    {
      icon: Clock,
      title: "Enable Faster Quotes with Remote Vendor Access",
      description:
        "Let vendors bid jobs faster and more accurately—without waiting for access to the site.",
      benefits: [
        "Invite approved contractors to review your 3D model",
        "Provide measurements and context virtually",
        "Cut delays in quote cycles",
      ],
      result: "Speed up project planning and reduce friction.",
    },
  ];

  return (
    <div className="bg-white text-[#8bacff]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-darkblue via-brand-navy to-brand-darkblue py-24 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-brand-green/20 text-brand-green border-brand-green/30 hover:bg-brand-green/30">
              Enterprise Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              The Smarter Way to
              <span className="block text-brand-green">
                Manage Your Buildings
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Transform how you plan, operate, and advocate for your facilities
              with interactive 3D digital twins and real-time asset
              intelligence.
            </p>
            <p className="text-lg text-gray-300 mb-10">
              Our platform is built for facility managers, property owners, and
              operations teams who want to reduce risk, save time, and win
              support for capital improvements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-brand-green hover:bg-brand-lightgreen text-brand-darkblue font-semibold px-8 py-4 text-lg rounded-full"
              >
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-brand-darkblue text-brand-darkblue hover:bg-brand-darkblue hover:text-gray-400 font-semibold px-8 py-4 text-lg rounded-full"
              >
                Watch Overview
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-darkblue mb-4">
              8 Ways to Transform Your Operations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our comprehensive platform addresses every aspect of
              modern facility management
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center group-hover:bg-brand-green/20 transition-colors">
                        <IconComponent className="h-6 w-6 text-brand-darkblue" />
                      </div>
                      <div className="flex-1">
                        <Badge className="mb-3 bg-brand-darkblue/10 text-brand-darkblue border-brand-darkblue/20 hover:bg-brand-darkblue/20">
                          {String(index + 1).padStart(2, "0")}
                        </Badge>
                        <CardTitle className="text-xl font-bold text-brand-darkblue mb-3 leading-tight">
                          {feature.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600 text-base leading-relaxed">
                          {feature.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <div
                            key={benefitIndex}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle className="h-5 w-5 text-brand-green flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm leading-relaxed">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="pt-4 border-t border-gray-100">
                        <div className="bg-brand-green/5 rounded-lg p-4">
                          <p className="text-sm font-semibold text-brand-darkblue mb-1">
                            Result:
                          </p>
                          <p className="text-sm text-gray-700 leading-relaxed">
                            {feature.result}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-brand-darkblue to-brand-navy py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform the Way You
              <span className="block text-brand-green">
                Manage Your Buildings?
              </span>
            </h2>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              Request a demo and discover how your team can save time, reduce
              risk, and secure funding with the power of 3D asset intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-brand-green hover:bg-brand-lightgreen text-brand-darkblue font-semibold px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-brand-darkblue text-brand-darkblue hover:bg-brand-darkblue hover:text-gray-400 font-semibold px-10 py-4 text-lg rounded-full"
              >
                Contact Sales
              </Button>
            </div>
            <p className="text-sm text-gray-300 mt-6">
              No commitment required • 30-minute personalized demo • See
              immediate ROI potential
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
