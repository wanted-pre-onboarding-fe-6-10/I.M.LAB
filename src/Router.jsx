import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import MovieDetail from './pages/MovieDetail/MovieDetail';
import MovieReview from './pages/MovieDetail/MovieReview/MovieReview';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:movieId/:movieName" element={<MovieDetail />} />
        <Route path="/:movieId/:movieName/reviews" element={<MovieReview />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
