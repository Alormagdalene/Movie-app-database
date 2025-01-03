import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Movie from "./components/pages/Movie";
import TvShows from "./components/pages/TvShows";

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
    <QueryClientProvider client = {queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );

}
export default App;
