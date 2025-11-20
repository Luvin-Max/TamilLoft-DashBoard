import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import './App.css';

// Lazy load all page components for better performance
const Home = lazy(() => import('./pages/Home/Home'));
const Gallery = lazy(() => import('./pages/Gallery/Gallery'));
const Services = lazy(() => import('./pages/Services/Services'));
const About = lazy(() => import('./pages/About/About'));
const Jobs = lazy(() => import('./pages/Jobs/Jobs'));
const Contact = lazy(() => import('./pages/Contact/Contact'));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
      <p className="mt-4 text-gray-600">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="services" element={<Services />} />
            <Route path="about" element={<About />} />
            <Route path="jobs" element={<Jobs />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
