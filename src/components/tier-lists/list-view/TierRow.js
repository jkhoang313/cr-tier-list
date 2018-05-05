import React, { Component } from "react";

export default class TierRow extends Component {
  render() {
    const { tier } = this.props;

    return (
      <div className="tier-row-container">
        Tier row
        <div>
          {tier
            .get("cards")
            .map((cardId, i) => <span key={i}>{cardId + " "}</span>)}
        </div>
      </div>
    );
  }
}
