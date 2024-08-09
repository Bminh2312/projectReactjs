
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '../src/app.css';
import MovieDetailPage from "./pages/movieDetailPage/MovieDetailPage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import MovieSearchPage from './pages/movieSearchPage/MovieSearchPage';
import MoviePage from './pages/moviePage/MoviePage';
import MovieGenresPage from './pages/movieGenresPage/MovieGenresPage';
import TVSeriesPage from './pages/tvPage/TVSeriesPage';
import HomePage from './pages/home/HomePage';
import FavoritePage from './pages/favoritePage/FavoritePage';
import TVSearchPage from './pages/tvPage/TVSearchPage';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movie' element={<MoviePage />} />
        <Route path='/tvseries' element={<TVSeriesPage />} />
        <Route path='/favorite' element={<FavoritePage />} />
        <Route path='/movieDetailPage/:movie_id' element={<MovieDetailPage />} />
        <Route path='/genres/:genres_name' element={<MovieGenresPage />} />
        <Route path='/movie/:name' element={<MovieSearchPage />} />
        <Route path='/tvseries/:name' element={<TVSearchPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}


export default App;
