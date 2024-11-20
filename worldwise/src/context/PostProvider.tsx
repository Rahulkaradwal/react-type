import { FC, useEffect, useState } from "react";
import PostContext from "./PostContext";
import { IData } from "../utils/Types";

interface PostProviderProps {
  children: React.ReactNode;
}

export const PostProvider: FC<PostProviderProps> = ({ children }) => {
  const [data, setData] = useState<IData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch("http://localhost:3001/cities");
        if (!response.ok) throw new Error("Failed to fetch");
        const fetchedData: IData[] = await response.json(); // Ensure response matches IData[]
        setData(fetchedData);
        setError("");
      } catch (err) {
        setError("Sorry, Could not load the data!");
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);
  return (
    <PostContext.Provider
      value={{ data, setData, isLoading, setIsLoading, error, setError }}
    >
      {children}
    </PostContext.Provider>
  );
};
