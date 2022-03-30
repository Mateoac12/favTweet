import { IconPropsSVG } from '../../types'
import { getColorSchema } from '../../utils/getColorSchema'

const LogoutIcon = ({ color = 'slate', h = 20, w = 20 }: IconPropsSVG) => {
  return (
    <div className={getColorSchema(color)}>
      <svg
        width={`${w}`}
        height={`${h}`}
        viewBox="0 0 20 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 13V14C11 14.7956 10.6839 15.5587 10.1213 16.1213C9.55871 16.6839 8.79565 17 8 17H4C3.20435 17 2.44129 16.6839 1.87868 16.1213C1.31607 15.5587 1 14.7956 1 14V4C1 3.20435 1.31607 2.44129 1.87868 1.87868C2.44129 1.31607 3.20435 1 4 1H8C8.79565 1 9.55871 1.31607 10.1213 1.87868C10.6839 2.44129 11 3.20435 11 4V5M15 13L19 9L15 13ZM19 9L15 5L19 9ZM19 9H5H19Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

export default LogoutIcon
