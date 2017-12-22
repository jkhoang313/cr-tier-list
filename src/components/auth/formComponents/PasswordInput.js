import React from "react";
import { Input } from "formsy-react-components";

const PasswordInput = ({ label = "Password" }) => {
  return (
    <Input
      name="password"
      type="password"
      layout="vertical"
      label={label}
      required
    />
  );
};

export default PasswordInput;
