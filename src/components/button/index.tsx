import { FC } from "react";

import { IButtonProps } from "./types";

import "./styles.scss";

const Button: FC<IButtonProps> = (props): JSX.Element => {
  const { name, classes, handleClick } = props;

  return (
    <button className={`common-button ${classes}`} onClick={handleClick}>
      {name}
    </button>
  );
};

export default Button;
