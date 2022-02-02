import { hot } from 'react-hot-loader';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import ScrollToTopOnMount from './ScrollToTopOnMount';
import { twitterUsername } from '../constants';



function Seo({ title, description, meta, children }) {
  const { i18n, t } = useTranslation();
  const metaDescription = description;
  const defaultTitle = t('projectName');

  return (
    <>
      <ScrollToTopOnMount />
      <Helmet
        htmlAttributes={{
          lang: i18n.language,
        }}

        title={title}
        defaultTitle={defaultTitle}
        titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}

        meta={[
          {
            name: `description`,
            content: metaDescription,
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary_large_image`,
          },
          {
            name: `twitter:creator`,
            content: twitterUsername ? twitterUsername : '',
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: metaDescription,
          },
        ].concat(meta)}
      >
      </Helmet>
      {children}
    </>
  )
}

export default hot(module)(Seo);
