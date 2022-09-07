import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Nav from './components/Nav';
import TopRated from './pages/TopRated/TopRated';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top_rated" element={<TopRated />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
