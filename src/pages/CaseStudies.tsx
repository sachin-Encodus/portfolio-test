import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CaseStudies() {
  const caseStudies = [
    {
      id: "school-district-pilot",
      title: "Implementing a 3D Digital Twin Pilot in a School District",
      subtitle: "Bringing Clarity to Complexity in K–12 Facility Management",
      description:
        "Explore how a forward-thinking school leader used our 3D Digital Twin platform to unify capital planning, reduce operational inefficiencies, and advocate for facility funding across their district.",
      category: "Education",
      icon: Building,
      results: "Strategic Insight for budgeting, planning, & maintenance.",
      link: "/case-study/school-district-pilot",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <Badge className="mb-6 bg-green-600 hover:bg-green-700">
            Our Approach
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Real Results from Real Customers
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-3xl">
            See how organizations across different industries are transforming
            their facility management with our 3D Digital Twin platform.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-8 md:gap-12">
            {caseStudies.map((study, index) => {
              const IconComponent = study.icon;
              return (
                <Card
                  key={study.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-8">
                      <div className="flex items-center mb-4">
                        <IconComponent className="w-8 h-8 text-green-600 mr-3" />
                        <Badge variant="outline" className="text-slate-600">
                          {study.category}
                        </Badge>
                      </div>
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                          {study.title}
                        </CardTitle>
                        <CardDescription className="text-lg text-slate-600">
                          {study.subtitle}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-0">
                        <p className="text-slate-700 mb-6 leading-relaxed">
                          {study.description}
                        </p>
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                          <p className="text-green-800 font-semibold">
                            Key Result: {study.results}
                          </p>
                        </div>
                        <Link to={study.link}>
                          <Button className="bg-green-600 hover:bg-green-700 text-white group">
                            Read Our Approach
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </CardContent>
                    </div>
                    <div className="bg-slate-100 flex items-center justify-center p-8">
                      <img
                        src="/3D Digital Twin Viewer Interface.png"
                        alt="3D Digital Twin Viewer Interface"
                        className="w-full h-auto object-contain rounded-lg"
                      />
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Your Own Success Story?
          </h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Join these industry leaders and transform your facility management
            with our 3D Digital Twin platform.
          </p>
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold"
          >
            Schedule Your Demo Today
          </Button>
        </div>
      </section>
    </div>
  );
}
