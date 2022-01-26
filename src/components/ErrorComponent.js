import { hot } from 'react-hot-loader';
import { useTranslation } from 'react-i18next';



function ErrorComponent() {
  const { t } = useTranslation();
  return (
    <div className='error-component'>
      <h1>{t('Something went wrong')}</h1>
      <h2>{t('We are working to resolve the problem')}</h2>
    </div>
  );
};

export default hot(module)(ErrorComponent);
