import { FC, useState } from "react";
import CustomerInput from "../ui/CustomerInput";
import Input from "../ui/Input";
import { addCustomer } from "../../features/customer/customerSlice";
import { useDispatch } from "react-redux";

const CreateCustomer: FC = () => {
  const dispatch = useDispatch();

  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");

  const handleName = (val: string): void => {
    setFullName(val);
  };
  const handleId = (val: string): void => {
    setNationalId(val);
  };

  function handleClick() {
    dispatch(addCustomer(fullName, nationalId));
  }

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Create new customer</h2>
      <div className="bg-gray-100 p-8">
        <CustomerInput>
          <Input
            value={fullName}
            handleInput={handleName}
            name="Customer Full Name"
          />
        </CustomerInput>
        <CustomerInput>
          <Input value={nationalId} handleInput={handleId} name="National ID" />
        </CustomerInput>

        <button
          className="uppercase font-bold px-2 py-1 bg-blue-500 text-white rounded mt-5"
          onClick={handleClick}
        >
          Create new customer
        </button>
      </div>
    </div>
  );
};

export default CreateCustomer;
