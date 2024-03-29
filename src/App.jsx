import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES IMPORTING
import Main from "./pages/main";
import Home from "./pages/home";
import Top from "./pages/top";
import News from "./pages/news";
import Live from "./pages/live";
import Movie from "./pages/movie";
import Contact from "./pages/contact";

// COMPONENTS IMPORTING
import ScrollH from "./components/scroll-horizontal";

// IMPORTING OTHER THINGS
import Navbar from "./components/navbar";
import SideNavbar from "./components/sideNavbar";
import Footer from "./components/footer";
import Wallpapers from "./assets/yorushika-blue.jpg";

function App() {
  return (
    <div>
      <Router>
        <Main></Main>
        <ScrollH></ScrollH>
        <div className="flex flex-row gap-6 m-12">
          <div className="w-72 bg-slate-500 h-72">
            <SideNavbar></SideNavbar>
          </div>
          <div className="w-screen">
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/top" element={<Top></Top>}></Route>
              <Route path="/news" element={<News></News>}></Route>
              <Route path="/live" element={<Live></Live>}></Route>
              <Route path="/movie" element={<Movie></Movie>}></Route>
              <Route path="/contact" element={<Contact></Contact>}></Route>
            </Routes>
          </div>
        </div>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
