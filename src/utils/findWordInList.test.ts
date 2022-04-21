import { describe, expect, test } from 'vitest'
import { findWordInList } from './findWordInList'

const list = ['JavaScript', 'React', 'TypeScript']
const listWithSpaces = [
  'Cursos y Libros',
  '  React Testing Library ',
  'Test UI',
  'React Native',
]

describe('findWordInList', () => {
  describe('when pass a word and a list', () => {
    test('should return a correct list', () => {
      const props = {
        word: list[0],
        list,
      }

      const result = findWordInList(props)

      expect(result).toEqual([props.word])
    })

    test('should return a correct list when pass a spacing word', () => {
      const props = {
        word: listWithSpaces[0],
        list: listWithSpaces,
      }

      const result = findWordInList(props)

      expect(result).toEqual([props.word])
    })

    test('should return the list when pass a empty string', () => {
      const props = {
        word: '',
        list: listWithSpaces,
      }

      const result = findWordInList(props)

      expect(result).toEqual(listWithSpaces)
    })

    test('should return empty array when pass a not list element', () => {
      const props = {
        word: 'samething that not exist',
        list: listWithSpaces,
      }

      const result = findWordInList(props)

      expect(result).toEqual([])
    })

    test('should return a list if pass a only spaces string', () => {
      const props = {
        word: '    ',
        list: listWithSpaces,
      }

      const result = findWordInList(props)

      expect(result).toEqual(listWithSpaces)
    })
  })
})
