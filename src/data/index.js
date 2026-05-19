// ── NAV ──────────────────────────────────────────────────────────────────────
export const navItems = [
  {
    label: "Academics",
    children: [
      { icon: "🎓", title: "Schools & Departments", desc: "28 schools across disciplines" },
      { icon: "📋", title: "Programs Offered", desc: "UG, PG, PhD & Dual Degrees" },
      { icon: "🔬", title: "Research & Innovation", desc: "Cutting-edge research centers" },
      { icon: "🌐", title: "Online Learning", desc: "Flexible learning modes" },
    ],
  },
  {
    label: "Admissions",
    children: [
      { icon: "📝", title: "Apply Now", desc: "Online application portal" },
      { icon: "📅", title: "Important Dates", desc: "Deadlines and schedules" },
      { icon: "💰", title: "Scholarships", desc: "Merit and need-based aid" },
      { icon: "🏠", title: "Student Services", desc: "Housing, health and more" },
    ],
  },
  {
    label: "Research",
    children: [
      { icon: "🧪", title: "Research Centers", desc: "Specialized institutes" },
      { icon: "📰", title: "Publications", desc: "Journals and proceedings" },
      { icon: "🤝", title: "Industry Partners", desc: "Corporate collaborations" },
      { icon: "🏆", title: "Patents & IP", desc: "Innovation portfolio" },
    ],
  },
  {
    label: "Campus",
    children: [
      { icon: "🏟️", title: "Campus Facilities", desc: "World-class infrastructure" },
      { icon: "🎭", title: "Student Clubs", desc: "150+ clubs and societies" },
      { icon: "🏋️", title: "Sports & Wellness", desc: "Athletics and recreation" },
      { icon: "🍽️", title: "Dining & Housing", desc: "On-campus living" },
    ],
  },
];

// ── RANKINGS ─────────────────────────────────────────────────────────────────
export const rankings = [
  { rank: "17", suffix: "th", label: "Overall India", source: "NIRF 2025", badge: "NIRF" },
  { rank: "#1", suffix: "", label: "Innovation – ARIIA", source: "ARIIA 2024", badge: "Top Rank" },
  { rank: "A+", suffix: "", label: "NAAC Accreditation", source: "NAAC 2023", badge: "Accredited" },
  { rank: "QS ★★★★★", suffix: "", label: "First in India", source: "QS 5 Stars", badge: "Global" },
];

// ── STATS ────────────────────────────────────────────────────────────────────
export const statsData = [
  { num: "32K", plus: true, label: "Students Enrolled" },
  { num: "28", plus: false, label: "Schools & Departments" },
  { num: "400", plus: true, label: "Faculty Members" },
  { num: "150", plus: true, label: "Research Projects" },
  { num: "90", plus: false, label: "% Placement Rate" },
];

// ── ACADEMICS ────────────────────────────────────────────────────────────────
export const academics = [
  {
    icon: "⚙️",
    title: "Engineering & Technology",
    desc: "World-class programs in CS, ECE, Mechanical, Civil and 15 more specializations with industry-integrated curriculum.",
    programs: "18",
    faculty: "120+",
  },
  {
    icon: "🏛️",
    title: "Management & Commerce",
    desc: "MBA, BBA, and specialized management programs with strong industry connections and global exposure opportunities.",
    programs: "8",
    faculty: "60+",
  },
  {
    icon: "⚕️",
    title: "Health Sciences",
    desc: "MBBS, BDS, Pharmacy, Nursing and allied health programs backed by KIMS, a 1000-bed teaching hospital.",
    programs: "12",
    faculty: "200+",
  },
  {
    icon: "🔬",
    title: "Science & Research",
    desc: "Cutting-edge undergraduate and postgraduate programs in Physics, Chemistry, Math, Biotech and Biotechnology.",
    programs: "10",
    faculty: "80+",
  },
  {
    icon: "⚖️",
    title: "Law & Humanities",
    desc: "KIIT School of Law is ranked among top law schools in India. Programs in humanities and social sciences.",
    programs: "6",
    faculty: "50+",
  },
  {
    icon: "🎨",
    title: "Design & Architecture",
    desc: "Creative programs in Architecture, Fashion, Film and Communication with state-of-the-art studio spaces.",
    programs: "5",
    faculty: "40+",
  },
];

