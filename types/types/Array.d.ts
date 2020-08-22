/**
 * @module: Array
 * @func:The the collection about type
*/
export interface Ifill {
    <T, F>(initialValue: Array<T>, value: F, startIndex?: number, endIndex?: number): Array<T | F>;
}
