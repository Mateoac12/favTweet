import { useMemo, useRef, useState } from 'react'
import {
  AutocompleteCollection,
  BaseItem,
  createAutocomplete,
} from '@algolia/autocomplete-core'
import { ITargetTweet } from '../../types'
import AutocompleteItem from '../AutocompleteItem'
import Transition from '../Transition'

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
        getSources: (): any => [
          {
            sourceId: sourceSearchId,
            getItems: ({ query }: { query: string }) => {
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
          className="w-full px-4 py-2 my-4 text-xl transition rounded-lg focus:ring-4 focus:ring-indigo-300 focus:outline-none"
          ref={inputRef}
          {...(inputProps as any)}
        />
        {autocompleteState.isOpen && (
          <Transition show={autocompleteState.isOpen}>
            <div
              className="absolute left-0 z-10 p-2 origin-top rounded-lg shadow-2xl top-full bg-white/90 backdrop-blur shadow-slate-300"
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
