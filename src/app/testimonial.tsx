"use client";

import React from "react";
import Image from "next/image";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";


export function Testimonial() {
  const [active, setActive] = React.useState(3);

  return (
    <section id = "tldr" className="py-12 px-8 lg:py-24">
      <div className="container max-w-screen-lg mx-auto">
        <div className="container mx-auto mb-20 text-center">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            TL;DR
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-8/12"
          >
            Time is of the essence, so here&apos;s a brief about my background and expertise.
          </Typography>
        </div>
        <Card color="transparent" shadow={false} className="py-8 lg:flex-row">
          <CardBody className="w-full lg:gap-10 h-full lg:!flex justify-between ">
            <div className="w-full mb-10 lg:mb-0">
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-4 font-bold lg:max-w-xs"
              >
                Tech Stack
              </Typography>
              <ul className="list-disc pl-5">
                <li><strong>Languages:</strong> Solidity, Java, JavaScript, Python, SQL.</li>
                <li><strong>Technologies:</strong> MERN, LAMP, NGINX, AWS.</li>
                <li><strong>Testing frameworks:</strong> Cypress, Selenium, Appium, RESTAssured, TestNG.</li>
                <li><strong>Tools:</strong> Git, Jenkins, Docker, Grafana, JMeter, Postman, JIRA.</li>
             </ul>
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-4 font-bold lg:max-w-xs mt-4"
              >
                Education
              </Typography>
              <ul className="list-disc pl-5">
                <li><strong>ISTQB</strong> Certified QA Tester</li>
                <li><strong>Bachelors Degree</strong> - Entrepreneurial Management.</li>
             </ul>
              <Typography
                  variant="h3"
                  color="blue-gray"
                  className="mb-4 font-bold lg:max-w-xs mt-4"
                >
                  Other
                </Typography>
                <ul className="list-disc pl-5">
                  <li><strong>Europe</strong> based</li>
                  <li><strong>Available</strong> on a remote or hybrid basis</li>
                  <li><strong>Trilingual</strong></li>
              </ul>
          </div>
            <div className="h-[15rem] rounded-lg w-full sm:w-[15rem] shrink-0">
              <Image
                width={768}
                height={768}
                src={`/image/zak.jpg`}
                alt="testimonial image"
                className="h-full rounded-lg w-full object-cover"
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default Testimonial;
