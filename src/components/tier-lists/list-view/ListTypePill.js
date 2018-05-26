import React, { Component } from "react";
import Chip from "material-ui/Chip";

class ListTypePill extends Component {
  render() {
    const { listType } = this.props;

    return (
      <Chip style={{ display: "inline-block" }}>{listType.get("name")}</Chip>
    );
  }
}

export default ListTypePill;
