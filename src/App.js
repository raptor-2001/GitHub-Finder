import Navbar from "./components/layout/Navbar";
// eslint-disable-next-line
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Footer from "./components/layout/Footer";
import Alert from "./components/layout/Alert";
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";
import PageNotFound from "./pages/PageNotFound";
import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";



// https://raptor-github-finder-raptor-2001.vercel.app/


function App(){
  return(
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar title={'GitHub Finder'}/>
            <main className=" container mx-auto  px-3 p-12">
              <Alert/>
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/user/:login" element={<User/>} />
                <Route path="/*" element={<PageNotFound/>} />
              </Routes>
            </main>
            <Footer/>
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
