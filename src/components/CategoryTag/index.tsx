import { Dispatch, SetStateAction } from 'react'
import CloseIcon from '../CloseIcon'

interface Props {
  category: string
  setCategories: Dispatch<SetStateAction<string[]>>
}

const CategoryTag = ({ category, setCategories }: Props) => {
  const handleRemoveCategory = (category: string) => {
    setCategories((lastCategories) =>
      lastCategories.filter((c) => c !== category)
    )
  }

  return (
    <span
      className="inline-flex items-center gap-2 px-2 text-sm text-white bg-indigo-600 rounded-lg hover:brightness-105"
      key={`category-${category}`}
    >
      {category}
      <span
        className="cursor-pointer"
        onClick={() => handleRemoveCategory(category)}
      >
        <CloseIcon />
      </span>
    </span>
  )
}

export default CategoryTag
