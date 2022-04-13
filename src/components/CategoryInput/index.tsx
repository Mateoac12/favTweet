import { useState } from 'react'
import { useTweet } from '../../hooks/useTweet'
import { ITargetTweet } from '../../types'
import { findWordInList } from '../../utils/findWordInList'
import Button from '../Button'
import CategoriesTag from '../CategoriesTag'
import PlusIcon from '../PlusIcon'

interface Props {
  existCategories: string[]
  addedTaargetCategories?: string[]
  tweet?: ITargetTweet
}

const CategoryInput = ({
  existCategories = [],
  addedTaargetCategories = [],
  tweet,
}: Props) => {
  const [input, setInput] = useState<string>('')
  const [categories, setCategories] = useState<string[]>(addedTaargetCategories)
  const { setCategory, removeCategory, addShadowTweet } = useTweet()

  const handleCategory = (str: string) => {
    const hasExist = categories.some(
      (c) => c.trim().toLowerCase() === str.trim().toLowerCase()
    )

    if (str.trim() === '' || hasExist) return
    setCategories((lastValues) => lastValues.concat(str))
    tweet && addShadowTweet(tweet!)
    setCategory(categories.concat(str))
    setInput('')
  }

  const filteredCategories = findWordInList({
    word: input,
    list: existCategories,
  })

  return (
    <>
      <div className="relative pb-2">
        <div className="flex items-center justify-between gap-4">
          <input
            className="w-full px-3 py-1 transition rounded-lg outline-none focus:ring-4 focus:ring-indigo-300"
            placeholder="Categoría..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button
            px="px-2"
            icon={<PlusIcon color="white" />}
            onClick={() => handleCategory(input)}
          />
        </div>
        <>
          {existCategories.length > 0 && input !== '' && (
            <div className="absolute left-0 w-full p-1 bg-white rounded-lg shadow-2xl top-full">
              {filteredCategories.map((option) => (
                <button
                  className="block w-full p-2 text-left rounded-lg hover:bg-slate-200/40"
                  key={option}
                  onClick={() => handleCategory(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </>
      </div>
      <CategoriesTag
        categories={categories}
        removeCategory={removeCategory}
        setCategories={setCategories}
        tweet={tweet}
      />
    </>
  )
}

export default CategoryInput
