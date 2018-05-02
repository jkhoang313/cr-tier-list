import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchTierLists } from "../../../redux/actions";
import LoadingCircle from "../../generic/LoadingCircle";

class TLListContainer extends Component {
  componentDidMount() {
    const { fetchTierLists, match } = this.props;

    fetchTierLists(match.params.listTypeId);
  }

  render() {
    if (this.props.isFetchingTierLists) {
      return <LoadingCircle />;
    }
    return <div>Tier Lists View</div>;
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
