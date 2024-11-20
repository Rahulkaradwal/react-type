import { createContext } from "react";
import { IData } from "../utils/Types";

export interface PostContextType {
  isLoading: boolean;
  error: string;
  setError: any;
  data: IData[];
  setData: React.Dispatch<React.SetStateAction<IData[]>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const PostContext = createContext<PostContextType | undefined>(undefined);

export default PostContext;
