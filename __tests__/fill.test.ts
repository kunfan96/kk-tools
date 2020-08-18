import { fill } from '../src'

describe('test fill component', () => {
    const initValue = [1, 2, 3, 4]

    test("no must params", () => {
        const replaceValueStr = ['a', 'a', 'a', 'a']
        const replaceValueNAN = [NaN, NaN, NaN, NaN]

        expect(fill(initValue, 'a')).toEqual(replaceValueStr)
        expect(fill(initValue, NaN)).toEqual(replaceValueNAN)
    })

    test("single param", () => {
        const replaceValue = [1, 2, 2, 2]
        expect(fill(initValue, 2, 2)).toEqual(replaceValue)
    })

    test("two params", () => {
        const replaceValue = [1, 2, 3, 3]
        expect(fill(initValue, 3, 2, 3)).toEqual(replaceValue)
    })

    test("startIndex > endIndex", () => {
        const replaceValue = [1, 2, 3, 3]
        expect(fill(initValue, 3, 4, 3)).toEqual(replaceValue)
    })

    test("startIndex >= initialValue.length", () => {
        const replaceValue = [1, 2, 3, 5]
        expect(fill(initValue, 5, 7, 0)).toEqual(replaceValue)
    })

    test("endIndex >= initialValue.length", () => {
        const replaceValue = [5, 5, 5, 5]
        expect(fill(initValue, 5, 0, 10)).toEqual(replaceValue)
    })

    test("startIndex < 0", () => {
        const replaceValue = [0, 0, 3, 4]

        expect(fill(initValue, 0, -1, 1)).toEqual(replaceValue)
    })

    test("endIndex < 0", () => {
        const replaceValue = [0, 2, 3, 4]

        expect(fill(initValue, 0, -1, -1)).toEqual(replaceValue)
    })
})