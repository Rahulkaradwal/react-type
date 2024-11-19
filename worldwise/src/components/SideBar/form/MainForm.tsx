import { FC, ReactElement, useState } from "react";
import { FormInput } from "../../ui/FormInput";
import { Input } from "../../ui/Input";
import DatePicker from "react-datepicker";

export const MainForm: FC = (): ReactElement => {
  const [cityName, setCityName] = useState<string | "">("");
  const [noteText, setNoteText] = useState<string | "">("");
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  const handleCityName = (val: string) => {
    setCityName(val);
  };

  const handleTextBox = (val: string) => {
    setNoteText(val);
  };

  return (
    <div className="text-slate-50  w-[90%] flex items-start flex-col gap-4 p-4 bg-slate-600 rounded-md">
      <FormInput text="City Name">
        <Input type="text" value={cityName} handleChange={handleCityName} />
      </FormInput>
      <FormInput text="When did you go to City name ?">
        <DatePicker
          className="px-2 py-2 text-slate-800 w-full  rounded-md"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </FormInput>

      <FormInput text="Notes about your trip to ">
        <Input type="textarea" value={noteText} handleChange={handleTextBox} />
      </FormInput>

      <button className="border bg-slate-800 text-[10px] px-3 py-2 rounded-md">
        &lt;- BACK
      </button>
    </div>
  );
};
