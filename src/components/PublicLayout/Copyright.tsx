import { FC } from "react";

const Copyright: FC = () => {
  return (
    <div className="bg-secondary-dark text-white">
      <div className="mx-auto flex max-w-7xl flex-col p-4 text-xs sm:flex-row sm:gap-1 sm:px-6 lg:px-8 lg:text-sm">
        <em>&copy; 2023 Scientech Ecuador.</em>
        <em>Todos los derechos reservados.</em>
      </div>
    </div>
  );
};

export default Copyright;
