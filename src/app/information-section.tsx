"use client";
import { Typography } from "@material-tailwind/react";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  FireIcon,
} from "@heroicons/react/24/solid";

import InfoCard from "@/components/info-card";

const WORKEXPERIENCE = [
  {
    icon: AcademicCapIcon,
    title: "DevOps Engineer",
    date: "2023 - Present",
    children:
      "This comprehensive program covered HTML5, CSS3, JavaScript, responsive design, server-side scripting, and web security.",
  },
  {
    icon: AcademicCapIcon,
    title: "QA Automation Engineer",
    date: "2022 - 2023",
    children:
      "This certification demonstrates advanced proficiency in JavaScript programming, including ES6 features and practical applications.",
  },
  {
    icon: AcademicCapIcon,
    title: "Manual QA Engineer",
    date: "2021 - 2023",
    children:
      "The Responsive Web Design certification signifies competence in designing and developing websites that adapt seamlessly to various screen sizes and devices.",
  },
  {
    icon: AcademicCapIcon,
    title: "Technical Writer",
    date: "2023 - Present",
    children:
      "Relevant Coursework: Data Structures, Algorithms, Web Development, Software Engineering, Database Management.",
  },
];

const EXPERIENCE = [
  {
    icon: BriefcaseIcon,
    title: "Freelancer Web Developer",
    date: "2023 - PRESENT",
    children:
      "The core of my work involved actual web development. I would write code, design layouts, and create functionality based on the projects specifications.",
  },
  {
    icon: BriefcaseIcon,
    title: "Technical Team Lead",
    date: "2021 - 2023",
    children:
      "I provided strong leadership by overseeing and guiding a team of highly skilled technical professionals.",
  },
  {
    icon: BriefcaseIcon,
    title: "Senior Web Developer",
    date: "2017 - 2021",
    children:
      "Revamped the automated test framework for web services, resulting in a remarkable 90% reduction in debugging and issue resolution time.",
  },
  {
    icon: BriefcaseIcon,
    title: "Junior Web Developer",
    date: "2015 - 2017",
    children:
      "Developed 10+ responsive websites for clients in a variety of industries.",
  },
];


const WRITING = [
  {
    icon: BriefcaseIcon,
    title: "How To Quantum Proof Your App",
    date: "2024",
    //link:
    children:
      "The core of my work involved actual web development. I would write code, design layouts, and create functionality based on the projects specifications.",
  },
  {
    icon: BriefcaseIcon,
    title: "Cloud Load Testing",
    date: "2023",
    //link:
    children:
      "The core of my work involved actual web development. I would write code, design layouts, and create functionality based on the projects specifications.",
  },
  {
    icon: BriefcaseIcon,
    title: "Test Environment Management",
    date: "2023 - PRESENT",
    //link:
    children:
      "The core of my work involved actual web development. I would write code, design layouts, and create functionality based on the projects specifications.",
  },

];

const PROJECTS = [
  {
    icon: FireIcon,
    title: "BIP39 JavaScript Implementation",
    date: "WEB3",
    children:
      "A JavaScript implementation of a cryptocurrency wallet generator for Bitcoin and Ethereum.",
  },
  {
    icon: FireIcon,
    title: "A Smart-Contract Project",
    date: "WEB3",
    children:
      "A ZK-Proof validator smart-contract.",
  },
  {
    icon: FireIcon,
    title: "A ZK-Proof Project",
    date: "WEB3 / ALGORITHMS",
    children:
      "Meticulous attention to detail in code quality, user interface design, and testing to ensure error-free and user-friendly web applications.",
  },
  {
    icon: FireIcon,
    title: "A Quantum Proof App",
    date: "BACKEND / ALGORITHMS",
    children:
      "A  quantum proof app. I wrote an entire article about this particular project (see below)",
  },
  {
    icon: FireIcon,
    title: "A Python Scraper",
    date: "AUTOMATION",
    children:
      "A script that scrapes the value of the LBP against the USD at the shadow market rate, then stores it in a DB.",
  },
  {
    icon: FireIcon,
    title: "Game of Life",
    date: "ALGORITHMS",
    children:
      "Conway’s Game of Life cellular automata simulation in JavaScript.",
  },
  {
    icon: FireIcon,
    title: "Game of Life On Steroids",
    date: "ALGORITHMS",
    children:
      "Slightly more complex version of the former.",
  },
  {
    icon: FireIcon,
    title: "Automated Testing Framework",
    date: "QA / AUTOMATION",
    children:
      "A suite of automated tests for an E-Bank using Selenium and TestNG.",
  },
  {
    icon: FireIcon,
    title: "A Company Site",
    date: "FRONTEND",
    children:
      "Excellent time management skills to meet project deadlines, prioritize tasks effectively, and handle multiple projects simultaneously.",
  },
];

export function InformationSection() {
  return (
    <section className="pb-28 px-8">
      <div className="grid xl:grid-cols-2 md:grid-cols-1 container gap-20 mx-auto items-start">
        <div>
          <div className="mb-10">
            <Typography color="blue-gray" className="mb-2 text-3xl font-bold">
              Work Experience
            </Typography>
            {/* <Typography variant="lead" className="!text-gray-500">
              See my education history.
            </Typography> */}
          </div>
          <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-12">
            {WORKEXPERIENCE.map((props, idx) => (
              <InfoCard key={idx} {...props} />
            ))}
          </div>
        </div>
        {/* <div>
          <div className="mb-10">
            <Typography color="blue-gray" className="mb-2 text-3xl font-bold">
              Experience
            </Typography>
            <Typography variant="lead" className="!text-gray-500">
              See my experience as a developer.
            </Typography>
          </div>
          <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-12">
            {EXPERIENCE.map((props, idx) => (
              <InfoCard key={idx} {...props} />
            ))}
          </div>
        </div> */}
      </div>
      <div className="container gap-20 mt-36 mx-auto items-center">
        <div>
          <div className="mb-10">
            <Typography color="blue-gray" className="mb-2 text-3xl font-bold">
              Projects
            </Typography>
            <Typography variant="lead" className="!text-gray-500">
              Personal and freelance projects.
            </Typography>
          </div>
          <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-12 lg:grid-cols-2">
            {PROJECTS.map((props, idx) => (
              <InfoCard key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>

      <div className="container gap-20 mt-36 mx-auto items-center">
        <div>
          <div className="mb-10">
            <Typography color="blue-gray" className="mb-2 text-3xl font-bold">
              Writing
            </Typography>
            <Typography variant="lead" className="!text-gray-500">
              A collection of thoughts, articles, and documentation.
            </Typography>
          </div>
          <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-12 lg:grid-cols-2">
            {WRITING.map((props, idx) => (
              <InfoCard key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default InformationSection;
