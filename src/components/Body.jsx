import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
function Body() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Body;
