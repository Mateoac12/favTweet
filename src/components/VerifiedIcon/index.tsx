import { IconPropsSVG } from '../../types'
import { getColorSchema } from '../../utils/getColorSchema'

const VerifiedIcon = ({ color = 'sky', w = 24, h = 24 }: IconPropsSVG) => {
  return (
    <div className={getColorSchema(color)}>
      <svg
        width={`${w}`}
        height={`${h}`}
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.38 13.72H6.67L5 12H2.53L2 11.5V9.08004L0.309998 7.36004V6.65004L2 4.93004V2.50004L2.53 2.00004H5L6.67 0.290039H7.38L9.1 2.00004H11.53L12.03 2.49004V4.93004L13.74 6.65004V7.36004L12 9.08004V11.5L11.5 12H9.1L7.38 13.72V13.72ZM5.73 9.48004H6.44L10.21 5.71004L9.5 5.00004L6.09 8.42004L4.71 7.04004L4 7.75004L5.73 9.48004Z"
          fill="currentColor"
        />
      </svg>
    </div>
  )
}

export default VerifiedIcon
