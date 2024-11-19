import { FC, ReactElement } from "react";
import { NavItems } from "../ui/NavItems";
import { Footer } from "../ui/Footer";
import { Logo } from "../ui/Logo";

import { Outlet } from "react-router-dom";

interface SideBarMain {}

export const SideBarMain: FC<SideBarMain> = (): ReactElement => {
  return (
    <section className=" relative w-3/5 bg-slate-700 p-6 flex flex-col gap-4 items-center ">
      <Logo />
      <NavItems />
      <Outlet />

      <Footer />
    </section>
  );
};
