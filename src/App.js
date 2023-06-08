import Navbar from "./components/Navbar";
import "./index.css";
import Home from "./components/Home";
import Pricing from "./components/Pricing";
import About from "./components/About";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;

    case "/pricing":
      component = <Pricing />;
      break;
    case "/about":
      component = <About />;
      break;
  }
  
  return (
    <>
    <Navbar />
    <div className="container">
    {component}
    </div>
  </>
  
  )
}

export default App;
