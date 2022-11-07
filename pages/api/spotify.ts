import type { NextApiRequest, NextApiResponse } from 'next'
import querystring from 'querystring'

const NOW_PLAYING_ENDPOINT: string = `https://api.spotify.com/v1/me/player/recently-played`
const AUTH_ENDPOINT: string = `https://accounts.spotify.com/api/token`

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID
const CLIENT_SECRET = process.env.NEXT_PUBLIC_CLIENT_SECRET
const REFRESH_TOKEN = process.env.NEXT_PUBLIC_REFRESH_TOKEN


const getAuthToken = async (): any => {

const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')

	const response = await fetch(AUTH_ENDPOINT, {
		method: "POST",
		headers: {
			Authorization: `Basic ${basic}`,
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		 body: querystring.stringify({
	      grant_type: 'refresh_token',
	      refresh_token: REFRESH_TOKEN,
	    }),
	})
	return response.json()
}

const showNowPlaying = async (): any => {
	const { access_token } = await getAuthToken()

	return fetch(NOW_PLAYING_ENDPOINT, {
		headers: {
			Authorization: `Bearer ${access_token}`,
		}
	})
}

type SongType = {
	title: string,
	artist: string,
	coverUrl: string,
	songUrl: string,
	previewUrl: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SongType>
) {
	
  const response = await showNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false });
  }

  const result = await response.json();

  const wholeSong: SongType = {
  	artist: result.items[0].track.artists[0].name,
  	title: result.items[0].track.name,
  	coverUrl: result.items[0].track.album.images[1].url,
  	songUrl: result.items[0].track.external_urls.spotify,
  	previewUrl: result.items[0].track.preview_url
  }

  return res.status(200).json({...wholeSong});
}
