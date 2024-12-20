import { FC, ReactElement } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { formatDate } from "../../../utils/DateConverter";

export const CityDetail: FC = (): ReactElement => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Convert the id from useParams to a number for comparison

  // Find the city with the matching id
  const city = {
    cityName: "Madrid",
    country: "Spain",
    emoji: "🇪🇸",
    date: "2027-07-15T08:22:53.976Z",
    notes: "",
    position: {
      lat: 40.46635901755316,
      lng: -3.7133789062500004,
    },
    id: 17806711,
  };
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
