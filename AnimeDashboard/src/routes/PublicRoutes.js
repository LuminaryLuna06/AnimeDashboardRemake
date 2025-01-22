import { Route, Routes } from "react-router-dom";

export const PublicRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/anime/:id" element={<AnimePage />} />
    <Route path="/anime" element={<Anime />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/genres" element={<Genres />} />
    <Route path="/genres/:genreId/:genreName" element={<GenresPage />} />
  </Routes>
);

