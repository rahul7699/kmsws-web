import { Outlet, Link } from "react-router-dom";
import Navbar from "./Navbar";
const Layout = () => {
  return (
    <>
    <Navbar />
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home2</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav> */}

      <Outlet />
    </>
  )
};

export default Layout;