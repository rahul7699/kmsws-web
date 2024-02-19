import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./application/pages/Layout";
import Home from "./application/pages/Home";
import Blogs from "./application/pages/Blogs";
import Contact from "./application/pages/Contact";
import NoPage from "./application/pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
          
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);