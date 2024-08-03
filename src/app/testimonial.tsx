"use client";

import React from "react";
import Image from "next/image";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";


export function Testimonial() {
  const [active, setActive] = React.useState(3);

  return (
<section id="tldr" className="pt-36 pb-44 px-8 lg:pt-36 lg:pb-44">
      <div className="container max-w-screen-lg mx-auto">
        <div className="container mx-auto mb-20 text-center">
          <Typography
            placeholder={""}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined} 
            variant="h2" 
            color="blue-gray" 
            className="mb-4">
            TL;DR
          </Typography>
          <Typography
            placeholder={""}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            variant="lead"
            className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-8/12"
          >
            A short summary of my background and experience.
          </Typography>
        </div>
        <Card 
          color="transparent" 
          shadow={false} 
          className="py-8 lg:flex-row"
          placeholder={""}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}>
          <CardBody 
          className="w-full lg:gap-10 h-full lg:!flex justify-between "
          placeholder={""}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}>
            <div className="w-full mb-10 lg:mb-0">
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-4 font-bold lg:max-w-xs"
                placeholder={""}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Tech Stack
              </Typography>
              <ul className="list-disc pl-5">
                <li><strong>Languages:</strong> Java, JavaScript, Python, SQL.</li>
                <li><strong>Technologies:</strong> MERN, LAMP, NGINX, AWS</li>
                <li><strong>Testing frameworks:</strong> Cypress, Selenium, TestNG.</li>
                <li><strong>Tools:</strong> Git, Jenkins, Docker, Grafana, JMeter.</li>
             </ul>
          </div>
            <div className="h-[10rem] rounded-full w-full sm:w-[10rem] shrink-0">
              <Image
                width={768}
                height={768}
                src={`/image/zak.jpg`}
                alt="testimonial image"
                className="w-full h-auto max-w-xs max-h-xs rounded-full object-cover"
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default Testimonial;
