import { hot } from 'react-hot-loader';
import { useTranslation } from 'react-i18next';
import logo from './logo.svg';
import './App.scss';



const App = () => {
  const { i18n, t } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{t('Language')}: {i18n.language}</p>
      </header>
    </div>
  );
}

export default hot(module)(App);
