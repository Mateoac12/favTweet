import { Dispatch, SetStateAction } from 'react'
import CategoryTag from '../CategoryTag'

interface Props {
  categories: string[]
  setCategories: Dispatch<SetStateAction<string[]>>
}

const CategoriesTag = ({ categories, setCategories }: Props) => {
  return (
    <>
      {Boolean(categories.length) && (
        <div className="flex flex-wrap gap-2 mt-2">
          {categories.map((category) => (
            <CategoryTag
              category={category}
              setCategories={setCategories}
              key={`categorytag-${category}`}
            />
          ))}
        </div>
      )}
    </>
  )
}

export default CategoriesTag
