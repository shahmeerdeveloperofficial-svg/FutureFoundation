import { useEffect, lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import { Home } from "./Pages/Home";
import "./App.css";

// Lazy load non-home subpages to optimize initial mobile loading performance
const Lms = lazy(() => import("./Pages/Lms").then(m => ({ default: m.Lms })));
const Facilities = lazy(() => import("./Pages/Facilities").then(m => ({ default: m.Facilities })));
const Chairman = lazy(() => import("./Pages/Chairman").then(m => ({ default: m.Chairman })));
const Principal = lazy(() => import("./Pages/Principal").then(m => ({ default: m.Principal })));
const Philosophy = lazy(() => import("./Pages/Philosophy").then(m => ({ default: m.Philosophy })));
const Montessori = lazy(() => import("./Pages/Montessori").then(m => ({ default: m.Montessori })));
const DigitalEducation = lazy(() => import("./Pages/DigitalEdu").then(m => ({ default: m.DigitalEducation })));
const AIrobotics = lazy(() => import("./Pages/AIRobotics").then(m => ({ default: m.AIrobotics })));
const Steam = lazy(() => import("./Pages/Steam").then(m => ({ default: m.Steam })));
const CompBasedEdu = lazy(() => import("./Pages/CompBasedEdu").then(m => ({ default: m.CompBasedEdu })));
const PersonalityDev = lazy(() => import("./Pages/PersonalityDev").then(m => ({ default: m.PersonalityDev })));
const CharacterBuilding = lazy(() => import("./Pages/CharBuilding").then(m => ({ default: m.CharacterBuilding })));
const Quran = lazy(() => import("./Pages/Quran").then(m => ({ default: m.Quran })));
const OutdoorEduTrips = lazy(() => import("./Pages/OutdoorEduTrips").then(m => ({ default: m.OutdoorEduTrips })));
const PhysicalDevelopment = lazy(() => import("./Pages/PhysicalDev").then(m => ({ default: m.PhysicalDevelopment })));
const TalentHunt = lazy(() => import("./Pages/TalentHunt").then(m => ({ default: m.TalentHunt })));
const AdmissionProcess = lazy(() => import("./Pages/AdmissionProcess").then(m => ({ default: m.AdmissionProcess })));
const Discipline = lazy(() => import("./Pages/Discipline").then(m => ({ default: m.Discipline })));
const AdmissionNow = lazy(() => import("./Pages/AdmissionNow.jsx").then(m => ({ default: m.AdmissionNow })));
const ContactUs = lazy(() => import("./Pages/ContactUs.jsx").then(m => ({ default: m.ContactUs })));
const Franchiseoffer = lazy(() => import("./Pages/Franchiseoffer.jsx").then(m => ({ default: m.Franchiseoffer })));
const OurCampuses = lazy(() => import("./Pages/OurCampuses.jsx").then(m => ({ default: m.OurCampuses })));
const FranchiseModel = lazy(() => import("./Pages/FranchiseModel.jsx").then(m => ({ default: m.FranchiseModel })));

function App() {
  useEffect(() => {
    try {
      AOS.init({
        offset: 20,
        duration: 600,
        once: true,
        disable: false,
      });
    } catch {}
  }, []);

  return (
    <Suspense fallback={<div style={{ minHeight: "60vh", background: "#061D52" }} />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/future-foundation-school" element={<Home />} />
        <Route path="/lms" element={<Lms />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/chairman-message" element={<Chairman />} />
        <Route path="/principal-message" element={<Principal />} />
        <Route path="/philosophy" element={<Philosophy />} />
        <Route path="/montessori-wing" element={<Montessori />} />
        <Route path="/digital-education" element={<DigitalEducation />} />
        <Route path="/ai-robotics" element={<AIrobotics />} />
        <Route path="/steam" element={<Steam />} />
        <Route path="/competency-based-education" element={<CompBasedEdu />} />
        <Route path="/personality-development" element={<PersonalityDev />} />
        <Route path="/character-building" element={<CharacterBuilding />} />
        <Route path="/quran-o-seerat" element={<Quran />} />
        <Route path="/outdoor-educational-trips" element={<OutdoorEduTrips />} />
        <Route path="/physical-development" element={<PhysicalDevelopment />} />
        <Route path="/intellectual-development" element={<TalentHunt />} />
        <Route path="/admission-process" element={<AdmissionProcess />} />
        <Route path="/disipline+code-of-dress" element={<Discipline />} />
        <Route path="/admissionnow" element={<AdmissionNow />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/franchise-offer" element={<Franchiseoffer />} />
        <Route path="/franchise-model" element={<FranchiseModel />} />
        <Route path="/our-campuses" element={<OurCampuses />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Suspense>
  );
}

export default App;
