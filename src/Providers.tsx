import { Suspense } from 'react';
import { hot } from 'react-hot-loader';



const Providers = ({ children }: any) => {
  return (
    <Suspense fallback={null}>
      {children}
    </Suspense>
  );
}

export default hot(module)(Providers);
