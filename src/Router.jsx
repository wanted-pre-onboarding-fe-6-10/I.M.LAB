import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import MovieReview from './pages/MovieDetail/MovieReview/MovieReview';
import MovieDetail from './pages/MovieDetail/MovieMain';
import Nav from './components/Nav';
import TopRated from './pages/TopRated/TopRated';
import NowPlaying from './pages/NowPlaying/NowPlaying';
import Upcoming from './pages/Upcoming/Upcoming';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movieDetail/:path/reviews" element={<MovieReview />} />
        <Route path="/movieDetail/:path" element={<MovieDetail />} />
        <Route path="/top_rated" element={<TopRated />} />
        <Route path="/now_playing" element={<NowPlaying />} />
        <Route path="/upcoming" element={<Upcoming />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
