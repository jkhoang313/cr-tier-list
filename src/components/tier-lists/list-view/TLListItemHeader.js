import React, { Component } from "react";
import { Link } from "react-router-dom";

import Tooltip from "../../generic/Tooltip";

export default class TLListItemHeader extends Component {
  render() {
    const { description, tierId, title, user } = this.props;

    return (
      <div className="tl-list-item_header">
        <div className="tl-list-item_header__title">
          <Link className="title-name" to={`/tier-list/${tierId}`}>
            {title}
          </Link>
          <Tooltip
            tooltipId={`tier-${tierId}-desc`}
            tooltipText={description}
          />
        </div>
        <div className="tl-list-item_header__creator">
          {user.get("username")}
        </div>
      </div>
    );
  }
}
