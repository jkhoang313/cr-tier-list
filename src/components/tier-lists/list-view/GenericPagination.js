import React, { PureComponent } from "react";
import Pagination from "react-js-pagination";

export default class GenericPagination extends PureComponent {
  render() {
    const {
      changePage,
      currentPage,
      hidden = false,
      listsPerPage,
      totalTierLists
    } = this.props;

    if (hidden) {
      return null;
    }
    return (
      <div className="text-center">
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
