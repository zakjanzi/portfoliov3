"use client";

import { IconButton, Typography } from "@material-tailwind/react";


function Hero() {
  return (
    <div className="relative w-full">
      <div className="grid place-items-center min-h-[75vh] px-8">
        <div className="container mx-auto grid place-items-center h-max text-center">
          <Typography 
            variant="h1" 
            color="blue-gray"
            placeholder={""}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}>
            Hi, I&apos;m Zak.
          </Typography>
          <Typography
            placeholder={""}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            variant="lead"
            color="gray"
            className="mt-12 mb-5 w-full md:max-w-full lg:max-w-4xl"
          >
           A QA Engineer with a strong DevOps background. <br></br> I also like cryptography and distributed systems.
          </Typography>
          <a
              href="/image/CV_Zak.pdf"
              download="CV_Zak.pdf"
              className="align-middle mt-5 select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3   px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              DOWNLOAD CV (.pdf)
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
