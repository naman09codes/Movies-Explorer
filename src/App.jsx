import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Favourite from "./pages/favourite";
import MoviesDetail from "./pages/MovieDetails";
import Error from "./pages/Error";
import { BrowserRouter,Routes,Route } from "react-router-dom";


const App =()=>{
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/movies" element={<Movies/>}></Route>
      <Route path="/movies- details" element={<MoviesDetail/>}></Route>
      <Route path="/fav" element={<Favourite/>}></Route>
      <Route path="/*" element={<Error/>}></Route>
    </Routes>
    </BrowserRouter>
  )
};

export default App;
