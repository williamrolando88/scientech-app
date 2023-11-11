import clsx from "clsx";
import { FC } from "react";

interface Props {
  className?: string;
}

const ScientechIco: FC<Props> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 185.02 185.02"
      className={clsx("h-10", className)}
    >
      <circle
        className="fill-primary-default"
        cx="92.51"
        cy="92.51"
        r="92.51"
      />
      <path
        className="fill-white"
        d="M92.62,131.51c-4.21,5.84-9.74,8.2-13.11,9.64-6.77,2.89-12.53,3-18.22,3a63,63,0,0,1-19.41-2.8,61.4,61.4,0,0,1-13.14-5.86q3.17-8.32,6.32-16.65a77.23,77.23,0,0,0,18.53,6.58,34.41,34.41,0,0,0,14.08.16c3-.62,4.94-1.51,5.91-3.27a5.91,5.91,0,0,0,.37-4.59c-1.45-4.21-8.06-4.72-19.78-7.8-3.51-.93-8.31-2.3-14-4.27a21.19,21.19,0,0,1-7.49-6.34A21.61,21.61,0,0,1,28.64,86.2,24.37,24.37,0,0,1,30,77.44c3.41-9,12.32-13,16.08-14.66,7.19-3.18,13.49-3.23,18.1-3.27a53.52,53.52,0,0,1,28.54,7.86q-3.36,8-6.7,16a55.87,55.87,0,0,0-15-5.49c-6.6-1.37-10.19-.83-12.76,0-1.94.64-4.46,1.49-5.71,4A6.81,6.81,0,0,0,52.64,88c1.71,3,5.85,3.39,9.49,4,.59.09,13.64,2.21,22.2,7,3.44,1.92,10.7,6,12.81,14C99.5,122,93.85,129.81,92.62,131.51Z"
        transform="translate(-7.49 -7.49)"
      />
      <path
        className="fill-white"
        d="M163.14,115.81l13.43,13a47.6,47.6,0,0,1-18.2,12.34,47,47,0,0,1-15.71,3c-2.74.07-20.64.21-33.72-14.18a44.36,44.36,0,0,1-11.23-28.39c.08-2.81.79-18.57,13.93-30.69a44.24,44.24,0,0,1,30.8-11.45,48,48,0,0,1,34.13,14.24L163.18,87.8c-2.76-2.7-8.82-7.79-17.64-8.74a19.57,19.57,0,0,0-5.62,0C130.59,80.62,122.8,89.53,121.49,99a20.77,20.77,0,0,0,0,5.78c1.32,9.36,9.14,18.1,18.41,19.62a19.5,19.5,0,0,0,5.67,0A30.38,30.38,0,0,0,163.14,115.81Z"
        transform="translate(-7.49 -7.49)"
      />
    </svg>
  );
};

export default ScientechIco;