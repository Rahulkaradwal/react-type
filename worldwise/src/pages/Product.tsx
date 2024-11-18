import { FC, ReactElement } from "react";
import { Header } from "../components/ui/Header";

export const Product: FC = (): ReactElement => {
  return (
    <main className="bg-slate-700 h-screen overflow-hidden ">
      <Header />
      <section className="flex w-full px-60 py-44  items-center  justify-center gap-10 text-slate-50">
        <img
          className="w-96 h-96 object-cover"
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div className="flex flex-col gap-10">
          <h2 className="text-4xl font-bold">About WorldWide.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
            dicta illum vero culpa cum quaerat architecto sapiente eius non
            soluta, molestiae nihil laborum, placeat debitis, laboriosam at fuga
            perspiciatis?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            doloribus libero sunt expedita ratione iusto, magni, id sapiente
            sequi officiis et.
          </p>
        </div>
      </section>
    </main>
  );
};
