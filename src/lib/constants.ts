export const SCHOOL = {
  name: "Howard Convent Sr. Sec. School",
  shortName: "Howard Convent",
  tagline: "Where Knowledge Becomes Character",
  established: "Est. 2012",
  board: "CBSE Affiliated",
  affiliation: "2132869",
  schoolCode: "81918",
  address: {
    line1: "3KM Milestone, Near-Garhi",
    line2: "Dhampur Road, Kanth",
    city: "Moradabad",
    state: "Uttar Pradesh",
    pin: "244501",
    country: "India",
    full: "3KM Milestone, Near-Garhi, Dhampur Road, Kanth, Moradabad — 244501, Uttar Pradesh",
  },
  phone: "+91 9319985501",
  phoneRaw: "9319985501",
  principalPhone: "+91 7248596176",
  email: "howardconventschool9@gmail.com",
  website: "www.howardconventschool.in",
  whatsapp: "https://wa.me/919319985501",
  facebook: "https://www.facebook.com/howardconventschool",
  instagram: "https://www.instagram.com/howardconventschool/",
  admissionSession: "2026–27",
  hours: "9:00 AM – 4:00 PM (Mon–Sat)",
  builtBy: "VisibleDot",
  builtByUrl: "https://visibledot.com",
};

export const LEADERSHIP = [
  {
    name: "Deepesh Singh",
    designation: "Chairman",
    bio: "Committed to building an institution that nurtures academic brilliance, character, and compassion in every student.",
    image: "/images/director.png",
  },
  {
    name: "Mrs. Renu Vishnoi",
    designation: "Principal",
    bio: "Dedicated to fostering a vibrant learning environment where every child discovers their potential and grows into a responsible citizen.",
    image: "/images/Principal.jpeg",
  },
];

export const STREAMS = [
  {
    name: "Science Stream",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "Computer Science", "English"],
    icon: "🔬",
    description: "Rigorous foundation in STEM disciplines, preparing students for engineering, medicine, and research careers.",
  },
  {
    name: "Commerce Stream",
    subjects: ["Accountancy", "Business Studies", "Economics", "Mathematics", "Informatics Practices", "English"],
    icon: "📊",
    description: "Comprehensive commerce education developing financial acumen and entrepreneurial thinking.",
  },
  {
    name: "Humanities Stream",
    subjects: ["History", "Political Science", "Geography", "Economics", "Sociology", "English"],
    icon: "📚",
    description: "Broad-based liberal arts education cultivating critical thinking, communication, and social awareness.",
  },
];

export const STATS = [
  { value: 1000, suffix: "+", label: "Students Enrolled" },
  { value: 40, suffix: "+", label: "Staff Members" },
  { value: 3, suffix: "", label: "Academic Streams" },
  { value: 100, suffix: "%", label: "Class XII Pass Rate" },
];

export const CLASS_LEVELS = [
  { name: "Pre-Primary", range: "Nursery – KG" },
  { name: "Primary", range: "Class I – V" },
  { name: "Middle", range: "Class VI – VIII" },
  { name: "Secondary", range: "Class IX – X" },
  { name: "Sr. Secondary", range: "Class XI – XII" },
];

