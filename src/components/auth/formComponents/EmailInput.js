import React from "react";
import { Input } from "formsy-react-components";

const EmailInput = () => {
  return (
    <Input
      name="email_address"
      type="email"
      layout="vertical"
      label="Email Address"
      validations="isEmail"
      required
    />
  );
};

export default EmailInput;
