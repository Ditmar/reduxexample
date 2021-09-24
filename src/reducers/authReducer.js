import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.authLogin: {
      const { id, displayName, photo } = action.payload;
      return {
        user: { id, displayName, photo },
      };
    }
    case types.authLogout: {
      return {};
    }
    case types.authError: {
      return { ...state, msnerror: action.payload };
    }
    default: {
      return state;
    }
  }
};
