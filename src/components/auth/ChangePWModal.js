import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Formsy from "formsy-react";
import { Input } from "formsy-react-components";

import { updateUser } from "../../redux/actions";
import PasswordConfirmationInput from "./formComponents/PasswordConfirmationInput";
import PasswordInput from "./formComponents/PasswordInput";
import SubmitButton from "./formComponents/SubmitButton";
import AuthModalContainer from "./AuthModalContainer";

class ChangePWModal extends Component {
  render() {
    const {
      isOpen,
      closeModal,
      isSubmittingUpdate,
      updateSuccessful,
      updateUserError
    } = this.props;

    return (
      <AuthModalContainer
        closeModal={closeModal}
        errorMsg={updateUserError}
        isOpen={isOpen}
        isSuccessMsg={updateSuccessful}
        title="Change Password"
      >
        <Formsy onValidSubmit={this.submitUpdateUser}>
          <Input
            name="current_password"
            type="password"
            layout="vertical"
            label="Current Password"
            required
          />
          <PasswordInput label="New Password" />
          <PasswordConfirmationInput label="Confirm New Password" />
          <div className="footer-buttons">
            <SubmitButton isSubmitting={isSubmittingUpdate}>
              Update Password
            </SubmitButton>
          </div>
        </Formsy>
      </AuthModalContainer>
    );
  }

  submitUpdateUser = formData => {
    this.props.updateUser({
      change_password: formData
    });
  };
}

const mapStateToProps = state => ({
  updateUserError: state.auth.getIn(["updateUser", "updateUserError"]),
  updateSuccessful: state.auth.getIn(["updateUser", "success"]),
  isSubmittingUpdate: state.auth.getIn(["updateUser", "isSubmittingUpdate"])
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updateUser
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ChangePWModal);
