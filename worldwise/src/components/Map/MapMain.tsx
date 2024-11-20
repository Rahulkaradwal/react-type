import { FC, ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { Map } from "./Map";

export const MapMain: FC = (): ReactElement => {
  const navigate = useNavigate();
  return (
    <section
      onClick={() => navigate("/app/form")}
      className=" relative h-screen overflow-hidden  w-full "
    >
      <Map />
    </section>
  );
};
