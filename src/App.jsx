/**
 * Root layout component. Composes the shell: Navbar, route content, Sidebar, Submenu.
 * Routes define which component renders in the middle (Hero for "/", page components for submenu paths).
 * Navbar, Sidebar, and Submenu are always mounted so context-driven UI (e.g. submenu visibility) works.
 */
import { Routes, Route } from 'react-router-dom';
import Hero from './Hero';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Submenu from './Submenu';
import ProductCommunity from './pages/ProductCommunity';
import ProductContent from './pages/ProductContent';
import ProductRoles from './pages/ProductRoles';
import SolutionsDevelopers from './pages/SolutionsDevelopers';
import SolutionsContentManagers from './pages/SolutionsContentManagers';
import SolutionsBusinessTeams from './pages/SolutionsBusinessTeams';
import SolutionsEcommerce from './pages/SolutionsEcommerce';
import ResourcesStarters from './pages/ResourcesStarters';
import ResourcesShowcase from './pages/ResourcesShowcase';

const App = () => {
  return (
    <main>
      <Navbar />
      {/* Client-side routes; only the matched Route's element is rendered here */}
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/product/community' element={<ProductCommunity />} />
        <Route path='/product/content' element={<ProductContent />} />
        <Route path='/product/roles' element={<ProductRoles />} />
        <Route path='/solutions/developers' element={<SolutionsDevelopers />} />
        <Route path='/solutions/content-managers' element={<SolutionsContentManagers />} />
        <Route path='/solutions/business-teams' element={<SolutionsBusinessTeams />} />
        <Route path='/solutions/ecommerce' element={<SolutionsEcommerce />} />
        <Route path='/resources/starters' element={<ResourcesStarters />} />
        <Route path='/resources/showcase' element={<ResourcesShowcase />} />
      </Routes>
      <Sidebar />
      <Submenu />
    </main>
  );
};
export default App;
