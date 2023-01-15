export function plural(num: string | number, word: string) {
  if (+num === 1) return word
  return word + 's'
}
