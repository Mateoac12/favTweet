import { colorSchemaForSVG } from '../config/colorSchemaForSVG'
import { IconPropsSVG } from '../types'

type ColorProp = IconPropsSVG['color']

export const getColorSchema = (color = 'slate' as ColorProp) => {
  return colorSchemaForSVG[color!] || colorSchemaForSVG.slate
}
