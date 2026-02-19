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
    const interval = setInterval(fetchData, 5000); // refresh every 5 seconds
    return () => clearInterval(interval);
  }, []);

  if (!songData || !songData.playing) return <div>Not playing</div>;

  const progressPercent = (songData.progress / songData.duration) * 100;

  return (
    <div style={{ width: '300px', fontFamily: 'sans-serif', border: '1px solid #ccc', padding: '10px', borderRadius: '10px' }}>
      <img src={songData.albumArt} alt="album" style={{ width: '100%' }} />
      <h3>{songData.song}</h3>
      <p>{songData.artist}</p>
      <div style={{ background: '#eee', width: '100%', height: '5px', borderRadius: '5px', marginTop: '5px' }}>
        <div style={{ background: '#1DB954', width: `${progressPercent}%`, height: '100%', borderRadius: '5px' }} />
      </div>
    </div>
  );
}
