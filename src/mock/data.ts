import { ITargetTweet } from '../types'

export const tweets: ITargetTweet[] = [
  {
    id: '1',
    avatar:
      'https://pbs.twimg.com/profile_images/1083714591752941568/Q7LnIANs_normal.jpg',
    name: 'Miguel Ángel Durán',
    username: 'midudev',
    verified: false,
    isProtect: false,
    createdAt: '2022-02-22T15:34:11.000Z',
    description:
      '👨‍💻 Te enseño Programación Web: JavaScript + CSS + React\n⭐ GitHub Star y Google Dev Expert\n🟣 Twitch Partner ▶ https://t.co/t2Q6pGwM6Z\n🔴 YouTube ▶ https://t.co/sZivcIfWpQ',
    followers: 69780,
    following: 690,
    userId: '4882508632',
    text: '🚀 Los mejores HOSTINGS GRATUITOS para tu próximo proyecto WEB con JAVASCRIPT 🔥\n\n🧵⬇️',
    tweetId: '1496146307219693573',
  },
  {
    id: '2',
    avatar:
      'https://pbs.twimg.com/profile_images/1473432979867410441/CAFOg3DY_normal.jpg',
    name: 'Jorge Baumann.js',
    username: 'baumannzone',
    verified: false,
    isProtect: false,
    createdAt: '2022-03-16T22:16:42.000Z',
    description:
      '👨‍💻 Desarrollador #Web Full Stack: #JavaScript #HTML #CSS \n📸  https://t.co/qEgbM9B35X',
    followers: 14305,
    following: 800,
    userId: '1019585395',
    text: '🔥🧑‍💻 Estoy haciendo un script con #JavaScript (Node.js) que me permite sacar las imágenes de perfil de los últimos followers de twitter para luego editarlas y pegarlas en una nueva imagen que será la nueva imagen del banner de twitter.\n\n🧵👇🧵👇🧵👇🧵👇',
    tweetId: '1504220139151110144',
  },
  {
    id: '3',
    avatar:
      'https://pbs.twimg.com/profile_images/1486806973668544512/Zegglp6G_normal.jpg',
    name: 'Mateo 👨🏻‍💻',
    username: 'maadeval',
    verified: false,
    isProtect: false,
    createdAt: '2022-02-05T19:19:26.000Z',
    description: 'Un dev front chiquito 🤓\nTambién me gustan las donas 🍩',
    followers: 26,
    following: 217,
    userId: '1367624337268887552',
    text: 'Empecé a usar Tailwind hace poco, y si venís de CSS buscar las clases en la doc es horrible! además de frustrante😅 jaja asi que dejo unos materiales que te salvan la vida en eso 👇🏻',
    tweetId: '1490042400189956105',
  },
  {
    id: '4',
    avatar:
      'https://pbs.twimg.com/profile_images/1485735728139100165/EaZ6h5xW_normal.jpg',
    name: 'goncy.tsx',
    username: 'goncy',
    verified: false,
    isProtect: false,
    createdAt: '2022-03-18T16:55:42.000Z',
    description:
      'Solution architect ▲ @vercel, @twitch partner, @cypress_io ambassador, creador de @pencyapp.',
    followers: 31395,
    following: 894,
    userId: '42536884',
    text: 'Hoy te voy a contar por que en mi opinion, si estás aprendiendo a programar, deberías estar haciendo streams o generando contenido 🧵',
    tweetId: '1504864129114324995',
  },
  {
    id: '5',
    avatar:
      'https://pbs.twimg.com/profile_images/1497556212006764544/z23kcB5A_normal.jpg',
    name: 'Brais Moure',
    username: 'MoureDev',
    verified: false,
    isProtect: false,
    createdAt: '2022-03-21T21:52:40.000Z',
    description:
      '💻 Freelance Full-Stack Dev 📲 iOS & Android Engineer 📺 https://t.co/AfELSoqhuz, Twitch https://t.co/jvpIi7C1rd, @Discord & @ElgatoES Partner 👥 #GDG 👾 Geek ⏳ https://t.co/70sgLatKxr',
    followers: 47125,
    following: 388,
    userId: '3057747517',
    text: '📢 El nuevo reto de programación semanal ya está publicado!\n\n👉 Cada lunes nuevo reto y corrección del anterior en directo en Twitch\n👉 Soluciones de la comunidad\n👉 Código de todos los retos en GitHub\n👉 Canal de discusión de retos en Discord\n\n🔗 Enlaces: https://t.co/TWP3HNGjWY https://t.co/K509f1EYQ9',
    tweetId: '1506026026937290753',
  },
]

export const categoryTweet: ITargetTweet = {
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
