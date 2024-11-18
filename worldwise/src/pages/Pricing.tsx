import { FC } from "react";
import { Header } from "../components/ui/Header";

export const Pricing: FC = () => {
  return (
    <main className="bg-slate-700 h-screen overflow-hidden">
      <Header />
      <section className="flex w-full px-60 py-44  items-center  justify-center gap-10 text-slate-50">
        <div className="flex flex-col gap-10">
          <h2 className="text-4xl font-bold">
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p className="w-96">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.
          </p>
          <button className="text-xl py-2 w-fit rounded-md bg-green-600 p-1 px-5 text-slate-900">
            Start Tracking Now
          </button>
        </div>
        <img
          className="w-96 h-96 object-cover"
          src="img-2.jpg"
          alt="overview of a large city with skyscrapers"
        />
      </section>
    </main>
  );
};
