"use client";

import { IconButton, Typography } from "@material-tailwind/react";

// TODO
/* 
- download cv button
- fix navbar (work - education - Blog/About)
- Company name keys
- Images (inside cards)
- filters for projects section (based on tags)
- Tools/stack keys
- Link articles + write the rest
- Try circle image
- fix footer (?)
- fix bullet list
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
           I'm Zak. A QA Engineer with DevOps experience. <br></br> I also like distributed systems.
          </Typography>
          <Typography className="mt-12 mb-4 text-blue-gray-900 font-medium uppercase">
            Connect
          </Typography>
          <div className="gap-2 lg:flex">
            <IconButton variant="text" color="gray">
              <i className="fa-brands fa-medium text-lg" />
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
