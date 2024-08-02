import HomePage from "./pages/home/HomePage";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import '../src/app.css';
import MovieDetailPage from "./pages/movieDetailPage/MovieDetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/movieDetailPage' element={<MovieDetailPage/>}/>
        {/* <Route path='/product' element={<Product/>}/>
        <Route path='/product/:id' element={<Product/>}/> */}
      </Routes>
    </Router>
  );
}


export default App;
