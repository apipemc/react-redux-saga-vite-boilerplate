import { useRoutes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { HistoryRouter as Router } from 'redux-first-history/rr6';

import store, { history, persistor } from './config/store';
import router from './config/router';

const Routes = () => useRoutes(router);

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router history={history}>
        <Routes />
      </Router>
    </PersistGate>
  </Provider>
);

export default App;
