import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Formsy from "formsy-react";

import { login } from "../../redux/actions";
import EmailInput from "./formComponents/EmailInput";
import PasswordInput from "./formComponents/PasswordInput";
import SubmitButton from "./formComponents/SubmitButton";
import AuthModalContainer from "./AuthModalContainer";

class LoginModal extends Component {
  render() {
    const {
      isOpen,
      closeModal,
      isSubmittingLogin,
      openSignUpModal,
      openResetPWModal,
      loginError
    } = this.props;

    return (
      <AuthModalContainer
        closeModal={closeModal}
        errorMsg={loginError}
        isOpen={isOpen}
        title="Login"
      >
        <Formsy onValidSubmit={this.submitLogin}>
          <EmailInput />
          <PasswordInput />
          <p>
            {`Forgot your password? Click `}
            <a className="clickable" onClick={openResetPWModal}>
              here
            </a>
            {` to reset your password.`}
          </p>
          <p>
            {`Don't have an account yet? Click `}
            <a className="clickable" onClick={openSignUpModal}>
              here
            </a>
            {` to create an account.`}
          </p>
          <div className="footer-buttons">
            <SubmitButton isSubmitting={isSubmittingLogin}>Log In</SubmitButton>
          </div>
        </Formsy>
      </AuthModalContainer>
    );
  }

  submitLogin = formData => {
    this.props.login(formData).then(response => {
      if (response.success) {
        this.props.closeModal();
      }
    });
  };
}

const mapStateToProps = state => ({
  loginError: state.auth.getIn(["login", "loginError"]),
  isSubmittingLogin: state.auth.getIn(["login", "isSubmittingLogin"])
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      login
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
