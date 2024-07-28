import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid"; // Use solid icon for internal color

interface InfoCardProps {
  title: string;
  date: string;
  children?: React.ReactNode;
  company: string;
  tools: string; // New prop for tools used
  description?: string | string[];
  imageSrc?: string; // New prop for images
  isLinked?: boolean; // New prop for conditional rendering of link button
  link?: string; // New prop for the URL
  isLive?: boolean // New prop for conditional rendering of view live button
  live?: string //New prop for live app URL
}

export function InfoCard({
  title,
  date,
  children,
  company,
  tools,
  description = '',
  imageSrc,
  isLinked = false,
  link,
  isLive = false,
  live,
}: InfoCardProps) {
  return (
    <Card className="relative"         
        placeholder={""}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}>
      <CardHeader
        className="flex items-center justify-between rounded-none overflow-visible"
        floated={false}
        shadow={false}
        placeholder={""}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        {isLinked && link && (
          <div className="absolute top-2 right-2">
            <IconButton
            variant="text"
              className="p-1"
              onClick={() => window.open(link, '_blank')} // Open the provided link
              placeholder={""}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <ArrowTopRightOnSquareIcon className="h-4 w-4 text-gray-800" /> {/* Adjusted size and color */}
            </IconButton>
          </div>
        )}
        <div className="flex flex-col gap-1 w-full">
          <Typography 
          color="blue" 
          className="font-bold text-xs"
          placeholder={""}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}>
            {date}
          </Typography>
          <Typography 
            color="blue-gray" 
            className="font-bold text-xs text-left mr-10"
            placeholder={""}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}>
            {company}
          </Typography>
          <Typography color="blue-gray" variant="h5" className="w-full" placeholder={""} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            {title}
          </Typography>
          {description && (
            <ul className="list-disc pl-5">
              {Array.isArray(description)
                ? description.map((desc, index) => <li key={index}>{desc}</li>)
                : description.toString().split('\n').map((line, index) => <li key={index}>{line}</li>)}
            </ul>
          )}
        </div>
        <div className="flex items-center space-x-4">
          {imageSrc && (
            <img src={imageSrc} alt={`${title} Image`} className="absolute top-0 right-0 w-16 h-16 object-cover" />
          )}
        </div>
      </CardHeader>
      <CardBody className="grid justify-start !px-3.5 pt-2"
              placeholder={""}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}>
        {children && (
          <Typography className="font-normal !text-gray-500 mb-4"
          placeholder={""}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}>
            {children}
          </Typography>
        )}
      </CardBody>
      <Typography color="gray" className="absolute bottom-2 left-4 mb-1 font-bold text-xs"
              placeholder={""}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}>
        {tools}
      </Typography>
      {isLive && live && (
      <Typography color="gray" className="absolute bottom-2 right-4 mb-1 font-bold text-xs underline"
      placeholder={""}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}>
          <a href={live} target="_blank" rel="noopener noreferrer">
            VIEW LIVE
          </a>
        </Typography>
      )}
    </Card>
  );
}

export default InfoCard;
