export default (fn1, ...funcs) => (...args) => funcs.reduce((res, f) => f(res), fn1(...args))