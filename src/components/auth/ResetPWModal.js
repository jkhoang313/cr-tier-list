import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Formsy from "formsy-react";

import { resetPassword } from "../../redux/actions";
import EmailInput from "./formComponents/EmailInput";
import SubmitButton from "./formComponents/SubmitButton";
import AuthModalContainer from "./AuthModalContainer";

class ResetPWModal extends Component {
  render() {
    const {
      isOpen,
      closeModal,
      openLoginModal,
      isSubmittingResetPW,
      resetPW
    } = this.props;

    return (
      <AuthModalContainer
        closeModal={closeModal}
        errorMsg={resetPW.get("statusMsg")}
        isOpen={isOpen}
        isSuccessMsg={resetPW.get("success")}
        title="Sign Up"
      >
        <Formsy onValidSubmit={this.submitSignup}>
          <EmailInput />
          <p>
            {`Click `}
            <a className="clickable" onClick={openLoginModal}>
              here
            </a>
            {` to log into an existing account.`}
          </p>
          <div className="footer-buttons">
            <SubmitButton isSubmitting={isSubmittingResetPW}>
              Reset Password
            </SubmitButton>
          </div>
        </Formsy>
      </AuthModalContainer>
    );
  }

  submitSignup = formData => {
    this.props.resetPassword(formData);
  };
}

const mapStateToProps = state => ({
  isSubmittingResetPW: state.auth.getIn([
    "registration",
    "isSubmittingResetPW"
  ]),
  resetPW: state.auth.get("resetPassword")
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      resetPassword
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ResetPWModal);
