import { useEffect } from "react";
import { useLocation } from "react-router";
import { CustomNavbar } from "../Navbar/Index";
import { Footer } from "../Footer/Index";
import { AdmissionPopup } from "../Components/AdmissionPopup/Index";

const seoMap = {
  "/": {
    title: "Home | Future Foundation Schools",
    description:
      "Future Foundation Schools is a leading school chain in Pakistan focused on critical thinking, strong values, and future-ready learning.",
  },
  "/chairman-message": {
    title: "Chairman's Message | Future Foundation Schools",
    description:
      "Read the Chairman's message on critical thinking, mentorship, and the school's mission to build a bright future for every student.",
  },
  "/principal-message": {
    title: "Director's Message | Future Foundation Schools",
    description:
      "Read the Director's message about holistic education, student growth, and integrity-led leadership.",
  },
  "/philosophy": {
    title: "Co-Director's Message | Future Foundation Schools",
    description:
      "Read the Co-Director's message about excellence, compassion, innovation, and student success.",
  },
  "/montessori-wing": {
    title: "Montessori Wing | Future Foundation Schools",
    description:
      "Explore the Montessori Wing, where early learning focuses on curiosity, independence, and strong foundations.",
  },
  "/digital-education": {
    title: "Digital Education | Future Foundation Schools",
    description:
      "See how Future Foundation Schools uses digital education and smart boards to create modern classrooms.",
  },
  "/ai-robotics": {
    title: "AI & Robotics | Future Foundation Schools",
    description:
      "Learn how AI and robotics help students build creativity, coding confidence, and problem-solving skills.",
  },
  "/steam": {
    title: "STEAM Education | Future Foundation Schools",
    description:
      "Discover the school’s STEAM approach connecting science, technology, engineering, arts, and mathematics.",
  },
  "/competency-based-education": {
    title: "Competency-Based Education | Future Foundation Schools",
    description:
      "See how competency-based education helps students master skills before moving forward.",
  },
  "/personality-development": {
    title: "Personality Development | Future Foundation Schools",
    description:
      "Read about personality development at Future Foundation Schools and the values that shape responsible learners.",
  },
  "/character-building": {
    title: "Character Building | Future Foundation Schools",
    description:
      "Explore the character-building program rooted in Islamic principles, sincerity, and strong ethics.",
  },
  "/quran-o-seerat": {
    title: "Qur'an & Seerat | Future Foundation Schools",
    description:
      "Learn how the Qur'an and Seerat are taught as a core daily subject across all grade levels.",
  },
  "/outdoor-educational-trips": {
    title: "Outdoor Educational Trips | Future Foundation Schools",
    description:
      "Read about outdoor learning experiences that build resilience, personal growth, and nature awareness.",
  },
  "/physical-development": {
    title: "Physical Development | Future Foundation Schools",
    description:
      "Explore sports and physical development activities that support healthy minds, discipline, and teamwork.",
  },
  "/intellectual-development": {
    title: "Talent Hunt | Future Foundation Schools",
    description:
      "Learn how the Talent Hunt program helps students discover and develop their multiple intelligences.",
  },
  "/admission-process": {
    title: "Admission Process | Future Foundation Schools",
    description:
      "Read the admission process, timeline, required documents, and readiness assessment steps.",
  },
  "/disipline+code-of-dress": {
    title: "Dress Code | Future Foundation Schools",
    description:
      "View the dress code and grooming regulations along with approved school uniform guidelines.",
  },
  "/lms": {
    title: "Digital Education | Future Foundation Schools",
    description:
      "Explore the school’s digital education page and SMART Board initiative.",
  },
  "/facilities": {
    title: "Our Curriculum | Future Foundation Schools",
    description:
      "See the curriculum pillars that support holistic, values-based learning at Future Foundation Schools.",
  },
  "/franchise-offer": {
    title: "Silent Features | Future Foundation Schools",
    description:
      "Discover the silent features including spoken English, cursive writing, Khat-e-Nastaleeq, and more.",
  },
  "/franchise-model": {
    title: "School Network | Future Foundation Schools",
    description:
      "Read about the school network, branch growth, mentorship quality, and academic excellence.",
  },
  "/our-campuses": {
    title: "Our Campuses | Future Foundation Schools",
    description:
      "Browse the campus network and branch locations across Pakistan.",
  },
  "/contact-us": {
    title: "Contact Us | Future Foundation Schools",
    description:
      "Find the head office location and contact details for Future Foundation Schools.",
  },
  "/admissionnow": {
    title: "Admissions | Future Foundation Schools",
    description:
      "Start the admissions journey and connect with the school for the next steps.",
  },
};

export const Layout = (props) => {
  const location = useLocation();

  useEffect(() => {
    const seo = seoMap[location.pathname] ?? {
      title: "Future Foundation Schools",
      description:
        "Future Foundation Schools is a leading school chain in Pakistan focused on values, learning, and student growth.",
    };

    document.title = seo.title;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = seo.description;
  }, [location.pathname]);

  useEffect(() => {
    const whatsappHref = "https://wa.me/923707503109";
    document
      .querySelectorAll('a[href="https://wa.me/92510000007"]')
      .forEach((link) => {
        link.setAttribute("href", whatsappHref);
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noreferrer");
        link.setAttribute("aria-label", "Chat on WhatsApp");
      });
  }, [location.pathname]);

  return (
    <div className={props.class}>
      <CustomNavbar />
      <AdmissionPopup />
      {props.children}
      <Footer />
    </div>
  );
};
