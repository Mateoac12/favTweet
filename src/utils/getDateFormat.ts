export const getDateFormat = (date: string): string => {
  const formated = new Intl.DateTimeFormat('es')
  const dateFormat = formated.format(new Date(date))

  return dateFormat
}
