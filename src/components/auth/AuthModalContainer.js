import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Dialog from "material-ui/Dialog";
import MdClear from "react-icons/lib/md/clear";

import { clearErrors } from "../../redux/actions";

class AuthModalContainer extends Component {
  closeModal = () => {
    this.props.clearErrors();
    this.props.closeModal();
  };

  render() {
    const { children, errorMsg, isOpen, isSuccessMsg, title } = this.props;

    return (
      <Dialog
        autoDetectWindowHeight
        autoScrollBodyContent
        className="auth-modal-container"
        onRequestClose={this.closeModal}
        open={isOpen}
        title={title}
      >
        <MdClear className="close-icon" onClick={this.closeModal} />
        {children}
        <p className={isSuccessMsg ? "success-message" : "error-message"}>
          {errorMsg}
        </p>
      </Dialog>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      clearErrors
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(AuthModalContainer);
