import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import MovieReview from './pages/MovieDetail/MovieReview/MovieReview';
import MovieDetail from './pages/MovieDetail/MovieMain';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:movieId/:movieName/reviews" element={<MovieReview />} />
        <Route path="/movieDetail/:path" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
