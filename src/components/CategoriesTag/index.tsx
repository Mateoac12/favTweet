import { Dispatch, SetStateAction } from 'react'
import { ITargetTweet } from '../../types'
import CategoryTag from '../CategoryTag'

interface Props {
  categories: string[]
  setCategories: Dispatch<SetStateAction<string[]>>
  removeCategory: (category: string) => void
  tweet?: ITargetTweet
}

const CategoriesTag = ({
  categories,
  setCategories,
  removeCategory,
  tweet,
}: Props) => {
  return (
    <>
      {Boolean(categories.length) && (
        <div className="flex flex-wrap gap-2 mt-2">
          {categories.map((category) => (
            <CategoryTag
              category={category}
              removeCategory={removeCategory}
              setCategories={setCategories}
              key={`categorytag-${category}`}
              tweet={tweet}
            />
          ))}
        </div>
      )}
    </>
  )
}

export default CategoriesTag
