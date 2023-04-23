import { KEY_PREFIX } from "@/consts"

class Storage {
  readonly storage: any
  readonly keyPrefix: string

  constructor(keyPrefix: string) {
    this.storage = window.localStorage
    this.keyPrefix = keyPrefix
  }

  public get<T, K extends boolean = true>(
    key: string,
    transform = true
  ): K extends true ? T | undefined : string | undefined {
    const result = this.storage.getItem(`${this.keyPrefix}/${key}`)
    if (!transform) return result
    return result ? JSON.parse(result) : undefined
  }

  public set(key: string, value: any): void {
    this.storage.setItem(`${this.keyPrefix}/${key}`, JSON.stringify(value))
  }

  public remove(key: string) {
    this.storage.removeItem(`${this.keyPrefix}/${key}`)
  }

  public clear() {
    for (const itemKey in this.storage) {
      if (itemKey.match(this.keyPrefix)) {
        this.storage.removeItem(itemKey)
      }
    }
  }
}

const SMStorage = new Storage(KEY_PREFIX)

export default SMStorage
