import React, { Component } from "react";
import Popover from "material-ui/Popover";
import Menu from "material-ui/Menu";
import MenuItem from "material-ui/MenuItem";
import FlatButton from "material-ui/FlatButton";
import NavigationExpandMoreIcon from "material-ui/svg-icons/navigation/expand-more";

class UserDropdown extends Component {
  state = {
    dropdownOpen: false,
    anchorEl: null
  };

  closeDropdown = () => {
    this.setState({
      dropdownOpen: false
    });
  };

  render() {
    const { emailAddress, openChangePWModal, logout } = this.props;
    const { anchorEl, dropdownOpen } = this.state;

    return (
      <div className="user-dropdown-container">
        <FlatButton
          className="dropdown-trigger"
          onClick={this.toggleDropdown}
          style={{
            paddingLeft: "1rem",
            paddingRight: "1rem"
          }}
        >
          <span className="email">{emailAddress}</span>
          <NavigationExpandMoreIcon style={{ verticalAlign: "middle" }} />
        </FlatButton>
        <Popover
          open={dropdownOpen}
          anchorEl={anchorEl}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          targetOrigin={{ horizontal: "right", vertical: "top" }}
          onRequestClose={this.closeDropdown}
        >
          <Menu onClick={this.closeDropdown}>
            <MenuItem
              onClick={openChangePWModal}
              primaryText="Change Password"
            />
            <MenuItem onClick={logout} primaryText="Logout" />
          </Menu>
        </Popover>
      </div>
    );
  }

  toggleDropdown = event => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      anchorEl: event.currentTarget
    });
  };
}

export default UserDropdown;
