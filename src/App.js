import HomePage from "./pages/home/HomePage";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import '../src/app.css';
import MovieDetailPage from "./pages/movieDetailPage/MovieDetailPage";



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/movieDetailPage/:movie_id' element={<MovieDetailPage/>}/>
      </Routes>
    </Router>
  );
}


export default App;
