import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchTierLists } from "../../../redux/actions";

class TLListContainer extends Component {
  render() {
    return <div>hi</div>;
  }
}

const mapStateToProps = state => ({
  isFetchingTierLists: state.tierLists.get("isFetchingTierLists")
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchTierLists
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(TLListContainer);
