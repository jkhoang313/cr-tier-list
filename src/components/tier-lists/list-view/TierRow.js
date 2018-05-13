import React, { Component } from "react";

import CardItem from "./CardItem";

export default class TierRow extends Component {
  render() {
    const { tier } = this.props;

    return (
      <div className="tier-row-container">
        Tier row
        <div>
          {tier
            .get("cards")
            .map((cardId, i) => <CardItem cardId={cardId} key={i} />)}
        </div>
      </div>
    );
  }
}