// ── CAMPUS ───────────────────────────────────────────────────────────────────
export const campusItems = [
  {
    emoji: "🏙️",
    tag: "Campus Life",
    title: "A Self-Sufficient University Town",
    desc: "Over 25 sq km campus with academic blocks, student residences, hospitals, shopping, and recreation—all in one place.",
  },
  {
    emoji: "🤖",
    tag: "Innovation Hub",
    title: "Research & Startup Ecosystem",
    desc: "TBI, 40+ labs, and startup support programs have produced 100+ ventures.",
  },
  {
    emoji: "🏅",
    tag: "Sports",
    title: "Elite Athletic Facilities",
    desc: "Olympic-standard stadium, swimming pool, and courts for 30+ sports.",
  },
  {
    emoji: "🎭",
    tag: "Culture",
    title: "Arts & Cultural Hub",
    desc: "150+ clubs, annual festivals, and a 10,000-seat auditorium.",
  },
  {
    emoji: "🌍",
    tag: "Global",
    title: "International Exposure",
    desc: "Tie-ups with 40+ universities across 20 countries.",
  },
];

// ── ADMISSIONS ───────────────────────────────────────────────────────────────
export const deadlines = [
  { name: "KIIT-EE Engineering 2025", date: "Mar 31, 2025", tag: "Closing Soon" },
  { name: "MBA Admissions", date: "Apr 15, 2025", tag: "Open" },
  { name: "PhD Spring Intake", date: "Apr 30, 2025", tag: "Open" },
  { name: "International Students", date: "May 15, 2025", tag: "Rolling" },
];

export const admissionSteps = [
  { title: "Register & Apply", desc: "Fill the online application form at kiit.ac.in" },
  { title: "KIIT-EE / Direct Admission", desc: "Appear for entrance or apply through board merit" },
  { title: "Merit List & Counselling", desc: "Check results and attend online counselling" },
  { title: "Fee Payment & Joining", desc: "Confirm seat and complete enrolment formalities" },
];

// ── NEWS ─────────────────────────────────────────────────────────────────────
export const news = [
  {
    emoji: "🏆",
    tag: "Achievement",
    category: "Rankings",
    date: "Dec 18, 2024",
    title: "KIIT Ranked 17th Overall by NIRF 2025 Among All Universities",
    excerpt:
      "KIIT University has secured a significant position in the National Institutional Ranking Framework, cementing its status as a premier institution in India.",
  },
  {
    emoji: "🌐",
    tag: "Partnership",
    category: "Global",
    date: "Dec 10, 2024",
    title: "New MoU Signed with MIT for Research Collaboration",
  },
  {
    emoji: "💡",
    tag: "Innovation",
    category: "Startup",
    date: "Dec 5, 2024",
    title: "KIIT Student Startup Secures $2M Seed Funding in CleanTech",
  },
];

// ── FOOTER ───────────────────────────────────────────────────────────────────
export const footerLinks = {
  Academics: ["Schools & Departments", "Academic Calendar", "Examination", "Library", "E-Learning Portal"],
  Admissions: ["Apply Online", "Eligibility", "Scholarships", "Fee Structure", "Hostel"],
  Research: ["Research Centers", "Publications", "Patents", "KIIT-TBI", "Industry Partnership"],
  Campus: ["Infrastructure", "Sports", "Clubs & Societies", "Medical", "Campus Map"],
};

// ── CHATBOT ──────────────────────────────────────────────────────────────────
export const botMessages = [
  { from: "bot", text: "👋 Hi! I'm KIIT Assistant. How can I help you today?", time: "Just now" },
];

export const chipSuggestions = ["Admissions 2025", "Placement stats", "Fee structure", "Campus facilities"];

export const botReplies = {
  "admissions 2025":
    "Applications for 2025–26 are open! You can apply through kiit.ac.in. The KIIT-EE entrance exam is the primary mode. Deadline for Engineering is March 31, 2025.",
  "placement stats":
    "KIIT has an impressive placement record — 90%+ students placed, with a highest package of ₹44 LPA. Over 500 companies recruit from campus every year.",
  "fee structure":
    "Fees vary by program. Engineering B.Tech starts at approx. ₹3.5 lakhs/year. You can find the detailed fee structure on the admissions portal.",
  "campus facilities":
    "KIIT has a 25 sq km campus with hostels, hospitals, sports complex, 150+ student clubs, shopping zones, and much more — a complete university township!",
};
