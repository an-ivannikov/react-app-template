import { Suspense, lazy } from 'react';
import { hot } from 'react-hot-loader';
import { Routes, Route, Navigate } from 'react-router-dom';
import { routerPaths } from './helper';
import ErrorBoundary from '../components/ErrorBoundary';



const HomePage = lazy(() => import('../pages/HomePage'));

const AppRouter = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={null}>
        <Routes>
          <Route path={routerPaths.main} exact element={<HomePage />} />

          <Route path="*" element={<Navigate replace to={routerPaths.main} />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default hot(module)(AppRouter);
