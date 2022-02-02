import { hot } from 'react-hot-loader';
import { useTranslation } from 'react-i18next';
import Page from '../components/Page';
import logo from '../logo.svg';
import './HomePage.scss';



const HomePage = () => {
  const { i18n, t } = useTranslation();

  return (
    <Page title={''} description={''} meta={[]}>
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
    </Page>
  );
}

export default hot(module)(HomePage);
