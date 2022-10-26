const randomIntFromInterval = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1) + min)

export const createArray = (length: number): number[] => {
  const array: number[] = []
  while (array.length < length) {
    const number = randomIntFromInterval(1, 10)
    if (!array.includes(number)) {
      array.push(number)
    }
  }

  return array
}
