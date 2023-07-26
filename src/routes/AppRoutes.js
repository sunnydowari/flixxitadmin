import { React, useContext } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import UserList from "../pages/userList/UserList";
import NewUser from "../pages/newUser/NewUser";
import MovieList from "../pages/movieList/MovieList";
import Movie from "../pages/movie/Movie";
import NewMovie from "../pages/newMovie/NewMovie";
import ListList from "../pages/listList/ListList";
import List from "../pages/list/List";
import NewList from "../pages/newList/NewList";
import { AuthContext } from "../context/authContext/AuthContext";
import Home from "../pages/home/Home";
import ProtectedRoute from "../utils/protectedRoute";

const AppRoutes = () => {
  const { user } = useContext(AuthContext);
  return (
    <Routes>
      <Route
        path="/"
        element={
          user ? (
            <div>
              <div className="container">
                <Outlet /> {/* This will render the nested child routes */}
              </div>
            </div>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route
        path="/newUser"
        element={<ProtectedRoute element={<NewUser />} />}
      />
      <Route
        path="/movies"
        element={<ProtectedRoute element={<MovieList />} />}
      />
      <Route
        path="/movie/:movieId"
        element={<ProtectedRoute element={<Movie />} />}
      />
      <Route
        path="/newMovie"
        element={<ProtectedRoute element={<NewMovie />} />}
      />
      <Route
        path="/lists"
        element={<ProtectedRoute element={<ListList />} />}
      />
      <Route
        path="/list/:listId"
        element={<ProtectedRoute element={<List />} />}
      />
      <Route
        path="/newlist"
        element={<ProtectedRoute element={<NewList />} />}
      />
      <Route
        path="/users"
        element={<ProtectedRoute element={<UserList />} />}
      />
      {/* Add other protected routes as needed */}
    </Routes>
  );
};
export default AppRoutes;
