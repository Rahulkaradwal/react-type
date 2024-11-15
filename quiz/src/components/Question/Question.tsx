import { FC, ReactElement } from "react";

export const Question: FC = (): ReactElement => {
  return (
    <div>
      <p className="mb-4">Which is the most Popular Javascript Framework</p>
      <ul className="flex flex-col gap-4 cursor-pointer">
        <li className="py-2 px-6 ml-8 -mr-8 rounded-full bg-blue-300">React</li>
        <li className="py-2 px-6 rounded-full bg-yellow-600">Angular</li>
        <li className="py-2 px-6 rounded-full bg-yellow-600">Vue</li>
        <li className="py-2 px-6 rounded-full bg-yellow-600">Suvlte</li>
      </ul>
    </div>
  );
};
