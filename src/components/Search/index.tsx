import { useMemo, useRef, useState } from 'react'
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
          <div
            className="absolute top-full left-0 z-10 bg-white/90 p-2 rounded-lg backdrop-blur shadow-2xl shadow-slate-300"
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
        )}
      </div>
    </form>
  )
}

export default Search
