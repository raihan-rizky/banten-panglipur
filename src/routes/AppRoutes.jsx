import Beranda from '../views/pages/Beranda'
import { Routes, Route } from 'react-router-dom';
import IsiBudaya from '../views/templates/TemplateCreator';


const AppRoutes = () => {
 
  return( 
      <Routes>
        <Route path="/" element={<Beranda />}></Route>
        <Route path="/budaya/:id" element={<IsiBudaya />}></Route>
      </Routes>
  )
}
export default AppRoutes;