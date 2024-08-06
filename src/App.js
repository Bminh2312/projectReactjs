
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '../src/app.css';
import MovieDetailPage from "./pages/movieDetailPage/MovieDetailPage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import MovieSearchPage from './pages/movieSearchPage/MovieSearchPage';
import MoviePage from './pages/moviePage/MoviePage';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MoviePage />} />
        <Route path='/movie' element={<MoviePage />} />
        <Route path='/movieDetailPage/:movie_id' element={<MovieDetailPage />} />
        <Route path='/search/:search' element={<MovieSearchPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}


export default App;
