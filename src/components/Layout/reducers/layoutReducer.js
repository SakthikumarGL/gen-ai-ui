import { SET_TENANT_DETAILS } from '../actions/actionTypes';

import initialState from '../../../redux/reducers/initialState';

// eslint-disable-next-line default-param-last
const layoutReducer = (state = initialState.layoutData, action) => {
  switch (action.type) {
    case SET_TENANT_DETAILS:
      return {
        ...state,
        tenantDetails: action.payload,
      };

    default:
      return state;
  }
};

export default layoutReducer;
