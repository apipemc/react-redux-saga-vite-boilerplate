import { Suspense } from 'react';
import Loader from '@/views/components/loader';

import LayoutApp from '@/views/layouts/app';
import PageHome from '@/views/pages/home';

const rootRouter = [
  {
    path: '/',
    element: (
      <Suspense fallback={<Loader />}>
        <LayoutApp />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <PageHome />
          </Suspense>
        ),
        action: [],
      },
    ],
  },
];

export default rootRouter;
