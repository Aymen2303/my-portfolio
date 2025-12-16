/*
Mobile Developer Portfolio - Single-file React TSX component
TailwindCSS required
*/

import type { ReactNode } from "react";

import { motion } from "framer-motion";

import daryImg from '../assets/dary_service_loading_page.png';
import healthImg from '../assets/health_project.png';
import babyTracker from '../assets/baby_tracker.png';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  repo: string;
  demo: string;
  onRepoClick?: () => void;
  imgAlt: string;
  img: string,
}

const projects: Project[] = [
  {
    id: 1,
    title: "Dary Service",
    description:
      "Android app to find handymans or jobs. Built with Kotlin, Jetpack compose, express.js backend. Hosted on Render",
    tech: ["Kotlin", "Jetpack compose", "Express.js", "PostgreSQL"],
    repo: "",
    demo: "https://drive.google.com/file/d/1sv5W7gamUM3F5ImsRtSgxb3qEgyYWMX5/view?usp=drive_link",
    onRepoClick: myAlert(),
    imgAlt: "Phone mockup - Dary Service",
    img: daryImg,
  },  
  {
    id: 2,
    title: "Vaccine tracker app for babies",
    description:
      "An android app to track babies wellbeing, vaccines growth and overall health. built with Java and xml layouts, the goal of displaying this app here is to show my experience with mobile development",
    tech: ["Java", "XML layouts", "Php", "Postman"],
    repo: "https://github.com/Aymen2303/Android_healthcareApp", 
    demo: "#",
    imgAlt: "Phone mockup - UserDetailsAppCompose",
    img: babyTracker,
     onRepoClick: myAlert(),
  },
  {
    id: 3,
    title: "Health tracker",
    description:
      "A healthcare web app, this project is confidential no details can be shared.",
    tech: [""],
    repo: "", // TODO: replace
    demo: "#",
    imgAlt: "Phone mockup - Todo & Habit Tracker",
    img: healthImg,
     onRepoClick: myAlert(),
  },
];

