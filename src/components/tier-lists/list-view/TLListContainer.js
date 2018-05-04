import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchTierLists } from "../../../redux/actions";
import LoadingCircle from "../../generic/LoadingCircle";
import TLListItem from "./TLListItem";

class TLListContainer extends Component {
  state = {
    limit: 10,
    offset: 0
  };

  componentDidMount() {
    const { fetchTierLists } = this.props;
    const { limit, offset } = this.state;

    fetchTierLists({ limit, offset });
  }

  render() {
    const { isFetchingTierLists, tierLists } = this.props;

    if (isFetchingTierLists) {
      return <LoadingCircle />;
    }
    return (
      <div>
        Tier Lists View
        {tierLists.map((tierList, i) => (
          <TLListItem key={i} tierList={tierList} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFetchingTierLists: state.tierLists.get("isFetchingTierLists"),
  tierLists: state.tierLists.get("tierLists")
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchTierLists
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(TLListContainer);
