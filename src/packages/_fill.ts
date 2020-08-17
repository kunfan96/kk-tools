/**
 * @param initialValue Array initialed Array
 * @param value any filled value
 * @param startIndex Number filled started index
 * @param endIndex filled Number end index
 * 
 */

const _fill = <T>(initialValue: Array<T>, value: any, startIndex:Number = 0, endIndex:Number = 0):Array<T> => {
    if (startIndex > endIndex) endIndex = startIndex
    if (startIndex >= (initialValue.length - 1)) {
        startIndex = 0
        endIndex = 0
    }

    const replaceValue = initialValue.map((item:T, index) => {
        return (index >= startIndex && index <= endIndex && value) || item
    })
    return replaceValue
}

export default _fill