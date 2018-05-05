import React, { Component } from "react";
import ReactTooltip from "react-tooltip";

import FaQuestionCircleO from "react-icons/lib/fa/question-circle-o";

export default class Tooltip extends Component {
  render() {
    const { tooltipId, tooltipText } = this.props;

    return (
      <span className="tooltip-container">
        <FaQuestionCircleO
          className="tooltip-trigger"
          data-for={tooltipId}
          data-tip
        />
        <ReactTooltip id={tooltipId}>{tooltipText}</ReactTooltip>
      </span>
    );
  }
}
