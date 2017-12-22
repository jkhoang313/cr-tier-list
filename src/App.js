import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import { getUser } from "./redux/actions";
import NavBar from "./components/navbar/NavBar";
import LoginModal from "./components/auth/LoginModal";
import SignUpModal from "./components/auth/SignUpModal";
import ResetPWModal from "./components/auth/ResetPWModal";
import ChangePWModal from "./components/auth/ChangePWModal";

class App extends Component {
  state = {
    changePWModalOpen: false,
    loginModalOpen: false,
    resetPWModalOpen: false,
    signUpModalOpen: false
  };

  initialState = this.state;

  closeModal = () => {
    this.setState(this.initialState);
  };

  componentDidMount = () => {
    if (sessionStorage.authToken) {
      this.props.getUser();
    }
  };

  openChangePWModal = () => {
    this.setState({
      ...this.initialState,
      changePWModalOpen: true
    });
  };

  openLoginModal = () => {
    this.setState({
      ...this.initialState,
      loginModalOpen: true
    });
  };

  openResetPWModal = () => {
    this.setState({
      ...this.initialState,
      resetPWModalOpen: true
    });
  };

  openSignUpModal = () => {
    this.setState({
      ...this.initialState,
      signUpModalOpen: true
    });
  };

  render() {
    const {
      changePWModalOpen,
      loginModalOpen,
      signUpModalOpen,
      resetPWModalOpen
    } = this.state;

    return (
      <MuiThemeProvider>
        <div className="app-container">
          <LoginModal
            closeModal={this.closeModal}
            isOpen={loginModalOpen}
            openResetPWModal={this.openResetPWModal}
            openSignUpModal={this.openSignUpModal}
          />
          <SignUpModal
            closeModal={this.closeModal}
            isOpen={signUpModalOpen}
            openLoginModal={this.openLoginModal}
          />
          <ResetPWModal
            closeModal={this.closeModal}
            isOpen={resetPWModalOpen}
            openLoginModal={this.openLoginModal}
          />
          <ChangePWModal
            closeModal={this.closeModal}
            isOpen={changePWModalOpen}
            openChangePWModal={this.openChangePWModal}
          />
          <NavBar
            openChangePWModal={this.openChangePWModal}
            openLoginModal={this.openLoginModal}
            openSignUpModal={this.openSignUpModal}
          />
          <h2>Create your new app here!</h2>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getUser
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(App);
