import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Top from "./pages/top";
import Footer from "./components/footer";
import Main from "./pages/main";

function App() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="" element={<Main></Main>}></Route>
          <Route path="/top" element={<Top></Top>}></Route>
          <Route></Route>
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
