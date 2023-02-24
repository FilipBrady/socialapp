import { SetStateAction } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from '../data/routes';
import AddPostPage from '../pages/AddPostPage';
import ExploreSite from '../pages/ExploreSite';
import Home from '../pages/Home';
import LogInPage from '../pages/LogInPage';
import MyProfilPage from '../pages/MyProfilPage';
import ProfilPage from '../pages/ProfilPage';
import SignUpPage from '../pages/SignUpPage';
import ProfileOpenImage from './ProfileOpenImage';

const RouterComponent = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<Home />} />
      <Route path={routes.explore} element={<ExploreSite />} />
      <Route path={routes.profil} element={<ProfilPage />} />
      <Route path={`${routes.profil}/:id`} element={<ProfilPage />} />
      <Route path={routes.myProfil} element={<MyProfilPage />} />
      <Route path={routes.addPost} element={<AddPostPage />} />
      <Route path={routes.logIn} element={<LogInPage />} />
      <Route path={routes.signUp} element={<SignUpPage />} />
    </Routes>
  );
};
export default RouterComponent;
