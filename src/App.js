import React, { useState, useEffect } from "react";
import Details from "./components/Details";
import Teams from "./components/Teams";
import Error from "./components/Error";
import Loading from "./components/Loading";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const url = "https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=English%20Premier%20League";

function App() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Teams teams={teams} />,
    }, {
      path: "/teams/:id",
      element: <Details teams={teams} />,
    }, {
      path: "*",
      element: <Error />
    },
  ]);

  const fetchTeams = async () => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setTeams(data.teams);
    setLoading(false);
  }

  useEffect(() => {
    fetchTeams();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return <RouterProvider router={router} />;

}

export default App;