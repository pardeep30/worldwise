import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  MessageCircle,
  GraduationCap,
  Users,
  Globe,
  Award,
  CheckCircle2,
  Star,
  MonitorPlay,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Linkedin,
  ChevronRight,
  Sun,
  Moon,
  Menu,
  X,
  Map,
  School,
  Sparkles,
} from "lucide-react";

// --- DATA ---
const courses = [
  {
    level: "Pre A1",
    title: "Beginners Starter",
    duration: "2 Months",
    learn: "Basic greetings, alphabets, numbers, and simple daily vocabulary.",
    outcome: "Can introduce oneself and understand very basic phrases.",
    color: "from-blue-100 to-blue-50 dark:from-blue-900/40 dark:to-blue-800/20",
    border: "border-blue-200 dark:border-blue-800",
    badge: "For Kids",
  },
  {
    level: "A1",
    title: "Foundation",
    duration: "3 Months",
    learn: "Everyday expressions, formulating simple sentences, basic grammar.",
    outcome: "Can interact in a simple way if the other person talks slowly.",
    color:
      "from-indigo-100 to-indigo-50 dark:from-indigo-900/40 dark:to-indigo-800/20",
    border: "border-indigo-200 dark:border-indigo-800",
    badge: "Most Popular",
  },
  {
    level: "A2",
    title: "Elementary",
    duration: "3 Months",
    learn: "Routine tasks, past tense, describing background and environment.",
    outcome: "Can communicate in simple and routine tasks.",
    color:
      "from-violet-100 to-violet-50 dark:from-violet-900/40 dark:to-violet-800/20",
    border: "border-violet-200 dark:border-violet-800",
    badge: "Intermediate",
  },
  {
    level: "B1",
    title: "Intermediate",
    duration: "4 Months",
    learn: "Complex grammar, expressing dreams, hopes, and opinions.",
    outcome: "Can deal with most situations while traveling in a German area.",
    color:
      "from-purple-100 to-purple-50 dark:from-purple-900/40 dark:to-purple-800/20",
    border: "border-purple-200 dark:border-purple-800",
    badge: "Advanced",
  },
];

const prepSteps = [
  {
    step: "01",
    title: "Assessment & Batch Allotment",
    desc: "We evaluate the student's current level (if any) or start from scratch for beginners.",
  },
  {
    step: "02",
    title: "Live Interactive Classes",
    desc: "Weekly sessions focusing on speaking, listening, reading, and writing modules.",
  },
  {
    step: "03",
    title: "Mock Tests & Evaluation",
    desc: "Regular chapter-wise tests and full-length Goethe/School pattern mock exams.",
  },
  {
    step: "04",
    title: "Certification & Results",
    desc: "Clear your school exams with top grades or achieve your official Goethe-Zertifikat.",
  },
];

const features = [
  {
    icon: (
      <MessageCircle className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
    ),
    title: "Speaking Sessions",
    desc: "Weekly interactive conversation classes to build fluency.",
  },
  {
    icon: (
      <MonitorPlay className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
    ),
    title: "Interactive Tools",
    desc: "Gamified learning and modern practice tools for kids.",
  },
  {
    icon: <Award className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
    title: "Exam Preparation",
    desc: "Targeted prep for Goethe-Zertifikat and school exams.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
    title: "AI-Assisted Practice",
    desc: "Smart pronunciation and vocabulary reinforcement.",
  },
];

const testimonials = [
  {
    name: "Aarav S.",
    role: "Class 8 Student",
    review:
      "The classes are so fun! I love the interactive games. I can now speak basic German with my friends.",
    rating: 5,
  },
  {
    name: "Priya M.",
    role: "Parent",
    review:
      "Enrolling my daughter was the best decision. The structured curriculum and regular feedback are exceptional.",
    rating: 5,
  },
  {
    name: "Rohan K.",
    role: "B1 Student",
    review:
      "Cleared my Goethe A2 easily thanks to the rigorous exam prep and speaking practice sessions.",
    rating: 5,
  },
];

