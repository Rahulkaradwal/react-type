import { FC, ReactElement } from "react";

export const WatchedSummary: FC = (): ReactElement => {
  return (
    <div className="bg-gray-700 rounded-b-lg -mx-4 p-4 shadow-lg mb-4">
      <div>MOVIES YOU WATCHED</div>
      <div className="flex justify-between items-center ">
        <p># 0 movies</p>
        <p>0.0</p>
        <p>0.0</p>
        <p>0 min</p>
      </div>
    </div>
  );
};
