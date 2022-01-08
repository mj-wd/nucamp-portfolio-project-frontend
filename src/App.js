import { GenerateCard } from "./GenerateCard";
import React, { useEffect, useState } from "react";
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import qs, { parse } from "query-string";

function App() {
  const [player, setPlayer] = useState();
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;

    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const {access_token, refresh_token} = qs.parse(window.location.hash);

      const player = new window.Spotify.Player({
          name: 'Web Playback SDK',
          getOAuthToken: cb => { cb(access_token); },
          volume: 0.5
      });

      setPlayer(player);

      player.addListener('ready', ({ device_id }) => {
          console.log('Ready with Device ID', device_id);
      });

      player.addListener('not_ready', ({ device_id }) => {
          console.log('Device ID has gone offline', device_id);
      });


      player.connect();

  };
  }, [])
  const moods = ["Happy", "Sad", "Chill", "Hangry"];
  function renderCards() {
    return moods.map(function (mood, i) {
      return (
        <span key={i}>
          <GenerateCard mood={mood} />
        </span>
      );
    });
  }
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <CardBody>
          <CardTitle><h3>Moodie</h3></CardTitle>
          <CardText>
            {renderCards()}
          </CardText>
        </CardBody>
      </Card>      
    </div>
  );
}

export default App;