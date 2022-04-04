interface Props {
  word: string
  list: string[]
}

export const findWordInList = ({ word, list }: Props) => {
  const filteredWords =
    word === ''
      ? list
      : list.filter((category) =>
          category
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(word.toLowerCase().replace(/\s+/g, ''))
        )
  return filteredWords
}
