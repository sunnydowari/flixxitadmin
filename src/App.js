import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import Login from "./pages/login/Login";
import { AuthContext } from "./context/authContext/AuthContext";
import { useContext } from "react";
import ListList from "./pages/listList/ListList";
import List from "./pages/list/List";
import NewList from "./pages/newList/NewList";
import MovieList from "./pages/movieList/MovieList";
import Movie from "./pages/movie/Movie";
import NewMovie from "./pages/newMovie/NewMovie";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            user !== null || undefined ? <Home /> : <Navigate to="/login" />
          }
        />
        {user && (
          <>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Route path="/" element={<Home />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/users" element={<UserList />}></Route>
              <Route path="/user/:userId" element={<User />}></Route>
              <Route path="/newUser" element={<NewUser />}></Route>
              <Route path="/movies" element={<MovieList />}></Route>
              <Route path="/movie/:movieId" element={<Movie />}></Route>
              <Route path="/newMovie" element={<NewMovie />}></Route>
              <Route path="/lists" element={<ListList />}></Route>
              <Route path="/list/:listId" element={<List />}></Route>
              <Route path="/newlist" element={<NewList />}></Route>
            </div>
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
