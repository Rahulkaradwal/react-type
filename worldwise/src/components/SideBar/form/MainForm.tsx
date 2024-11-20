import { FC, ReactElement, useState } from "react";
import { FormInput } from "../../ui/FormInput";
import { Input } from "../../ui/Input";
import { FormDatePicker } from "../../ui/FormDatePicker";
import { Buttons } from "./Buttons";
import { Button } from "../../ui/Button";
import { useNavigate } from "react-router-dom";

export const MainForm: FC = (): ReactElement => {
  const navigate = useNavigate();
  const [cityName, setCityName] = useState<string | "">("");
  const [noteText, setNoteText] = useState<string | "">("");
  const [startDate, setStartDate] = useState<Date | null>(null);

  const handleCityName = (val: string) => {
    setCityName(val);
  };

  const handleTextBox = (val: string) => {
    setNoteText(val);
  };

  const handleClick = () => {
    console.log(cityName, startDate, noteText);
  };

  return (
    <div className="text-slate-50  w-[90%] flex items-start flex-col gap-4 p-4 bg-slate-600 rounded-md">
      <FormInput text="City Name">
        <Input type="text" value={cityName} handleChange={handleCityName} />
      </FormInput>
      <FormInput text="When did you go to City name ?">
        <FormDatePicker startDate={startDate} setStartDate={setStartDate} />
      </FormInput>
      <FormInput text="Notes about your trip to ">
        <Input type="textarea" value={noteText} handleChange={handleTextBox} />
      </FormInput>
      <Buttons>
        <Button handleClick={handleClick} type="primary">
          Add
        </Button>
        <Button handleClick={() => navigate("/app/city")} type="secondary">
          Back
        </Button>
      </Buttons>
    </div>
  );
};
