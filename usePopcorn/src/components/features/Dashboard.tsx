import { FC, ReactElement, ReactNode } from "react";

interface DashboardProps {
  children: ReactNode;
}

export const Dashboard: FC<DashboardProps> = ({ children }): ReactElement => {
  return (
    <div className="flex justify-between w-2/3 h-screen p-5 gap-4">
      {children}
    </div>
  );
};
