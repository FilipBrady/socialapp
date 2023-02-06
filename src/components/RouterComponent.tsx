import { Route, Routes } from 'react-router-dom';
import { routes } from '../data/routes';
import AddPostPage from '../pages/AddPostPage';
import ExploreSite from '../pages/ExploreSite';
import Home from '../pages/Home';
import ProfilPage from '../pages/ProfilPage';

const RouterComponent = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<Home />} />
      <Route path={routes.explore} element={<ExploreSite />} />
      <Route path={routes.profil} element={<ProfilPage />} />
      <Route path={routes.addPost} element={<AddPostPage />} />
    </Routes>
  );
};
export default RouterComponent;
