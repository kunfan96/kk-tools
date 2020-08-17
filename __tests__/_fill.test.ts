import _fill from '../src/packages/_fill'

describe('test _fill component', () => {
    const initValue = [1, 2, 3, 4]

    test("no must params", () => {
        const replaceValue = [2, 2, 3, 4]

        expect(_fill(initValue, 2)).toEqual(replaceValue)
    })

    test("single param", () => {
        const replaceValue = [2, 2, 3, 4]
        expect(_fill(initValue, 2)).toEqual(replaceValue)
    })
})