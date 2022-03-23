import { IconPropsSVG } from '../types'

type ColorProp = IconPropsSVG['color']

export const getColorSchema = (color = 'slate' as ColorProp) => {
  const colorSchema = {
    sky: 'text-sky-500',
    indigo: 'text-indigo-500',
    slate: 'text-slate-400',
    white: 'text-white',
  }

  return colorSchema[color!]
}
