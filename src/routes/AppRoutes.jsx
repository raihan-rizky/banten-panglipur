import Beranda from '../views/pages/Beranda';
import { Routes, Route } from 'react-router-dom';
import IsiContent from '../views/templates/TemplateCreator';
import ProfileWeb from '../views/pages/ProfileWeb';
import Wisata from '../views/pages/Wisata';
import Budaya from '../views/pages/Budaya';
// import Favorite from '../views/templates/Favorite';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Beranda />} />
      <Route path="/wisata/:id" element={<IsiContent />} />
      <Route path="/budaya/:id" element={<IsiContent />} />
      <Route path='/profile' element={<ProfileWeb />} />
      <Route path='/wisata' element={<Wisata />} />
      <Route path='/Budaya' element={<Budaya />} />
      {/* <Route path='/Favorite' element={<Favorite />} /> */}
    </Routes>
  );
}
export default AppRoutes;
