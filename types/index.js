"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.implementPromise = exports.extractPromiseError = exports.sleepPromise = exports.parseJson = void 0;
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
const parseJson = (objStr, defaultValue) => {
    let data = null;
    try {
        data = JSON.parse(objStr || JSON.stringify(defaultValue || ''));
    }
    catch (err) {
        data = null;
    }
    return data !== null && data !== void 0 ? data : defaultValue;
};
exports.parseJson = parseJson;
/**
 * promise 延迟
 *
 * @param {number} [delay=0]
 * @example
 * async function () {
 *  await sleepPromise(1000) // 延迟1000毫秒
 * }
 */
const sleepPromise = (delay = 0) => new Promise((resolve) => {
    setTimeout(resolve, delay);
});
exports.sleepPromise = sleepPromise;
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
const extractPromiseError = (promise) => promise.then((data) => [null, data]).catch((err) => [err, null]);
exports.extractPromiseError = extractPromiseError;
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
const implementPromise = async (fn) => {
    const [err] = await (0, exports.extractPromiseError)(fn());
    if (err) {
        return Promise.reject(err);
    }
};
exports.implementPromise = implementPromise;
//# sourceMappingURL=index.js.map