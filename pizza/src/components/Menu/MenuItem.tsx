import { FC, ReactElement } from "react";
import { IPizza } from "../../Interfaces";
import { Button } from "../ui/Button";

interface MenuItemProps {
  pizza: IPizza;
}

export const MenuItem: FC<MenuItemProps> = ({ pizza }): ReactElement => {
  const { name, ingredients, photoName, price, soldOut } = pizza;

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="max-w-[720px] mx-auto">
        <div className="relative flex w-full max-w-[20rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
          <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
            <img src={`/${photoName}`} alt={photoName} />
            <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                {name}
              </h5>
            </div>
            <p>${price}</p>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
              {ingredients}
            </p>
          </div>
          <div className="p-6 pt-3">
            {soldOut ? (
              <Button disabled={true} text="Sold Out" />
            ) : (
              <Button disabled={false} text="Add To Cart" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
