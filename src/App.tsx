import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/home";
import Solutions from "./pages/Solutions";
import Features from "./pages/Features";
import CaseStudies from "./pages/CaseStudies";
import CaseStudy from "./pages/CaseStudy";
import SegmentPage from "./pages/segment/[role]";
import FacilitiesOperations from "./pages/FacilitiesOperations";
import SchoolBoardLeadership from "./pages/SchoolBoardLeadership";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/features" element={<Features />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route
            path="/case-study/school-district-pilot"
            element={<CaseStudy />}
          />
          <Route path="/segment/:role" element={<SegmentPage />} />
          <Route
            path="/facilities-operations"
            element={<FacilitiesOperations />}
          />
          <Route
            path="/school-board-leadership"
            element={<SchoolBoardLeadership />}
          />
        </Routes>
      </Layout>
    </Suspense>
  );
}

export default App;