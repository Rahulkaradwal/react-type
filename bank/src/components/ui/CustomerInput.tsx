import { FC, ReactElement, ReactNode } from "react";

interface CustomerInputProps {
  children: ReactNode;
}

const CustomerInput: FC<CustomerInputProps> = ({ children }): ReactElement => {
  return <div className="mt-5">{children}</div>;
};

export default CustomerInput;
