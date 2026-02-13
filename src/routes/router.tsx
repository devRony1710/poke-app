import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '@/pages/home/Home';
import { NotFound } from '@/pages/not-found/NotFound';
import { PokemonDetailPage } from '@/pages/pokemon-detail-page/PokemonDetailPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/pokemon-detail',
    element: <PokemonDetailPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
