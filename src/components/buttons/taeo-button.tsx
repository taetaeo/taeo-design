import React from "react";
import type { ButtonHTMLAttributes } from "react";

interface Props {}

type TaeButtonProps = React.PropsWithChildren<Props> & ButtonHTMLAttributes<HTMLButtonElement>;

const TaeoButton = (props: TaeButtonProps) => {
  const { className, ...rest } = props;
  return <button {...rest} className={`${className} bg-blue-400 hover:bg-blue-700`} />;
};

export default TaeoButton;
