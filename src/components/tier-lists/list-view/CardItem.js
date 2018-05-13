import React, { PureComponent } from "react";
import { connect } from "react-redux";

import { nameToImage } from "../../../helpers";

class CardItem extends PureComponent {
  render() {
    const { cardId, cardsLibrary } = this.props;

    if (!cardsLibrary.size) {
      return null;
    }
    const selectedCard = cardsLibrary.find(card => card.get("id") === cardId);

    return (
      <span className="card-item-container">
        <img
          alt={selectedCard.get("name")}
          className="card-image"
          src={`../../../../cardImages/${nameToImage(
            selectedCard.get("name")
          )}.png`}
        />
      </span>
    );
  }
}

const mapStateToProps = state => ({
  cardsLibrary: state.cards.get("cardsLibrary")
});

export default connect(mapStateToProps)(CardItem);
