import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { ITargetTweet } from '../types'

export const MOCKED_RESPONSE: ITargetTweet = {
  id: '6',
  avatar:
    'https://pbs.twimg.com/profile_images/1346427172140044291/tbqbbc-8_normal.jpg',
  name: 'Cosmic Red 🎸',
  username: 'cosmicred',
  verified: false,
  isProtect: false,
  createdAt: '2022-02-22T15:34:11.000Z',
  description:
    '🦣 UX Engineer @CodelyTV \n💻 @GoogleDevExpert in Web Technologies\n🥑 CommunityAdvocate @figma @fof_barcelona\n💜 CSS & SVG\n🎮 Otaku and Gamer\n🌈 She/her',
  followers: 11435,
  following: 748,
  userId: '556708229',
  text: '#webdev #css #gradients\nLa herramienta de @JoshWComeau  para generar degradados es  ¡UNA PASADA! ❤️\n\nPuedes generar los degradados más bonitos que he visto en todo internet 👇\nhttps://t.co/iZpQPnYk2b https://t.co/bF7Q1Rb0Ki',
  tweetId: '1516156302199771148',
  category: ['CSS', 'Degradados', 'Figma'],
  notHover: true,
}

const url = process.env.VITE_SERVICE_GET_TWEET as string

export const server = setupServer(
  rest.post(url, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(MOCKED_RESPONSE))
  })
)
