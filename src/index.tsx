import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './overwrite.scss';
import './styles.scss';
import { AppContainer, } from 'react-hot-loader';
import Providers from './Providers';
import App from './App';
import reportWebVitals from './reportWebVitals';



const render = (Component: any) => {
  ReactDOM.render(
    <React.StrictMode>
      <AppContainer>
        <Providers>
          <Component />
        </Providers>
      </AppContainer>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    render(require('./App'));
  });
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
