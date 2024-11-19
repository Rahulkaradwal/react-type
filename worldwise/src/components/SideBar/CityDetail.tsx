import { FC, ReactElement } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IData } from "../../App";
import { formatDate } from "../../utils/DateConverter";

interface CityDetailProps {
  data: IData[];
}

export const CityDetail: FC<CityDetailProps> = ({ data }): ReactElement => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Convert the id from useParams to a number for comparison

  // Find the city with the matching id
  const city = data.find((city) => Number(city.id) === Number(id));

  // Handle cases where the city is not found
  if (!city) {
    return <p>City not found</p>;
  }

  return (
    <div className="text-slate-50  w-[90%] flex items-start flex-col gap-4 p-4 bg-slate-600 rounded-md">
      <div className="flex flex-col">
        <p className="text-[10px] opacity-80 uppercase ">city name</p>
        <p className="text-lg">
          {city.emoji} {city.cityName}
        </p>
      </div>
      <div className="flex flex-col">
        <p className="text-[10px] opacity-80 uppercase ">
          you went to {city.cityName} on
        </p>
        <p className="text-lg">{formatDate(city.date)}</p>
      </div>
      <div className="flex flex-col">
        <p className="text-[10px] opacity-80 uppercase ">your notes</p>
        <p className="text-lg">My favorite city so far</p>
      </div>
      <div className="flex flex-col">
        <p className="text-[10px] opacity-80 uppercase ">learn more</p>
        <a className="text-sm underline text-yellow-600">
          Check out {city.cityName} on Wikipedia -&gt;
        </a>
      </div>
      <button
        className="border bg-slate-800 text-[10px] px-3 py-2 rounded-md"
        onClick={() => navigate(-1)}
      >
        &lt;- BACK
      </button>
    </div>
  );
};