// --- ANIMATION VARIANTS ---
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const whatsappNumber = "9910130910";
  const whatsappLink = `https://wa.me/91${whatsappNumber}?text=Hi!%20I%20want%20to%20know%20more%20about%20the%20German%20courses.`;

  // Handle Dark Mode Toggle
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="min-h-screen font-sans text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 overflow-x-hidden transition-colors duration-300 selection:bg-indigo-200 selection:text-indigo-900 dark:selection:bg-indigo-900 dark:selection:text-indigo-100">
      {/* HEADER / NAVBAR */}
      <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md  dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img
                src="https://youngminds.pro/assets/youngmindslogo-DxNqDey_.png"
                alt="ymlogo"
                className="w-32 py-4"
              />
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="#about"
                className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
              >
                About
              </a>
              <a
                href="#courses"
                className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
              >
                Courses
              </a>
              <a
                href="#school"
                className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
              >
                School
              </a>
              <a
                href="#teachers"
                className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
              >
                Teachers
              </a>
            </nav>

            {/* Right Side: Dark Mode + CTA */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                aria-label="Toggle Dark Mode"
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
                className="px-5 py-2.5 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
              >
                Contact Us
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
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
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 py-6 flex flex-col gap-4 shadow-xl">
            <a
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-medium text-slate-800 dark:text-slate-200"
            >
              About Us
            </a>
            <a
              href="#courses"
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-medium text-slate-800 dark:text-slate-200"
            >
              Courses
            </a>
            <a
              href="#school"
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-medium text-slate-800 dark:text-slate-200"
            >
              School Kids
            </a>
            <a
              href="#teachers"
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-medium text-slate-800 dark:text-slate-200"
            >
              Teachers
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="mt-4 px-5 py-3 rounded-full bg-indigo-600 text-white font-medium text-center"
            >
              Contact Us
            </a>
          </div>
        )}
      </header>

      {/* FLOATING WHATSAPP BUTTON */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(34,197,94,0.4)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
      >
        <MessageCircle className="w-7 h-7" />
      </motion.a>

      {/* 1. HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-indigo-100 via-purple-100 to-white dark:from-indigo-950 dark:via-slate-950 dark:to-slate-950 transition-colors duration-300 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute top-[10%] left-[10%] w-[400px] h-[400px] rounded-full bg-white/40 dark:bg-indigo-900/20 blur-[80px] -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur shadow-sm border border-slate-200 dark:border-slate-700 mb-8"
          >
            <span className="flex h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Admissions Open for 2026 Batch
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight"
          >
            Master German from <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">
              School Level to B1
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10"
          >
            Empower your child's future with YoungMinds. Interactive online and
            offline German coaching designed specifically for school students
            and beginners.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto z-10"
          >
            <button className="px-8 py-4 rounded-full bg-slate-900 dark:bg-indigo-600 text-white font-semibold text-lg hover:bg-indigo-700 dark:hover:bg-indigo-500 hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 flex items-center justify-center gap-2 group">
              Start Learning{" "}
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-full bg-white dark:bg-slate-800 text-slate-800 dark:text-white font-semibold text-lg border border-slate-200 dark:border-slate-700 hover:border-green-500 dark:hover:border-green-500 hover:text-green-600 dark:hover:text-green-400 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" /> Connect on WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 pt-8 border-t border-slate-200 dark:border-slate-800 w-full max-w-3xl opacity-90"
          >
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium">
              <Users className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              <span>1000+ Students</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium">
              <Award className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              <span>Goethe Certified Teachers</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium">
              <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
              <span>4.9/5 Rating</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. ABOUT / WHY YOUNGMINDS */}
      <section
        id="about"
        className="py-20 bg-white dark:bg-slate-950 transition-colors"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Why YoungMinds?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              We make learning German natural, engaging, and effective for young
              learners through a structured and interactive approach.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Structured Curriculum",
                desc: "Step-by-step learning mapped to European Framework (CEFR) standards.",
                icon: <BookOpen className="w-8 h-8" />,
              },
              {
                title: "Small Batch Size",
                desc: "Maximum 10 students per batch ensures personalized attention for everyone.",
                icon: <Users className="w-8 h-8" />,
              },
              {
                title: "Interactive Pedagogy",
                desc: "No boring lectures. We use games, role-plays, and multimedia tools.",
                icon: <MonitorPlay className="w-8 h-8" />,
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:shadow-xl dark:hover:shadow-indigo-900/20 hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. COURSES / LEVELS */}
      <section
        id="courses"
        className="py-24 bg-slate-900 text-white relative overflow-hidden transition-colors"
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-16 md:flex justify-between items-end"
          >
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Our Structured <span className="text-indigo-400">Levels</span>
              </h2>
              <p className="text-slate-400 text-lg">
                From zero knowledge to independent conversation. Pick the level
                that suits your child's current proficiency.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {courses.map((course, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="bg-slate-800 dark:bg-slate-800/80 rounded-3xl p-6 border border-slate-700 hover:border-indigo-500 transition-all duration-300 relative overflow-hidden group"
              >
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${course.color} opacity-10 rounded-bl-full group-hover:scale-125 transition-transform`}
                />
                <div className="flex justify-between items-start mb-6">
                  <span className="text-3xl font-black text-white">
                    {course.level}
                  </span>
                  <span className="text-xs font-semibold px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full">
                    {course.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <div className="text-sm text-slate-400 mb-6 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />{" "}
                  Duration: {course.duration}
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-300 mb-1">
                      What you'll learn:
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {course.learn}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-300 mb-1">
                      Outcome:
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {course.outcome}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. ONLINE + OFFLINE CLASSES (Learn Anywhere) */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                Learn anywhere, anytime. <br />
                <span className="text-indigo-600 dark:text-indigo-400">
                  Online & Offline.
                </span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                Whether you prefer the energy of a physical classroom or the
                comfort of your home, we have flexible options for every
                student.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-white dark:bg-slate-800 shadow-sm rounded-xl text-indigo-600 dark:text-indigo-400 mt-1">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                      Live Online Interactive Classes
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      High-quality virtual classrooms with interactive
                      whiteboards and breakout rooms for speaking practice.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-white dark:bg-slate-800 shadow-sm rounded-xl text-indigo-600 dark:text-indigo-400 mt-1">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                      Offline Coaching Center
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      State-of-the-art learning center with an immersive German
                      environment. (Available in select cities)
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-white dark:bg-slate-800 shadow-sm rounded-xl text-indigo-600 dark:text-indigo-400 mt-1">
                    <MonitorPlay className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                      Access to Recordings
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      Never miss a class. All online sessions are recorded and
                      available for revision.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl dark:shadow-none dark:border dark:border-slate-700"
            >
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Students learning"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-8">
                <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur px-6 py-4 rounded-2xl shadow-lg inline-flex items-center gap-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <p className="font-semibold text-slate-900 dark:text-white">
                    Flexible Evening & Weekend Batches
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. SCHOOL CURRICULUM FOCUS */}
      <section
        id="school"
        className="py-20 bg-white dark:bg-slate-950 transition-colors"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-indigo-50 dark:bg-slate-900 border border-indigo-100 dark:border-slate-800 rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row items-center gap-12"
          >
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 font-semibold text-sm mb-6">
                <School className="w-4 h-4" /> Classes 5th to 12th
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                Perfect Alignment with{" "}
                <span className="text-indigo-600 dark:text-indigo-400">
                  School Curriculum
                </span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg mb-6 leading-relaxed">
                We understand that school students need to balance language
                learning with their regular academics. Our syllabus perfectly
                mirrors CBSE, ICSE, and IB boards for German.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                  <span>
                    <strong>Homework Assistance:</strong> Dedicated doubt
                    sessions for school assignments.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                  <span>
                    <strong>Exam Focused:</strong> Targeted practice for
                    mid-terms and finals.
                  </span>
                </li>
              </ul>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
              >
                Enquire for School Batches <ChevronRight className="w-5 h-5" />
              </a>
            </div>
            <div className="lg:w-1/2 relative">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="School Students Learning"
                className="rounded-2xl shadow-xl w-full object-cover aspect-video"
              />
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700">
                <p className="font-bold text-slate-900 dark:text-white text-lg">
                  98%
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Average Score in Exams
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. HOW TO PREPARE ROADMAP */}
      <section
        id="prepare"
        className="py-20 bg-slate-50 dark:bg-slate-900/50 transition-colors"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              How to Prepare with Us
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              A proven roadmap to take you from absolute beginner to confident
              German speaker.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {prepSteps.map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="relative bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="text-5xl font-black text-indigo-100 dark:text-indigo-900/40 absolute top-4 right-6 pointer-events-none">
                  {item.step}
                </div>
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mb-6 relative z-10">
                  <Map className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 relative z-10">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 relative z-10">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TEACHER SECTION */}
      <section
        id="teachers"
        className="py-20 bg-white dark:bg-slate-950 transition-colors"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-slate-900 dark:to-slate-900 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center border border-indigo-100 dark:border-slate-800 shadow-sm"
          >
            <div className="w-full md:w-1/3 relative">
              <div className="absolute inset-0 bg-indigo-200 dark:bg-indigo-900 rounded-3xl translate-x-4 translate-y-4" />
              <img
                src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Lead Teacher"
                className="relative rounded-3xl w-full h-auto object-cover shadow-lg border-4 border-white dark:border-slate-800"
              />
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl flex items-center gap-3">
                <Award className="w-8 h-8 text-yellow-500" />
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                    Certified
                  </p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    C2 Level Goethe
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-2/3 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 font-semibold text-sm">
                <GraduationCap className="w-4 h-4" /> Meet Your Mentor
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">
                Sarah Müller
              </h2>
              <p className="text-xl text-indigo-600 dark:text-indigo-400 font-medium">
                Head of Academics • 8+ Years Experience
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                "Learning a language shouldn't be about memorizing grammar
                rules. It's about culture, connection, and confidence. My
                teaching style focuses heavily on speaking from day one,
                ensuring students don't just pass exams, but actually use German
                in real life."
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-green-500" /> Taught
                  500+ Kids
                </li>
                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-green-500" /> Master's
                  in German Lit.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Loved by Students & Parents
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our YoungMinds family
              has to say.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((test, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm relative"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-slate-700 dark:text-slate-300 italic mb-6">
                  "{test.review}"
                </p>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">
                    {test.name}
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {test.role}
                  </p>
                </div>
                <div className="absolute top-8 right-8 text-8xl text-slate-200 dark:text-slate-700 font-serif leading-none opacity-50">
                  "
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 9. CALL TO ACTION */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-700 dark:from-indigo-900 dark:to-violet-900 z-0" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to start the German journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-indigo-100 mb-10"
          >
            Book a free counseling session today and find the perfect batch for
            your child.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-full bg-white text-indigo-600 font-bold text-lg hover:bg-slate-50 hover:scale-105 transition-all duration-300 shadow-xl shadow-indigo-900/20 text-center"
            >
              Join Now
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-full bg-green-500 text-white font-bold text-lg hover:bg-green-600 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl shadow-indigo-900/20"
            >
              <MessageCircle className="w-6 h-6" /> WhatsApp Us
            </a>
          </motion.div>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 border-b border-slate-800 pb-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight flex items-center gap-2">
                <Globe className="w-6 h-6 text-indigo-500" /> YoungMinds
              </h3>
              <p className="mb-6 max-w-sm">
                Premium German language coaching institute for school students
                and beginners.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="hover:text-indigo-400 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#courses"
                    className="hover:text-indigo-400 transition-colors"
                  >
                    Courses & Levels
                  </a>
                </li>
                <li>
                  <a
                    href="#school"
                    className="hover:text-indigo-400 transition-colors"
                  >
                    School Batches
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-indigo-500" />
                  <span>+91 {whatsappNumber}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-indigo-500" />
                  <span>care@youngminds.pro</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>
              © {new Date().getFullYear()} YoungMinds German Coaching. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
