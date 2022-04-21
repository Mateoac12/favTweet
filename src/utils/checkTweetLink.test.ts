import { describe, expect, test } from 'vitest'
import { checkTweetLink } from './checkTweetLink'

describe('checkTweetLink', () => {
  describe('when pass a tweet link', () => {
    test('should return a correct username and tweetId', () => {
      const [username, tweetId] = ['madeval', '123456']

      const link = `https://twitter.com/${username}/status/${tweetId}`
      const result = checkTweetLink(link)

      expect(result).toEqual({
        pass: true,
        error: null,
        username,
        tweetId,
      })
    })
  })

  describe('when pass a not tweet link', () => {
    test('should return a error message', () => {
      const link = 'https://twitter.com/twitter/123456/something'
      const result = checkTweetLink(link)

      expect(result).toEqual({
        pass: false,
        error:
          'Debe ser una URL de un tweet. Ejemplo: https://twitter.com/username/status/123456',
        username: null,
        tweetId: null,
      })
    })
  })

  describe('when pass a not url', () => {
    test('should return a error message', () => {
      const link = ''
      const result = checkTweetLink(link)

      expect(result).toEqual({
        pass: false,
        error: 'URL no válida',
        username: null,
        tweetId: null,
      })
    })
  })
})
