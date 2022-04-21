import { describe, expect, test } from 'vitest'
import { generateExternalTwitterLink } from './generateExternalTwitterLink'

describe('generateExternalTwitterLink', () => {
  describe('when pass a username and a tweetId', () => {
    test('should return a correct link', () => {
      const props = {
        username: 'madeval',
        tweetId: '21342343223',
      }

      const link = generateExternalTwitterLink(props)

      expect(link).toEqual(
        `https://twitter.com/${props.username}/status/${props.tweetId}`
      )
    })

    test('should return the user accout link if the tweetId isn`t a number', () => {
      const props = {
        username: 'madeval',
        tweetId: 'madeval',
      }

      const link = generateExternalTwitterLink(props)

      expect(link).toEqual(`https://twitter.com/${props.username}`)
    })

    test('should return to twitter home if not have a username', () => {
      const props = {
        username: '',
        tweetId: '21342343223',
      }

      const link = generateExternalTwitterLink(props)

      expect(link).toEqual('https://twitter.com/')
    })
  })
})
