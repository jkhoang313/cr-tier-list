import React from "react";
import cn from "classnames";
import FlatButton from "material-ui/FlatButton";

const SubmitButton = ({ isSubmitting, children }) => {
  return (
    <FlatButton
      className={cn({ "is-loading": isSubmitting })}
      disabled={isSubmitting}
      primary
      style={{ fontSize: "2rem" }}
      type="submit"
    >
      {children}
    </FlatButton>
  );
};

export default SubmitButton;
