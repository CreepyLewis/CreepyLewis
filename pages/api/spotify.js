import { useEffect, useState } from 'react';

export default function SpotifyWidget() {
  const [songData, setSongData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/spotify');
      const data = await res.json();
      setSongData(data);
    };
    fetchData();
    const interval = setInterval(fetchData, 1000); // refresh every 1 second for smoother progress
    return () => clearInterval(interval);
  }, []);

  if (!songData || !songData.playing) return <div>Not playing</div>;

  const progressPercent = (songData.progress / songData.duration) * 100;

  return (
    <div style={{
      width: '300px',
      fontFamily: 'sans-serif',
      border: '1px solid #ccc',
      padding: '10px',
      borderRadius: '10px',
      background: '#121212',
      color: '#fff'
    }}>
      <h2 style={{ margin: '0 0 10px 0', fontSize: '18px', textAlign: 'center' }}>🧠 Now Playing on Spotify</h2>
      <img src={songData.albumArt} alt="album" style={{ width: '100%', borderRadius: '8px' }} />
      <h3 style={{ margin: '10px 0 5px 0', fontSize: '16px' }}>{songData.song}</h3>
      <p style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#aaa' }}>{songData.artist}</p>
      <div style={{ background: '#333', width: '100%', height: '5px', borderRadius: '5px' }}>
        <div style={{ background: '#1DB954', width: `${progressPercent}%`, height: '100%', borderRadius: '5px', transition: 'width 0.5s linear' }} />
      </div>
    </div>
  );
}
