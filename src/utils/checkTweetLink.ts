const standardTweetLink = {
  origin: 'https://twitter.com',
  pathname: /(\w)\/status\/[0-9]+/g, // /{username}/status/{number}
}

export const checkTweetLink = (link: string) => {
  try {
    const url = new URL(link)

    const { origin, pathname } = url

    const isCorrectOrigin = origin === standardTweetLink.origin
    const isCorrectPathname = pathname.match(standardTweetLink.pathname)

    const isCorrectURL = isCorrectOrigin && isCorrectPathname

    const username = isCorrectURL && pathname.split('/')[1]
    const tweetId = isCorrectURL && pathname.split('/')[3]

    const [pass, error] = isCorrectURL
      ? [true, null]
      : [
          false,
          'Debe ser una URL de un tweet. Ejemplo: https://twitter.com/twitter/status/123456',
        ]

    return {
      pass,
      error,
      username,
      tweetId,
    }
  } catch (err) {
    return {
      pass: false,
      error: 'URL no válida',
      username: null,
      tweetId: null,
    }
  }
}
