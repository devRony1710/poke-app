import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '@/pages/home/Home';
import { NotFound } from '@/pages/not-found/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/pokemon-detail/:id',
    element: (
      <div>
        <span>hola</span>
      </div>
    ),
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
