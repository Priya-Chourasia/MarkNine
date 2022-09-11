import { useState } from "react";
import "./styles.css";

const movieDb = {
  Scifi: [
    {
      name: "Rocketry",
      rating: "5/5",
      img:
        "https://oytrend.com/wp-content/uploads/2022/07/Rocketry-movie-download-2022.jpg"
    },
    {
      name: "Inception",
      rating: "4/5",
      img:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg"
    },
    {
      name: "Tenet",
      rating: "4.5/5",
      img:
        "https://upload.wikimedia.org/wikipedia/en/1/14/Tenet_movie_poster.jpg"
    }
  ],

  Thriller: [
    {
      name: "Orphan",
      rating: "4.5/5",
      img:
        "https://resizing.flixster.com/UXxpb61iqPiXbvj8LH_8i2cKtdQ=/fit-in/300x533/v2/https://resizing.flixster.com/VISuXHW5ooDNfaxj5oRXSdkSYnE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2Q1NWJhYzNhLTAxNjAtNDRmYS04ZDA5LWEyYTIxNDhlMzc2NC53ZWJw"
    },
    {
      name: "Shutter Island",
      rating: "5/5",
      img:
        "https://resizing.flixster.com/KQCJaexnJ3hhtaaWHweGKjJVEc8=/fit-in/300x533/v2/https://flxt.tmsimg.com/assets/p3531967_k_v13_ab.jpg"
    },
    {
      name: "Joker",
      rating: "4/5",
      img:
        "https://upload.wikimedia.org/wikipedia/en/e/e1/Joker_%282019_film%29_poster.jpg"
    }
  ],
  Drama: [
    {
      name: "Gifted",
      rating: "4.5/5",
      img:
        "https://api.time.com/wp-content/uploads/2017/04/gifted-chris-evans-mckenna-grace.jpg?quality=85&w=800"
    },
    {
      name: "Masaan",
      rating: "4.5/5",
      img:
        "https://resizing.flixster.com/yklThO7O21WW3SmdXnxXxHt6gt4=/fit-in/300x533/v2/https://flxt.tmsimg.com/assets/p13190955_v_v9_aa.jpg"
    },
    {
      name: "Forest Gump",
      rating: "5/5",
      img:
        "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg"
    }
  ],
  Series: [
    {
      name: "Manifest",
      rating: "4.5/5",
      img:
        "https://resizing.flixster.com/7t_9KtmQADH6ATpE43kqZXSe-G8=/300x300/v2/https://flxt.tmsimg.com/assets/p15516905_ce_h9_ab.jpg"
    },
    {
      name: "F.R.I.E.N.D.S",
      rating: "5/5",
      img:
        "https://resizing.flixster.com/IgQq62Ox3b7PoOQeKWOEEukPwXg=/300x300/v2/https://flxt.tmsimg.com/assets/p183931_i_v9_ag.jpg"
    },
    {
      name: "Money Heist",
      rating: "4.5/5",
      img:
        "https://resizing.flixster.com/vVBN1y-hGeOP9CVUMc-uNDY08yY=/300x300/v2/https://resizing.flixster.com/J0fpMvc7IyH6IDAVNu5oyr4Mudw=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjc4MjIzMC53ZWJw"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Drama");

  function genreClick(genre) {
    setGenre(genre);
  }

  return (
    <div>
      <div className="App">
        <h1>Movie recommendation</h1>
      </div>

      <div className="genre">
        {Object.keys(movieDb).map((genre) => (
          <button className="btn" key={genre} onClick={() => genreClick(genre)}>
            {genre}
          </button>
        ))}
      </div>

      <div className="movie">
        {movieDb[selectedGenre].map((movie) => (
          <div className="card">
            <img src={movie.img} alt="Avatar" />
            <div className="container">
              <h2>
                <b>{movie.name}</b>
              </h2>
              <p>{movie.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
