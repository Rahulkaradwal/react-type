import { useContext } from "react";
import QuestionContext, { IQuestionContext } from "../context/QuestionContext";

const useQuestion = (): IQuestionContext => {
  const context = useContext(QuestionContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default useQuestion;
