import { FC, ReactElement } from "react";
import { useNavigate } from "react-router-dom";

export const MapMain: FC = (): ReactElement => {
  const navigate = useNavigate();
  return (
    <section
      onClick={() => navigate("/app/form")}
      className=" bg-slate-950 w-full "
    ></section>
  );
};
