import React, { PureComponent } from "react";
import Pagination from "react-js-pagination";

export default class GenericPagination extends PureComponent {
  render() {
    const {
      changePage,
      currentPage,
      listsPerPage,
      totalTierLists
    } = this.props;

    return (
      <div>
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={listsPerPage}
          totalItemsCount={totalTierLists}
          pageRangeDisplayed={5}
          onChange={changePage}
        />
      </div>
    );
  }
}
