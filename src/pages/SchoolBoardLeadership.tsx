import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  BarChart3,
  FileText,
  Eye,
  Users,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Shield,
  BookOpen,
} from "lucide-react";

const SchoolBoardLeadership = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-brand-darkblue to-brand-navy text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Make Smarter, Fairer, and More Transparent Facilities Decisions
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
              Empowers your school leaders with the data, visibility, and equity
              tools needed to plan and fund facilities decisions with clarity,
              confidence, and community trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-brand-green hover:bg-brand-lightgreen text-brand-darkblue font-semibold px-8 py-4 text-lg"
              >
                See the District Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-brand-darkblue bg-white hover:bg-white/90 font-semibold px-8 py-4 text-lg"
              >
                Book a Leadership Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 1: How Do You Know Where Your Funding Should Go? */}
      <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How Do You Know Where Your Funding Should Go?
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-6">
              You listen to teachers. You consider community feedback. You rely
              on M&O teams to alert you when something breaks.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              But those inputs—while critical—each reflect a specific lens.
              You're left making capital planning decisions based on fragments,
              anecdotes, and instinct.
            </p>
            <div className="bg-muted/50 p-8 rounded-lg mb-6">
              <p className="text-xl font-medium text-brand-darkblue mb-4">
                Should you remodel the outdated restrooms…
              </p>
              <p className="text-xl font-medium text-brand-darkblue">
                or ensure that the kindergarten's HVAC doesn't fail
                mid-semester?
              </p>
            </div>
            <p className="text-xl text-brand-darkblue font-semibold">
              With Portfolio Elevation, there's no more guessing.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Section 2: The Data You Need to Make the Right Call */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Data You Need to Make the Right Call
            </h2>
          </motion.div>

          {/* Every School. Every Asset. One Dashboard. */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="bg-brand-green/10 p-3 rounded-full mr-4">
                        <Building2 className="h-8 w-8 text-brand-darkblue" />
                      </div>
                      <h3 className="text-2xl font-semibold">
                        Every School. Every Asset. One Dashboard.
                      </h3>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6">
                      Get a digital twin of every school in your
                      district—complete with asset-level data on roofs, HVAC,
                      paving, paint, ADA compliance, and more.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-brand-green mr-3" />
                        <span>Current condition</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-brand-green mr-3" />
                        <span>Replacement timelines</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-brand-green mr-3" />
                        <span>Estimated costs (adjusted for inflation)</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-brand-green mr-3" />
                        <span>Budget forecast per site and per system</span>
                      </div>
                    </div>
                    <p className="text-brand-darkblue font-medium mt-6">
                      No more siloed spreadsheets or gut-based decisions—just
                      facts you can stand behind.
                    </p>
                  </div>
                  <div className="bg-muted rounded-lg overflow-hidden aspect-video">
                    <img
                      src="/district-overview-dashboard.png"
                      alt="District Overview Dashboard"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Equity Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="bg-muted rounded-lg overflow-hidden aspect-video order-2 lg:order-1">
                    <img
                      src="/Asset Intelligence Dashboard.png"
                      alt="Equity Dashboard"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="flex items-center mb-4">
                      <div className="bg-brand-green/10 p-3 rounded-full mr-4">
                        <BarChart3 className="h-8 w-8 text-brand-darkblue" />
                      </div>
                      <h3 className="text-2xl font-semibold">
                        Equity Dashboard to Ensure Fair, Strategic Investment
                      </h3>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6">
                      Not every school starts in the same condition. Use our
                      equity overlay to see where deferred maintenance has
                      stacked up disproportionately—so you can allocate funds in
                      a way that is wise and fair.
                    </p>
                    <p className="text-brand-darkblue font-medium mb-6">
                      Deliver the same dignity of learning environments
                      district-wide.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Defend Your Capital Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="bg-brand-green/10 p-3 rounded-full mr-4">
                        <Shield className="h-8 w-8 text-brand-darkblue" />
                      </div>
                      <h3 className="text-2xl font-semibold">
                        Defend Your Capital Plan with Confidence
                      </h3>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6">
                      Whether you're preparing for LCAP, a bond measure, or a
                      community meeting, you'll have real, visual proof of
                      needs—not just line items and estimates.
                    </p>
                    <p className="text-brand-darkblue font-medium">
                      Tell the story of your facilities in a way that drives
                      support and builds trust.
                    </p>
                  </div>
                  <div className="bg-muted rounded-lg overflow-hidden aspect-video">
                    <img
                      src="/Capital Planing Reports.png"
                      alt="Capital Planning Reports"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Secure Institutional Knowledge */}
      <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Secure Institutional Knowledge for the Next Generation
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8">
              You know the risk: A longtime facilities leader retires—and with
              them goes 30 years of knowledge about your buildings.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              With Portfolio Elevation, your facilities strategy isn't locked in
              someone's head or buried in filing cabinets.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="h-full">
              <CardContent className="p-8">
                <div className="bg-brand-green/10 p-4 rounded-full w-fit mx-auto mb-6">
                  <FileText className="h-12 w-12 text-brand-darkblue" />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Every asset is documented, organized, and mapped
                </h3>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="h-full">
              <CardContent className="p-8">
                <div className="bg-brand-green/10 p-4 rounded-full w-fit mx-auto mb-6">
                  <BookOpen className="h-12 w-12 text-brand-darkblue" />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  All service records, warranties, and histories are stored in
                  one place
                </h3>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="h-full">
              <CardContent className="p-8">
                <div className="bg-brand-green/10 p-4 rounded-full w-fit mx-auto mb-6">
                  <Users className="h-12 w-12 text-brand-darkblue" />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  New staff can step into the role with full operational context
                  from day one
                </h3>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-brand-green/5 p-8 rounded-2xl text-center border border-brand-green/20"
        >
          <div className="text-4xl mb-4">🧾</div>
          <p className="text-xl text-brand-darkblue font-semibold leading-relaxed">
            Build institutional memory that outlasts staff turnover and supports
            long-term planning.
          </p>
        </motion.div>
      </section>

      {/* Section 4: Why Education Leaders Choose Portfolio Elevation */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Why Education Leaders Choose Portfolio Elevation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="flex items-center justify-center p-4">
                <CheckCircle className="h-6 w-6 text-brand-green mr-3 flex-shrink-0" />
                <span className="text-lg">
                  Make funding decisions with data, not anecdotes
                </span>
              </div>
              <div className="flex items-center justify-center p-4">
                <CheckCircle className="h-6 w-6 text-brand-green mr-3 flex-shrink-0" />
                <span className="text-lg">
                  Promote equity and transparency in facilities planning
                </span>
              </div>
              <div className="flex items-center justify-center p-4">
                <CheckCircle className="h-6 w-6 text-brand-green mr-3 flex-shrink-0" />
                <span className="text-lg">
                  Align your LCAP and capital goals with site-level needs
                </span>
              </div>
              <div className="flex items-center justify-center p-4">
                <CheckCircle className="h-6 w-6 text-brand-green mr-3 flex-shrink-0" />
                <span className="text-lg">
                  Win support from stakeholders with compelling, visual evidence
                </span>
              </div>
              <div className="flex items-center justify-center p-4 md:col-span-2 lg:col-span-2">
                <CheckCircle className="h-6 w-6 text-brand-green mr-3 flex-shrink-0" />
                <span className="text-lg">
                  Ensure continuity across leadership transitions
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-brand-darkblue to-brand-navy text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Lead Your District with Clarity and Courage
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Your students and staff deserve safe, high-performing learning
              environments. Now you have the data to deliver them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-brand-green hover:bg-brand-lightgreen text-brand-darkblue font-semibold px-8 py-4 text-lg"
              >
                See the District Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-brand-darkblue bg-white hover:bg-white/90 font-semibold px-8 py-4 text-lg"
              >
                Book a Leadership Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SchoolBoardLeadership;