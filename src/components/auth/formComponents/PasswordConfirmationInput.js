import React from "react";
import { Input } from "formsy-react-components";

const PasswordConfirmationInput = ({ label = "Confirm Password" }) => {
  return (
    <Input
      name="password_confirmation"
      type="password"
      layout="vertical"
      label={label}
      validations="equalsField:password"
      validationErrors={{
        equalsField: "Passwords do not match."
      }}
      required
    />
  );
};

export default PasswordConfirmationInput;
