import { FC, useState } from "react";

const CreateCustomer: FC = () => {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");

  function handleClick() {}

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Create new customer</h2>
      <div className="bg-gray-100 p-8">
        <div className="mt-5">
          <label className="block mb-2">Customer full name</label>
          <input
            className="mx-2 px-2 py-1 border rounded"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="mt-5">
          <label className="block mb-2">National ID</label>
          <input
            className="mx-2 px-2 py-1 border rounded"
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
          />
        </div>
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
