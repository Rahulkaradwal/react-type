import { FC, ReactElement, ReactNode } from "react";

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  style?: string;
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  style,
}): ReactElement => {
  return (
    <button className={style} onClick={onClick}>
      {children}
    </button>
  );
};