export const FACILITIES = [
  { name: "Smart Classrooms", icon: "🏫", description: "45 digitally-equipped classrooms with interactive panels and modern teaching tools." },
  { name: "Science Labs", icon: "🔬", description: "Well-equipped Physics, Chemistry, and Biology laboratories for hands-on learning." },
  { name: "Computer Lab", icon: "💻", description: "Modern computer lab with high-speed internet connectivity for technology education." },
  { name: "Library", icon: "📚", description: "Extensive library with thousands of books, journals, and digital resources." },
  { name: "Playground", icon: "⚽", description: "Spacious campus spread over 7,180 sq. mtr. with grounds for outdoor activities." },
  { name: "Sports Ground", icon: "🏃", description: "Dedicated sports ground for cricket, football, athletics, and more." },
  { name: "Swimming Pool", icon: "🏊", description: "On-campus swimming pool for supervised swim training and fitness." },
  { name: "Medical Room", icon: "🏥", description: "First-aid facility with trained staff for student health and wellness." },
  { name: "Transport", icon: "🚌", description: "School transport facility available on selected routes in and around Kanth and Moradabad." },
  { name: "Washrooms", icon: "🚿", description: "Separate, hygienic washroom facilities for boys and girls on every floor." },
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Principal's Message", href: "/about/principal-message" },
      { label: "Director's Message", href: "/about/director-message" },
      { label: "Leadership", href: "/about/leadership" },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    children: [
      { label: "Curriculum", href: "/academics/curriculum" },
      { label: "Methodology", href: "/academics/methodology" },
      { label: "Admission", href: "/academics/admission" },
      { label: "Uniform", href: "/academics/uniform" },
      { label: "Results", href: "/academics/results" },
    ],
  },
  {
    label: "Life at Howard",
    href: "/life-at-howard",
    children: [
      { label: "Activities", href: "/life-at-howard/activities" },
      { label: "Sports", href: "/life-at-howard/sports" },
      { label: "Arts", href: "/life-at-howard/arts" },
      { label: "Students Council", href: "/life-at-howard/council" },
      { label: "Career Counseling", href: "/life-at-howard/counseling" },
    ],
  },
  { label: "Infrastructure", href: "/infrastructure" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const ADMISSION_STEPS = [
  {
    step: "01",
    title: "Enquire",
    description: "Reach out via WhatsApp or call us to know about available seats and admission schedule.",
  },
  {
    step: "02",
    title: "Visit School",
    description: "Schedule a campus visit to meet our team, see facilities, and get a feel for the Howard environment.",
  },
  {
    step: "03",
    title: "Fill Application Form",
    description: "Collect and complete the admission application form from the school office.",
  },
  {
    step: "04",
    title: "Document Submission",
    description: "Submit all required documents including birth certificate, previous marksheets, and ID proof.",
  },
  {
    step: "05",
    title: "Confirmation & Fee Payment",
    description: "Upon verification, confirm the admission and complete the fee payment to secure your seat.",
  },
];

export const DOCUMENTS_REQUIRED = [
  "Birth Certificate (original + photocopy)",
  "Previous class Mark Sheet / Transfer Certificate",
  "Aadhar Card of student",
  "Parent / Guardian Aadhar Card",
  "Passport-size photographs (4)",
  "Character Certificate (from previous school)",
  "Caste Certificate (if applicable)",
  "Medical fitness certificate",
];

export const FAQ = [
  {
    q: "What board does Howard Convent follow?",
    a: "Howard Convent Sr. Sec. School is affiliated with the Central Board of Secondary Education (CBSE), New Delhi.",
  },
  {
    q: "What streams are offered at the senior secondary level?",
    a: "We offer three streams at the Class XI–XII level: Science (PCM/PCB), Commerce, and Humanities.",
  },
  {
    q: "When does the admission process begin?",
    a: "Admissions typically open in January–February for the next academic session starting in April. Contact us for the current year's schedule.",
  },
  {
    q: "Is transportation facility available?",
    a: "Yes, the school provides transportation facilities on selected routes in and around Kanth and Moradabad. Please contact the school office for route details.",
  },
  {
    q: "Are there any scholarships available?",
    a: "The school offers merit-based concessions for academically outstanding students. Please enquire at the school office for details.",
  },
  {
    q: "How can I contact the school for more information?",
    a: "You can call or WhatsApp us at +91 9319985501, email at howardconventschool9@gmail.com, or visit our campus between 9:00 AM – 4:00 PM.",
  },
];

export const MARQUEE_TEXT =
  "CBSE Affiliated · Affiliation No. 2132869 · Howard Convent Sr. Sec. School · Kanth, Moradabad · Excellence in Education · Science · Commerce · Humanities · Est. 2012 · ";

// All photos are of the school itself. There are no real photos yet of the
// library, science labs or sports events, so pages show the campus grounds
// and student activities instead of stock images of those.
export const IMAGES = {
  hero: "/images/campus2.png",
  about: "/images/poster-group-1.webp",
  campus1: "/images/campus1.png",
  campus2: "/images/campus2.png",
  campus3: "/images/campus3.png",
  campus5: "/images/campus5.png",
  pool: "/images/swimingpool.png",
  office: "/images/Office.png",
  sports: "/images/campus5.png",
  arts: "/images/poster-making-1.webp",
  activities: "/images/poster-exhibit.webp",
  council: "/images/student-certificate.webp",
  classroom: "/images/poster-making-3.webp",
  computerLab: "/images/computer-lab.webp",
  principal: "/images/Principal.jpeg",
  director: "/images/director.png",
  contact: "/images/Office.png",
  counseling: "/images/campus3.png",
  posterMaking2: "/images/poster-making-2.webp",
  posterGroup2: "/images/poster-group-2.webp",
  diya1: "/images/diya-decoration-1.webp",
  diya2: "/images/diya-decoration-2.webp",
};
