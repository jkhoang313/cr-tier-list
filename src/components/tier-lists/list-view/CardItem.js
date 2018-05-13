import React, { PureComponent } from "react";
import { connect } from "react-redux";

import { nameToImage } from "../../../helpers";
import Tooltip from "../../generic/Tooltip";

class CardItem extends PureComponent {
  render() {
    const { cardId, cardsLibrary } = this.props;

    if (!cardsLibrary.size) {
      return null;
    }
    const selectedCard = cardsLibrary.find(card => card.get("id") === cardId);

    return (
      <span className="card-item-container">
        <Tooltip
          tooltipId={`card-${selectedCard.get("name")}`}
          tooltipText={selectedCard.get("name")}
        >
          <img
            alt={selectedCard.get("name")}
            className="card-image"
            src={`../../../../cardImages/${nameToImage(
              selectedCard.get("name")
            )}.png`}
          />
        </Tooltip>
      </span>
    );
  }
}

const mapStateToProps = state => ({
  cardsLibrary: state.cards.get("cardsLibrary")
});

export default connect(mapStateToProps)(CardItem);
