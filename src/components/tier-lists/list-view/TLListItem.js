import React, { Component } from "react";

import TLListItemHeader from "./TLListItemHeader";

export default class TLListItem extends Component {
  render() {
    const { tierList } = this.props;

    return (
      <div className="tl-list-item_container">
        <TLListItemHeader
          title={tierList.get("title")}
          user={tierList.get("user")}
        />
        <div className="tl-list-item_body">tier list body</div>
      </div>
    );
  }
}
