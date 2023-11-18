import { FC } from "react";
import ScientechLogo from "../../Shared/ScientechLogo";

const LoginLogo: FC = () => {
  return (
    <div className="flex h-20 w-full items-end rounded-lg bg-primary-default p-3 md:h-36">
      <div className="w-32 text-white md:w-36">
        <ScientechLogo variant="white" />
      </div>
    </div>
  );
};

export default LoginLogo;
