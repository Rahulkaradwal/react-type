import { FC, ReactElement } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface FormDatePickerProps {
  setStartDate: React.Dispatch<React.SetStateAction<Date | null>>;
  startDate: Date | null;
}

export const FormDatePicker: FC<FormDatePickerProps> = ({
  startDate,
  setStartDate,
}): ReactElement => {
  return (
    <DatePicker
      className="px-2 py-2 cursor-pointer  text-slate-800 w-full  rounded-md"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      placeholderText="Select Date"
    />
  );
};
