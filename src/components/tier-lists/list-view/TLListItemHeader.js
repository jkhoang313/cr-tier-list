import React, { Component } from "react";

export default class TLListItemHeader extends Component {
  render() {
    const { title, user } = this.props;

    return (
      <div className="tl-list-item_header">
        <div className="tl-list-item_header__title">
          <span>{title}</span>
        </div>
        <div className="tl-list-item_header__creator">
          {user.get("username")}
        </div>
      </div>
    );
  }
}
