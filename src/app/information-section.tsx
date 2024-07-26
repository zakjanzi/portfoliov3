"use client";
import { Typography } from "@material-tailwind/react";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  FireIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

import InfoCard from "@/components/info-card";

const WORKEXPERIENCE = [
  {
    // icon: AcademicCapIcon,
    title: "SysOps Engineer",
    date: "2023 - Present",
    company: "Lebanese Alternative Learning",
    children: [],
    description: [
      "Implemented and maintained security measures while continuously monitoring server health.", "Managed deployments across various physical and virtual environments", "Kept etailed documentation on all technical procedures and guides for all stakeholders.", "Contributed to open-source projects (Moodle) " 
    ],
     imageSrc:"/image/lal.png"
  },
  {
    // icon: AcademicCapIcon,
    title: "QA Automation Engineer",
    date: "2022 - 2023",
    company: "Tylleum - (Contract)",
    children: [],
    description: [
      "Produced and executed automated end-to-end tests for a Web3 wallet app. ", "Analyzed software requirements to create high-coverage test cases" , "Maintained thorough records of test cases, results, and scripts."
    ],
    imageSrc:"/image/tylleum.jpg"
  },
  {
    // icon: AcademicCapIcon,
    title: "Manual QA Engineer",
    date: "2021 - 2023",
    company: "One More Multiverse",
    children: [],
    description: [
      "Designed, developed and executed comprehensive, well-structured test plans and test cases to ensure software quality.", "•	Recorded, documented and triaged software bugs thoroughly", "Coordinated with product owners for testing plans and feature releases."
    ],
    imageSrc:"/image/multiverse.jpg"
  },
  {
    // icon: AcademicCapIcon,
    title: "Technical Writer",
    date: "2023 - Present",
    company: "Inbound Square (Contract)",
    children: [],
    description: [
      "Wrote technical articles covering topics related to SaaS/PaaS tools. Examples available below.",
    ]
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
    date: "#WEB3",
    children:
      "A JavaScript implementation of a cryptocurrency wallet generator for Bitcoin and Ethereum.",
  },
  // {
  //   icon: FireIcon,
  //   title: "A Smart-Contract Project",
  //   date: "#WEB3",
  //   children:
  //     "A ZK-Proof validator smart-contract.",
  // },
  // {
  //   icon: FireIcon,
  //   title: "A ZK-Proof Project",
  //   date: "#WEB3 #ALGORITHMS",
  //   children:
  //     "Meticulous attention to detail in code quality, user interface design, and testing to ensure error-free and user-friendly web applications.",
  // },
  {
    icon: FireIcon,
    title: "A Quantum Proof App",
    date: "#BACKEND #ALGORITHMS",
    children:
      "A  quantum proof app. I wrote an entire article about this particular project (see below)",
  },
  {
    icon: FireIcon,
    title: "A Python Scraper",
    date: "#AUTOMATION",
    children:
      "A script that scrapes the value of the LBP against the USD at the shadow market rate, then stores it in a DB.",
  },
  {
    icon: FireIcon,
    title: "Game of Life",
    date: "#ALGORITHMS",
    children:
      "Conway’s Game of Life cellular automata simulation in JavaScript.",
  },
  // {
  //   icon: FireIcon,
  //   title: "Game of Life On Steroids",
  //   date: "#ALGORITHMS",
  //   children:
  //     "Slightly more complex version of the former.",
  // },
  {
    icon: FireIcon,
    title: "Automated Testing Framework",
    date: "#QA #AUTOMATION",
    children:
      "A suite of automated tests for an E-Bank using Selenium and TestNG.",
  },
  {
    icon: FireIcon,
    title: "A Company Site",
    date: "#FRONTEND",
    children:
      "A static website for a Parkour gym.",
  },
];

const FILTERS = ["ALL", "WEB3", "ALGORITHMS", "QA", "AUTOMATION", "FRONTEND", "BACKEND"];

export function InformationSection() {
  const [selectedFilter, setSelectedFilter] = useState("ALL");
  const [filteredProjects, setFilteredProjects] = useState(PROJECTS);

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
    setFilteredProjects(
      filter === "ALL" ? PROJECTS : PROJECTS.filter((project) => project.date.includes(filter.toUpperCase()))
    );
  };

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
      </div>
      <div id="projects" className="container gap-20 mt-36 mx-auto items-center">
        <div>
          <div className="mb-10">
            <Typography color="blue-gray" className="mb-2 text-3xl font-bold">
              Projects
            </Typography>
            <Typography variant="lead" className="!text-gray-500">
              Personal and freelance projects.
            </Typography>
          </div>
          <div className="mb-4 flex gap-4 flex-wrap">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterClick(filter)}
                className={`px-4 py-2 rounded-full border border-black transition-colors duration-300 ${
                  selectedFilter === filter ? "bg-black text-white" : "bg-white text-black"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-12 lg:grid-cols-2">
            {filteredProjects.map((props, idx) => (
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
