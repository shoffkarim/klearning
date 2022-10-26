export const text = `The KendoReact Editor allows your users to edit markdown in a familiar, user-friendly way.
The Editor provides core editing engine, which includes text formatting, hyperlinks, lists and more. The component **outputs identical Markdown** across all major browsers, follows accessibility standards, and provides API for content manipulation.

Features include:

* Text formatting

* Bulleted and numbered lists

* Hyperlinks

* Images ![Smile image](https://prosemirror.net/img/smiley.png "Smile")

* Cross-browser support

* Identical output across browsers

# Заголовок 1 уровня
## Заголовок 2 уровня
### Заголовок 3 уровня
#### Заголовок 4 уровня
##### Заголовок 5 уровня
###### Заголовок 6 уровня

`

export const textCode = `function * bubbleSort (array: number[], arrayLength: number): BubbleSortType {
  const completedElements = []

  for (let step = 0; step < arrayLength - 1; step++) {
    for (let compareIndex = 0; compareIndex < arrayLength - 1 - step; compareIndex++) {
      yield put({ type: COMPARISON_SET_ACTIVE_ELEMENTS, value: [compareIndex, compareIndex + 1] })

      yield setPause(SPEED_MULTIPLIER)

      const left = array[compareIndex]
      const right = array[compareIndex + 1]

      if (left > right) {
        const params = {
          [compareIndex]: right,
          [compareIndex + 1]: left
        }

        array[compareIndex] = right
        array[compareIndex + 1] = left

        yield setNewParams(params)

        yield setPause(SPEED_MULTIPLIER)
      }
    }
    completedElements.push(arrayLength - 1 - step)

    yield put({ type: COMPARISON_SET_SORTED_ELEMENTS, value: completedElements })
  }

  yield put({ type: COMPARISON_SET_SORTED_ELEMENTS, value: [0, ...completedElements] })

  return true
}
`
