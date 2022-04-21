export const getDateFormat = (date: string): string => {
  const formated = new Intl.DateTimeFormat('es')

  try {
    const dateParsed = new Date(date)
    const dateFormat = formated.format(dateParsed)

    return dateFormat
  } catch (err: any) {
    return err.message
  }
}
