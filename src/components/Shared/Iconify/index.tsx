"use client";

import { Icon } from "@iconify/react";
import { FC } from "react";

interface Props {
  /** Icon name from https://icon-sets.iconify.design/eva/arrow-left-fill/ */
  icon?: string;
  /** Size in pixels */
  size?: string;
  /** Support className props, compatible with TailwindCSS */
  className?: string;
}

/**
 * Component to quick access Iconify icons database
 */
const Iconify: FC<Props> = ({ icon, size = 20, className = "" }) => {
  if (!icon) return null;

  return <Icon className={className} icon={icon} width={size} height={size} />;
};

export default Iconify;
