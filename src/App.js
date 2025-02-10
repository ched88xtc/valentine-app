import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import "./App.css"; // Import your CSS for styling
import { useState } from "react";


// Home Page Component
function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <img
        src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3ZkZXNjN29xN2dhMWNxYWlxM2Z1b3liaXI5a3JuNm1nMWQwbTVxciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5dUllWbKVlaqmMTvHb/giphy.gif"
        alt="Mock Image"
        className="image"
        width={"90%"}
      />
      <div className="text-container">
        <h1 className="message">Привіт красуне {"😘"}</h1>
        <h1 className="message">Ти будеш моєю Валентинкою {"\u2764\ufe0f"}?</h1>
        <div className="button-group">
          <button className="yes-button" onClick={() => navigate("/yes")}>
            Так
          </button>
          <button className="no-button" onClick={() => navigate("/no")}>
            Ні
          </button>
        </div>
      </div>
    </div>
  );
}

// Yes Page Component
function YesPage() {
  return (
    <div className="container yes-page">
      <h1>Я так і знав :3</h1>
      <h1>{"\u2764\ufe0f"}Люблю тебе{"\u2764\ufe0f"}</h1>
      <img
        src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMG5jMG15aGFyaXM5dzZkdHByZWppM3Ewd3loZHF1YWV6aHFqODM4eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oz8xsaLjLVqVXr3tS/giphy.gif"
        alt="Mock Image"
        className="image"
        width={"100%"}
      />
      <button
        className="back-button"
        onClick={() => (window.location.href = "/")}
      >
        Go Back
      </button>
    </div>
  );
}

// No Page Component with "Catch-Me" Button Logic

function NoPage() {
  const [buttonPosition, setButtonPosition] = useState({ top: "75%", left: "10%" });

  const moveButton = () => {
    const randomTop = Math.random() * 80 + 10 + "%";
    const randomLeft = Math.random() * 80 + 10 + "%";
    setButtonPosition({ top: randomTop, left: randomLeft });
  };

  return (
    <div className="container no-page">
      <h1>Ти впевнена?</h1>
      <img
        src="https://preview.redd.it/give-me-all-the-pets-please-send-images-of-kittens-im-sad-rn-v0-7axr020sny4d1.jpeg?auto=webp&s=e7c5d9b8711374b94210d6313b30870565f53ec4"
        alt="Mock Image"
        className="image"
        width={"100%"}
      />
      <div className="button-group">
        <button
          className="no-button catch-me"
          onClick={moveButton}
          style={{ position: "absolute", top: buttonPosition.top, left: buttonPosition.left }}
        >
          Так
        </button>
        <button className="yes-button" style={{position: "absolute", left: "35%", top: "75%",}} onClick={() => (window.location.href = "/")}>
          Ні, я передумала
        </button>
      </div>
    </div>
  );
}

// Main App Component
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/yes" element={<YesPage />} />
        <Route path="/no" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;