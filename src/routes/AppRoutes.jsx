import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Beranda from '../views/pages/Beranda';
import TemplateCreator from '../views/templates/TemplateCreator';
import ProfileWeb from '../views/pages/ProfileWeb';
import Wisata from '../views/pages/Wisata';
import Budaya from '../views/pages/Budaya';
import Favorite from '../views/templates/Favorite';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Beranda />} />
      <Route path="/wisata/:id" element={<TemplateCreator />} />
      <Route path="/budaya/:id" element={<TemplateCreator />} />
      <Route path='/profile' element={<ProfileWeb />} />
      <Route path='/wisata' element={<Wisata />} />
      <Route path='/budaya' element={<Budaya />} />
      <Route path='/Favorite' element={<Favorite />} />
    </Routes>
  );
}

export default AppRoutes;
