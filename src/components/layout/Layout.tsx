import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children = <div>Page content</div> }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 sm:h-18 md:h-20 items-center justify-between min-h-[4rem]">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <img
                  src="/logo.png"
                  alt="Portfolio Elevation"
                  className="h-32 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
              <Link
                to="/"
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                to="/solutions"
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                Solutions
              </Link>
              <Link
                to="/features"
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                Features
              </Link>
              <Link
                to="/case-studies"
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                Our Approach
              </Link>
              <Link
                to="/contact"
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
              {/* Log In Button */}
              <a
                href="https://app.portfolio-elevation.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-3 lg:px-4 py-2 text-xs lg:text-sm font-medium text-brand-darkblue bg-transparent border border-brand-darkblue rounded-full hover:bg-brand-darkblue/5 transition-colors whitespace-nowrap"
              >
                Log In
              </a>

              {/* Book a Demo Button */}
              <Button
                size="sm"
                className="bg-brand-green hover:bg-brand-lightgreen text-brand-darkblue rounded-full px-4 lg:px-6 font-semibold text-xs lg:text-sm whitespace-nowrap"
              >
                Book a Demo
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link
                to="/"
                className="block text-base font-medium text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/solutions"
                className="block text-base font-medium text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Solutions
              </Link>
              <Link
                to="/features"
                className="block text-base font-medium text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                to="/case-studies"
                className="block text-base font-medium text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Approach
              </Link>
              <Link
                to="/contact"
                className="block text-base font-medium text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-3 border-t border-gray-200 space-y-3">
                <a
                  href="https://app.portfolio-elevation.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-4 py-2 text-sm font-medium text-brand-darkblue bg-transparent border border-brand-darkblue rounded-full hover:bg-brand-darkblue/5 transition-colors"
                >
                  Log In
                </a>
                <Button
                  size="sm"
                  className="w-full bg-brand-green hover:bg-brand-lightgreen text-brand-darkblue rounded-full font-semibold"
                >
                  Book a Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-1">
              <img
                src="/logo.png"
                alt="Portfolio Elevation"
                className="h-32 w-auto mb-4"
              />
              <p className="text-sm text-gray-600 mb-4">
                Advanced 3D building visualization and asset management
                solutions for modern enterprises.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-primary">
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-primary">
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Solutions */}
            <div className="col-span-1">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                Solutions
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/segment/school-leaders"
                    className="text-sm text-gray-600 hover:text-primary transition-colors"
                  >
                    For School Leaders
                  </Link>
                </li>
                <li>
                  <Link
                    to="/segment/healthcare-leaders"
                    className="text-sm text-gray-600 hover:text-primary transition-colors"
                  >
                    For Healthcare Leaders
                  </Link>
                </li>
                <li>
                  <Link
                    to="/segment/facility-directors"
                    className="text-sm text-gray-600 hover:text-primary transition-colors"
                  >
                    For Facility Directors
                  </Link>
                </li>
                <li>
                  <Link
                    to="/segment/commercial-property-owners"
                    className="text-sm text-gray-600 hover:text-primary transition-colors"
                  >
                    For Commercial Property Owners
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="col-span-1">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                Resources
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/case-studies"
                    className="text-sm text-gray-600 hover:text-primary transition-colors"
                  >
                    Our Approach
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="text-sm text-gray-600 hover:text-primary transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/documentation"
                    className="text-sm text-gray-600 hover:text-primary transition-colors"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    to="/support"
                    className="text-sm text-gray-600 hover:text-primary transition-colors"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="col-span-1">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                Company
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/about"
                    className="text-sm text-gray-600 hover:text-primary transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/careers"
                    className="text-sm text-gray-600 hover:text-primary transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-sm text-gray-600 hover:text-primary transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Portfolio Elevation. All
                rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link
                  to="/privacy"
                  className="text-sm text-gray-500 hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="text-sm text-gray-500 hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  to="/cookies"
                  className="text-sm text-gray-500 hover:text-primary transition-colors"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;