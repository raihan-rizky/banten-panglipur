import Beranda from '../views/pages/Beranda'
import { Routes, Route } from 'react-router-dom';
import IsiBudaya from '../views/templates/TemplateCreator';
import ProfileWeb from '../views/pages/ProfileWeb';
import Wisata from '../views/pages/Wisata';
import Budaya from '../views/pages/Budaya';
// import Favorite from '../views/templates/Favorite'


const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<Beranda />}></Route>
      <Route path="/budaya/:id" element={<IsiBudaya />}></Route>
      <Route path='/profile' element={<ProfileWeb />}></Route>
      <Route path='/wisata' element={<Wisata />}></Route>
      <Route path='/Budaya' element={<Budaya />}></Route>
      {/* <Route path='/Favorite' element={<Favorite />}></Route> */}
    </Routes>
  )
}
export default AppRoutes;