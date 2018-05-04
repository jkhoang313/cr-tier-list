/* global Promise */

export const callApi = (
  url,
  actionType,
  requestInfo,
  params = null,
  // this function prevents requests from being sent if the state has certain keys already
  shouldHitApi = () => true
) => {
  const baseRequestInfo = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Auth-Token": sessionStorage.getItem("authToken")
    }
  };
  const finalRequestInfo = {
    ...baseRequestInfo,
    ...requestInfo
  };

  return function(dispatch, getState) {
    if (!shouldHitApi(getState())) {
      return new Promise(() => {});
    }

    dispatch(createReduxResponse(actionType.REQUEST, params));

    return fetch(process.env.REACT_APP_BACKEND_URL + url, finalRequestInfo)
      .then(response => {
        switch (response.status) {
          case 404:
            // should push to not-found
            dispatch(createReduxResponse(actionType.FAILURE));
            break;
          default:
            return response.json();
        }
      })
      .then(json => {
        if (json) {
          if (json.error) {
            return {
              success: false,
              data: dispatch(createReduxResponse(actionType.FAILURE, json))
            };
          } else {
            return {
              success: true,
              data: dispatch(createReduxResponse(actionType.SUCCESS, json))
            };
          }
        }
      });
  };
};

export const toQueryString = (queryParams = {}) => {
  return Object.keys(queryParams).reduce(
    (currentQuery, queryKey) =>
      currentQuery + `${queryKey}=${queryParams[queryKey]}`,
    "?"
  );
};

export const createResponseTypes = actionType => ({
  BASE: actionType,
  REQUEST: `${actionType}_REQUEST`,
  SUCCESS: `${actionType}_SUCCESS`,
  FAILURE: `${actionType}_FAILURE`
});

const createReduxResponse = (actionType, params) => ({
  type: actionType,
  payload: params
});
