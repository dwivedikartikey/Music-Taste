import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [genreDone, setGenre] = useState("Rock");

  const musicData = {
    Rock: [
      {
        name: "Nadaan Parinde",
        rating: "Rating - 4.5/5.0",
        singer: "Singer - A. R. Rahman"
      },
      {
        name: "Tum Ho Toh",
        rating: "Rating - 4.4/5.0",
        singer: "Singer - Farhan Akhtar"
      },
      {
        name: "Kabira",
        rating: "Rating - 4.7/5.0",
        singer: "Singer - Rekha Bhardwaj and Tochi Raina"
      },
      {
        name: "Sunn Raha Hai",
        rating: "Rating - 4.2/5.0",
        singer: "Singer - Ankit Tiwari"
      },
      {
        name: "Dooriyan",
        rating: "Rating - 4.6/5.0",
        singer: "Singer - Mohit Chauhan"
      }
    ],
    Jazz: [
      {
        name: "Aaiye Meherbaan",
        rating: "Rating - 4.9/5.0",
        singer: "Singer - Asha Bhosle"
      },
      {
        name: "Babuji Dheere Chalna",
        rating: "Rating - 5.0/5.0",
        singer: "Singer - Geeta Dutt"
      },
      {
        name: "Dil Ko Hazar Baar",
        rating: "Rating - 4.3/5.0",
        singer: "Singer - Alisha Chinai"
      },
      {
        name: "Eena Meena Deeka",
        rating: "Rating - ",
        singer: "Singer - "
      },
      {
        name: "Ek Ladki Bheegi Bheegi Si",
        rating: "Rating - 5.0/5.0",
        singer: "Singer - Kishore Kumar"
      }
    ],
    HipHop: [
      {
        name: "Say My Name",
        rating: "Rating - 4.8/5.0",
        singer: "Singer - Kr$na"
      },
      {
        name: "Microphone Check",
        rating: "Rating - 4.6/5.0",
        singer: "Singer - Raftaar"
      },
      {
        name: "Saath Ya Khilaf",
        rating: "Rating - 4.7/5.0",
        singer: "Singer - Kr$na ft. Raftaar"
      },
      {
        name: "Ego Friendly",
        rating: "Rating - 4.5/5.0",
        singer: "Singer - Muhfaad"
      },
      {
        name: "MMM",
        rating: "Rating - 5.0/5.0",
        singer: "Singer - Seedhe Maut"
      }
    ],
    Folk: [
      {
        name: "Genda Phool",
        rating: "Rating - 4.5/5.0",
        singer: "Singer - Ratan Kahar"
      },
      {
        name: "Jugni",
        rating: "Rating - Jugni",
        singer: "Singer - Arif Lohar & Meesha Shafi"
      },
      {
        name: "Bumbro",
        rating: "Rating - 4.1/5.0",
        singer: "Singer - Jaspinder Narula,Shankar Mahadevan & Sunidhi Chauhan"
      },
      {
        name: "Ambarasariya",
        rating: "Rating - 3.1/5.0",
        singer: "Singer - Sona Mohapatra"
      },
      {
        name: "Kesariya Balam",
        rating: "Rating - 4.2/5.0",
        singer: "Singer - karsan Sargathiya & Salim-Sulaiman"
      }
    ],
    Pop: [
      {
        name: "Bheegi Bheegi Raaton Mein",
        rating: "Rating - 4.9/5.0",
        singer: "Singer - Lata Mangeshkar"
      },
      {
        name: "Genda Phool",
        rating: "Rating - 3.5/5.0",
        singer: "Singer - Badshah ft. Payal Dev"
      },
      {
        name: "Bom Diggy Diggy",
        rating: "Rating - 3.4/5.0",
        singer: "Singer - Zack Knight & Jasmin Walia"
      },
      {
        name: "Dj Waley Babu",
        rating: "Rating - 3.7/5.0",
        singer: "Singer - Badshah ft. Astha Gill"
      },
      {
        name: "Lift Karadey",
        rating: "Rating - 4.0/5.0",
        singer: "Singer - Adnan Sami"
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
