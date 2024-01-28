import React from "react";
import type { ButtonHTMLAttributes } from "react";

interface Props {
  variant?: "primary" | "secondary" | "default";
}

type DefaultButtonProps = React.PropsWithChildren<Props> & ButtonHTMLAttributes<HTMLButtonElement>;

const DefaultButton = ({ className, variant = "primary", ...rest }: DefaultButtonProps) => {
  const getButtonStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-primary hover:bg-primary-700";
      case "secondary":
        return "bg-secondary hover:bg-secondary-700";
      default:
        return "";
    }
  };

  return <button type="button" {...rest} className={`${className} ${getButtonStyles()}`} />;
};

export default DefaultButton;
