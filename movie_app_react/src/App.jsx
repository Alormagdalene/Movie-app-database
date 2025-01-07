import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Movie from "./components/pages/Movie";
import TvShows from "./components/pages/TvShows";
import movie from "./assets/images/movie.jpg";

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home />,
  },
    {
      path:"/movie",
      index: true,
      element: <Movie />
    },
    {
      path:"/tvShows",
      element: <TvShows />
    },
    
]);

function App() {

  return (
    <div className="flex flex-wrap bg-cover bg-[url('./assets/images/movie.jpg')] bg-black bg-opacity-80 bg-blend-darken">
    <QueryClientProvider client = {queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
    </div>
  );

}
export default App;
