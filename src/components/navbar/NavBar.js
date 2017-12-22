import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Toolbar, ToolbarGroup, ToolbarTitle } from "material-ui/Toolbar";
import FlatButton from "material-ui/FlatButton";

import { logout } from "../../redux/actions";
import UserDropdown from "./UserDropdown";

class NavBar extends Component {
  render() {
    const {
      emailAddress,
      openChangePWModal,
      openLoginModal,
      openSignUpModal,
      loggedIn,
      logout
    } = this.props;

    return (
      <Toolbar className="top-navbar">
        <ToolbarGroup>
          <ToolbarTitle style={{ color: "black" }} text="React-Boilerplate" />
        </ToolbarGroup>
        <ToolbarGroup>
          {loggedIn ? (
            <UserDropdown
              emailAddress={emailAddress}
              logout={logout}
              openChangePWModal={openChangePWModal}
            />
          ) : (
            [
              <FlatButton key={1} label="Login" onClick={openLoginModal} />,
              <FlatButton key={2} label="Sign Up" onClick={openSignUpModal} />
            ]
          )}
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.get("currentUser").size,
  emailAddress: state.auth.getIn(["currentUser", "email_address"])
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      logout
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
