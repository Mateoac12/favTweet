import { IconPropsSVG } from '../../types'
import { getColorSchema } from '../../utils/getColorSchema'

const rotateValue = {
  0: 'rotate-0',
  90: 'rotate-90',
  180: 'rotate-180',
  270: '-rotate-45',
  '-90': '-rotate-90',
}

const ArrowBottomIcon = ({
  color = 'slate',
  h = 14,
  w = 14,
  rotate = '0',
}: IconPropsSVG) => {
  return (
    <div className={`${getColorSchema(color)} ${rotateValue[rotate]} `}>
      <svg
        width={`${w}`}
        height={`${h}`}
        viewBox="0 0 15 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.22974 0.743225L7.22974 5.74323L12.2297 0.743225L14.2297 1.74323L7.22974 8.74323L0.229736 1.74323L2.22974 0.743225Z"
          fill="currentColor"
        />
      </svg>
    </div>
  )
}

export default ArrowBottomIcon
