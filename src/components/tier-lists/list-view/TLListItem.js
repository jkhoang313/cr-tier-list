import React, { Component } from "react";

export default class TLListItem extends Component {
  render() {
    const { tierList } = this.props;

    return (
      <div className="tl-list-item_container">
        <div className="tl-list-item_header">{tierList.get("title")}</div>
        <div className="tl-list-item_body">tier list body</div>
      </div>
    );
  }
}
