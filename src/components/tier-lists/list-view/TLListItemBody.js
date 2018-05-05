import React, { Component } from "react";

import TierRow from "./TierRow";

export default class TLListItemBody extends Component {
  render() {
    const { tiers } = this.props;

    return (
      <div className="tl-list-item_body">
        {tiers.map((tier, i) => <TierRow key={i} tier={tier} />)}
      </div>
    );
  }
}
