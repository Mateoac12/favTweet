import { Popover } from '@headlessui/react'
import { ChangeEvent, useEffect, useState } from 'react'
import { useTweets } from '../../hooks/useTweets'
import Pill from '../Pill'
import Transition from '../Transition'

interface Props {
  buttonName: string
  list: string[]
}

interface Element {
  status: boolean
  name: string
}

const FilterList = ({ buttonName, list }: Props) => {
  const { handleFilter } = useTweets()
  const [elements, setElements] = useState<Element[]>(() =>
    list.map((item) => ({ status: false, name: item }))
  )

  useEffect(() => {
    const checkedElements: string[] = []

    elements.forEach((item) => item.status && checkedElements.push(item.name))
    if (elements.length === 0 || checkedElements.length === 0)
      return handleFilter({ categories: [] })

    handleFilter({ categories: checkedElements })
  }, [elements])

  useEffect(() => {
    setElements(list.map((item) => ({ status: false, name: item })))
  }, [list])

  const handleChange = (e: ChangeEvent<HTMLFormElement>) => {
    const { id } = e.target

    const filterByElement = elements.map((item) => {
      if (item.name === id) {
        return { ...item, status: !item.status }
      }
      return item
    })

    setElements(filterByElement)
  }

  return (
    <>
      <Popover as={'div'} className="relative">
        <>
          <Popover.Button className="relative px-4 py-2 text-lg rounded-lg text-slate-800 bg-white/80 hover:bg-white/90">
            {buttonName}
          </Popover.Button>
          <Transition>
            <Popover.Panel
              as={'form'}
              onChange={handleChange}
              className="absolute left-0 z-20 w-56 p-2 mt-2 origin-top-left rounded-md shadow-2xl top-full bg-white/90 backdrop-blur shadow-slate-300 focus:outline-none"
            >
              {elements.length === 0 ? (
                <p className="text-slate-600">No hay tags aún</p>
              ) : (
                elements.map((category) => (
                  <div
                    className="flex items-center gap-2 p-2 rounded-md hover:bg-slate-100/40"
                    key={`optionbox-${category.name}`}
                  >
                    <input
                      className="accent-indigo-600"
                      type="checkbox"
                      checked={category.status}
                      id={category.name}
                    />
                    <label
                      className="w-full cursor-pointer"
                      htmlFor={category.name}
                    >
                      {category.name}
                    </label>
                  </div>
                ))
              )}
            </Popover.Panel>
          </Transition>
        </>
      </Popover>
      <div className="flex flex-wrap items-center gap-2">
        {elements.map(
          (item) =>
            item.status && (
              <Pill key={`filter-list-${item.name}`}>{item.name}</Pill>
            )
        )}
      </div>
    </>
  )
}

export default FilterList
