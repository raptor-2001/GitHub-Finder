import Navbar from "./components/layout/Navbar";
// eslint-disable-next-line
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import { GithubProvider } from "./context/github/GithubContext";




function App(){
  return(
    <GithubProvider>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Navbar title={'GitHub Finder'}/>
          <main className=" container mx-auto  px-3 p-12">
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/*" element={<PageNotFound/>} />
            </Routes>
          </main>
          <Footer/>
        </div>
      </Router>
    </GithubProvider>
  );
}

export default App;
