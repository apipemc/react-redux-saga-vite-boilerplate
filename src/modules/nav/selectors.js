import { createSelector } from 'reselect';

const getNav = (state) => state.nav;
export const getNavPathname = createSelector(getNav, (nav) => nav.pathname);
export const getNavParams = createSelector(getNav, (nav) => nav.params);

export default getNav;
