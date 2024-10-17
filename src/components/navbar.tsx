import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";

const NAV_MENU = [
  { name: "Projects", href: "/#projects" },
  { name: "Bio", href: "/#tldr" },
  // { name: "Blog", href: "http://localhost:3000#blog" },
];

function NavItem({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <li>
      <Typography
        as="a"
        href={href}
        variant="paragraph"
        color="gray"
        className="flex items-center gap-2 font-medium text-gray-900"
        placeholder={""}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <MTNavbar
      fullWidth
      blurred={false}
      shadow={false}
      color="white"
      className="sticky top-0 z-50 border-0"
      placeholder={""}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Typography
            as="a"
            className="text-lg text-blue-gray-900 font-medium uppercase"
            placeholder={""}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            CONNECT
          </Typography>
          <a href="https://www.linkedin.com/in/zakaria-j-714816111/" target="_blank" rel="noopener noreferrer">
            <IconButton 
              variant="text" 
              color="gray"
              placeholder={""}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}>
              <i className="fa-brands fa-linkedin text-lg" />
            </IconButton>
          </a>
          <a href="https://github.com/zakjanzi" target="_blank" rel="noopener noreferrer">
            <IconButton 
              variant="text" 
              color="gray"
              placeholder={""}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}>
              <i className="fa-brands fa-github text-lg" />
            </IconButton>
          </a>
        </div>
        <ul className="hidden items-center gap-14 lg:flex absolute left-1/2 transform -translate-x-1/2">
          {NAV_MENU.map(({ name, href }) => (
            <NavItem key={name} href={href}>{name}</NavItem>
          ))}
        </ul>
        {/* <div className="hidden items-center gap-2 lg:flex">
          <a href="https://contra.com/zakjanzi_z23fzkfn" target="_blank">
            <Button color="gray"
                    placeholder={""}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    >Hire me on Contra
              </Button>
          </a>
        </div> */}
        <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
          placeholder={""}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, href }) => (
              <NavItem key={name} href={href}>{name}</NavItem>
            ))}
          </ul>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
