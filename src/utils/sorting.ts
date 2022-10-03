export interface ArrayItem {
  text: number
  class: string
  index: number
}
export const unSortedArray: ArrayItem[] = [
  {
    text: 3,
    class: 'first-item',
    index: 0
  },
  {
    text: 2,
    class: 'second-item',
    index: 0
  },
  {
    text: 1,
    class: 'third-item',
    index: 0
  },
  {
    text: 4,
    class: 'fourth-item',
    index: 0
  },
  {
    text: 8,
    class: 'fifth-item',
    index: 0
  },
  {
    text: 0,
    class: 'sixth-item',
    index: 0
  },
  {
    text: 9,
    class: 'seventh-item',
    index: 0
  },
  {
    text: 5,
    class: 'eighth-item',
    index: 0
  },
  {
    text: 7,
    class: 'ninth-item',
    index: 0
  },
  {
    text: 6,
    class: 'tenth-item',
    index: 0
  }
]

export const comparator = (a: ArrayItem, b: ArrayItem): number => a.text - b.text

// eslint-disable-next-line no-return-assign
export const swap = (arr: ArrayItem[], i: number, j: number): ArrayItem[] => [arr[i], arr[j]] = [arr[j], arr[i]]
