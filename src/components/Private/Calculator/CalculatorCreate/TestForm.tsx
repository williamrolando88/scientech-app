"use client";

import { submitTestForm } from "@/src/lib/actions/calculator";
import { ChangeEvent, FC, useState } from "react";
import { useFormState } from "react-dom";

const TestForm: FC = () => {
  const [_, action] = useFormState(submitTestForm, "null");
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form action={action}>
      <input
        type="text"
        name="firstName"
        value={values.firstName}
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        name="lastName"
        value={values.lastName}
        onChange={handleChange}
      />

      <br />
      <input
        type="text"
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <br />

      <button type="submit">Send</button>
    </form>
  );
};

export default TestForm;
