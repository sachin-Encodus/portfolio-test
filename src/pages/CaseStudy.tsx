import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Building,
  Users,
  MapPin,
  Camera,
  Database,
  BarChart3,
  Target,
} from "lucide-react";

export default function CaseStudy() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <Badge className="mb-6 bg-green-600 hover:bg-green-700">
            Case Study
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Implementing a 3D Digital Twin Pilot in a School District
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Bringing Clarity to Complexity in K–12 Facility Management
          </p>
          <p className="text-lg text-slate-400 mt-4 leading-relaxed">
            In this case study, we explore how a forward-thinking school leader
            used our 3D Digital Twin platform to unify capital planning, reduce
            operational inefficiencies, and advocate for facility funding across
            their district.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Step 1 */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Building className="w-5 h-5 text-green-600 mr-3" />
                <h2 className="text-3xl font-bold text-slate-900">
                  Step 1: District Context & Strategic Goals
                </h2>
              </div>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                We begin every engagement by listening. In this district, the
                average facility age was over 40 years. Aging HVAC systems,
                roofing concerns, and ADA compliance were top issues.
                Internally, there was a disconnect between facilities staff and
                financial decision-makers, often resulting in deferred
                maintenance, rushed projects, and missed funding opportunities.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Key Concerns:
              </h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  Facilities outpacing their useful life
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  Limited visibility into asset conditions
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  Lack of compelling data for funding requests
                </li>
              </ul>

              <p className="text-slate-700">
                <strong>Funding Sources Explored:</strong> Local bonds, deferred
                maintenance budgets, ESSER funds, and state-level grants.
              </p>
            </div>
            <div className="bg-slate-100 rounded-lg p-2 overflow-hidden">
              <img
                src="/district-overview-dashboard.png"
                alt="District Overview Dashboard"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Callout Box */}
          <Card className="mt-8 border-l-4 border-l-blue-500 bg-blue-50">
            <CardContent className="p-6">
              <p className="text-lg font-medium text-blue-800">
                Transform maintenance planning by virtually walking through
                facilities from your office
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Step 2 */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-slate-100 rounded-lg p-2 overflow-hidden order-2 md:order-1">
              <img
                src="/Site Selection Map.png"
                alt="Site Selection Map"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center mb-4">
                <MapPin className="w-5 h-5 text-green-600 mr-3" />
                <h2 className="text-3xl font-bold text-slate-900">
                  Step 2: Pilot School Selection
                </h2>
              </div>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                To prove value and build internal buy-in, we selected 5 diverse
                school sites for a pilot program. Sites were chosen to represent
                a range of facility conditions, layouts, and community
                visibility.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Pilot Criteria:
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  Range of asset types and building eras
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  Access to partial or full as-builts
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  Leadership alignment at the site level
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Step 3 */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Users className="w-5 h-5 text-green-600 mr-3" />
                <h2 className="text-3xl font-bold text-slate-900">
                  Step 3: Pre-Site Inspection Planning
                </h2>
              </div>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                Before sending boots on the ground, we collaborated with the
                district on:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                  Campus access and timing around student schedules
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                  Review of available as-builts and facility maps
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                  Safety protocols and district clearance for aerial and ground
                  imaging
                </li>
              </ul>

              <p className="text-slate-700">
                <strong>Deliverables:</strong> A site-specific plan for each
                campus to ensure efficient, safe, and complete data capture.
              </p>
            </div>
            <div className="bg-slate-100 rounded-lg p-2 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
                alt="Planning Documentation"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Step 4 */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-slate-100 rounded-lg p-2 overflow-hidden order-2 md:order-1">
              <img
                src="/Drone Capture Process.png"
                alt="Drone Capture Process"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center mb-4">
                <Camera className="w-5 h-5 text-green-600 mr-3" />
                <h2 className="text-3xl font-bold text-slate-900">
                  Step 4: On-Site Digital Twin Capture
                </h2>
              </div>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                We dispatched trained personnel and FAA-compliant drone pilots
                to each school.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                What We Captured:
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  Aerial imagery of roofs, grounds, and parking lots
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  Ground-level imagery of key infrastructure
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  Comprehensive assessments of HVAC, roofing, paint, asphalt,
                  landscaping, and other capital assets
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Step 5 */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Database className="w-5 h-5 text-green-600 mr-3" />
                <h2 className="text-3xl font-bold text-slate-900">
                  Step 5: Processing the Digital Twin
                </h2>
              </div>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                All captured data was processed into highly detailed,
                interactive 3D models accessible through a secure district
                portal.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Benefits:
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  View and navigate each campus remotely
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  Annotate and share issues with internal staff or outside
                  vendors
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  No special software needed—just a browser
                </li>
              </ul>
            </div>
            <div className="bg-slate-100 rounded-lg p-2 overflow-hidden">
              <img
                src="/3D Digital Twin Viewer Interface.png"
                alt="3D Digital Twin Viewer Interface"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Callout Box */}
          <Card className="mt-8 border-l-4 border-l-blue-500 bg-blue-50">
            <CardContent className="p-6">
              <p className="text-lg font-medium text-blue-800">
                Enable board & community members to make informed budget
                decisions.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Step 6 */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-slate-100 rounded-lg p-2 overflow-hidden order-2 md:order-1">
              <img
                src="/Asset Intelligence Dashboard.png"
                alt="Asset Intelligence Dashboard"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center mb-4">
                <BarChart3 className="w-5 h-5 text-green-600 mr-3" />
                <h2 className="text-3xl font-bold text-slate-900">
                  Step 6: Asset Mapping & Intelligence Enrichment
                </h2>
              </div>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                Each model was enriched with critical asset data:
              </p>

              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  Equipment types, model and serial numbers
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  Estimated age and condition
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  Remaining useful life and risk scoring
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  Replacement cost estimates
                </li>
              </ul>

              <p className="text-slate-700 mb-4">
                Where available, we incorporated as-builts to digitally
                document:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  Electrical panels
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  Emergency shutoffs
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  Utility infrastructure
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Step 7 */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Target className="w-5 h-5 text-green-600 mr-3" />
                <h2 className="text-3xl font-bold text-slate-900">
                  Step 7: Capital Planning & Reporting
                </h2>
              </div>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                Finally, we delivered a district-level and site-specific 10-year
                capital plan.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Deliverables Included:
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  Heat maps of at-risk assets
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  Replacement cost roll-ups by year and site
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  Filterable dashboards for planning discussions
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  PDF reports for board, bond, and grant applications
                </li>
              </ul>
            </div>
            <div className="bg-slate-100 rounded-lg p-2 overflow-hidden">
              <img
                src="/Capital Planing Reports.png"
                alt="Capital Planning Reports"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              The Result: Visibility, Credibility, and Empowerment
            </h2>
            <p className="text-lg text-slate-700 text-center leading-relaxed max-w-3xl mx-auto">
              With data in hand, the district's facilities department was no
              longer playing defense. They could now clearly communicate their
              needs, justify requests, and demonstrate a proactive,
              technology-forward approach to managing taxpayer-funded assets.
            </p>
          </div>

          {/* Final Callout Box */}
          <Card className="mt-8 border-l-4 border-l-green-500 bg-green-50">
            <CardContent className="p-6">
              <p className="text-lg font-medium text-green-800">
                Identify critical risks in aging infrastructure before they
                become costly emergencies
              </p>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-slate-900 rounded-xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your District's Facility Management?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            See how our 3D Digital Twin platform can bring clarity to your
            capital planning and help you secure the funding your facilities
            need.
          </p>
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold"
          >
            Schedule a Pilot for Your District
          </Button>
        </section>
      </div>
    </div>
  );
}
