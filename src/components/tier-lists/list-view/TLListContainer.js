import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Row, Col } from "react-bootstrap";

import { fetchTierLists } from "../../../redux/actions";
import LoadingCircle from "../../generic/LoadingCircle";
import GenericPagination from "./GenericPagination";
import TLListItem from "./TLListItem";

const LISTS_PER_PAGE = 10;

class TLListContainer extends Component {
  state = {
    currentPage: 1
  };

  changePage = newPage => {
    const { fetchTierLists } = this.props;
    const offset = newPage - 1;

    this.setState({
      currentPage: newPage
    });
    fetchTierLists({
      limit: LISTS_PER_PAGE,
      offset: offset * LISTS_PER_PAGE
    });
  };

  componentDidMount() {
    const { fetchTierLists } = this.props;
    const { currentPage } = this.state;
    const offset = currentPage - 1;

    fetchTierLists({
      limit: LISTS_PER_PAGE,
      offset: offset * LISTS_PER_PAGE
    });
  }

  render() {
    const { isFetchingTierLists, tierLists, totalTierLists } = this.props;
    const { currentPage } = this.state;

    return (
      <Row className="tl-list-container_container">
        <Col sm={10} smOffset={1}>
          <div>Tier Lists View</div>
          <GenericPagination
            changePage={this.changePage}
            currentPage={currentPage}
            listsPerPage={LISTS_PER_PAGE}
            totalTierLists={totalTierLists}
          />
          {isFetchingTierLists ? (
            <LoadingCircle />
          ) : (
            tierLists.map((tierList, i) => (
              <TLListItem key={i} tierList={tierList} />
            ))
          )}
          <GenericPagination
            changePage={this.changePage}
            currentPage={currentPage}
            listsPerPage={LISTS_PER_PAGE}
            totalTierLists={totalTierLists}
          />
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  isFetchingTierLists: state.tierLists.get("isFetchingTierLists"),
  tierLists: state.tierLists.get("tierLists"),
  totalTierLists: state.tierLists.get("totalTierLists")
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchTierLists
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(TLListContainer);
