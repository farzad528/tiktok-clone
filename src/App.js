import React, { useEffect, useState } from "react";
import "./App.css";
import db from "./firebase";
import Video from "./Video";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    // BEM
    <div className="app">
      <div className="app__videos">
        <Video
          url="/videos/tiktok.mp4"
          channel="fullstackfarzzy"
          song="Where Is The Love? - @The Black Eyed Peas"
          likes={9809}
          messages="1.7K"
          description="#Developer #Software #Technology"
          shares="2.9K"
        />
        <Video
          url="/videos/tiktok3.mp4"
          channel="delaina00moore"
          song="Mr. Blue Sky - @Electric Light Orchestra"
          likes={6109}
          messages="499"
          description="Just IT things #womeninstem #humor #comedy #developer #programming #coding"
          shares="197"
        />
      </div>
    </div>
  );
}

export default App;
