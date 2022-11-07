import type { NextApiRequest, NextApiResponse } from 'next'
import { TwitterApi } from 'twitter-api-v2';

const client = new TwitterApi({
	 	appKey: process.env.NEXT_PUBLIC_APP_KEY,
	  appSecret: process.env.NEXT_PUBLIC_APP_SECRET,
	  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
	  accessSecret: process.env.NEXT_PUBLIC_ACCESS_SECRET,
})

async function getNameMe(): any {
	const name = await client.v2.me()
	return name
}

async function getTweetMe(): any {
	const userId = await getNameMe()
	const tweet = await client.v2.userTimeline(userId?.data.id)
	return tweet
}

async function getTest(): any {
	const userId = await getNameMe()
	const user = await client.v2.users(userId?.data.id)
	return user
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SongType>
) {

	const resultMe = await getNameMe()
	const resultTweet = await getTweetMe()

  return res.status(200).json({
  	me: resultMe,
  	tweet: resultTweet._realData
  });
}
