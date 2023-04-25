import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import MovieDetail from './components/movieDetail/MovieDetail';
import PageNotFound from './components/pageNotFound/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
          <Route index element={<Home />} />
          <Route path='moviedetail' element={<MovieDetail />} />
          <Route path='pagenotfound' element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
