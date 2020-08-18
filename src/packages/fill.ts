/**
 * feature: fill values by specify position in Array
 * 
 * @param initialValue Array initialed Array
 * @param value any filled value
 * @param startIndex Number filled started index
 * @param endIndex filled Number end index
 * @return Array
 */

const fill = <T>(initialValue: Array<T>, value: any, startIndex:number = 0, endIndex:number = initialValue.length - 1):Array<T> => {    
    if (startIndex > endIndex) endIndex = startIndex

    /*----------------------------------------------*/
    if (startIndex >= initialValue.length) endIndex = startIndex = initialValue.length - 1

    if (endIndex >= initialValue.length) endIndex = initialValue.length - 1
    /*----------------------------------------------*/
    if (startIndex < 0) startIndex = 0

    if (endIndex < 0) startIndex = endIndex = 0

    /*----------------------------------------------*/
    let replaceValue = []
    initialValue.forEach((item:T, index) => {
        replaceValue.push((index >= startIndex && index <= endIndex) ? value : item)
    })
    return replaceValue
}

export default fill