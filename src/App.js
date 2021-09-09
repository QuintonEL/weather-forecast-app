import React from "react";

const api = {
  key: "8e4863d596f6b5dbac14fc594c9b1ead",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeHolder="Search..."
          >
          </input>
        </div>
      </main>
    </div>
  );
}

export default App;
