import fetch from 'node-fetch';

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

let accessToken = null;
let tokenExpiry = 0;

async function getAccessToken() {
  if (accessToken && Date.now() < tokenExpiry) return accessToken;

  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Authorization': 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64'),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials'
  });

  const data = await res.json();
  accessToken = data.access_token;
  tokenExpiry = Date.now() + data.expires_in * 1000; // expires_in is in seconds
  return accessToken;
}

export default async function handler(req, res) {
  const token = await getAccessToken();
  const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
    headers: {
      'Authorization': 'Bearer ' + token,
    },
  });

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ playing: false });
  }

  const data = await response.json();
  res.status(200).json({
    playing: true,
    song: data.item.name,
    artist: data.item.artists.map(a => a.name).join(', '),
    albumArt: data.item.album.images[0].url,
    progress: data.progress_ms,
    duration: data.item.duration_ms,
  });
}
