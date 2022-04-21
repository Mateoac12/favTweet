import { describe, expect, test } from 'vitest'
import { colorSchemaForSVG } from '../config/colorSchemaForSVG'
import { getColorSchema } from './getColorSchema'

describe('getColorSchema', () => {
  describe('when the user pass as parameter a color string', () => {
    test('should show a correct color schema when pass enum value', () => {
      const colorToPass = Object.keys(
        colorSchemaForSVG
      )[0] as keyof typeof colorSchemaForSVG
      const schemaExpected = colorSchemaForSVG[colorToPass]

      const schemaReturned = getColorSchema(colorToPass)
      expect(schemaReturned).toEqual(schemaExpected)
    })

    test('should show slate color schema by default', () => {
      const schemaExpected = colorSchemaForSVG.slate

      const schemaReturned = getColorSchema()

      expect(schemaReturned).toEqual(schemaExpected)
    })

    test('should show a slate when pass a incorrect color', () => {
      const schemaExpected = colorSchemaForSVG.slate

      const schemaReturned = getColorSchema(
        'incorrect' as keyof typeof colorSchemaForSVG
      )

      expect(schemaReturned).toEqual(schemaExpected)
    })
  })
})
