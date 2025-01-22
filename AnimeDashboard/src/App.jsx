import getAnime from "./api/hooks/getAnime";
function App() {
  let option = { limit: 15 };
  const { data, isLoading, isError } = getAnime(option);
  console.log(data);
  if (isLoading) console.log("Loading...");
  if (data)
    return (
      <div>
        {data.map((anime) => (
          <h1 key={anime.mal_id}>{anime.title}</h1>
        ))}
      </div>
    );
}

export default App;

// return (
//   <Router>
//     <Routes>
//       <Route path="*" element={<PublicRoutes />} />
//       <Route path="/admin/*" element={<AdminRoutes />} />
//     </Routes>
//   </Router>
// );
