import { Link, useLocation } from "react-router-dom";
import { useState, useContext } from "react";
import "./movie.css";
import { Publish } from "@mui/icons-material";
import { MovieContext } from "../../context/movieContext/MovieContext";
import {
  updateMovieStart,
  updateMovieSuccess,
  updateMovieFailure,
} from "../../context/movieContext/MovieActions";
import { updateMovie } from "../../context/movieContext/apiCalls";

export default function Movie() {
  const location = useLocation();
  const movie = location.movie;
  const [file, setFile] = useState(null);
  const { dispatch } = useContext(MovieContext);

  const handleUpdate = () => {
    const updatedMovie = { ...movie };
    if (file) {
      updatedMovie.img = file; // Update the image field with the new file
    }
    dispatch(updateMovieStart());
    updateMovie(
      movie._id,
      updatedMovie,
      dispatch,
      updateMovieSuccess,
      updateMovieFailure
    );
  };

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Movie</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={movie.img} alt="" className="productInfoImg" />
            <span className="productName">{movie.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{movie._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">genre:</span>
              <span className="productInfoValue">{movie.genre}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">year:</span>
              <span className="productInfoValue">{movie.year}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">limit:</span>
              <span className="productInfoValue">{movie.limit}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Movie Title</label>
            <input type="text" placeholder={movie.title} />
            <label>Year</label>
            <input type="text" placeholder={movie.year} />
            <label>Genre</label>
            <input type="text" placeholder={movie.genre} />
            <label>Limit</label>
            <input type="text" placeholder={movie.limit} />
            <label>Trailer</label>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <label>Video</label>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={movie.img} alt="" className="productUploadImg" />
              <label htmlFor="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton" onClick={handleUpdate}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
