import { FC, ReactElement } from "react";
import { NavItems } from "../ui/NavItems";
import { IData } from "../../pages/AppLayout";
import { Footer } from "./Footer";
import { Logo } from "./Logo";
import { Country } from "./Country";
import { City } from "./City";

interface SideBarMain {
  data: IData[];
}

export const SideBarMain: FC<SideBarMain> = ({ data }): ReactElement => {
  return (
    <section className=" relative w-3/5 bg-slate-700 p-6 flex flex-col gap-4 items-center ">
      <Logo />
      <NavItems />
      <City data={data} />
      <Country data={data} />

      <Footer />
    </section>
  );
};
