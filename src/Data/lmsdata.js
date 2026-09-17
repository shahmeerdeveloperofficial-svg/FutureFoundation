import Montessori from "../assets/images/curiculum/1.png";
import Digital from "../assets/images/curiculum/2.png";
import Steam from "../assets/images/curiculum/4.png";
import Quran from "../assets/images/curiculum/8.png";

export const RadioButton = [
  { id: "all", label: "All" },
  { id: "curriculum", label: "Curriculum" },
  { id: "activities", label: "Activities" },
];

export const DropdownOptions = [
  "Curriculum Highlights",
  "Values Based Learning",
  "Technology Integration",
  "Student Growth",
];

export const CardData = [
  {
    id: 1,
    img: Montessori,
    lang: "Montessori",
    title: "Montessori Wing",
    desp: "A child-centred environment where curiosity, play, and guided exploration build a strong foundation.",
    btn: "Learn More",
    no: "1",
    number: "(0)",
    recent: "Curriculum Highlights",
  },
  {
    id: 2,
    img: Digital,
    lang: "Digital",
    title: "Digital Education",
    desp: "Smart boards and digital tools support interactive lessons and modern classroom engagement.",
    btn: "Learn More",
    no: "2",
    number: "(0)",
    recent: "Technology Integration",
  },
  {
    id: 3,
    img: Steam,
    lang: "STEAM",
    title: "STEAM Learning",
    desp: "Science, technology, engineering, arts, and mathematics work together for real-world problem solving.",
    btn: "Learn More",
    no: "3",
    number: "(0)",
    recent: "Curriculum Highlights",
  },
  {
    id: 4,
    img: Quran,
    lang: "Islamic Studies",
    title: "Quran and Seerat",
    desp: "Daily study of the Holy Quran and Seerat strengthens values, faith, and character.",
    btn: "Learn More",
    no: "4",
    number: "(0)",
    recent: "Values Based Learning",
  },
];
