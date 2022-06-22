import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
import App from './App';

import store from './redux/store';
import { Provider } from 'react-redux';

import './firebase.config';
import reportWebVitals from './reportWebVitals';

import './index.scss';

const rootItem = document.getElementById('root');

if (rootItem) {
  const root = ReactDOM.createRoot(rootItem);

  root.render(
    <React.StrictMode>
      {/* <BrowserRouter> */}
      <HashRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </HashRouter>
      {/* </BrowserRouter> */}
    </React.StrictMode>,
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
