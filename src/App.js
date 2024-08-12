
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
import LoginPage from './pages/loginPage/LoginPage';
import ProfilePage from './pages/profilePage/ProfilePage';
import TVDetailPage from './pages/tvDetail/TVDetailPage';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/projectReactjs/' element={<LoginPage />} />
        <Route path='/movie' element={<MoviePage />} />
        <Route path='/projectReactjs/movie' element={<MoviePage />} />
        <Route path='/tvseries' element={<TVSeriesPage />} />
        <Route path='/favorite' element={<FavoritePage />} />
        <Route path='/movieDetailPage/:movie_id' element={<MovieDetailPage />} />
        <Route path='/tvDetailPage/:tv_id' element={<TVDetailPage />} />
        <Route path='/genres/:genres_name' element={<MovieGenresPage />} />
        <Route path='/movie/:name' element={<MovieSearchPage />} />
        <Route path='/tvseries/:name' element={<TVSearchPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}


export default App;
