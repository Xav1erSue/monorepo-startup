export const downloadFile = (url: string, filename: string) => {
  const v = document.createElement("a")
  v.href = url
  v.download = filename
  document.body.appendChild(v)
  v.click()
  v.remove()
}

export const debounce = (fn: () => void, wait = 500) => {
  let timeout: number
  return function () {
    clearTimeout(timeout)
    timeout = setTimeout(fn, wait)
  }
}

export const once = (fn?: (...args: unknown[]) => unknown) => {
  let ret: unknown // 缓存结果用
  return (...args: unknown[]) => {
    if (!fn) return ret
    ret = fn(...args)
    fn = undefined // 表示已经执行过一次
    return ret
  }
}

export const safeDivision = (a: number | undefined, b: number | undefined) => {
  if (a === undefined || b === undefined) return 0
  if (b === 0) return 0
  return a / b
}
