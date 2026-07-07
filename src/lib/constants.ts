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

export const UNSPLASH_IMAGES = {
  hero: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&h=1080&fit=crop",
  about: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&h=700&fit=crop",
  campus1: "/images/campus1.png",
  campus2: "/images/campus2.png",
  campus3: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500&h=400&fit=crop",
  campus4: "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?w=500&h=400&fit=crop",
  campus5: "/images/campus5.png",
  pool: "/images/swimingpool.png",
  library: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=450&fit=crop",
  sports: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=900&h=600&fit=crop",
  arts: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?w=900&h=600&fit=crop",
  activities: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&h=600&fit=crop",
  council: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&h=600&fit=crop",
  classroom: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop",
  lab: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=450&fit=crop",
  playground: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=450&fit=crop",
  principal: "/images/Principal.jpeg",
  director: "/images/director.png",
  contact: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&h=600&fit=crop",
  counseling: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=900&h=600&fit=crop",
  gallery1: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&h=500&fit=crop",
  gallery2: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&h=400&fit=crop",
  gallery3: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=700&fit=crop",
  gallery4: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=450&fit=crop",
  gallery5: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=500&fit=crop",
  gallery6: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=600&h=400&fit=crop",
  gallery7: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?w=600&h=600&fit=crop",
  gallery8: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=450&fit=crop",
};
