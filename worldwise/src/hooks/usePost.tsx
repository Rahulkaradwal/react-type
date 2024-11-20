import { useContext } from "react";
import PostContext, { PostContextType } from "../context/PostContext";

export const usePost = (): PostContextType => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
