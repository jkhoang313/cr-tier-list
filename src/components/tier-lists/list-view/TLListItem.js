import React, { Component } from "react";

import TLListItemHeader from "./TLListItemHeader";
import TLListItemBody from "./TLListItemBody";

export default class TLListItem extends Component {
  render() {
    const { tierList } = this.props;

    return (
      <div className="tl-list-item_container">
        <TLListItemHeader
          description={tierList.get("description")}
          tierId={tierList.get("id")}
          title={tierList.get("title")}
          user={tierList.get("user")}
        />
        <TLListItemBody tiers={tierList.get("tiers")} />
      </div>
    );
  }
}
