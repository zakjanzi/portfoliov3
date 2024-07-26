import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  IconButton,
} from "@material-tailwind/react";

interface InfoCardProps {
  // icon: React.ElementType;
  title: string;
  date: string;
  children?: React.ReactNode;
  company: string;
  description?: string | string[]; // New prop for rendering bullet points
  imageSrc?: string; // Optional image source
}

export function InfoCard({
  // icon: Icon,
  title,
  date,
  children,
  company,
  description = '',
  imageSrc, // Destructure imageSrc from props
}: InfoCardProps) {
  return (
    <Card>
      <CardHeader
        className="flex items-center justify-between rounded-none overflow-visible"
        floated={false}
        shadow={false}
      >
        <div className="flex flex-col gap-1 w-full">
          <Typography color="blue" className="font-bold text-xs">
            {date}
          </Typography>
          <Typography color="blue" className="font-bold text-xs text-left mr-10">
            {company}
          </Typography>
          <Typography color="blue-gray" variant="h5" className="w-full">
            {title}
          </Typography>
          {/* Render description as a bulleted list */}
          {description && (
            <ul className="list-disc pl-5">
              {Array.isArray(description)
                ? description.map((desc, index) => <li key={index}>{desc}</li>)
                : description.toString().split('\n').map((line, index) => <li key={index}>{line}</li>)}
            </ul>
          )}
        </div>
        <div className="flex items-center space-x-4">
          {/* <IconButton
            className="pointer-events-none"
            ripple={false}
          >
            <Icon className="h-5 w-5" strokeWidth={2} />
          </IconButton> */}
          {imageSrc && (
            <img src={imageSrc} alt={`${title} Image`} className="absolute top-0 right-0 w-16 h-16 object-cover" />
          )}
        </div>
      </CardHeader>
      <CardBody className="grid justify-start !px-3.5 pt-2">
        {/* Optionally render children or leave empty if not needed */}
        {children && (
          <Typography className="font-normal !text-gray-500">
            {children}
          </Typography>
        )}
      </CardBody>
    </Card>
  );
}

export default InfoCard;
