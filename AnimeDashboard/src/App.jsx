import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";

import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";

import PublicRoutes from "./routes/PublicRoutes";
import AdminRoutes from "./routes/AdminRoutes";

import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="text-gray-200 bg-gradient-to-r from-black to-slate-800 font-sans">
          <NavBar />
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <PublicRoutes />
            <AdminRoutes />
          </SkeletonTheme>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

{
  /* <Routes> */
}
{
  /* <Route path="/" element={<Home />} />
  <Route path="/anime/:id" element={<AnimePage />} />
  <Route path="/anime" element={<Animes />} />
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/genres" element={<Genre />} />
  <Route path="/genres/:genreId/:genreName" element={<GenrePage />} />
  <Route path="/admin" element={<Admin />} /> */
}
{
  /* </Routes> */
}
