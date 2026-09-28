// Gallery photos, grouped by category.
// To add a photo: put a WebP (max 1600px) in public/images/gallery/ and add a row below.
export const GALLERY_CATEGORIES = [
  "Achievements",
  "Celebrations",
  "Competitions",
  "Parent Meets",
  "Campus",
] as const;

export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number];

export type GalleryItem = {
  src: string;
  width: number;
  height: number;
  label: string;
  category: GalleryCategory;
  alt: string;
};

export const GALLERY_ITEMS: GalleryItem[] = [
  { src: "/images/student-certificate.webp", width: 1200, height: 1600, label: "Certificate Presentation", category: "Achievements", alt: "Teacher presenting a certificate to a student at the school entrance" },
  { src: "/images/gallery/awards-august-group.webp", width: 1600, height: 1200, label: "August Achievers", category: "Achievements", alt: "Award winners holding certificates with teachers in front of the school building" },
  { src: "/images/gallery/awards-with-principal.webp", width: 1600, height: 1200, label: "Star Performers", category: "Achievements", alt: "Students with certificates standing beside their teachers in front of the school" },
  { src: "/images/gallery/award-principal-office.webp", width: 1200, height: 1600, label: "Certificate of Merit", category: "Achievements", alt: "A young student receiving a certificate from her teacher in the school office" },
  { src: "/images/gallery/awards-primary-class.webp", width: 1600, height: 1200, label: "Class Toppers", category: "Achievements", alt: "Primary students holding certificates in their classroom" },
  { src: "/images/gallery/awards-good-behaviour.webp", width: 1600, height: 1200, label: "Good Behaviour Award", category: "Achievements", alt: "Students showing their good behaviour and super speller certificates" },
  { src: "/images/gallery/awards-senior-class.webp", width: 1600, height: 1200, label: "Monthly Awards", category: "Achievements", alt: "Senior students with award certificates in front of the blackboard" },
  { src: "/images/gallery/award-trophy-room.webp", width: 1200, height: 1600, label: "Recognised for Excellence", category: "Achievements", alt: "Student receiving a certificate in front of the school trophy cabinet" },
  { src: "/images/diya-decoration-1.webp", width: 1200, height: 1600, label: "Diya Decoration", category: "Celebrations", alt: "Lit diyas arranged in a pattern on the school floor" },
  { src: "/images/diya-decoration-2.webp", width: 1600, height: 1200, label: "Diya Decoration", category: "Celebrations", alt: "Students lighting diyas arranged on the floor in front of the school backdrop" },
  { src: "/images/gallery/independence-day-lamp.webp", width: 1200, height: 1600, label: "Independence Day", category: "Celebrations", alt: "Chief guests lighting the lamp at the Independence Day celebration" },
  { src: "/images/gallery/independence-day-stage.webp", width: 1200, height: 1600, label: "Stage Decoration", category: "Celebrations", alt: "Independence Day stage backdrop with a paper tree and doves" },
  { src: "/images/gallery/independence-day-guests.webp", width: 1600, height: 1200, label: "Our Guests", category: "Celebrations", alt: "Teachers and guests on stage at the Independence Day celebration" },
  { src: "/images/gallery/independence-day-dance.webp", width: 1600, height: 1200, label: "Cultural Programme", category: "Celebrations", alt: "Students performing a dance at the Independence Day programme" },
  { src: "/images/gallery/independence-day-audience.webp", width: 1600, height: 1200, label: "Whole School Assembly", category: "Celebrations", alt: "Students seated on the lawn watching the Independence Day programme" },
  { src: "/images/gallery/independence-day-march.webp", width: 1600, height: 1200, label: "Student Council", category: "Celebrations", alt: "Student council members in sashes at the Independence Day celebration" },
  { src: "/images/gallery/independence-day-performance.webp", width: 1600, height: 1200, label: "Patriotic Performance", category: "Celebrations", alt: "Girls in traditional dress performing on the Independence Day stage" },
  { src: "/images/gallery/house-board-decoration.webp", width: 1200, height: 1600, label: "House Board Decoration", category: "Celebrations", alt: "Students decorating the Teresa House board with paper flowers" },
  { src: "/images/poster-making-1.webp", width: 1200, height: 1600, label: "Poster Making", category: "Competitions", alt: "Students drawing posters at the Integrity – A Way of Life poster-making competition" },
  { src: "/images/poster-making-2.webp", width: 1200, height: 1600, label: "Ideas Taking Shape", category: "Competitions", alt: "Students colouring their posters during the competition" },
  { src: "/images/poster-exhibit.webp", width: 1600, height: 1200, label: "Poster Exhibition", category: "Competitions", alt: "Students holding up their integrity posters in the school hall" },
  { src: "/images/poster-group-2.webp", width: 1600, height: 1200, label: "Our Budding Artists", category: "Competitions", alt: "Group of students with their integrity posters outside the school" },
  { src: "/images/gallery/mehndi-competition.webp", width: 1600, height: 1200, label: "Mehndi Competition", category: "Competitions", alt: "Student applying mehndi on a classmate's hand during the mehndi competition" },
  { src: "/images/gallery/hindi-diwas-bhasha.webp", width: 478, height: 850, label: "Hindi Diwas", category: "Celebrations", alt: "Class 2 student holding a card with the word bhasha on Hindi Diwas" },
  { src: "/images/gallery/hindi-diwas-mind-map.webp", width: 478, height: 850, label: "Hindi Mind Map", category: "Celebrations", alt: "Class 1 student completing a Hindi grammar mind map on the whiteboard" },
  { src: "/images/gallery/ptm-welcome.webp", width: 900, height: 1600, label: "Welcome to PTM", category: "Parent Meets", alt: "Teacher discussing a student's progress with a parent at the parent-teacher meeting" },
  { src: "/images/gallery/ptm-classroom.webp", width: 1280, height: 960, label: "Parent-Teacher Meeting", category: "Parent Meets", alt: "Parents and students at a desk with the teacher, Welcome to PTM written on the board" },
  { src: "/images/gallery/ptm-board.webp", width: 1280, height: 960, label: "Together for Every Child", category: "Parent Meets", alt: "Classroom decorated for the parent-teacher meeting with parents talking to the class teacher" },
  { src: "/images/gallery/ptm-primary.webp", width: 1280, height: 960, label: "Primary Wing PTM", category: "Parent Meets", alt: "Parents meeting teachers in a primary classroom" },
  { src: "/images/gallery/ptm-progress.webp", width: 1280, height: 960, label: "Progress Review", category: "Parent Meets", alt: "Teacher sharing a report card with a parent and child" },
  { src: "/images/gallery/ptm-office.webp", width: 1280, height: 960, label: "At the Front Office", category: "Parent Meets", alt: "Parents at the school front office during the parent-teacher meeting" },
  { src: "/images/campus1.png", width: 4032, height: 3024, label: "Main Campus", category: "Campus", alt: "Main gate and front of Howard Convent School, Kanth" },
  { src: "/images/campus2.png", width: 4032, height: 3024, label: "School Building", category: "Campus", alt: "Howard Convent School building with the school name board" },
  { src: "/images/campus3.png", width: 3024, height: 4032, label: "Campus View", category: "Campus", alt: "Side view of the Howard Convent School building" },
  { src: "/images/Office.png", width: 4032, height: 3024, label: "Reception & Office", category: "Campus", alt: "School reception and front office" },
  { src: "/images/computer-lab.webp", width: 1200, height: 1600, label: "Computer Lab", category: "Campus", alt: "Students working at desks in the school computer lab" },
  { src: "/images/swimingpool.png", width: 3024, height: 4032, label: "Swimming Pool", category: "Campus", alt: "On-campus swimming pool at Howard Convent School" },
  { src: "/images/campus5.png", width: 4032, height: 3024, label: "Campus Grounds", category: "Campus", alt: "Open grounds and tree-lined lawn on the Howard Convent campus" },
];
