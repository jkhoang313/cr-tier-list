import React, { Component } from "react";

import TLListItemHeader from "./TLListItemHeader";
import TLListItemBody from "./TLListItemBody";

export default class TLListItem extends Component {
  render() {
    const { tierList } = this.props;

    return (
      <div className="tl-list-item_container">
        <TLListItemHeader tierList={tierList} />
        <TLListItemBody tiers={tierList.get("tiers")} />
      </div>
    );
  }
}
