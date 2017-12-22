import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { actionToDispatch } from "./redux/actions";

class ExampleSmartComponent extends Component {
  render() {
    return <div />;
  }
}

const mapStateToProps = state => {
  exampleProp: state.exampleProp.get("example");
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      actionToDispatch
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(
  ExampleSmartComponent
);
