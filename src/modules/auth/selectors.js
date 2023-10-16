import { createSelector } from "reselect";

const getAuth = (state) => state.auth;
export const isAuthLoggedIn = createSelector(
  getAuth,
  (auth) => auth.isLoggedIn
);

export default getAuth;
