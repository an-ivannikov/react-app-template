import { hot } from 'react-hot-loader';
import Seo from './Seo';
import Header from './Header';
import Footer from './Footer';



function Page({ title, description, meta, children }) {

  return (
    <>
      <Seo
        title={title}
        description={description}
        meta={meta ? meta : []}
      />
      <Header fixed={true} />
      {children}
      <Footer />
    </>
  );
};

export default hot(module)(Page);
