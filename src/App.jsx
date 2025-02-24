import About from "./component/about";
import Navbar from "./component/Navbar";
import{BrowserRouter,Routes,Route} from "react-router-dom";

function App(){
  return(
    <>
    <BrowserRouter>
  
    <Routes>
      <Route path="/about" element={<About/>} />
      <Route path="/" element={<Navbar/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App