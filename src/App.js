import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [genreDone, setGenre] = useState("Rock");

  const musicData = {
    Rock: [
      {
        name: "Nadaan Parinde",
        rating: "Rating - ",
        singer: "Singer - "
      },
      {
        name: "Tum Ho Toh",
        rating: "Rating - ",
        singer: "Singer - "
      },
      {
        name: "Kabira",
        rating: "Rating - ",
        singer: "Singer - "
      },
      {
        name: "Sunn Raha Hai",
        rating: "Rating - ",
        singer: "Singer - "
      },
      {
        name: "Dooriyan",
        rating: "Rating - ",
        singer: "Singer - "
      }
    ],
    Jazz: [
      {
        name: "Aaiye Meherbaan",
        rating: "Rating - ",
        singer: "Singer - "
      },
      {
        name: "Babuji Dheere Chalna",
        rating: "Rating - ",
        singer: "Singer - "
      },
      {
        name: "Dil Ko Hazar Baar",
        rating: "Rating - ",
        singer: "Singer - "
      },
      {
        name: "Eena Meena Deeka",
        rating: "Rating - ",
        singer: "Singer - "
      },
      {
        name: "Ek Ladki Bheegi Bheegi Si",
        rating: "Rating - ",
        singer: "Singer - "
      }
    ],
    HipHop: [
      {
        name: "Say My Name",
        rating: "Rating - ",
        singer: "Singer - "
      },
      {
        name: "Microphone Check",
        rating: "Rating - ",
        singer: "Singer - "
      },
      {
        name: "Saath Ya Khilaf",
        rating: "Rating - ",
        singer: "Singer - "
      },
      {
        name: "Ego Friendly",
        rating: "Rating - ",
        singer: "Singer - "
      },
      {
        name: "MMM",
        rating: "Rating - ",
        singer: "Singer - "
      }
    ],
    Folk: [
      {
        name: "Genda Phool",
        rating: "Rating - ",
        singer: "Singer - "
      },
      {
        name: "Jugni",
        rating: "Rating - ",
        singer: "Singer - "
      },
      {
        name: "Bumbro",
        rating: "Rating - ",
        singer: "Singer - "
      },
      {
        name: "Ambarasariya",
        rating: "Rating - ",
        singer: "Singer - "
      },
      {
        name: "Kesariya Balam",
        rating: "Rating - ",
        singer: "Singer - "
      }
    ],
    Pop: [
      {
        name: "Bheegi Bheegi Raaton Mein",
        rating: "Rating - ",
        singer: "Singer - "
      },
      {
        name: "Genda Phool",
        rating: "Rating - ",
        singer: "Singer - "
      },
      {
        name: "Bom Diggy Diggy",
        rating: "Rating - ",
        singer: "Singer - "
      },
      {
        name: "Dj Waley Babu",
        rating: "Rating - ",
        singer: "Singer - "
      },
      {
        name: "Lift Karadey",
        rating: "Rating - ",
        singer: "Singer - "
      }
    ]
  };

  return (
    <div className="App">
      <h1 className="heading">
        <span role="img" aria-label="melody">
          ️🎼
        </span>{" "}
        Music Taste
      </h1>
      <div className="subtext">My Playlist for different Genres </div>
      {Object.keys(musicData).map((item) => (
        <button
          className="genre-button"
          key={item + "btn"}
          onClick={() => setGenre(item)}
        >
          {item}
        </button>
      ))}
      <hr />
      <div>
        <ul className="items">
          {musicData[genreDone].map((item) => (
            <li key={item.name}>
              <div className="text-content">
                <div className="song-name">{item.name}</div>
                <div className="song-rating">{item.rating}</div>
                <div className="song-singer">{item.singer}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
