import { Fragment, useMemo, useRef, useState } from 'react'
import { Transition } from '@headlessui/react'
import {
  AutocompleteCollection,
  BaseItem,
  createAutocomplete,
} from '@algolia/autocomplete-core'
import { ITargetTweet } from '../../types'
import AutocompleteItem from '../AutocompleteItem'

interface Props {
  data: ITargetTweet[]
  sourceSearchId: string
}

const Search = ({ data, sourceSearchId }: Props) => {
  const [autocompleteState, setAutocompleteState] = useState({
    collections: [] as AutocompleteCollection<BaseItem>[],
    isOpen: false,
  })

  const autocomplete = useMemo(
    () =>
      createAutocomplete({
        placeholder: '¿En cual estabas pensando?',
        onStateChange: ({ state }) => setAutocompleteState(state),
        getSources: () => [
          {
            sourceId: sourceSearchId,
            getItems: ({ query }) => {
              if (query) {
                return data.filter(
                  ({ text, username, name }) =>
                    text.toLowerCase().includes(query.toLowerCase()) ||
                    username.toLowerCase().includes(query.toLowerCase()) ||
                    name.toLowerCase().includes(query.toLowerCase())
                )
              }
            },
          },
        ],
      }),
    [data, sourceSearchId]
  )

  const formRef = useRef(null)
  const inputRef = useRef(null)
  const panelRef = useRef(null)

  const formProps = autocomplete.getFormProps({
    inputElement: formRef.current,
  })

  const inputProps = autocomplete.getInputProps({
    inputElement: inputRef.current,
  })

  return (
    <form ref={formRef} {...(formProps as any)}>
      <div className="relative">
        <input
          className="w-full text-xl px-4 py-2 rounded-lg my-4 focus:ring-4 focus:ring-indigo-300 transition focus:outline-none"
          ref={inputRef}
          {...(inputProps as any)}
        />
        {autocompleteState.isOpen && (
          <Transition
            show={autocompleteState.isOpen}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <div
              className="absolute origin-top top-full left-0 z-10 bg-white/90 p-2 rounded-lg backdrop-blur shadow-2xl shadow-slate-300"
              ref={panelRef}
              {...(autocomplete.getPanelProps() as any)}
            >
              {autocompleteState.collections.map(({ items }, index) => (
                <section key={`collection-${index}`}>
                  {items.length > 0 && (
                    <ul {...autocomplete.getListProps()}>
                      {items.map((item) => (
                        <AutocompleteItem
                          key={`listitem-${item.tweetId}`}
                          {...(item as any)}
                        />
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>
          </Transition>
        )}
      </div>
    </form>
  )
}

export default Search
