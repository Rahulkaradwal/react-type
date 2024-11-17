import { FC, ReactElement, useState } from "react";
import { Header } from "../components/Header";
import { FormElement } from "../components/FormElement";

export const Login: FC = (): ReactElement => {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email, password);

  const handleEmail = (val: string): void => {
    setEmail(val);
  };
  const handlePassword = (val: string): void => {
    setPassword(val);
  };

  return (
    <main className="bg-slate-700 h-screen overflow-hidden">
      <Header />
      <div className="flex justify-center h-full items-center">
        <form className="bg-slate-600 flex w-1/3   flex-col gap-5 p-10 rounded-lg ">
          <FormElement
            value={email}
            type="email"
            id="email"
            text="Email Address"
            onChange={handleEmail}
          />
          <FormElement
            value={password}
            type="password"
            id="password"
            text="Password"
            onChange={handlePassword}
          />

          <div>
            <button className="px-4 py-2 rounded-md bg-green-500">LOGIN</button>
          </div>
        </form>
      </div>
    </main>
  );
};
