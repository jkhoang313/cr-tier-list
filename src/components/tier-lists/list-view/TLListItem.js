import React, { Component } from "react";

export default class TLListItem extends Component {
  render() {
    const { tierList } = this.props;

    return <div>{tierList.get("title")}</div>;
  }
}
