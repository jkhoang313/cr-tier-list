import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Formsy from "formsy-react";
import { Input } from "formsy-react-components";

import { signup } from "../../redux/actions";
import EmailInput from "./formComponents/EmailInput";
import PasswordInput from "./formComponents/PasswordInput";
import PasswordConfirmationInput from "./formComponents/PasswordConfirmationInput";
import SubmitButton from "./formComponents/SubmitButton";
import AuthModalContainer from "./AuthModalContainer";

class SignUpModal extends Component {
  render() {
    const {
      isOpen,
      closeModal,
      openLoginModal,
      isSubmittingSignup,
      signupError
    } = this.props;

    return (
      <AuthModalContainer
        closeModal={closeModal}
        errorMsg={signupError}
        isOpen={isOpen}
        title="New User Registration"
      >
        <Formsy onValidSubmit={this.submitSignup}>
          <EmailInput />
          <Input
            name="first_name"
            layout="vertical"
            label="First Name"
            required
          />
          <Input
            name="last_name"
            layout="vertical"
            label="Last Name"
            required
          />
          <PasswordInput />
          <PasswordConfirmationInput />
          <p>
            {`Already have an account? Click `}
            <a className="clickable" onClick={openLoginModal}>
              here
            </a>
            {` to login.`}
          </p>
          <div className="footer-buttons">
            <SubmitButton isSubmitting={isSubmittingSignup}>
              Sign Up
            </SubmitButton>
          </div>
        </Formsy>
      </AuthModalContainer>
    );
  }

  submitSignup = formData => {
    this.props.signup(formData).then(response => {
      if (response.success) {
        this.props.closeModal();
      }
    });
  };
}

const mapStateToProps = state => ({
  signupError: state.auth.getIn(["registration", "signupError"]),
  isSubmittingSignup: state.auth.getIn(["registration", "isSubmittingSignup"])
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      signup
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(SignUpModal);
