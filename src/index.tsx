import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './overwrite.scss';
import './styles.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';



const render = (Component: any) => {
  ReactDOM.render(
    <React.StrictMode>
      <Component />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

render(App);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