export default function MobileDevPortfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-100 antialiased">
      <header className="max-w-3xl mx-auto px-6 pt-10 pb-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center text-slate-900 font-bold">AL</div>
            <div>
              <h1 className="text-lg font-semibold">Aimen Lalaibia</h1>
              <p className="text-xs text-slate-400">Software Engineer | Mobile Developer — Android & Flutter</p>
            </div>
          </div>
          <a
            href="#contact"
            className="text-xs px-3 py-2 border border-slate-700 rounded-lg hover:bg-slate-700/40"
          >
            Contact
          </a>
        </nav>

        <section className="mt-6 grid grid-cols-1 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-5 bg-slate-800/60 rounded-2xl shadow-lg"
          >
            <h2 className="text-2xl font-bold">Hi, I'm Aimen — Software Engineer || Android & Flutter dev</h2>
            <p className="mt-2 text-sm text-slate-300">
              I build clean, maintainable mobile apps with great UX. I love Jetpack Compose,
              Kotlin and building practical tools used in real life.
            </p>
            <p className="mt-2 text-sm text-slate-300">
             Worked on multiple projects, from confidential projects, freelance apps to platforms for start-ups
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <Tag>Android</Tag>
              <Tag>Kotlin</Tag>
              <Tag>Jetpack Compose</Tag>
              <Tag>Flutter</Tag>
              <Tag>UI/UX</Tag>
              <Tag>Express.Js</Tag>
              <Tag>Html / CSS / Js</Tag>
              <Tag>APIs</Tag>
            </div>

            <div className="mt-5 flex gap-3">
              <a
                href="https://github.com/Aymen2303"
                className="px-4 py-2 bg-slate-700/50 rounded-lg text-xs border border-slate-700"
              >
                GitHub
              </a>
              <a
                href="https://github.com/Aymen2303?tab=repositories"
                className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-xs text-slate-900 font-semibold"
              >
                See projects
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="p-4 bg-slate-800/40 rounded-2xl"
          >
            <h3 className="text-sm text-slate-300 font-medium">Featured</h3>
            <p className="text-xs text-slate-400 mt-1">Best 3 projects — focused, polished, and ready to show.</p>
          </motion.div>
        </section>
      </header>

      <main className="max-w-3xl mx-auto px-6 pb-20">
        <section id="projects" className="mt-2 grid gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * i, duration: 0.5 }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/60 rounded-2xl p-4 shadow-lg"
            >
              <div className="flex items-start gap-4">
                <PhoneMockup>
                <img  src={p.img}  alt={p.imgAlt}  className="w-full h-full object-cover"/>
                </PhoneMockup>

                <div className="flex-1">
                  <h4 className="font-semibold">{p.title}</h4>
                  <p className="text-xs text-slate-400 mt-1">{p.description}</p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="text-[11px] px-2 py-1 bg-slate-700/30 rounded-md">{t}</span>
                    ))}
                  </div>

                  <div className="mt-4 flex gap-2">
                    {p.repo ? (
  <a
    href={p.repo}
    target="_blank"
    rel="noreferrer"
    className="text-xs px-3 py-2 border border-slate-700 rounded-lg"
  >
    View code
  </a>
) : (
  <button
    onClick={p.onRepoClick}
    className="text-xs px-3 py-2 border border-slate-700 rounded-lg"
  >
    View code
  </button>
)}

                    {p.demo ? (
  <a
    href={p.demo}
    target="_blank"
    rel="noreferrer"
    className="text-xs px-3 py-2 bg-slate-700/40 rounded-lg"
  >
    Demo
  </a>
) : (
  <button
    onClick={p.onRepoClick}
    className="text-xs px-3 py-2 bg-slate-700/40 rounded-lg"
  >
    Demo
  </button>
)}

                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </section>

        <section className="mt-8 bg-slate-800/40 p-4 rounded-2xl">
          <h3 className="font-semibold">Other notable repos</h3>
          <p className="text-xs text-slate-400 mt-1">(Some other projects I worked on)</p>
          <div className="mt-3 flex gap-2 flex-wrap">
            <SmallRepo name="Mobile apps for entreprise" link="#" />
            <SmallRepo name="Leave system manager" link="#" />
            <SmallRepo name="weather-app" link="#" />
          </div>
        </section>

        <section id="contact" className="mt-8 p-4 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/60">
          <h3 className="font-semibold">Let's build something</h3>
          <p className="text-xs text-slate-400 mt-1">Email me — I reply quickly.</p>

          <div className="mt-4 flex flex-col gap-3">
            <div className="text-xs text-slate-300">Email</div>
            <div className="p-3 bg-slate-800/30 rounded">aimenlalaibia0@gmail.com</div>

            <div className="text-xs text-slate-300">LinkedIn</div>
            <a href="https://www.linkedin.com/in/lalaibia-aimen-a2380624a/" className="p-3 bg-slate-800/30 rounded">https://www.linkedin.com/in/lalaibia-aimen-a2380624a/</a>

            <div className="mt-4 flex gap-2">
              <a href="mailto:aimenlalaibia0@gmail.com" className="flex-1 text-center py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-900 font-semibold">Email me</a>
              <a href="https://github.com/Aymen2303" className="flex-1 text-center py-2 rounded-lg border border-slate-700">GitHub</a>
            </div>
          </div>
        </section>

        <footer className="mt-8 pb-10 text-center text-xs text-slate-500">© {new Date().getFullYear()} Aimen Lalaibia — software Engineer || Mobile Developer</footer>
      </main>
    </div>
  );
}

// Types for props
interface TagProps { children: ReactNode; }
function Tag({ children }: TagProps) {
  return <span className="text-[11px] px-2 py-1 bg-slate-700/30 rounded-md">{children}</span>;
}

interface SmallRepoProps { name: string; link?: string; }
function SmallRepo({ name, link = "#" }: SmallRepoProps) {
  return (
    <a
      href={link}
      className="px-3 py-2 rounded bg-slate-800/30 text-xs border border-slate-700"
      target="_blank"
      rel="noreferrer"
    >
      {name}
    </a>
  );
}

interface PhoneMockupProps { children: ReactNode; }
function PhoneMockup({ children }: PhoneMockupProps) {
  return (
    <div className="w-24 sm:w-28 h-52 rounded-xl bg-black/80 p-2 shadow-inner flex items-center justify-center">
      <div className="w-full h-full bg-gradient-to-b from-slate-900 to-slate-700 rounded-lg overflow-hidden flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

//Functions
function myAlert() {
  return () => {
    alert("Since this project is confidential, the code repository is not available.");
  };
}
