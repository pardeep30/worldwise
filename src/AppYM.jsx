import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  GraduationCap,
  Users,
  Award,
  Star,
  MonitorPlay,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Sun,
  Moon,
  Menu,
  X,
  Check,
  Plus,
  Minus,
  BookOpen,
  Globe,
  FileText,
  CheckCircle2,
} from "lucide-react";

// --- DATA: Tailored for School Level German ---

const featuresList = [
  {
    icon: <Globe className="w-6 h-6 text-rose-500" />,
    title: "School & Goethe Aligned",
    desc: "Curriculum perfectly mapped to CBSE/ICSE boards and official Goethe-Zertifikat exams for kids.",
  },
  {
    icon: <MonitorPlay className="w-6 h-6 text-purple-500" />,
    title: "Learning Made Fun",
    desc: "Live expert-led sessions with interactive games and activities to strengthen grammar and vocabulary.",
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-orange-500" />,
    title: "Practical Speaking Focus",
    desc: "Heavy emphasis on conversational German, ensuring your child can actually speak, not just memorize.",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-green-500" />,
    title: "Kid Friendly Materials",
    desc: "Curated kid-friendly trending stories, easy access to assignments, notes, and study materials.",
  },
  {
    icon: <FileText className="w-6 h-6 text-blue-500" />,
    title: "Progress Tracking",
    desc: "Regular revisions, assessments, and detailed feedback sessions to track individual progress every month.",
  },
  {
    icon: <Award className="w-6 h-6 text-indigo-500" />,
    title: "International Certifications",
    desc: "Make your child a certified German speaker with targeted preparation for global language diplomas.",
  },
];

const pricingPlans = [
  {
    title: "Group",
    subtitle: "96 live sessions",
    price: "2500",
    originalPrice: "3333",
    discount: "Save 25%",
    features: [
      "Format: 1:5 Sessions",
      "8 live sessions per month",
      "Experienced German Coaches, Interactive Live Sessions, Access to Learning Resources",
    ],
  },
  {
    title: "Buddy",
    subtitle: "96 live sessions",
    price: "3500",
    originalPrice: "4667",
    discount: "Save 25%",
    popular: true,
    features: [
      "Format: 1:2 Sessions",
      "8 live sessions per month",
      "Experienced German Coaches, Interactive Live Sessions, Access to Learning Resources",
    ],
  },
  {
    title: "Individual",
    subtitle: "96 live sessions",
    price: "5500",
    originalPrice: "7333",
    discount: "Save 25%",
    features: [
      "Format: 1:1 Sessions",
      "8 live sessions per month",
      "Experienced German Coaches, Interactive Live Sessions, Access to Learning Resources",
    ],
  },
];

const testimonials = [
  {
    name: "Sradhanjali Sahoo",
    location: "United States",
    text: "We have a very nice experience with YoungMinds classes. My daughter passed with distinction in grade 8 German exams. Also, her mentor is so skilled and patient.",
    color: "bg-pink-50",
  },
  {
    name: "Reagan Myers",
    location: "United States",
    text: "YoungMinds has helped my son a lot in increasing his confidence. And his teachers are patient and dedicated to their work. Now my son is good at speaking German fluently.",
    color: "bg-yellow-50",
  },
  {
    name: "Magesh S",
    location: "Canada",
    text: "We joined our son in online German classes two years before. Now he has completed up to intermediate level A2. Excellent training by the teacher. He is very friendly.",
    color: "bg-blue-50",
  },
];

const faqs = [
  {
    q: "How many topics will my child learn in the course?",
    a: "Typically, they will cover the complete syllabus required for their school grade (5-12) along with Goethe A1/A2 preparation based on their pacing.",
  },
  {
    q: "When will my child get the Goethe Certificate?",
    a: "Certifications happen after successfully passing the external Goethe-Institut exams, which we fully prepare them for by the end of the course level.",
  },
  {
    q: "Will my child be able to construct sentences on their own?",
    a: "Absolutely! Our pedagogy focuses heavily on speaking and grammar rules so they can formulate their own sentences confidently.",
  },
  {
    q: "What if my child encounters technical difficulties during a class?",
    a: "Our support team is always available via WhatsApp during class hours to immediately resolve any technical issues.",
  },
  {
    q: "What happens if my child misses a class?",
    a: "We provide complete class recordings for every session so your child can catch up easily without missing out on the syllabus.",
  },
];

