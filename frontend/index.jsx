import React from 'react';
import ReactDOM from 'react-dom';
// import configureStore from './store/store';
import App from './app';
// import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';


const Root = () => {
  return (
    <HashRouter>
      <App/>
    </HashRouter>
  )
  // <Provider store={store}>
  // </Provider>
};




document.addEventListener("DOMContentLoaded", () => {

  // const store = configureStore();

  const root = document.getElementById("root");
  ReactDOM.render(<Root/>, root);
})
