import { IconPropsSVG } from '../../types'
import { getColorSchema } from '../../utils/getColorSchema'

const MenuIcon = ({ color = 'slate', w = 22 }: IconPropsSVG) => {
  return (
    <div className={getColorSchema(color)}>
      <svg
        width={`${w}`}
        viewBox="0 0 17 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.48846 3.25C8.90268 3.25 9.23846 2.91421 9.23846 2.5C9.23846 2.08579 8.90268 1.75 8.48846 1.75C8.07425 1.75 7.73846 2.08579 7.73846 2.5C7.73846 2.91421 8.07425 3.25 8.48846 3.25Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.48846 8.75C8.90268 8.75 9.23846 8.41421 9.23846 8C9.23846 7.58579 8.90268 7.25 8.48846 7.25C8.07425 7.25 7.73846 7.58579 7.73846 8C7.73846 8.41421 8.07425 8.75 8.48846 8.75Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.48846 14.25C8.90268 14.25 9.23846 13.9142 9.23846 13.5C9.23846 13.0858 8.90268 12.75 8.48846 12.75C8.07425 12.75 7.73846 13.0858 7.73846 13.5C7.73846 13.9142 8.07425 14.25 8.48846 14.25Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

export default MenuIcon
