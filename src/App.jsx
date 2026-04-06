import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Labs from './pages/Labs';
import People from './pages/People';
import Publications from './pages/Publications';
import Activities from './pages/Activities';
import Events from './pages/Events';
import Resources from './pages/Resources';
import NotFound from './pages/NotFound';

/**
 * App root — HashRouter is used for GitHub Pages compatibility.
 * All routes are defined here for easy reference.
 */
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="labs" element={<Labs />} />
          <Route path="people" element={<People />} />
          <Route path="publications" element={<Publications />} />
          <Route path="activities" element={<Activities />} />
          <Route path="events" element={<Events />} />
          <Route path="resources" element={<Resources />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
