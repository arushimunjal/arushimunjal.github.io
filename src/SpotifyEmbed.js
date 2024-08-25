import './SpotifyEmbed.css';

const SpotifyEmbed = () => {
  return (
    <div className="spotify-embed">
      <h3>the latest hits:</h3>
      <iframe
        src="https://open.spotify.com/playlist/0yNDHoNJ4RQ9StLBdlPFQP?si=5d099beaaa5a4372"
        width="300"
        height="380"
        frameBorder="0"
        allow="encrypted-media"
        title="Spotify Playlist"
      ></iframe>
    </div>
  );
};

export default SpotifyEmbed;