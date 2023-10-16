import { createReduxHistoryContext } from "redux-first-history";
import { createBrowserHistory } from "history";

const browserHistory = createBrowserHistory({
  basename: "/",
});

// scrolls to top on every route change
browserHistory.listen(() => window.scrollTo(0, 0));

const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({
    history: browserHistory,
  });

export { createReduxHistory, routerMiddleware, routerReducer };
export default browserHistory;
