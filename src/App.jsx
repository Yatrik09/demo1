import About from "./component/about";
import Navbar from "./component/Navbar";
import Contact from "./component/Contact";
import{BrowserRouter,Routes,Route} from "react-router-dom";

function App(){
  return(
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App