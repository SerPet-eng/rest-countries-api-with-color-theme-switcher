import { Routes, Route } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import Loading from './event/Loading';
import NotFound from './event/NotFound';
import { lazy, Suspense } from 'react';

const Content = lazy(() => import('./pages/Content'));
const ContentPreview = lazy(() => import('./pages/ContentPreview'));

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <Content />
            </Suspense>
          }
        />
        <Route
          path="/:id"
          element={
            <Suspense fallback={<Loading />}>
              <ContentPreview />
            </Suspense>
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
