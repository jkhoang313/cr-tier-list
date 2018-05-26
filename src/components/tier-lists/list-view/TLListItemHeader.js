import React, { Component } from "react";
import { Link } from "react-router-dom";

import Tooltip from "../../generic/Tooltip";
import ListTypePill from "./ListTypePill";

export default class TLListItemHeader extends Component {
  render() {
    const { tierList } = this.props;

    return (
      <div className="tl-list-item_header">
        <div className="tl-list-item_header__title">
          <Link className="title-name" to={`/tier-list/${tierList.get("id")}`}>
            {tierList.get("title")}
          </Link>
          <Tooltip
            tooltipId={`tier-${tierList.get("id")}-desc`}
            tooltipText={tierList.get("description")}
          />
        </div>
        <div className="tl-list-item_header__creator">
          {tierList.getIn(["user", "username"])}
        </div>
        <div className="tl-list-item_header__list_types">
          {tierList
            .get("tier_list_types")
            .map((listType, i) => <ListTypePill key={i} listType={listType} />)}
        </div>

        <div className="tl-list-item_header__upvotes">
          {tierList.get("upvotes")} upvote(s)
        </div>
      </div>
    );
  }
}