// --- SUB-COMPONENTS ---

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left font-medium text-slate-800 dark:text-slate-200 hover:text-rose-600 transition-colors"
      >
        <span className="text-lg pr-4">{question}</span>
        <div className="flex-shrink-0 w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-500">
          {isOpen ? (
            <Minus className="w-4 h-4" />
          ) : (
            <Plus className="w-4 h-4" />
          )}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("OVERVIEW");
  const [pricingTab, setPricingTab] = useState("Beginner");

  const whatsappNumber = "9910130910";
  const whatsappLink = `https://wa.me/91${whatsappNumber}?text=Hi!%20I%20want%20to%20know%20more%20about%20the%20School%20Level%20German%20courses.`;

  // Handle Dark Mode & Smooth Scrolling
  useEffect(() => {
    // Enable smooth scrolling on the whole HTML document
    document.documentElement.style.scrollBehavior = "smooth";

    // Dark mode toggle logic
    if (isDark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [isDark]);

  return (
    <div className="min-h-screen font-sans text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* FLOATING WHATSAPP BUTTON (Bottom Right) */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-[#25D366]/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
      >
        <MessageCircle className="w-7 h-7" />
      </motion.a>

      {/* HEADER / NAVBAR */}
      <header className="fixed top-0 w-full z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-sm border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <a href="#" className="cursor-pointer">
                <img
                  src="https://youngminds.pro/assets/youngmindslogo-DxNqDey_.png"
                  alt="YoungMinds"
                  className="h-16 w-auto object-contain"
                />
              </a>
            </div>

            {/* Desktop Nav Links (Clicking scrolls to ID) */}
            <nav className="hidden lg:flex items-center gap-8">
              <a
                href="#introduction"
                className="text-slate-600 dark:text-slate-300 hover:text-rose-600 font-medium transition-colors"
              >
                About
              </a>
              <a
                href="#coursedetails"
                className="text-slate-600 dark:text-slate-300 hover:text-rose-600 font-medium transition-colors"
              >
                Details
              </a>
              <a
                href="#pricing"
                className="text-slate-600 dark:text-slate-300 hover:text-rose-600 font-medium transition-colors"
              >
                Pricing
              </a>
              <a
                href="#teachers"
                className="text-slate-600 dark:text-slate-300 hover:text-rose-600 font-medium transition-colors"
              >
                Teachers
              </a>
              <a
                href="#reviews"
                className="text-slate-600 dark:text-slate-300 hover:text-rose-600 font-medium transition-colors"
              >
                Reviews
              </a>
              <a
                href="#faqs"
                className="text-slate-600 dark:text-slate-300 hover:text-rose-600 font-medium transition-colors"
              >
                FAQs
              </a>
            </nav>

            {/* Right Side Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {isDark ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#25D366] text-white font-medium hover:bg-[#1ebd5c] transition-colors shadow-lg shadow-[#25D366]/30"
              >
                <MessageCircle className="w-5 h-5" />
                Connect Us
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-4">
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-full text-slate-600 dark:text-slate-300"
              >
                {isDark ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-900 dark:text-white"
              >
                {isMenuOpen ? (
                  <X className="w-7 h-7" />
                ) : (
                  <Menu className="w-7 h-7" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden absolute top-20 left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 py-6 shadow-xl overflow-hidden"
            >
              <div className="flex flex-col gap-4">
                <a
                  href="#introduction"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium text-slate-800 dark:text-slate-200 hover:text-rose-600"
                >
                  About Course
                </a>
                <a
                  href="#coursedetails"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium text-slate-800 dark:text-slate-200 hover:text-rose-600"
                >
                  Course Details
                </a>
                <a
                  href="#pricing"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium text-slate-800 dark:text-slate-200 hover:text-rose-600"
                >
                  Pricing Plans
                </a>
                <a
                  href="#teachers"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium text-slate-800 dark:text-slate-200 hover:text-rose-600"
                >
                  Meet Teachers
                </a>
                <a
                  href="#reviews"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium text-slate-800 dark:text-slate-200 hover:text-rose-600"
                >
                  Reviews
                </a>
                <a
                  href="#faqs"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium text-slate-800 dark:text-slate-200 hover:text-rose-600"
                >
                  FAQs
                </a>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-medium text-center shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Connect Us
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 1. HERO SECTION (Pastel matching image) */}
      <section className="relative w-full pt-32 pb-16 md:pt-40 md:pb-24 bg-rose-50/50 dark:bg-slate-900 transition-colors overflow-hidden">
        {/* Decorative background waves/blobs */}
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-rose-100/60 to-transparent -z-10 rounded-l-[100px] blur-3xl opacity-60"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="lg:w-[55%] flex flex-col items-start text-left z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.15] mb-6">
                Online German Classes <br /> for School Kids
              </h1>

              <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 max-w-xl font-medium">
                Play, interact, and certify your child's language journey.
                Perfect for classes 5 to 12.
              </p>

              <div className="flex flex-wrap gap-4 mb-6">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="px-8 py-4 rounded-full bg-rose-500 text-white font-semibold text-lg hover:bg-rose-600 transition-colors shadow-lg shadow-rose-500/30"
                >
                  Book a free demo
                </a>
                <a
                  href="#introduction"
                  className="px-8 py-4 rounded-full border-2 border-rose-200 text-rose-500 bg-white/50 dark:bg-slate-800/50 font-semibold text-lg hover:border-rose-300 transition-colors"
                >
                  Discover this course
                </a>
              </div>

              <div className="flex items-center gap-3 text-lg">
                <span className="text-slate-400 line-through decoration-rose-500 decoration-2">
                  ₹ 5000
                </span>
                <span className="font-bold text-slate-900 dark:text-white">
                  ₹ 0
                </span>
                <span className="text-slate-600 dark:text-slate-400">
                  for the first class
                </span>
                <span className="text-blue-500 font-semibold ml-2">
                  100% free
                </span>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:w-[45%] relative flex justify-center z-10 mt-8 lg:mt-0">
              {/* Glow Background */}
              <div className="absolute w-[300px] h-[300px] bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 blur-3xl opacity-30 rounded-full animate-pulse"></div>

              {/* Image Container */}
              <div className="relative w-72 h-72 md:w-full rounded-full overflow-hidden border-[8px] border-white shadow-[0_20px_60px_rgba(0,0,0,0.3)] bg-white group transition-all duration-500 hover:scale-105 z-50">
                <img
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800"
                  alt="Kid studying German"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
              </div>

              {/* Animated Rings */}
              <div className="absolute w-[110%] h-[110%] rounded-full border border-indigo-300 animate-[spin_20s_linear_infinite] opacity-40"></div>

              <div className="absolute w-[100%] h-[100%] rounded-full border border-purple-300 animate-[spin_30s_linear_infinite_reverse] opacity-30"></div>

              {/* Floating Badge */}
              <div className="z-50 absolute bottom-6 right-0 bg-white px-4 py-2 rounded-xl shadow-lg text-sm font-semibold text-indigo-600 animate-bounce">
                ⭐ 1000+ Students
              </div>
              <div className="z-50 absolute top-4 left-0 sm:top-6 sm:left-2 bg-white px-3 py-2 sm:px-4 rounded-xl shadow-lg flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-800 animate-bounce">
                {/* Flag */}
                <div className="w-5 h-3 sm:w-6 sm:h-4 overflow-hidden rounded-sm border">
                  <div className="h-1/3 bg-black"></div>
                  <div className="h-1/3 bg-red-600"></div>
                  <div className="h-1/3 bg-yellow-400"></div>
                </div>
                German Language
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK LINKS PILLS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-8 hidden md:block">
        <h3 className="text-xl font-bold mb-4 dark:text-white">
          Quickly go to
        </h3>
        <div className="flex flex-wrap gap-3">
          {[
            "Introduction",
            "Course details",
            "Pricing",
            "Teachers",
            "Reviews",
            "FAQs",
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              className="px-5 py-2 rounded-full border border-slate-300 text-slate-600 dark:text-slate-300 hover:border-slate-800 dark:hover:border-white transition-colors text-sm font-medium"
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* 2. ABOUT THE COURSE */}
      <section
        id="introduction"
        className="py-12 bg-slate-50 dark:bg-slate-900/50 scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 dark:border-slate-700">
            <h2 className="text-3xl font-bold mb-6 dark:text-white">
              About the course
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Our online German classes for children aged 10-17, perfectly
              aligned with school curriculum and the Goethe-Institut, are
              crafted by expert teachers to start your child's language journey.
              This course builds a robust foundation in reading, writing, and
              speaking, preparing students for both school exams and globally
              recognized grades.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Through interactive live sessions, students learn to formulate
              sentences and master grammar with engaging games. Our expert
              teachers provide personalized attention and continuous feedback,
              ensuring a fun and productive learning experience that enhances
              confidence in speaking a foreign language.
            </p>
          </div>

          {/* TOGGLE: OVERVIEW / CURRICULUM */}
          <div className="flex justify-center mt-12">
            <div className="inline-flex bg-slate-100 dark:bg-slate-800 p-1 rounded-full">
              <button
                onClick={() => setActiveTab("OVERVIEW")}
                className={`px-8 py-3 rounded-full font-bold text-sm transition-all ${activeTab === "OVERVIEW" ? "bg-white dark:bg-slate-700 text-blue-600 shadow-sm border border-slate-200 dark:border-slate-600" : "text-slate-500"}`}
              >
                OVERVIEW
              </button>
              <button
                onClick={() => setActiveTab("CURRICULUM")}
                className={`px-8 py-3 rounded-full font-bold text-sm transition-all ${activeTab === "CURRICULUM" ? "bg-white dark:bg-slate-700 text-blue-600 shadow-sm border border-slate-200 dark:border-slate-600" : "text-slate-500"}`}
              >
                CURRICULUM
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COURSE DETAILS (STATS) */}
      <section
        id="coursedetails"
        className="py-12 bg-white dark:bg-slate-950 scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 dark:text-white">
            Course Details
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl text-center shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-slate-50 dark:border-slate-700">
              <h3 className="text-4xl font-bold text-blue-900 dark:text-blue-400 mb-2">
                96
              </h3>
              <p className="font-semibold text-slate-800 dark:text-slate-200">
                Guided Sessions
              </p>
              <p className="text-sm text-slate-500">over 12 Months</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl text-center shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-slate-50 dark:border-slate-700">
              <h3 className="text-4xl font-bold text-blue-900 dark:text-blue-400 mb-2">
                03
              </h3>
              <p className="font-semibold text-slate-800 dark:text-slate-200">
                Types of Batches
              </p>
              <p className="text-sm text-slate-500">(1:1 / 1:2 / 1:5)</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl text-center shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-slate-50 dark:border-slate-700">
              <h3 className="text-4xl font-bold text-blue-900 dark:text-blue-400 mb-2">
                50+
              </h3>
              <p className="font-semibold text-slate-800 dark:text-slate-200">
                Countries
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl text-center shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-slate-50 dark:border-slate-700">
              <h3 className="text-4xl font-bold text-blue-900 dark:text-blue-400 mb-2">
                6000+
              </h3>
              <p className="font-semibold text-slate-800 dark:text-slate-200">
                Active Students
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHAT YOU WILL RECEIVE (GRID) */}
      <section className="py-16 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 dark:text-white">
            What you will receive
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
            {featuresList.map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center border border-slate-100 dark:border-slate-700">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-rose-600 dark:text-rose-400 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PRICING SECTION (Purple background as in image) */}
      <section
        id="pricing"
        className="py-20 bg-gradient-to-b from-purple-50 to-purple-100 dark:from-slate-900 dark:to-slate-800 scroll-mt-12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            Choose Your Child's Learning Style
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-10">
            Select the session format that best fits your child's individual
            learning needs
          </p>

          {/* Pricing Tabs */}
          <div className="inline-flex bg-white dark:bg-slate-700 p-1 rounded-full shadow-sm mb-12 border border-slate-200 dark:border-slate-600">
            {["Beginner", "Intermediate", "Advanced"].map((tab) => (
              <button
                key={tab}
                onClick={() => setPricingTab(tab)}
                className={`px-8 py-2.5 rounded-full font-bold text-sm transition-all ${pricingTab === tab ? "bg-rose-300/40 text-rose-700 dark:text-rose-300" : "text-slate-500 hover:text-slate-700 dark:text-slate-300"}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {pricingPlans.map((plan, idx) => (
              <div
                key={idx}
                className="relative bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-slate-100 dark:border-slate-700 flex flex-col pt-12"
              >
                {/* No Cost EMI Badge */}
                <div className="absolute top-0 right-6 bg-purple-500 text-white text-xs font-bold px-4 py-1.5 rounded-b-lg">
                  No Cost EMI**
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                  <h3 className="text-xl font-bold dark:text-white">
                    {plan.title}
                  </h3>
                </div>

                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">
                  {plan.subtitle}
                </p>

                <div className="flex items-end gap-2 mb-2">
                  <span className="text-4xl font-extrabold text-slate-900 dark:text-white">
                    ₹{plan.price}*
                  </span>
                  <span className="text-sm text-slate-500 mb-1">
                    per student/month
                    <br />
                    billed annually
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-6">
                  <span className="text-slate-400 line-through">
                    ₹{plan.originalPrice}
                  </span>
                  <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded">
                    {plan.discount}
                  </span>
                </div>

                <div className="border-t border-slate-100 dark:border-slate-700 pt-6 flex-1">
                  <p className="font-bold text-slate-800 dark:text-slate-200 mb-4">
                    What's included:
                  </p>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feat, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-sm text-slate-600 dark:text-slate-300"
                      >
                        <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className={`block text-center w-full py-3 rounded-full font-bold transition-all border ${plan.popular ? "bg-purple-500 text-white hover:bg-purple-600 border-purple-500" : "bg-white dark:bg-slate-800 text-slate-800 dark:text-white border-purple-500 hover:bg-purple-50"}`}
                >
                  Enroll Now
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 text-left bg-white/50 dark:bg-slate-800/50 rounded-2xl p-6 text-sm text-slate-600 dark:text-slate-400 space-y-2 border border-purple-100 dark:border-slate-700">
            <p>• *All listed rates are exclusive of GST.</p>
            <p>
              • **No-cost EMI options are available for select credit & debit
              cards.
            </p>
            <p>
              • The above pricing is applicable for classes scheduled between
              3:00 PM and 8:00 PM Indian Standard Time (IST). Classes outside
              these hours may incur surcharges.
            </p>
            <p className="flex items-center flex-wrap gap-1 mt-2">
              • For any queries, please contact us via WhatsApp at
              <span className="inline-flex items-center gap-1 bg-green-100 text-green-800 px-2 py-0.5 rounded font-bold">
                <MessageCircle className="w-4 h-4" /> +91-9910130910
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* 6. MEET YOUR TEACHERS */}
      <section
        id="teachers"
        className="py-20 bg-white dark:bg-slate-950 scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 dark:text-white">
            Meet your teachers
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-4xl mx-auto">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-rose-100 shrink-0 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Teacher"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Sarah is a passionate German language teacher dedicated to
                helping school students discover the joy of speaking a new
                language. She has successfully completed her Goethe C2
                certification and brings over 8 years of teaching experience.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                She guides learners of all ages to build confidence, creativity,
                and skill through structured modules. For her, language is not
                just about grammar and syntax, it is about expression,
                connection, and joy. Through teaching German, she aims to spark
                a lifelong love for learning in every student.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section id="reviews" className="py-16 overflow-hidden scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center border-y border-slate-200 dark:border-slate-800 py-6">
          <h2 className="text-2xl font-semibold tracking-[0.2em] text-slate-400 uppercase">
            • REVIEWS FROM PARENTS • REVIEWS FROM PARENTS •
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((test, idx) => (
              <div
                key={idx}
                className={`${test.color} dark:bg-slate-800 p-8 rounded-3xl relative`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-slate-900 dark:bg-slate-700 flex items-center justify-center text-white font-bold text-xl">
                    {test.name.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">
                      {test.name}
                    </h4>
                    <p className="text-xs text-slate-500 flex items-center gap-1">
                      <Globe className="w-3 h-3" /> {test.location}
                    </p>
                  </div>
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-4">
                  {test.text}
                </p>
                <button className="text-rose-500 text-sm font-semibold hover:underline">
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQS */}
      <section
        id="faqs"
        className="py-20 bg-white dark:bg-slate-950 scroll-mt-24"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 dark:text-white">FAQs</h2>
          <div className="space-y-2">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            <div className="md:col-span-4">
              <div className="mb-6">
                <img
                  src="https://youngminds.pro/assets/youngmindslogo-DxNqDey_.png"
                  alt="YoungMinds"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex gap-3 items-start">
                  <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                  <span>
                    Branch Office: Civil Tower, 121-122, Pandit TN Mishra Marg,
                    Nirman Nagar, Jaipur, Rajasthan 302019
                  </span>
                </li>
                <li className="flex gap-3 items-center">
                  <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                  <span>care@youngminds.pro</span>
                </li>
                <li className="flex gap-3 items-center">
                  <MessageCircle className="w-5 h-5 text-green-500 shrink-0" />
                  <span>+91-9910130910 (WhatsApp Only)</span>
                </li>
              </ul>
            </div>

            <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
              <div>
                <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                  <li>
                    <a
                      href="#introduction"
                      className="hover:text-blue-600 font-medium"
                    >
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="#faqs" className="hover:text-blue-600 font-medium">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-blue-600 font-medium"
                    >
                      Contact us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-600 font-medium">
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-600 font-medium">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                  <li>
                    <a href="#" className="hover:text-blue-600 font-medium">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-600 font-medium">
                      Teacher Login
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-600 font-medium">
                      Teach With YoungMinds
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-600 font-medium">
                      Student Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>
              © {new Date().getFullYear()} YoungMinds Education. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
