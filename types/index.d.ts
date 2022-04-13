/**
 * 反编译 json
 *
 * @param {string} objStr json字符串
 * @param {*} defaultValue 默认数据, json字符串解析错误或者为空 则返回这个参数
 * @returns
 * @example
 *
 * parseJson('{"a":1}') // {a: 1}
 * parseJson('', {b: 1}) // {b: 1}
 * parseJson('{"a":2', {n: 1}) // {n: 1}
 */
export declare const parseJson: <T>(objStr: string, defaultValue?: T) => T | undefined;
/**
 * promise 延迟
 *
 * @param {number} [delay=0]
 * @example
 * async function () {
 *  await sleepPromise(1000) // 延迟1000毫秒
 * }
 */
export declare const sleepPromise: (delay?: number) => Promise<unknown>;
/**
 * 提取 promise error
 *
 * @param {*} promise
 *
 *
 * @example
 * async function() {
 *
 *  const [err, result] = extractPromiseError(new Promise((resolve) => {
        console.log(resolve)
    }))
 *
 * }
 *
 */
export declare const extractPromiseError: <T>(promise: Promise<T>) => Promise<[Error | null, T]>;
/**
 * 执行 promise 环境
 *
 * @param {Promise<any>} fn 执行的 promise 函数
 * @returns
 *
 * @example
 *
 * implementPromise(async () => {
 *  await sleepPromise(1000)
 *  // 请求操作等...
 *
 * }).then(() => {
 *  // 执行成功...
 *
 * }).finally(() => {
 *  // 执行失败...
 * })
 *
 *
 */
export declare const implementPromise: (fn: () => Promise<any>) => Promise<undefined>;
