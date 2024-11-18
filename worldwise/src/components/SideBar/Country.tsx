import { FC, ReactElement } from "react";
import { CountryItem } from "./CountryItem";
import { IData } from "../../App";

interface CountryProps {
  data: IData[];
}

interface Country {
  country: string;
  emoji: string;
}

export const Country: FC<CountryProps> = ({ data }): ReactElement => {
  if (!data || data.length === 0) {
    return <p>No countries available.</p>;
  }

  // Reduce to get unique countries
  const countries: Country[] = data.reduce<Country[]>((acc, city) => {
    if (!acc.some((el) => el.country === city.country)) {
      acc.push({ country: city.country, emoji: city.emoji });
    }
    return acc;
  }, []);

  return (
    <div className="flex flex-wrap gap-4 px-4 w-full items-center">
      {countries.map((val, index) => (
        <CountryItem key={index} country={val.country} emoji={val.emoji} />
      ))}
    </div>
  );
};
