"use client";

import { IconButton, Typography } from "@material-tailwind/react";

// TODO
/* 
- fix navbar Blog + write article
- Images (inside cards)
- filters for projects section (based on tags)
- Tools/stack keys
- Try circle image
*/

function Hero() {
  return (
    <div className="relative w-full">
      <div className="grid place-items-center min-h-[75vh] px-8">
        <div className="container mx-auto grid place-items-center h-max text-center">
          <Typography variant="h1" color="blue-gray">
            Hi there,
          </Typography>
          <Typography
            variant="lead"
            color="gray"
            className="mt-12 mb-5 w-full md:max-w-full lg:max-w-4xl"
          >
           I&apos;m Zak. A QA Engineer with DevOps experience. <br></br> I also like cryptography and distributed systems.
          </Typography>
          <button 
            className="align-middle mt-5 select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            type="button"
            style={{ position: 'relative', overflow: 'hidden' }}
          >
            DOWNLOAD CV
          </button>
          <Typography className="mt-12 mb-4 text-blue-gray-900 font-medium uppercase">
            Connect
          </Typography>
          <div className="gap-2 lg:flex">
            <IconButton variant="text" color="gray">
              <i className="fa-brands fa-linkedin text-lg" />
            </IconButton>
            <IconButton variant="text" color="gray">
              <i className="fa-brands fa-github text-lg" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
