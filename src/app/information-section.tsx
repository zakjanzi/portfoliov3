"use client";
import { Typography } from "@material-tailwind/react";
// import {
//   AcademicCapIcon,
//   BriefcaseIcon,
//   FireIcon,
// } from "@heroicons/react/24/solid";
import { SetStateAction, useState } from "react";

import InfoCard from "@/components/info-card";

const WORKEXPERIENCE = [
  {
    // icon: AcademicCapIcon,
    title: "DevOps Engineer",
    date: "2023 - Present",
    company: "Lebanese Alternative Learning",
    children: [],
    description: [
      "Implemented and maintained security measures while continuously monitoring server health.", "Managed deployments across various physical and virtual environments", "Kept detailed documentation on all technical procedures and guides for all stakeholders.", "Contributed to open-source projects (Moodle/IOMAD) " 
    ],
     imageSrc:"/image/lal.png"
  },
  {
    // icon: AcademicCapIcon,
    title: "Technical Writer",
    date: "2023 - Present",
    company: "Inbound Square (Contract)",
    children: [],
    description: [
      "Wrote technical articles covering topics related to SaaS/PaaS tools. See the writing section below for samples.",
    ],
    imageSrc: "/image/inbound-square.jpg"
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
      "Designed, developed and executed comprehensive test plans and test cases to ensure software quality.", "Recorded, documented and triaged software bugs thoroughly.", "Coordinated with product owners for testing plans and feature releases.", "Managed a small team of junior testers."
    ],
    imageSrc:"/image/multiverse.jpg"
  },

];

const WRITING = [
  {
    title: "Zero-Knowledge Proofs: A Shallow Dive",
    date: "2024",
    children: "Demystifying ZK-Proofs using a blend of layman's terms and a bit of technical depth.",
    link: "https://medium.com/@zakjanzi/zero-knowledge-proofs-a-shallow-dive-f3396106fc09",
  },
  {
    title: "Cloud Load Testing",
    date: "2023",
    children: "An article about cloud load testing concepts, tools and best practices.",
    link: "https://www.multiple.dev/automated-performance-testing/cloud-load-testing",
  },
  {
    title: "Test Environment Management",
    date: "2023",
    children: "An article about test environment management best practices.",
    link: "https://www.withcoherence.com/post/test-environment-management",
  },
  {
    title: "Non-Functional Testing",
    date: "2023",
    children: "Non-Functional testing types and best practices.",
    link: "https://www.multiple.dev/automated-performance-testing/non-functional-testing-types",
  },
];
const PROJECTS = [
  {
    // icon: FireIcon,
    title: "BIP39 JavaScript Implementation",
    date: "#WEB3",
    link: "https://github.com/zakjanzi/Crypto-Wallet-Implementation",
    children:
      "A JavaScript implementation of a cryptocurrency wallet generator for Bitcoin and Ethereum.",
    tools: "Tools: Node.js, Ethers.js, BIP39.js",
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
    // icon: FireIcon,
    title: "A Quantum Proof Web Server",
    date: "#BACKEND #ALGORITHMS",
    link: "https://github.com/zakjanzi/quantum-proof-server",
    children:
      "A  quantum-resistant web server for a post-quantum computing world.",
    tools: "Tools: NGINX, libqos",
  },
  {
    // icon: FireIcon,
    title: "A Python Scraper",
    date: "#AUTOMATION",
    link: "https://github.com/zakjanzi/lira-rate-scraper",
    children:
      "A script that scrapes the value of the LBP against the USD at the shadow market rate, then stores it in a DB.",
    tools: "Tools: Python, AWS Lambda, MongoDB, Docker",
  },
  {
    // icon: FireIcon,
    title: "Game of Life",
    date: "#ALGORITHMS",
    link: "https://github.com/zakjanzi/Conways-Game-of-Life",
    live: "https://zak-gameoflife.netlify.app/",
    children:
      "Conway&apos;s Game of Life cellular automata simulation in JavaScript.",
    tools: "Tools: JavaScript🍦, p5.js",
  },
  // {
  //   icon: FireIcon,
  //   title: "Game of Life On Steroids",
  //   date: "#ALGORITHMS",
  //   children:
  //     "Slightly more complex version of the former.",
  // },
  {
    // icon: FireIcon,
    title: "Automated Testing Framework",
    date: "#QA #AUTOMATION",
    link: "https://github.com/zakjanzi/E2E-Testing-Framework",
    children:
      "A suite of automated tests for an E-Bank using Selenium and TestNG.",
    tools: "Tools: Selenium, Java, TestNG",
  },
  {
    // icon: FireIcon,
    title: "A Company Site",
    date: "#FRONTEND",
    link: "https://github.com/zakjanzi/team-adrenaline-website",
    live: "https://teamadrenaline.me",
    children:
      "A static website for a Parkour gym.",
    tools: "Tools: HTML, SCSS, JavaScript🍦",
  },
];

const FILTERS = ["ALL", "WEB3", "ALGORITHMS", "QA", "AUTOMATION", "FRONTEND", "BACKEND"];

export function InformationSection() {
  const [selectedFilter, setSelectedFilter] = useState("ALL");
  const [filteredProjects, setFilteredProjects] = useState(PROJECTS);

  const handleFilterClick = (filter: SetStateAction<string>) => {
    // Determine if filter is a function or a string
    const filterValue = typeof filter === 'function' ? filter('') : filter;
  
    setSelectedFilter(filterValue);
    setFilteredProjects(
      filterValue === "ALL" 
        ? PROJECTS 
        : PROJECTS.filter((project) => project.date.includes(filterValue.toUpperCase()))
    );
  };

  return (
    <section className="pb-28 px-8">
      <div className="grid xl:grid-cols-2 md:grid-cols-1 container gap-20 mx-auto items-start">
        <div>
          <div className="mb-10">
            <Typography 
              color="blue-gray" 
              className="mb-2 text-3xl font-bold"
              placeholder={""}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}>
              Work Experience
            </Typography>
            {/* <Typography variant="lead" className="!text-gray-500">
              See my education history.
            </Typography> */}
          </div>
          <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-12">
            {WORKEXPERIENCE.map((props, idx) => (
              <InfoCard tools={""} key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
      <div id="projects" className="container gap-20 mt-36 mx-auto items-center">
        <div>
          <div className="mb-10">
            <Typography 
              color="blue-gray" 
              className="mb-2 text-3xl font-bold"
              placeholder={""}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}>
              Projects
            </Typography>
            <Typography 
              variant="lead" 
              className="!text-gray-500"
              placeholder={""}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}>
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
              <InfoCard key={idx} {...props} isLinked={true} isLive={true} company={""}/>
            ))}
          </div>
        </div>
      </div>

      <div className="container gap-20 mt-36 mx-auto items-center">
        <div>
          <div className="mb-10">
            <Typography 
              color="blue-gray" 
              className="mb-2 text-3xl font-bold"
              placeholder={""}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}>
              Writing
            </Typography>
            <Typography 
              variant="lead" 
              className="!text-gray-500"
              placeholder={""}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}>
              A collection of thoughts, articles, and documentation.
            </Typography>
          </div>
          <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-12 lg:grid-cols-2">
            {WRITING.map((props, idx) => (
              <InfoCard company={""} tools={""} key={idx} {...props} isLinked={true} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default InformationSection;
