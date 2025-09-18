import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  Calculator,
  FileText,
  Eye,
  Users,
  Settings,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Clock,
  AlertTriangle,
  TrendingUp,
} from "lucide-react";

const FacilitiesOperations = () => {
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
              Data Empowerment Equals Funding
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
              Portfolio Elevation brings 3D visibility, lifecycle clarity, and
              budget-ready data so you can justify more projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-brand-green hover:bg-brand-lightgreen text-brand-darkblue font-semibold px-8 py-4 text-lg"
              >
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-brand-darkblue bg-white hover:bg-white/90 font-semibold px-8 py-4 text-lg"
              >
                Download the District Facilities Brief
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Know Exactly What Your District Needs */}
      <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Know Exactly What Your District Needs—And When
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-6">
              You're responsible for aging buildings, tight budgets, and rising
              expectations—and it's getting harder to answer the one question
              that keeps coming up:
            </p>
            <div className="bg-muted/50 p-8 rounded-lg mb-6">
              <p className="text-2xl font-semibold text-brand-darkblue italic">
                &quot;What's the true condition of our facilities?&quot;
              </p>
            </div>
            <p className="text-lg text-brand-darkblue font-medium">
              With Portfolio Elevation, you'll have the answer—backed by
              irrefutable data, school by school, asset by asset.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Section 2: What You Can Do */}
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
              What You Can Do with Portfolio Elevation
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-brand-green/10 p-3 rounded-full mr-4">
                      <Calculator className="h-8 w-8 text-brand-darkblue" />
                    </div>
                    <h3 className="text-xl font-semibold">
                      Quantify Asset Needs Across Every Site
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    See every HVAC unit, roof, field, painting surface, asphalt
                    zone, and more—mapped to its location and tagged with
                    current condition, age, and replacement cost.
                  </p>
                  <p className="text-brand-darkblue font-medium">
                    Eliminate guesswork. Present a defensible list of what needs
                    funding—and when.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-brand-green/10 p-3 rounded-full mr-4">
                      <Clock className="h-8 w-8 text-brand-darkblue" />
                    </div>
                    <h3 className="text-xl font-semibold">
                      Track the Full Lifecycle of Every Asset
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Know where you are in the lifecycle of every building
                    system: from install date to expected replacement, with
                    real-time updates and built-in budgeting tools.
                  </p>
                  <p className="text-brand-darkblue font-medium">
                    You'll never have to dig through old spreadsheets—or your
                    memory—again.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-brand-green/10 p-3 rounded-full mr-4">
                      <FileText className="h-8 w-8 text-brand-darkblue" />
                    </div>
                    <h3 className="text-xl font-semibold">
                      Prepare Irrefutable Presentations for the Board
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Generate reports and visuals that clearly communicate
                    funding needs. No ambiguity. No back-and-forth. Just the
                    facts, ready for decision-making.
                  </p>
                  <p className="text-brand-darkblue font-medium">
                    It's the data your board needs—and the backup you've always
                    deserved.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-brand-green/10 p-3 rounded-full mr-4">
                      <Eye className="h-8 w-8 text-brand-darkblue" />
                    </div>
                    <h3 className="text-xl font-semibold">
                      See Every Campus from Your Desk
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Jump between school sites in an interactive 3D environment.
                    Know exactly what's happening, where it's happening, and
                    what needs to be done—without driving across town.
                  </p>
                  <p className="text-brand-darkblue font-medium">
                    Stop wasting hours chasing updates. Get instant site context
                    anytime.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Feature 5 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-brand-green/10 p-3 rounded-full mr-4">
                      <Users className="h-8 w-8 text-brand-darkblue" />
                    </div>
                    <h3 className="text-xl font-semibold">
                      Streamline Vendor & Staff Communication
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    When a maintenance tech flags an issue, you can locate the
                    asset visually, verify its condition, and send that context
                    straight to your vendor—no extra site visit required.
                  </p>
                  <p className="text-brand-darkblue font-medium">
                    Say goodbye to redundant calls and conflicting reports.
                    Everyone works from the same source of truth.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Comprehensive Maintenance Plan */}
      <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Build a Real Comprehensive Maintenance Plan
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Plan Feature 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="h-full text-center">
              <CardContent className="p-8">
                <div className="bg-brand-green/10 p-4 rounded-full w-fit mx-auto mb-6">
                  <Settings className="h-12 w-12 text-brand-darkblue" />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Create a District-Wide Comprehensive Maintenance Plan
                </h3>
                <p className="text-muted-foreground mb-4">
                  Log and plan maintenance tasks for every major
                  system—recurring PMs, inspections, and lifecycle-based
                  replacements—all scheduled and visible in one dashboard.
                </p>
                <p className="text-brand-darkblue font-medium">
                  Stay ahead of breakdowns and reduce reactive work orders.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Plan Feature 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full text-center">
              <CardContent className="p-8">
                <div className="bg-brand-green/10 p-4 rounded-full w-fit mx-auto mb-6">
                  <AlertTriangle className="h-12 w-12 text-brand-darkblue" />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Quantify Deferred Maintenance Across Campuses
                </h3>
                <p className="text-muted-foreground mb-4">
                  No more guessing. See exactly how much maintenance is overdue
                  at each school and how it impacts operations and cost
                  exposure.
                </p>
                <p className="text-brand-darkblue font-medium">
                  Clearly identify where risk is building up—before it becomes a
                  crisis.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Plan Feature 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full text-center">
              <CardContent className="p-8">
                <div className="bg-brand-green/10 p-4 rounded-full w-fit mx-auto mb-6">
                  <BarChart3 className="h-12 w-12 text-brand-darkblue" />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Facility Condition Index Dashboard
                </h3>
                <p className="text-muted-foreground mb-4">
                  Each site is scored with a dynamic Facility Condition Index
                  (FCI), helping you rank buildings by risk, replacement
                  priority, and funding urgency.
                </p>
                <p className="text-brand-darkblue font-medium">
                  Turn thousands of data points into one clear metric: where to
                  act first.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Why It Matters */}
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
              Why It Matters
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="flex items-center justify-center p-4">
                <CheckCircle className="h-6 w-6 text-brand-green mr-3 flex-shrink-0" />
                <span className="text-lg">
                  Prevent unexpected failures that disrupt learning
                </span>
              </div>
              <div className="flex items-center justify-center p-4">
                <CheckCircle className="h-6 w-6 text-brand-green mr-3 flex-shrink-0" />
                <span className="text-lg">
                  Justify budget requests with confidence
                </span>
              </div>
              <div className="flex items-center justify-center p-4">
                <CheckCircle className="h-6 w-6 text-brand-green mr-3 flex-shrink-0" />
                <span className="text-lg">
                  Spend less time compiling reports and more time solving real
                  problems
                </span>
              </div>
              <div className="flex items-center justify-center p-4">
                <CheckCircle className="h-6 w-6 text-brand-green mr-3 flex-shrink-0" />
                <span className="text-lg">
                  Modernize your operations without adding headcount
                </span>
              </div>
              <div className="flex items-center justify-center p-4 md:col-span-2 lg:col-span-2">
                <CheckCircle className="h-6 w-6 text-brand-green mr-3 flex-shrink-0" />
                <span className="text-lg">
                  Be ready for your next bond cycle, facilities audit, or board
                  meeting
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
              Take Control of Your District's Facilities
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Give your board answers. Give your staff clarity. And give
              yourself the tools to lead your district forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-brand-green hover:bg-brand-lightgreen text-brand-darkblue font-semibold px-8 py-4 text-lg"
              >
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-brand-darkblue bg-white hover:bg-white/90 font-semibold px-8 py-4 text-lg"
              >
                Download the Facilities Brief
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FacilitiesOperations;