import { FC, ReactElement } from "react";
import { Header } from "../components/ui/Header";

export const Homepage: FC = (): ReactElement => {
  return (
    <main>
      <section className="relative h-screen overflow-hidden">
        <Header />
        {/* Background image with grey overlay */}
        <div className="absolute inset-0 bg-homepage-background bg-center bg-cover">
          <div className="absolute inset-0 bg-black bg-opacity-35"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 px-20 flex flex-col justify-center items-center h-full text-slate-50 gap-10">
          <h1 className="text-4xl font-bold">You travel the world.</h1>
          <h1 className="text-4xl font-bold">
            WorldWise keeps track of your adventures.
          </h1>
          <h2 className="text-xl text-center font-semibold">
            A world map that tracks your footsteps into every city you can think
            of. Never forget your wonderful experiences, and show your friends
            how you have wandered the world.
          </h2>
          <button className="text-xl py-2 rounded-md bg-green-600 p-1 px-5 text-slate-900">
            Start Tracking Now
          </button>
        </div>
      </section>
    </main>
  );
};
